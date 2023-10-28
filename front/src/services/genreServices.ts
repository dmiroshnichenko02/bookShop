import { useHttp } from "../hooks/http.hook";
import { IGenres } from "../types/genres.types";

const useGenreServices = () => {
  const { loading, request, error, clearError, process, setProcess } =
    useHttp();

  const _apiBase = "https://bookshelf-01ta.onrender.com/";

  const getAllGenres = async () => {
    const res = await request(
      `${_apiBase}genres`
    );
    return res.data.results.map(_transformGenre);
  };

  const getGenresById = async (id: number) => {
    const res = await request(`${_apiBase}genres/${id}`);
    return _transformGenre(res.data);
  };

  const postGenre = async (genre: IGenres) => {
    const res = await request(`${_apiBase}genres/add`, "POST", genre);
    return _transformGenre(res.data);
  };


  const _transformGenre = (genres: IGenres) => {
    return {
        id: genres.id,
        genre: genres.genre,
    };
  };


  return {
    loading,
    error,
    clearError,
    getAllGenres,
    getGenresById,
    postGenre,
    process,
    setProcess,
  };
};

export default useGenreServices;
