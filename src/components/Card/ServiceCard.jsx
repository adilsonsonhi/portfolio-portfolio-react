import React from "react";
import styles from "../Card/ServiceCard.module.css";
import { servicesArray } from "../../assets/assets";

const ServiceCard = ({ id }) => {
  const service = servicesArray.find((item) => item._id === id);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className={styles.service__card}>
      {/* Imagem do serviço - pegamos o primeiro item do array image */}
      <div className={styles.service__container}>
        <img className={styles.service__image} src={service.image[0]} alt={`${service.name} illustration`} />
        <div className={styles.service__list}>
          {/* Icons de tecnologias */}
          {service.techs.map((techPath, index) => (
            <div key={index} className={styles.service__listitem}>
              <img src={techPath} alt="Tech icon" />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3>{service.name}</h3>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
