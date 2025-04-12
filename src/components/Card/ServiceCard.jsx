import React from "react";
import styles from "../Card/ServiceCard.module.css"; // Scoped CSS styles for this component
import { Services } from "../../utils/assets"; // Importing the array of service objects

// Component that renders a service card based on the provided `id`
const ServiceCard = ({ id }) => {
  // Find the matching service object by ID
  const service = Services.find((item) => item._id === id);

  // Handle case where no service matches the given ID
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className={styles.card}>
      <div className={styles.card__top}>
        {/* Display the first image in the service's image array */}
        <img className={styles.card__image} src={service.image[0]} alt={`${service.name} illustration`} />

        {/* Technology stack icons */}
        <ul className={styles.card__techs}>
          {service.techs.map((techPath, index) => (
            <li key={index}>
              <img src={techPath} alt="Tech icon" />
            </li>
          ))}
        </ul>
      </div>
      {/* Title and description section */}
      <div className={styles.card__bottom}>
        <h3>{service.title}</h3> {/* Service name/title */}
        <p>{service.description}</p> {/* Brief description of the service */}
      </div>
    </div>
  );
};

export default ServiceCard; // Exporting the component to use elsewhere in the app
