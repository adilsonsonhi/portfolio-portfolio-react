import React from "react";
import styles from "../Card/FeaturesCard.module.css";
import { assets, Features } from "../../assets/assets";

const FeaturesCard = ({ id }) => {
  const service = Features.find((item) => item._id === id);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className={styles.features__card}>
      <h5>
        {service.name}
        <span className={styles.span}></span>
      </h5>
      <p>{service.description}</p>
      <img src={assets.mousecursor} alt="" />
    </div>
  );
};

export default FeaturesCard;
