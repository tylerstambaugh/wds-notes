import { useEffect, useState } from "react";

export function useFetch(url: string) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Response>();
  const [error, setError] = useState();

  useEffect(() => {
    const controller: AbortController = new AbortController();
    setLoading(true);
    fetch(url, { signal: controller.signal })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));

    //clean up function
    return () => {
      controller.abort();
    };
  }, [url]);

  return { loading, data, error };
}
