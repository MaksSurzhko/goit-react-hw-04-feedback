import React from "react";
import ocss from "./opt.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={ocss.list}>
      {options.map((option) => (
        <li className={ocss.item} key={option}>
          <button
            className={ocss.btn}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;