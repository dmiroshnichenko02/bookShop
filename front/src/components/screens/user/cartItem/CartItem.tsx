import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import CartBlock from "./cartBlock/CartBlock";
import Cookies from "js-cookie";
import { IBookGet } from "../../../../types/book.types";
import {actions as cartActions} from "../../../../store/cart/cart.slice";
import {actions as bookActions} from "../../../../store/books/book.slice";
import useBookServices from "../../../../services/bookServices";



const CartItem: FC = () => {
  const cart = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();
  console.log(dispatch)

  const { getAllBooks } = useBookServices();
  

  useEffect(() => {
    const allBooks = async () => {
      const books = await getAllBooks();

      dispatch(bookActions.getAllBooks(books));
    };

    allBooks();
  }, []);

  useEffect(() => {
    const cookiesBook = JSON.parse(Cookies.get("cart") || "[]");
    console.log(cookiesBook)
    if(cart.length === 0 && cookiesBook.length !== 0) {
      cookiesBook.forEach((book: IBookGet) => {
        dispatch(cartActions.toggleCart(book));
      })
    }
  }, []);

  return (
    <>
      {cart.length > 0 &&
        cart.map((book, index) => <CartBlock book={book} key={index} />)}
    </>
  );
};

export default CartItem;
