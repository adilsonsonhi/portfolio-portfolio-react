import React from "react";
import styles from "../styles/Mainskills.module.css";
import { skills } from "../assets/assets";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const MainSkills = () => {
  const servicesRef = useIntersectionObserver((target) => {
    // Adiciona as classes de animação aos elementos
    target.querySelector(`.${styles.mainskills} h2`).classList.add(styles.slideIn);
    target.querySelector(`.${styles.mainskills} ul`).classList.add(styles.slideIn);
  });

  return (
    <div ref={servicesRef}>
      <div className={styles.mainskills}>
        <h2>Technologies and Tools</h2>
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
