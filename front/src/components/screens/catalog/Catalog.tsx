/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from "react";

import styles from "./catalog.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import useBookServices from "../../../services/bookServices";
import { actions } from "../../../store/books/book.slice";
import { actions as AuthorsActions } from "../../../store/authors/authors.slice.js";
import { actions as LangActions } from "../../../store/languages/languages.slice.js";
import { actions as GenresActions } from "../../../store/genres/genres.slice.js";

import BookBlock from "./bookBlock/BookBlock";
import { IBookGet } from "../../../types/book.types";
import useAuthorServices from "../../../services/authorServices";
import useLanguageServices from "../../../services/languageServices";
import useGenreServices from "../../../services/genreServices";

const Catalog: FC = () => {
  //filters
  const [selectedAuthors, setSelectedAuthors] = useState<string[] | string>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[] | string>(
    []
  );
  const [selectedGenres, setSelectedGenres] = useState<string[] | string>([]);
  const [filteredBooks, setFilteredBooks] = useState<IBookGet[] | null>(null);

  

  console.log(filteredBooks);

  const dispatch = useDispatch();

  const { getAllBooks } = useBookServices();
  const { getAllAuthors } = useAuthorServices();
  const { getAllLanguages } = useLanguageServices();
  const { getAllGenres } = useGenreServices();

  useEffect(() => {
    const allBooks = async () => {
      const books = await getAllBooks();
      const authors = await getAllAuthors();
      const languages = await getAllLanguages();
      const genres = await getAllGenres();

      dispatch(actions.getAllBooks(books));
      dispatch(AuthorsActions.getAllAuthors(authors));
      dispatch(LangActions.getAllLanguages(languages));
      dispatch(GenresActions.getAllGenres(genres));

      setFilteredBooks(books);
    };

    allBooks();
  }, []);

  const authors = useSelector((state: RootState) => state.authors);
  const langs = useSelector((state: RootState) => state.languages);
  const genres = useSelector((state: RootState) => state.genres);

  const books = useSelector((state: RootState) => state.books);

  const applyFilters = () => {
    const newFilteredBooks = books.filter((book: IBookGet) => {
      const isAuthorSelected =
        selectedAuthors.length > 0 &&
        book.authors.some((author) => {
          const authorName = `${author.firstName} ${author.middleName} ${author.lastName}`;
          return selectedAuthors.includes(authorName);
        });

      const selectedLanguage = selectedLanguages[0];
      const isLanguageSelected =
        selectedLanguage &&
        book.languages.some(
          (language) => language.language === selectedLanguage
        );

      const isGenreSelected =
        selectedGenres.length > 0 && Array.isArray(selectedGenres)
          ? selectedGenres.some((selectedGenre) =>
              book.genres.some((bookGenre) => selectedGenre === bookGenre.genre)
            )
          : selectedGenres === book.genres[0]?.genre;

      return isAuthorSelected && isLanguageSelected && isGenreSelected;
    });

    setFilteredBooks(newFilteredBooks);
  };

  return (
    <>
      <section className={styles.catalog}>
        <div className="container">
          <div className={styles.wrapp}>
            <aside className={styles.filters}>
              <div className={styles.wrapperAside}>
                <h3>Filters:</h3>
                <h4>Authors:</h4>
                <div className={styles.authors}>
                  <ul>
                    {authors ? (
                      authors.map((author, index) => {
                        return (
                          <li 
                            onClick={() =>
                              setSelectedAuthors([
                                ...selectedAuthors,
                                `${author.firstName} ${author.middleName} ${author.lastName}`,
                              ])
                            }
                            key={index}
                          >{`${author.firstName} ${author.lastName}`}</li>
                        );
                      })
                    ) : (
                      <div>Loading</div>
                    )}
                  </ul>
                </div>
                <h4>Languages:</h4>
                <div className={styles.lang}>
                  <ul>
                    {langs ? (
                      langs.map((lang, index) => {
                        return (
                          <li
                            key={index}
                            onClick={() =>
                              setSelectedLanguages([
                                ...selectedLanguages,
                                lang.language,
                              ])
                            }
                          >
                            {lang.language}
                          </li>
                        );
                      })
                    ) : (
                      <div>Loading</div>
                    )}
                  </ul>
                </div>
                <h4>Genres:</h4>
                <div className={styles.genres}>
                  <ul>
                    {genres ? (
                      genres.map((genre, index) => {
                        return (
                          <li
                            key={index}
                            onClick={() =>
                              setSelectedGenres([
                                ...selectedGenres,
                                genre.genre,
                              ])
                            }
                          >
                            {genre.genre}
                          </li>
                        );
                      })
                    ) : (
                      <div>Loading</div>
                    )}
                  </ul>
                </div>
              </div>
              <div className={styles.btn} onClick={applyFilters}>
                Apply Filters
              </div>
            </aside>
            <div className={styles.view}>
              {filteredBooks ? (
                filteredBooks.map((book: IBookGet) => {
                  return <BookBlock book={book} key={book.id} />;
                })
              ) : (
                <div>Loading</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalog;
