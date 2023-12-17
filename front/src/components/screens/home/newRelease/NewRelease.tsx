import { FC } from "react";
import Slider from "react-slick";

import styles from "./newRelease.module.scss";

import { RootState } from "../../../../store/store";
import { useSelector } from "react-redux";

const NewRelease: FC = () => {

  const books = useSelector((state: RootState) => state.books);

  const settings = {
    infinity: true,
    speed: 500,
    slideToShow: 6,
    slideToScroll: 1,
    variableWidth: true,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // centerMode: false,
          variableWidth: false
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  };
  
  console.log(books);

  return (
    <>
      <section className={styles.release} id="release">
        <div className="container">
          <h2 className={styles.title}>New Arrivals</h2>
          <div className={styles.slider}>
            <Slider {...settings}>
              {books.map((book) => (
                <div className={styles.item}>
                  <img src={book.coverImageLink} alt="book" />
                  <h3 className={styles.author}>{`By ${book.authors[0].firstName} ${book.authors[0].lastName}`}</h3>
                  <p className={styles.bookTitle}>{book.name.length > 15 ? book.name.slice(0, 15) + '...' : book.name}</p>
                  <div className={styles.price}>${book.price}</div>
                </div>
              ))}  
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewRelease;
