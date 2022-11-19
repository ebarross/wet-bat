import styled from "styled-components";
import useQuote from "../hooks/useQuote";

const Message = styled.div`
  font-size: 1.2rem;
  text-align: center;
  color: #666;
`;

type Props = {
  id: string;
};

function QuoteDetails({ id }: Props) {
  const { data, error, loading } = useQuote(parseFloat(id));

  return (
    <>
      {error ? (
        <Message>Error on fetching quote. Try again.</Message>
      ) : loading || !data ? (
        <Message>Loading...</Message>
      ) : (
        <div>{data.name}</div>
      )}
    </>
  );
}

export default QuoteDetails;
