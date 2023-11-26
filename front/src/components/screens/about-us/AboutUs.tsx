import { FC } from "react";
import styles from './aboutUs.module.scss';

const AboutUs: FC = () => {
  return (
    <>
      <section className={styles.aboutUs}>
        <div className="container">
          <div>
            <section>
              <h1>Welcome to BookShelf</h1>
              <p>
                At BookShelf, we are more than just a bookstore — we
                are a community of book lovers dedicated to fostering a love for
                literature and knowledge. Our passion for reading and our
                commitment to providing a unique and enriching experience sets
                us apart.
              </p>
            </section>

            <section>
              <h2>Our Story</h2>
              <p>
                Founded in 2023, BookShelf has been serving the
                community with a carefully curated selection of books that spans
                various genres and interests. Our journey began with a simple
                idea: to create a haven for book enthusiasts and provide a
                welcoming space for everyone, from avid readers to those just
                starting their reading adventure.
              </p>
            </section>

            <section>
              <h2>What Sets Us Apart</h2>
              <p>
                At BookShelf, we take pride in our commitment to
                quality, diversity, and customer satisfaction. Here are some key
                aspects that set us apart:
              </p>
              <ul>
                <li>
                  Curated Collection: Our shelves are filled with a thoughtfully
                  curated collection of books, including bestsellers, classics,
                  and hidden gems across various genres.
                </li>
                <li>
                  Community Engagement: We believe in building a strong reading
                  community. Join us for book clubs, author events, and other
                  engaging activities that celebrate the joy of reading.
                </li>
                <li>
                  Knowledgeable Staff: Our dedicated team of book enthusiasts is
                  always ready to assist you. Whether you need a recommendation
                  or information about a particular author, we're here to help.
                </li>
                <li>
                  Cozy Reading Spaces: Relax and immerse yourself in the world
                  of books in our cozy reading corners. Enjoy a cup of coffee or
                  tea as you explore the pages of your favorite novels.
                </li>
              </ul>
            </section>

            <section>
              <h2>Our Mission</h2>
              <p>
                Our mission is to inspire a lifelong love for reading and
                learning. We strive to create an inclusive and welcoming
                environment where individuals of all ages and backgrounds can
                discover the transformative power of literature.
              </p>
            </section>

            <section>
              <h2>Visit Us Today!</h2>
              <p>
                Discover the joy of reading at BookShelf. We invite
                you to explore our shelves, attend our events, and become a part
                of our vibrant reading community. Thank you for choosing us as
                your literary destination.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
