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

  const postBook = async (book: string, token: string) => {
    const res = await request(`${_apiBase}books/add`, "POST", book, {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    });
    return res;
  };


  const _transformBook = (book: IBookGet) => {
    book.coverImageLink = '/Image_not_available.png'
    return book;
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
