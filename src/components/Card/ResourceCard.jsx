import React from "react";
import styles from "./ResourceCard.module.css";
import { NavLink } from "react-router-dom";

const ResourceCard = ({ resource }) => {
  return (
    <NavLink to={resource.link} target="blank" className={styles.card} data-category={resource.category}>
      <div className={styles.content}>
        <img src={resource.icon} alt="" />
        <h4>{resource.title}</h4>
        <h5>{resource.subtitle}</h5>
        <p>{resource.description}</p>
      </div>
    </NavLink>
  );
};

export default ResourceCard;
