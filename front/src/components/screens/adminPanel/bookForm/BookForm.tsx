/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import useBookServices from "../../../../services/bookServices";
import useAuthorServices from "../../../../services/authorServices";
import useFormatServices from "../../../../services/formatServices";
import useLanguageServices from "../../../../services/languageServices";
import useGenreServices from "../../../../services/genreServices";

import { bdFetch } from "../fetchFunction";

import { IBook } from "../../../../types/book.types";

import Inputs from "../../../ui/inputs/Inputs";
import CheckBox from "../../../ui/inputs/CheckBox";
import { IAuthor } from "../../../../types/author.types";
import { IFormat } from "../../../../types/format.types";
import { ILang } from "../../../../types/lang.types";
import { IGenres } from "../../../../types/genres.types";

import styles from "../adminPanel.module.scss";
import { RootState } from "../../../../store/store";
import { useSelector } from "react-redux";

interface BookInputs extends IBook {}

const BookForm: FC = () => {
  // initial states
  const [allAuthors, setAllAuthors] = useState<IAuthor[] | []>([]);
  const [allFormats, setAllFormats] = useState<IFormat[]>([]);
  const [allLang, setAllLang] = useState<ILang[]>([]);
  const [allGenre, setAllGenre] = useState<IGenres[]>([]);

  const [reqError, setReqError] = useState(false);
  const [send, setSend] = useState(false);
  const [response, setResponse] = useState<any>();

  const { getAllAuthors } = useAuthorServices();
  const { getAllFormats } = useFormatServices();
  const { getAllLanguages } = useLanguageServices();
  const { getAllGenres } = useGenreServices();

  // get all authors
  useEffect(() => {
    bdFetch(getAllAuthors, setAllAuthors);
  }, []);

  // get all formats
  useEffect(() => {
    bdFetch(getAllFormats, setAllFormats);
  }, []);

  // get all lang
  useEffect(() => {
    bdFetch(getAllLanguages, setAllLang);
  }, []);

  // get all genre
  useEffect(() => {
    bdFetch(getAllGenres, setAllGenre);
  }, []);

  const { postBook } = useBookServices();

  const token = useSelector((state: RootState) => state.login.token);

  console.log(token);

  const {
    register,
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<BookInputs>();
  const onSubmit: SubmitHandler<BookInputs> = async (data) => {
    try {
      const authorIds: number[] = data.authorsID.map(Number);
      data.authorsID = authorIds;
      const formatIds: number[] = data.formatsID.map(Number);
      data.formatsID = formatIds;
      const languagesIds: number[] = data.languagesID.map(Number);
      data.languagesID = languagesIds;
      const genreIds: number[] = data.genresID.map(Number);
      data.genresID = genreIds;

      const dataNew = {
        ...data,
        authorsID: authorIds,
        formatsID: formatIds,
        languagesID: languagesIds,
        genresID: genreIds,
      };

      const newData = JSON.stringify(dataNew);

      const res = await postBook(newData, token);

      if (res) {
        setValue("name", "");
        setValue("publicationYear", 0);
        setValue("description", "");
        setValue("price", 0);
        setValue("quantity", 0);
        setValue("isbn", 0);
        setValue("rating", "");
        setValue("coverImageLink", "");

        setSend(true);
        setResponse(res);
      }
    } catch (error) {
      setReqError(true);
      reset();
    }
  };

  return (
    <>
      {send ? (
        <div className={styles.successBlock}>
          <h4>Successful add book</h4>
          <div className={styles.author}>
            <h4>
              Name: <span>{response?.name}</span>
            </h4>
            <div>
              {response.authors.map((author: IAuthor) => (
                <div key={author.id}>
                  <h4>
                    Author name: <span>{author.firstName}</span>
                  </h4>
                  <h4>
                    Author middle name: <span>{author.middleName}</span>
                  </h4>
                  <h4>
                    Author last name: <span>{author.lastName}</span>
                  </h4>
                </div>
              ))}
            </div>
            <h4>
              Publication year: <span>{response?.publicationYear}</span>
            </h4>
            <h4>
              Description: <span>{response?.description}</span>
            </h4>
            <h4>
              Price: <span>{response?.price}</span>
            </h4>
            <h4>
              Quantity: <span>{response?.quantity}</span>
            </h4>
            <h4>
              ISBN: <span>{response?.isbn}</span>
            </h4>
            <div>
              {response.formats.map((format: IFormat) => (
                <div key={format.id}>
                  <h4>
                    Format name: <span>{format.format}</span>
                  </h4>
                </div>
              ))}
            </div>
            <div>
              {response.languages.map((lang: ILang) => (
                <div key={lang.id}>
                  <h4>
                    Language name: <span>{lang.language}</span>
                  </h4>
                </div>
              ))}
            </div>
            <div>
              {response.genres.map((genre: IGenres) => (
                <div key={genre.id}>
                  <h4>
                    Genre name: <span>{genre.genre}</span>
                  </h4>
                </div>
              ))}
            </div>
            <h4>
              Cover image link: <span>{response?.coverImageLink.length > 50 ? `${response?.coverImageLink.slice(0, 50)}...` : response?.coverImageLink}</span>
            </h4>
          </div>
          <div
            className={styles.addAnother}
            onClick={() => {
              setSend(false);
              reset();
            }}
          >
            <span>Add another</span>
          </div>
        </div>
      ) : reqError ? (
        <div className={styles.erorsBlock}>
          <h4>Book post error</h4>
          <div
            className={styles.btnErrors}
            onClick={() => {
              setReqError(false);
              reset();
            }}
          >
            Try again
          </div>
        </div>
      ) : allAuthors.length >= 1 &&
        allFormats.length >= 1 &&
        allGenre.length >= 1 &&
        allLang.length >= 1 ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Inputs
            register={{ ...register("name", { required: true }) }}
            name="name"
            errors={errors}
          />
          <Inputs
            register={{ ...register("publicationYear", { required: true }) }}
            name="publicationYear"
            errors={errors}
            type="number"
          />
          <Inputs
            register={{ ...register("description", { required: true }) }}
            name="description"
            errors={errors}
          />
          <Inputs
            register={{ ...register("price", { required: true }) }}
            name="price"
            errors={errors}
            type="number"
          />
          <Inputs
            register={{ ...register("quantity", { required: true }) }}
            name="quantity"
            errors={errors}
            type="number"
          />
          <Inputs
            register={{ ...register("coverImageLink", { required: true }) }}
            name="coverImageLink"
            errors={errors}
            type="text"
          />
          <Inputs
            register={{ ...register("isbn", { required: true }) }}
            name="isbn"
            errors={errors}
            type="number"
          />

          <div className={styles.selectBlock}>
            {allAuthors ? (
              <div className={styles.formsBlock}>
                <h5>Authors: </h5>
                <select {...register("authorsID", { required: true })} multiple>
                  {allAuthors.map((author) => {
                    const authorString: string = `${author.firstName} ${author.middleName} ${author.lastName}`;

                    return (
                      <CheckBox
                        key={author.id}
                        fullName={authorString}
                        id={author.id}
                      />
                    );
                  })}
                </select>
              </div>
            ) : (
              <h4>Authors not exist</h4>
            )}
            {allFormats ? (
              <div className={styles.formsBlock}>
                <h5>Formats: </h5>
                <select {...register("formatsID", { required: true })} multiple>
                  {allFormats.map((format) => {
                    const formatString: string = `${format.format}`;

                    return (
                      <CheckBox
                        key={format.id}
                        fullName={formatString}
                        id={format.id}
                      />
                    );
                  })}
                </select>
              </div>
            ) : (
              <h4>Format not exist</h4>
            )}
            {allGenre ? (
              <div className={styles.formsBlock}>
                <h5>Genres: </h5>
                <select {...register("genresID", { required: true })} multiple>
                  {allGenre.map((genre) => {
                    const genreString: string = `${genre.genre}`;

                    return (
                      <CheckBox
                        key={genre.id}
                        fullName={genreString}
                        id={genre.id}
                      />
                    );
                  })}
                </select>
              </div>
            ) : (
              <h4>Genre not exist</h4>
            )}
            {allLang ? (
              <div className={styles.formsBlock}>
                <h5>Languages: </h5>
                <select
                  {...register("languagesID", { required: true })}
                  multiple
                >
                  {allLang.map((lang) => {
                    const langString: string = `${lang.language}`;

                    return (
                      <CheckBox
                        key={lang.id}
                        fullName={langString}
                        id={lang.id}
                      />
                    );
                  })}
                </select>
              </div>
            ) : (
              <h4>Genre not exist</h4>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
      ) : (
        <h3>Form loading...</h3>
      )}
    </>
  );
};

export default BookForm;
