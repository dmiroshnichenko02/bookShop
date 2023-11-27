import { useHttp } from "../hooks/http.hook";
import { IAuthor } from "../types/author.types";

const useAuthorServices = () => {
  const { loading, request, error, clearError, process, setProcess } =
    useHttp();

  const _apiBase = "https://bookshelf-01ta.onrender.com/";

  const getAllAuthors = async () => {
    const res = await request(
      `${_apiBase}authors`
    );
    return res.map(_transformAuthor);
  };

  const getAuthorById = async (id: number) => {
    const res = await request(`${_apiBase}authors/${id}`);
    return _transformAuthor(res.data);
  };

  const postAuthor = async (author: string, token: string) => {
    const res = await request(`${_apiBase}authors/add`, "POST", author, {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    });
    return _transformAuthor(res);
  };


  const _transformAuthor = (author: IAuthor) => {
    return {
        id: author.id,
        firstName: author.firstName,
        middleName:author.middleName,
        lastName: author.lastName,
    };
  };


  return {
    loading,
    error,
    clearError,
    getAllAuthors,
    getAuthorById,
    postAuthor,
    process,
    setProcess,
  };
};

export default useAuthorServices;
