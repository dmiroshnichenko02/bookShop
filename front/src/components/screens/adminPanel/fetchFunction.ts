import { SetStateAction, Dispatch } from "react";

export async function bdFetch<T>(
    getAll: () => Promise<T>,
    setState: Dispatch<SetStateAction<T>>
  ) {
    const get = async() => {
        const res = await getAll();
  
        setState(res);
      }
      get();
}