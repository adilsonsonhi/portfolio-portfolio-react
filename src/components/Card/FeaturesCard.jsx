import React from "react";
import styles from "../Card/FeaturesCard.module.css"; // Import CSS module for scoped styles
import { assets, Features } from "../../assets/assets"; // Import shared assets and data list

// Reusable card component that displays a specific feature based on the passed `id`
const FeaturesCard = ({ id }) => {
  // Find the feature object that matches the provided `id`
  const service = Features.find((item) => item._id === id);

  // If no matching feature is found, display a fallback message
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className={styles.card}>
      <h5>
        {service.title} {/* Feature title */}
        <span className={styles.span}></span> {/* Decorative or styling element */}
      </h5>
      <p>{service.description}</p> {/* Short description of the feature */}
      <img src={assets.mousecursor} alt="" /> {/* Icon or graphic related to the feature */}
    </div>
  );
};

export default FeaturesCard; // Export the component for use in other parts of the app
