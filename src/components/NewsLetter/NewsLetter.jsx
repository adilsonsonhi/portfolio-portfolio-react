import React from "react";
import styles from "../NewsLetter/NewsLetter.module.css";
import Button from "../Button/Button";
import { assets } from "../../assets/assets";

const NewsLetter = () => {
  return (
    <div className={styles.newsletter__container}>
      <div className={styles.description}>
        <img src={assets.logo} alt="" />
        <h2>Stay updated! Subscribe to my newsletter for the latest tips, trends, and exclusive content 😎</h2>
      </div>
      <div className={styles.form__container}>
        <form className={styles.form}>
          <input type="email" name="" id="" />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
