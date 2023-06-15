import React from "react";
import scss from "../feedback/state.module.css";

const Section = ({ title, children }) => {
  return (
    <div className={scss.section}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Section;