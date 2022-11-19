import React from "react";
import styled from "styled-components";
import QuoteList from "../components/QuoteList";
import useQuotes from "../hooks/useQuotes";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Message = styled.div`
  margin-top: 60px;
  font-size: 1.7rem;
  color: #666;
`;

function Quotes() {
  const { data, error, loading } = useQuotes();

  return (
    <Container>
      {loading ? (
        <Message>Loading quotes...</Message>
      ) : error || !data ? (
        <Message>Error or fetching quotes. Try again.</Message>
      ) : (
        <QuoteList list={data} />
      )}
    </Container>
  );
}

export default Quotes;
