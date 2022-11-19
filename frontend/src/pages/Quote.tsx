import QuoteDetails from "../components/QuoteDetails";

type Props = {
  id: string;
};

function Quote({ id }: Props) {
  return <QuoteDetails id={id} />;
}

export default Quote;
