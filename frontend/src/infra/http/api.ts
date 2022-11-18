import Quote from "../../interfaces/quote";

const API_URL = import.meta.env.VITE_API_URL;

type QuotesResponse = {
  quotes: Quote[];
};
type QuoteResponse = {
  quote: Quote;
};

const fetchQuotes = async (): Promise<QuotesResponse> => {
  const url = `${API_URL}/quotes`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network error");
    }

    const data = (await response.json()) as QuotesResponse;
    return data;
  } catch (error) {
    throw error;
  }
};

const fetchQuote = async (id: number): Promise<QuoteResponse> => {
  const url = `${API_URL}/quotes/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network error");
    }

    const data = (await response.json()) as QuoteResponse;
    return data;
  } catch (error) {
    throw error;
  }
};

export { fetchQuotes, fetchQuote };
