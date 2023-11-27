import { useCallback, useState } from "react";

interface IHeaders {
  "Content-Type": string;
  Authorization?: string;
}

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [process, setProcess] = useState("waiting");

  const request = useCallback(
    async (
      url: string,
      method = "GET",
      body: string | null = null,
      headers: IHeaders = { "Content-Type": "application/json" }
    ) => {
      setLoading(true);
      setProcess("loading");

      try {
        const headersInit: HeadersInit = {
          "Content-Type": headers["Content-Type"],
        };

        if (headers["Authorization"]) {
          headersInit["Authorization"] = headers["Authorization"];
        }

        const response = await fetch(url, { method, body, headers: headersInit });

        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status ${response.status}`);
        }

        const data = await response.json();

        setLoading(false);

        return data;
      } catch (e: unknown) {
        setLoading(false);
        setError(true);
        setProcess("error");

        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setError(false);
    setProcess("loading");
  }, []);

  return { loading, request, error, clearError, process, setProcess };
};
