import { FC } from "react";

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
// import { useDispatch } from "react-redux";
// import useBookServices from "../../../services/bookServices";

// import actions from '../../../store/books/book.slice.js';

const Home: FC = () => {
  // const dispatch = useDispatch();

  // const {getAllBooks} = useBookServices

  // useEffect(() => {

  //   const allBooks = async () => {
  //     const books = await getAllBooks();

  //     dispatch(actions.getAllBooks(books));
  //   }

  //   allBooks();

  // }, []);

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
