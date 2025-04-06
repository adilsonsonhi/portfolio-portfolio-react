import React from "react";
import styles from "./Heading.module.css";

const Heading = ({ title, paragraph }) => {
  return (
    <div className={styles.heading}>
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default Heading;
