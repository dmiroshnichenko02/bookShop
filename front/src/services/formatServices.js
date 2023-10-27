import { useHttp } from "../hooks/http.hook";

const useFormatServices = () => {
  const { loading, request, error, clearError, process, setProcess } =
    useHttp();

  const _apiBase = "https://bookshelf-01ta.onrender.com/";

  const getAllFormats = async () => {
    const res = await request(
      `${_apiBase}formats`
    );
    return res.data.results.map(_transformFormat);
  };

  const getFormatById = async (id) => {
    const res = await request(`${_apiBase}formats/${id}`);
    return _transformFormat(res.data);
  };

  const postFormat = async (format) => {
    const res = await request(`${_apiBase}format/add`, "POST", format);
    return _transformFormat(res.data);
  };


  const _transformFormat= (formats) => {
    return {
        id: formats.id,
        format: formats.format,
    };
  };


  return {
    loading,
    error,
    clearError,
    getAllFormats,
    getFormatById,
    postFormat,
    process,
    setProcess,
  };
};

export default useFormatServices;
