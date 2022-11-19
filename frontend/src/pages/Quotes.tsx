import styled from "styled-components";
import { useLocation } from "wouter";
import QuoteList from "../components/QuoteList";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

function Quotes() {
  const [_, navigate] = useLocation();

  const seeQuoteDetails = (id: number) => {
    navigate(`/quotes/${id}`);
  };

  return (
    <Container>
      <QuoteList onSelectQuote={seeQuoteDetails} />
    </Container>
  );
}

export default Quotes;
