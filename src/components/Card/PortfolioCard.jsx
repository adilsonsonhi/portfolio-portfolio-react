import React from "react";
import styles from "./PortfolioCard.module.css";
import { NavLink } from "react-router-dom";

const PortfolioCard = ({ product }) => {
  return (
    <NavLink to={product.link} target="_blank" className={styles.card} data-category={product.category}>
      <div className={styles.content}>
        <img src={product.image} alt={product.image} />
        <h3 className={styles.title}>{product.name}</h3>
        {/* <h5 className={styles.title}>{product.subtitle}</h5> */}
        <h6 className={styles.subtitle}>{product.category}</h6>
        <p className={styles.description}>{product.description}</p>
      </div>
    </NavLink>
  );
};

export default PortfolioCard;
