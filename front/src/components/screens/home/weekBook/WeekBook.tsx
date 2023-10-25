import { FC, useState, useEffect } from "react";

import styles from "./weekBook.module.scss";
import Button from "../../../ui/button/Button";

import book from "..././../../assets/images/books-2.png";
import book2 from "../../../../assets/images/books-1.png";
import book3 from "../../../../assets/images/books-3.png";

interface ITimer {
  hours:string,
  minutes:string,
  seconds:string,
}

const WeekBook: FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const [sold, setSold] = useState(0);

  useEffect(() => {
    setSold(21);
  }, [])

  const progressLine:string = `linear-gradient(90deg, rgba(241, 89, 43, 1) ${sold}%, rgba(217, 217, 217, 1) ${sold}%)`

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function calculateTimeLeft():ITimer {
    const now:Date = new Date();
    const targetTime:Date = new Date();
    targetTime.setHours(0, 0, 0);

    if (now > targetTime) {
      targetTime.setDate(targetTime.getDate() + 1);
    }

    const timeDiff:number = targetTime.getTime() - now.getTime();
    const hours:number = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes:number = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds:number = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return {
      hours: padZero(hours),
      minutes: padZero(minutes),
      seconds: padZero(seconds),
    };
  }

  function padZero(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
  }

  return (
    <>
      <section className={styles.week}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.title}>
              Deals of the Day<span>{`${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`}</span>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.item}>
                <img src={book} alt="day book" />
                <div className={styles.infoBlock}>
                  <div className={styles.author}>By Arthur Gonzalez</div>
                  <h3 className={styles.bookTitle}>A God Who Hates Women</h3>
                  <div className={styles.price}>
                    $170.00 <span>$200.00</span>
                  </div>
                  <div className={styles.sold}>
                    <div>Already sold: <span>{sold}/100</span></div>
                  <div className={styles.progress} style={{background: progressLine}}></div>
                  </div>
                  <Button>Add to Cart</Button>
                </div>
              </div>
              <div className={styles.item}>
                <img src={book3} alt="day book" />
                <div className={styles.infoBlock}>
                  <div className={styles.author}>By Arthur Gonzalez</div>
                  <h3 className={styles.bookTitle}>A God Who Hates Women</h3>
                  <div className={styles.price}>
                    $170.00 <span>$200.00</span>
                  </div>
                  <div className={styles.sold}>
                    <div>Already sold: <span>{sold}/100</span></div>
                  <div className={styles.progress} style={{background: progressLine}}></div>
                  </div>
                  <Button>Add to Cart</Button>
                </div>
              </div>
              <div className={styles.item}>
                <img src={book2} alt="day book" />
                <div className={styles.infoBlock}>
                  <div className={styles.author}>By Arthur Gonzalez</div>
                  <h3 className={styles.bookTitle}>A God Who Hates Women</h3>
                  <div className={styles.price}>
                    $170.00 <span>$200.00</span>
                  </div>
                  <div className={styles.sold}>
                    <div>Already sold: <span>{sold}/100</span></div>
                  <div className={styles.progress} style={{background: progressLine}}></div>
                  </div>
                  <Button>Add to Cart</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeekBook;
