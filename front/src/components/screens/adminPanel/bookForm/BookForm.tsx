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

import styles from '../adminPanel.module.scss'
import { RootState } from "../../../../store/store";
import { useSelector } from "react-redux";

interface BookInputs extends IBook {}

const BookForm: FC = () => {
  // initial states
  const [allAuthors, setAllAuthors] = useState<IAuthor[] | []>([]);
  const [allFormats, setAllFormats] = useState<IFormat[]>([]);
  const [allLang, setAllLang] = useState<ILang[]>([]);
  const [allGenre, setAllGenre] = useState<IGenres[]>([]);

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

  console.log(allAuthors, allFormats, allLang, allGenre);

  const { postBook } = useBookServices();

  const token = useSelector((state: RootState) => state.login.token)


  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<BookInputs>();
  const onSubmit: SubmitHandler<BookInputs> = async (data) => {

    const authorIds:number[] = data.authorsID.map(Number);
    data.authorsID = authorIds;
    const formatIds:number[] = data.formatsID.map(Number);
    data.formatsID = formatIds;
    const languagesIds:number[] = data.languagesID.map(Number);
    data.languagesID = languagesIds;
    const genreIds:number[] = data.genresID.map(Number);
    data.genresID = genreIds;

    const newData = JSON.stringify(data);

    console.log(newData)

    const res = await postBook(newData, token);
    console.log(res);
    setValue("name", "");
    setValue("publicationYear", 0);
    setValue("description", "");
    setValue("price", 0);
    setValue("quantity", 0);
    setValue("isbn", 0);
    setValue("rating", "");
    setValue("coverImageLink", "");
  };


  return (
    <>
      {allAuthors.length >= 1 &&
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
            ) : (
              <h4>Authors not exist</h4>
            )}
            {allFormats ? (
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
            ) : (
              <h4>Format not exist</h4>
            )}

            {allGenre ? (
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
            ) : (
              <h4>Genre not exist</h4>
            )}

            {allLang ? (
              <select {...register("languagesID", { required: true })} multiple>
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
            ) : (
              <h4>Genre not exist</h4>
            )}
          </div>

          <button type="submit" className="submit-btn">Send</button>
        </form>
      ) : (
        <h3>Form loading...</h3>
      )}
    </>
  );
};

export default BookForm;
