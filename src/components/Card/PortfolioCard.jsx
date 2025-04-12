import React from "react";
import styles from "./PortfolioCard.module.css";
import { NavLink } from "react-router-dom";

const PortfolioCard = ({ product }) => {
  return (
    <NavLink to={product.link} target="_blank" className={styles.card} data-category={product.category}>
      <div className={styles.content}>
        <img src={product.image} alt={product.image} />
        <h3>{product.name}</h3>
        <h5>{product.category}</h5>
        <p>{product.description}</p>
      </div>
    </NavLink>
  );
};

export default PortfolioCard;
