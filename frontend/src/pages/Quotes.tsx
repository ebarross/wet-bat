import styled from "styled-components";
import { useLocation } from "wouter";
import QuoteList from "../components/QuoteList";

const Container = styled.div`
  width: 100%;
`;

function Quotes() {
  const [_, navigate] = useLocation();

  const seeQuoteDetails = (id: number) => {
    navigate(`/quotes/${id}`);
  };

  return (
    <Container>
      <QuoteList onClickDetails={seeQuoteDetails} />
    </Container>
  );
}

export default Quotes;
