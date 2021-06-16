import React, { useState } from "react";
/* import {AiOutlineMinus} from 'react-icons/fa' */
/* import { FaRegPlusSquare } from "react-icons/fa"; */

function Question({ item }) {
  const {  title, info } = item;

  const [showMore, setShowMore] = useState(false);

  return (
    <div className="question">
      <p>
        {title}{" "}
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "-" : "+"}
        </button>
        {showMore ? <div>{info}</div> : ""}
      </p>
    </div>
  );
}

export default Question;
