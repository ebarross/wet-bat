import styled from "styled-components";
import Quote from "../interfaces/quote";
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

const NoData = styled.div`
  padding: 16px 0px;
  font-size: 1.2rem;
  text-align: center;
  color: #666;
`;

type Props = {
  list: Quote[];
  onSelectQuote: (id: number) => void;
};

function QuoteList({ list, onSelectQuote }: Props) {
  const formatDateTime = (dateTime: string) => {
    const splitted = dateTime.split("T");
    const time = splitted[1].slice(0, 5);
    const [year, month, day] = splitted[0].split("-");
    const date = `${month}/${day}/${year}`;
    return `${date} ${time}`;
  };

  const formatCurrency = (value: number) => {
    return `$ ${value.toFixed(2)}`;
  };

  return (
    <Card title="Quotes">
      {list.length === 0 ? (
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
              <th>Travelers</th>
              <th>Transportation</th>
              <th>Contact</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {list.map((quote) => (
              <tr key={quote.id} onClick={() => onSelectQuote(quote.id)}>
                <td>{quote.id}</td>
                <td>{quote.name}</td>
                <td>{quote.departureLocation.toUpperCase()}</td>
                <td>{quote.destinationLocation.toUpperCase()}</td>
                <td>{formatDateTime(quote.departureDate)}</td>
                <td>{formatDateTime(quote.returnDate)}</td>
                <td>{quote.travelers}</td>
                <td>{quote.transportation}</td>
                <td>{quote.contact}</td>
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