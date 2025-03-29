import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Services.module.css";
import { assets } from "../assets/assets";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Services = () => {
  const servicesRef = useIntersectionObserver((target) => {
    // Adiciona as classes de animação aos elementos
    target.querySelector(`.${styles.services__container} h2`).classList.add(styles.slideIn);
    target.querySelector(`.${styles.services__text}`).classList.add(styles.slideIn);
    target.querySelector(`.${styles.services}`).classList.add(styles.slideIn);
    target.querySelector(`.${styles.services__left}`).classList.add(styles.slideRight);
    target.querySelector(`.${styles.services__right}`).classList.add(styles.slideLeft);
    target.querySelector(`.${styles.services__buttons}`).classList.add(styles.slideIn);
  });

  return (
    <div ref={servicesRef}>
      <div className={styles.services__container}>
        <h2>Exploring My Expertise: What I Offer and How I Deliver Results</h2>
        <p className={styles.services__text}>Specializing in turning ideas into impactful digital experiences, I offer two essential pillars for your project's success</p>
        <div className={styles.services}>
          <div className={styles.services__left}>
            <img src={assets.services} alt="" />
            <h3>UX/UI Design</h3>
            <p>User-centered design that combines aesthetics and usability to deliver intuitive and memorable interfaces</p>
          </div>
          <div className={styles.services__right}>
            <img src={assets.services} alt="" />
            <h3>Web Development</h3>
            <p>Building modern, and functional websites with a focus on performance and cutting-edge technology</p>
          </div>
        </div>
        <div className={styles.services__buttons}>
          <NavLink to="https://wa.me/+351933617279" target="blank">
            <span>Work Together</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Services;
