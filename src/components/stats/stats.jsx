import React from "react";
import stcss from "./stats.module.css";

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage
}) => {
  return (
    <ul className={stcss.lists}>
      <li className={stcss.itemsy}>Good: {good}</li>
      <li className={stcss.items}>Neutral: {neutral}</li>
      <li className={stcss.itemsy}>Bad: {bad}</li>
      <li className={stcss.items}>Total feedback: {total}</li>
      <li className={stcss.itemsy}>
        Positive feedback percentage: {positivePercentage}%
      </li>
    </ul>
  );
};

export default Statistics;