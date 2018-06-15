import React from "react";
import {Link} from "react-router-dom";

function Marquee(props) {
  const message = props.match.params.text;
  return (   
    <marquee>{message}</marquee>
    <Link to={"/marquee/iloveroutes"}> View </Link>
  );
}

export default Marquee;
