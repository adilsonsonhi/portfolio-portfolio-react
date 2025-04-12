import React from "react";
import styles from "./Mainskills.module.css";
import { skills } from "../../utils/assets";
import Heading from "../Heading/Heading";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const MainSkills = () => {
  const servicesRef = useIntersectionObserver((target) => {
    // Adiciona as classes de animação aos elementos
    target.querySelector(`.${styles.mainskills} h2`).classList.add(styles.slideIn__03);
    target.querySelector(`.${styles.mainskills} ul`).classList.add(styles.slideIn__06);
  });

  return (
    <div ref={servicesRef}>
      <div className={styles.mainskills}>
        <Heading title="Technologies and Tools" />
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainSkills;
