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
    return res.map(_transformGenre);
  };

  const getGenresById = async (id: number) => {
    const res = await request(`${_apiBase}genres/${id}`);
    return _transformGenre(res);
  };

  const postGenre = async (genre: string, token: string) => {
    const res = await request(`${_apiBase}genres/add`, "POST", genre, {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    });
    return _transformGenre(res);
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
