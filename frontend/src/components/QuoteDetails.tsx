import styled from "styled-components";
import useQuote from "../hooks/useQuote";
import { formatCurrency, formatDateTime } from "../utils/format";
import Card from "./Card";
import Loading from "./Loading";

const Message = styled.div`
  font-size: 1.2rem;
  text-align: center;
  color: #666;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 8px;
  font-size: 1.1rem;
  font-weight: 500;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Info = styled.div``;

const Label = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  color: #999;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 2px dashed #dadce0bd; ;
`;

const Pricing = styled.div`
  margin-top: 20px;
  text-align: right;
  font-size: 1.4rem;
`;

type Props = {
  id: string;
};

function QuoteDetails({ id }: Props) {
  const { data, error, loading } = useQuote(parseFloat(id));

  return (
    <Card title={`Quote Details (#${id})`} width="60%">
      {error ? (
        <Message>Error on fetching quote. Try again.</Message>
      ) : loading || !data ? (
        <Loading />
      ) : (
        <>
          <Container>
            <Column>
              <Info>
                <Label>Name:</Label>
                <div>{data.name}</div>
              </Info>
              <Info>
                <Label>Contact:</Label>
                <div>{data.contact}</div>
              </Info>
            </Column>
            <Column>
              <Info>
                <Label>Departure:</Label>
                <div>{data.departureLocation}</div>
              </Info>
              <Info>
                <Label>Destination:</Label>
                <div>{data.destinationLocation}</div>
              </Info>
            </Column>
            <Column>
              <Info>
                <Label>Departure Date:</Label>
                <div>{formatDateTime(data.departureDate)}</div>
              </Info>
              <Info>
                <Label>Return Date:</Label>
                <div>{formatDateTime(data.returnDate)}</div>
              </Info>
            </Column>
            <Column>
              <Info>
                <Label>Transportation:</Label>
                <div>{data.transportation.name}</div>
              </Info>
              <Info>
                <Label>Travellers:</Label>
                <div>{data.travelers}</div>
              </Info>
            </Column>
          </Container>

          <Divider />

          <Pricing>
            <Label>Total Price:</Label>
            <div>{formatCurrency(data.price)}</div>
          </Pricing>
        </>
      )}
    </Card>
  );
}

export default QuoteDetails;
