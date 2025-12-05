import React from "react";
import "./Quote.css"

const Quote = (props) => {
  return (
    <blockquote className="quote">
      <p className="text">{props.quote}</p>
      <p className="author">{props.author}</p>
    </blockquote>
  );
};

export default Quote;
