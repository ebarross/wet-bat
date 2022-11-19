import styled from "styled-components";
import useQuote from "../hooks/useQuote";
import { formatCurrency, formatDateTime } from "../utils/format";
import Card from "./Card";

const Message = styled.div`
  font-size: 1.2rem;
  text-align: center;
  color: #666;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Bold = styled.div`
  font-weight: 500;
`;

type Props = {
  id: string;
};

function QuoteDetails({ id }: Props) {
  const { data, error, loading } = useQuote(parseFloat(id));

  return (
    <Card title={`Quote Details (#${id})`}>
      {error ? (
        <Message>Error on fetching quote. Try again.</Message>
      ) : loading || !data ? (
        <Message>Loading...</Message>
      ) : (
        <Container>
          <Flex>
            <div>
              <Bold>Name:</Bold>
              <div>{data.name}</div>
            </div>
            <div>
              <Bold>Contact:</Bold>
              <div>{data.contact}</div>
            </div>
          </Flex>
          <Flex>
            <div>
              <Bold>Departure:</Bold>
              <div>{data.departureLocation.toUpperCase()}</div>
            </div>
            <div>
              <Bold>{data.destinationLocation.toUpperCase()}</Bold>
              <div>Destination:</div>
            </div>
          </Flex>
          <Flex>
            <div>
              <Bold>Departure Date:</Bold>
              <div>{formatDateTime(data.departureDate)}</div>
            </div>
            <div>
              <Bold>Return Date:</Bold>
              <div>{formatDateTime(data.returnDate)}</div>
            </div>
          </Flex>
          <Flex>
            <div>
              <Bold>Transportation:</Bold>
              <div>{data.transportation}</div>
            </div>
            <div>
              <Bold>Travellers:</Bold>
              <div>{data.travelers}</div>
            </div>
            <div>
              <Bold>Price:</Bold>
              <div>{formatCurrency(data.price)}</div>
            </div>
          </Flex>
        </Container>
      )}
    </Card>
  );
}

export default QuoteDetails;
