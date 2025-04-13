import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Hero.module.css";
import { assets } from "../../utils/assets";
import Button from "../Button/Button";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Hero = () => {
  const servicesRef = useIntersectionObserver((target) => {
    // Adiciona as classes de animação aos elementos
    target.querySelector(`.${styles.container__user}`).classList.add(styles.slideIn__03);
    target.querySelector(`.${styles.hero} h1`).classList.add(styles.slideIn__06);
    target.querySelector(`.${styles.hero} p`).classList.add(styles.slideIn__09);
    target.querySelector(`.${styles.btn__list}`).classList.add(styles.slideIn__09);
  });

  return (
    <div ref={servicesRef}>
      <div className={styles.hero}>
        <div className={styles.container__user}>
          <img width={"60"} src={assets.profile_pic} alt="" />
          <span>
            Hey, I'm Adilson! <br />A <strong>Web Developer</strong> & <strong>Designer</strong> based in <strong>📍 Lisbon</strong>
          </span>
        </div>
        <h1>I Turn Concepts into Powerful Interfaces that drive Sales</h1>

        <p>
          With over 6 years merging design and code to build seamless UX and robust web apps. From startups to scaling businesses, I combine creativity with technical precision.
          Connect on{" "}
          <NavLink to="https://www.linkedin.com/in/adilsonsonhi/" target="blank">
            LinkedIn
          </NavLink>{" "}
          and{" "}
          <NavLink to="https://www.instagram.com/adilsonsonhi.websites/" target="blank">
            Instagram
          </NavLink>
          .
        </p>

        <ul className={styles.btn__list}>
          <li>
            <Button.Link to="/contact" variant="primary" size="lg">
              <span>Start Your Project</span>
            </Button.Link>
          </li>
          <li>
            <Button.Link to="/portfolio" variant="secondary" size="lg">
              <span>See My Portfolio</span>
            </Button.Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
