import { useHttp } from "../hooks/http.hook";

const useAuthorServices = () => {
  const { loading, request, error, clearError, process, setProcess } =
    useHttp();

  const _apiBase = "https://bookshelf-01ta.onrender.com/";

  const getAllAuthors = async () => {
    const res = await request(
      `${_apiBase}authors`
    );
    return res.data.results.map(_transformAuthor);
  };

  const getAuthorById = async (id) => {
    const res = await request(`${_apiBase}authors/${id}`);
    return _transformAuthor(res.data);
  };

  const postAuthor = async (author) => {
    const res = await request(`${_apiBase}authors/add`, "POST", author);
    return _transformAuthor(res.data);
  };


  const _transformAuthor = (author) => {
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
