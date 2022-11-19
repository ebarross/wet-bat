import styled from "styled-components";
import { formatCurrency, formatDateTime } from "../utils/format";
import useQuotes from "../hooks/useQuotes";
import Card from "./Card";

const Table = styled.table`
  width: 100%;
  font-size: 0.8rem;
  border-collapse: collapse;
  border-spacing: 0px;

  th {
    text-transform: uppercase;
    text-align: left;
    color: #666;
  }

  td {
    color: #444;
  }

  th,
  td {
    padding: 8px 4px;
  }

  tbody tr:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.07);
  }
`;

const Message = styled.div`
  font-size: 1.2rem;
  text-align: center;
  color: #666;
`;

const NoData = styled.div`
  padding: 16px 0px;
  font-size: 1.2rem;
  text-align: center;
  color: #666;
`;

type Props = {
  onSelectQuote: (id: number) => void;
};

function QuoteList({ onSelectQuote }: Props) {
  const { data, error, loading } = useQuotes();

  return (
    <Card title="Quotes">
      {error ? (
        <Message>Error on fetching quotes. Try again.</Message>
      ) : loading || !data ? (
        <Message>Loading...</Message>
      ) : data.length === 0 ? (
        <NoData>No quotes found.</NoData>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>ID #</th>
              <th>Name</th>
              <th>Departure</th>
              <th>Destination</th>
              <th>Departure Date</th>
              <th>Return Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((quote) => (
              <tr key={quote.id} onClick={() => onSelectQuote(quote.id)}>
                <td>{quote.id}</td>
                <td>{quote.name}</td>
                <td>{quote.departureLocation.toUpperCase()}</td>
                <td>{quote.destinationLocation.toUpperCase()}</td>
                <td>{formatDateTime(quote.departureDate)}</td>
                <td>{formatDateTime(quote.returnDate)}</td>
                <td>{formatCurrency(quote.price)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Card>
  );
}

export default QuoteList;
