import { useHttp } from "../hooks/http.hook";

const useUserServices = () => {
  const { loading, request, error, clearError, process, setProcess } =
    useHttp();

  const _apiBase = "https://bookshelf-01ta.onrender.com/";

  const getAllUsers = async () => {
    const res = await request(
      `${_apiBase}users`
    );
    return res;
  };

  const getUserById = async (id: number) => {
    const res = await request(`${_apiBase}users/${id}`);
    return res;
  };

  const postUser = async (user: string) => {
    const res = await request(`${_apiBase}users/add`, "POST", user);
    return res;
  };

  const login = async (user: string) => {
    const res = await request(`${_apiBase}login`, "POST", user);
    return res;
  };


  return {
    loading,
    error,
    clearError,
    getAllUsers,
    getUserById,
    postUser,
    login,
    process,
    setProcess,
  };
};

export default useUserServices;
