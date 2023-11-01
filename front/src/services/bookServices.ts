import { useHttp } from "../hooks/http.hook";
import { IBookGet } from "../types/book.types";

const useBookServices = () => {
  const { loading, request, error, clearError, process, setProcess } =
    useHttp();

  const _apiBase = "https://bookshelf-01ta.onrender.com/";

  const getAllBooks = async () => {
    const res = await request(
      `${_apiBase}books`
    );
    return res.map(_transformBook);
  };

  const getBookById = async (id: number) => {
    const res = await request(`${_apiBase}books/${id}`);
    return _transformBook(res);
  };

  const postBook = async (book: string) => {
    const res = await request(`${_apiBase}books/add`, "POST", book);
    return _transformBook(res);
  };


  const _transformBook = (book: IBookGet) => {
    const descr = book.description
      ? `${book.description.slice(0, 210)}...`
      : "No description for this Character";
    return {
      id: book.id,
      author: book.authors,
      name: book.name,
      description: descr,
      publicationYear: book.publicationYear,
      price: book.price,
      quantity: book.quantity,
      languages: book.languages,
      formats: book.formats,
      rating: book.rating,
    };
  };


  return {
    loading,
    error,
    clearError,
    getAllBooks,
    getBookById,
    postBook,
    process,
    setProcess,
  };
};

export default useBookServices;
