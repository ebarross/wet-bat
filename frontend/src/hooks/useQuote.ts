import { useEffect, useState } from "react";
import { fetchQuote } from "../infra/http/api";
import Quote from "../interfaces/quote";

function useQuote(id: number) {
  const [data, setData] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetchQuote(id)
      .then((data) => {
        if (data?.quote) {
          setData(data.quote);
        }
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return {
    data,
    loading,
    error,
  };
}

export default useQuote;
