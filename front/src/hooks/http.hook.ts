import { useCallback, useState } from "react";



export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [process, setProcess] = useState('waiting');

    const request = useCallback(async (url: string, method = 'GET', body: string | null = null, headers = {'Content-Type': 'application/json'}) => {

        setLoading(true)
        setProcess('loading')

        try {
            const response = await fetch(url,{method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status ${response.status}`)
            }

            const data = await response.json();

            setLoading(false)

            return data
        } catch(e:unknown) {
            setLoading(false)
            setError(true);
            setProcess('error')

            throw e;
        }
    }, []);

    const clearError = useCallback(() => {
        setError(false)
        setProcess('loading')
    }, [])

    return {loading, request, error, clearError, process,setProcess}
}