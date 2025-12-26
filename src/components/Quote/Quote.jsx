import React, { useState } from "react";
import "./Quote.css"

const Quote = (props) => {
  const [isSelect, setIsSelect] = useState(false);
  const changeIsSelect=()=>{
    setIsSelect(!isSelect)
  }
  return (
    <blockquote style={{backgroundColor:isSelect? 'pink':''}} onClick={changeIsSelect} className="quote">
      <p className="text">{props.quote}</p>
      <p className="author">{props.author}</p>
    </blockquote>
  );
};

export default Quote;
