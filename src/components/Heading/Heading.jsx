import React, { useState } from "react";
import "./Heading.css";

const Heading = (props) => {
  const [isClick, setIsClick] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const addIsHover = () => {
    setIsHover(true);
  };
  const devIsHover = () => {
    setIsHover(false);
  };
  const setClick = () => {
    setIsClick(!isClick);
  };
  return (
    <h2
      onClick={setClick}
      style={{
        color: isHover ? "red" : "",
        backgroundColor: isClick ? "purple" : "",
      }}
      onMouseLeave={devIsHover}
      onMouseEnter={addIsHover}
      className="heading"
    >
      {props.text}
    </h2>
  );
};

export default Heading;
