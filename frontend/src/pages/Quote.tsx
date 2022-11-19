import Card from "../components/Card";
import QuoteDetails from "../components/QuoteDetails";

type Props = {
  id: string;
};

function Quote({ id }: Props) {
  return (
    <Card title="Quote Details">
      <QuoteDetails id={id} />
    </Card>
  );
}

export default Quote;
