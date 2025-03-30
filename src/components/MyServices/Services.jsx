import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Services.module.css";
// import { assets } from "../../assets/assets";
import Button from "../Button/Button";
import ServiceCard from "../Card/ServiceCard";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Services = () => {
  const servicesRef = useIntersectionObserver((target) => {
    // Adiciona as classes de animação aos elementos
    target.querySelector(`.${styles.services__container} h2`).classList.add(styles.slideIn);
    target.querySelector(`.${styles.services__description}`).classList.add(styles.slideIn);
    target.querySelector(`.${styles.services}`).classList.add(styles.slideIn);
    target.querySelector("button, a").classList.add(styles.slideIn);
    // Aplica animações diferentes a cada .services__item
    target.querySelectorAll(`.${styles.services__item}`).forEach((item, i) => {
      const animations = [styles.slideRight, styles.slideIn, styles.slideLeft];
      item.classList.add(animations[i % animations.length]);
    });
  });

  return (
    <div ref={servicesRef}>
      <div className={styles.services__container}>
        <h2>Exploring My Expertise: What I Offer and How I Deliver Results</h2>
        <p className={styles.services__description}>Specializing in turning ideas into impactful digital experiences, I offer two essential pillars for your project's success</p>
        <div className={styles.services}>
          {/* <div className={styles.services__item}>
            <img src={assets.service1} alt="" />
            <h3>Web Systems</h3>
            <p>Robust, scalable solutions. Complete web systems with seamless API REST integration for optimal efficiency and performance.</p>
          </div>

          <div className={styles.services__item}>
            <img src={assets.service2} alt="" />
            <h3>Interface Design (UX/UI)</h3>
            <p>Engaging user experiences. Intuitive, functional interfaces that provide smooth and engaging navigation.</p>
          </div>

          <div className={styles.services__item}>
            <img src={assets.services} alt="" />
            <h3>CRO Landing Pages</h3>
            <p>Performance that converts. Landing pages optimized for maximum conversion, with design focused on quick results.</p>
          </div> */}
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
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
