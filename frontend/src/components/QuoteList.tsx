import styled from "styled-components";
import { AiFillEye } from "react-icons/ai";
import { formatCurrency, formatDate } from "../utils/format";
import useQuotes from "../hooks/useQuotes";
import Card from "./Card";
import Loading from "./Loading";

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
    padding: 4px;
  }

  tbody tr:hover {
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

const Button = styled.button`
  background-color: #5f6caf;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 8px 12px;
  border-radius: 4px;
`;

type Props = {
  onClickDetails: (id: number) => void;
};

function QuoteList({ onClickDetails }: Props) {
  const { data, error, loading } = useQuotes();

  return (
    <Card title="Quotes">
      {error ? (
        <Message>Error on fetching quotes. Try again.</Message>
      ) : loading || !data ? (
        <Loading />
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((quote) => (
              <tr key={quote.id}>
                <td>{quote.id}</td>
                <td>{quote.name}</td>
                <td>{quote.departureLocation.toUpperCase()}</td>
                <td>{quote.destinationLocation.toUpperCase()}</td>
                <td>{formatDate(quote.departureDate)}</td>
                <td>{formatDate(quote.returnDate)}</td>
                <td>{formatCurrency(quote.price)}</td>
                <td>
                  <Button onClick={() => onClickDetails(quote.id)}>
                    <AiFillEye size={22} color="#fff" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Card>
  );
}

export default QuoteList;
