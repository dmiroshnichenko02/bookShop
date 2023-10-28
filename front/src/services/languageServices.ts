import { useHttp } from "../hooks/http.hook";
import { ILang } from "../types/lang.types";

const useLanguageServices = () => {
  const { loading, request, error, clearError, process, setProcess } =
    useHttp();

  const _apiBase = "https://bookshelf-01ta.onrender.com/";

  const getAllLanguages = async () => {
    const res = await request(
      `${_apiBase}languages`
    );
    return res.data.results.map(_transformLanguage);
  };

  const getLanguageById = async (id: number) => {
    const res = await request(`${_apiBase}languages/${id}`);
    return _transformLanguage(res.data);
  };

  const postLanguage = async (language: ILang) => {
    const res = await request(`${_apiBase}languages/add`, "POST", language);
    return _transformLanguage(res.data);
  };


  const _transformLanguage = (languages: ILang) => {
    return {
        id: languages.id,
        language: languages.language,
    };
  };


  return {
    loading,
    error,
    clearError,
    getAllLanguages,
    getLanguageById,
    postLanguage,
    process,
    setProcess,
  };
};

export default useLanguageServices;