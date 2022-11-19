import { useEffect, useState } from "react";
import { fetchQuotes } from "../infra/http/api";
import Quote from "../interfaces/quote";

function useQuotes() {
  const [data, setData] = useState<Quote[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetchQuotes()
      .then((data) => {
        if (data?.quotes) {
          setData(data.quotes);
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

export default useQuotes;
