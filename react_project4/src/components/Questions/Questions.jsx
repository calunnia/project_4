import React from "react";
import Question from "../Question/Question";


function Questions({ data }) {
  return (
    <div className="questions">
      {data.map((item,i) => (
        <div>{<Question item={item} key={i.toString()} />}</div>
      ))}
    </div>
  );
}

export default Questions;
