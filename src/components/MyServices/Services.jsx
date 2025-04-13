import React from "react";
import styles from "./Services.module.css";
import Button from "../Button/Button";
import ServiceCard from "../Card/ServiceCard";
import Heading from "../Heading/Heading";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Services = () => {
  const servicesRef = useIntersectionObserver((target) => {
    // Adiciona as classes de animação aos elementos
    target.querySelector(`.${styles.services__container} h2`).classList.add(styles.slideIn__03);
    target.querySelector(`.${styles.services__container} p`).classList.add(styles.slideIn__04);
    target.querySelector(`.${styles.services}`).classList.add(styles.slideIn__06);
    target.querySelector("button, a").classList.add(styles.slideIn__09);
  });

  return (
    <div ref={servicesRef}>
      <div className={styles.services__container}>
        <div className={styles.services__heading}>
          <Heading
            title="What I Do: Strategic Design Meets Scalable Development"
            paragraph="I specialize in turning ideas into intuitive digital experiences that drive results. My work is rooted in two core strengths that bring real value to your project:"
          />
          {/* <Heading
            title="I Build Web Systems That Scale & Interfaces People Love"
            paragraph="I specialize in transforming ideas into impactful digital experiences, delivering success through"
          /> */}
        </div>
        <div className={styles.services}>
          <ServiceCard id="1" /> {/* Renderiza o serviço com _id: "1" */}
          <ServiceCard id="2" />
        </div>
        <div>
          <Button.Link to="/contact" variant="secondary" size="md" style={{ opacity: 0 }}>
            <span>Get Started Now</span>
          </Button.Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
