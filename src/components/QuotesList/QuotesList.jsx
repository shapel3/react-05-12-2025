import quotes from "./data";
import Heading from "./../Heading/Heading";
import Quote from "./../Quote/Quote";

const QuotesList = () => {
  const showQuote = (quote,index) => <Quote key={index} quote={quote.text} author={quote.author} />;
  return (
    <section>
      <Heading text="Надихаючі цитати" />
      {quotes.map(showQuote)}
    </section>
  );
};

export default QuotesList;
