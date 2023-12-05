import { FC, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Welcome from "./welcome/Welcome";
import Categories from "./categories/Categories";
import EBook from "./eBook/EBook";
import NewRelease from "./newRelease/NewRelease";
import WeekBook from "./weekBook/WeekBook";
import Faq from "./faq/Faq";
import Sale from "./sale/Sale";
import Information from "./information/Information";
import { useDispatch } from "react-redux";
import useBookServices from "../../../services/bookServices";

import { actions } from "../../../store/books/book.slice.js";
import { actions as loginAction } from "../../../store/login/login.slice.js";
import {actions as FormatActions} from "../../../store/formats/formats.slice.js";
import {actions as AuthorsActions} from "../../../store/authors/authors.slice.js";
import {actions as LangActions} from "../../../store/languages/languages.slice.js";
import {actions as GenresActions} from "../../../store/genres/genres.slice.js";

import Cookies from "js-cookie";
import useFormatServices from "../../../services/formatServices.js";
import useAuthorServices from "../../../services/authorServices.js";
import useLanguageServices from "../../../services/languageServices.js";
import useGenreServices from "../../../services/genreServices.js";

const Home: FC = () => {
  const dispatch = useDispatch();

  const { getAllBooks } = useBookServices();

  const {getAllFormats} = useFormatServices();

  const {getAllAuthors} = useAuthorServices();

  const {getAllLanguages} = useLanguageServices();

  const {getAllGenres} = useGenreServices();

  useEffect(() => {
    const isAuth = Cookies.get("authCookie");
    const isAuthId = Cookies.get("authCookieId");
    const adminToken = Cookies.get("authCookieAdminToken");

    if (isAuth === "auth" && isAuthId) {
      let userData = {
        token: "",
        user: "",
        id: 0,
      };

      if (isAuthId === "1000" && adminToken) {
        userData = {
          token: adminToken,
          user: "ADMIN",
          id: +isAuthId,
        };
      } else {
        userData = {
          token: "",
          user: "USER",
          id: +isAuthId,
        };
      }

      dispatch(loginAction.isLogin(userData));
    }
  }, []);

  useEffect(() => {
    const allBooks = async () => {
      const books = await getAllBooks();
      const formats = await getAllFormats();
      const authors = await getAllAuthors();
      const languages = await getAllLanguages();
      const genres = await getAllGenres();

      dispatch(FormatActions.getAllFormats(formats));
      dispatch(AuthorsActions.getAllAuthors(authors));
      dispatch(LangActions.getAllLanguages(languages));
      dispatch(GenresActions.getAllGenres(genres));

      dispatch(actions.getAllBooks(books));
    };

    allBooks();
  }, []);

  return (
    <>
      <Welcome />
      <Categories />
      <EBook />
      <NewRelease />
      <WeekBook />
      <Sale />
      <Information />
      <Faq />
    </>
  );
};

export default Home;
