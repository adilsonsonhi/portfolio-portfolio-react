import React from "react";
import styles from "./ResourceCard.module.css";
import { NavLink } from "react-router-dom";
// import { assets } from "../../assets/assets";

const ResourceCard = ({ resource }) => {
  return (
    <NavLink to={resource.link} target="blank" className={styles.card} data-category={resource.category}>
      <div className={styles.content}>
        <img src={resource.icon} alt="" />
        <h5 className={styles.title}>{resource.title}</h5>
        <div className={styles.subtitle}>{resource.subtitle}</div>
        <p className={styles.description}>{resource.description}</p>
      </div>
    </NavLink>
  );
};

export default ResourceCard;
