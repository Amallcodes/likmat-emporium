import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController();
        const signal = abortCont.signal

        fetch(url, { signal })
            .then(res => {
                if (!res.ok) {
                    throw Error("Please refresh. could not load products")
                }

                return res.json()
            })
            .then(data => {
                // console.log(data);

                setError(false)
                setData(data);
                setIsPending(false);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    // console.log("fetch aborted");
                    // console.log(abortCont.signal);
                    setError(err.message);
                } else {
                    setError(err.message);
                    setIsPending(false);
                }
                // console.log(err);
            });

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;