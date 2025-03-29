import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Hero.module.css";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div>
      <div className={styles.hero}>
        <div>
          <img width={"40"} src={assets.profile_pic} alt="" />
          <span>
            Hi, I'm Adilson! <br />A <strong>Web Developer</strong> & <strong>Designer</strong> at <strong>📍 Lisbon</strong>
          </span>
        </div>
        <h1>Transforming Concepts into Seamless Digital Experiences</h1>
        <p>
          With 6+ years of experience, I build web applications and craft impactful designs. Connect with me on{" "}
          <NavLink to="https://www.linkedin.com/in/adilsonsonhi/" target="blank">
            LinkedIn
          </NavLink>{" "}
          and{" "}
          <NavLink to="https://www.instagram.com/adilsonsonhi.websites/" target="blank">
            Instagram
          </NavLink>{" "}
          for design insights.
        </p>
        <ul className={styles.btn__list}>
          <li>
            <NavLink className={styles.primary__btn} to="https://wa.me/+351933617279" target="blank">
              <span>Hire me now</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.secondary__btn} to="/portfolio">
              View projects
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
