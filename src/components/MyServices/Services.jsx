import React from "react";
import styles from "./Services.module.css";
import Button from "../Button/Button";
import ServiceCard from "../Card/ServiceCard";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import Heading from "../Heading/Heading";

const Services = () => {
  const servicesRef = useIntersectionObserver((target) => {
    // Adiciona as classes de animação aos elementos
    target.querySelector(`.${styles.services__container} h2`).classList.add(styles.slideIn);
    target.querySelector(`.${styles.services__container} p`).classList.add(styles.slideIn);
    target.querySelector(`.${styles.services}`).classList.add(styles.slideIn);
    target.querySelector("button, a").classList.add(styles.slideIn);

    // Aplica animações diferentes a cada .services__item
    target.querySelectorAll(`ServiceCard`).forEach((item, i) => {
      const animations = [styles.slideRight, styles.slideLeft];
      item.classList.add(animations[i % animations.length]);
    });
  });

  return (
    <div ref={servicesRef}>
      <div className={styles.services__container}>
        <div className={styles.services__heading}>
          <Heading
            title="Exploring My Expertise: What I Offer and How I Deliver Results"
            paragraph="Specializing in turning ideas into impactful digital experiences, I offer two essential pillars for your project's success"
          />
        </div>
        <div className={styles.services}>
          <ServiceCard id="1" /> {/* Renderiza o serviço com _id: "1" */}
          <ServiceCard id="2" />
        </div>
        <div>
          <Button.Link to="/contact" variant="secondary" size="lg" style={{ opacity: 0 }}>
            <span>Get Started Now</span>
          </Button.Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
