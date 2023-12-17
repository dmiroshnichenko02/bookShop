/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, SetStateAction, useEffect, useState } from "react";

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
import { IAuthor } from "../../../types/author.types.js";
import { ILang } from "../../../types/lang.types.js";
import { IGenres } from "../../../types/genres.types.js";

const Catalog: FC = () => {
  //filters

  const [filteredBooks, setFilteredBooks] = useState<IBookGet[]>([]);

  const [allSelected, setAllSelected] = useState<string[] | any>([]);

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

  const filters = (data: (IAuthor | ILang | IGenres)[]) => {
    const fill: SetStateAction<IBookGet[]> = [];

    books.filter((book) => {
      data.forEach((item: any) => {
        book.languages.forEach((lang: any) => {
          console.log(lang, item);
          if (lang.language.includes(item)) {
            console.log(23);
            if (!fill.includes(book)) {
              fill.push(book);
            }
          }
        });
        book.genres.forEach((genre: any) => {
          if (genre.genre.includes(item)) {
            if (!fill.includes(book)) {
              fill.push(book);
            }
          }
        });
        book.authors.forEach((author: any) => {
          const splitedName = item.split(" ");

          if (splitedName) {
            if (
              author.firstName.includes(splitedName[0]) ||
              author.middleName.includes(
                splitedName[1] || author.lastName.includes(splitedName[2])
              )
            ) {
              if (!fill.includes(book)) {
                fill.push(book);
              }
            }
          }
        });
      });
    });
    setFilteredBooks(fill);
  };

  console.log(allSelected);

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
                        const authorFullName = `${author.firstName} ${author.middleName} ${author.lastName}`;
                        const isSelected = allSelected.includes(authorFullName);

                        return (
                          <li
                            className={isSelected ? styles.selected : ""}
                            onClick={() => {
                              setAllSelected([
                                ...allSelected,
                                `${author.firstName} ${author.middleName} ${author.lastName}`,
                              ]);
                            }}
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
                        const isSelected = allSelected.includes(lang.language);
                        return (
                          <li
                            className={isSelected ? styles.selected : ""}
                            key={index}
                            onClick={() => {
                              setAllSelected([...allSelected, lang.language]);
                            }}
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
                        const isSelected = allSelected.includes(genre.genre);
                        return (
                          <li
                            key={index}
                            className={isSelected ? styles.selected : ""}
                            onClick={() => {
                              setAllSelected([...allSelected, genre.genre]);
                            }}
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
              <div
                className={styles.btn}
                onClick={() => {
                  filters(allSelected);
                }}
              >
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
