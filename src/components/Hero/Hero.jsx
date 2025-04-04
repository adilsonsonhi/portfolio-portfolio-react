import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Hero.module.css";
import { assets } from "../../assets/assets";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.container__user}>
          <img width={"60"} src={assets.profile_pic} alt="" />
          <span>
            Hi, I'm Adilson! <br />A <strong>Web Developer</strong> & <strong>Designer</strong> at <strong>📍 Lisbon</strong>
          </span>
        </div>
        <h1>Building Concepts into Seamless Digital Experiences</h1>

        <p>
          With 6+ years of experience, I build web applications and craft impactful designs. Connect with me on{" "}
          <NavLink to="https://www.linkedin.com/in/adilsonsonhi/" target="blank">
            LinkedIn
          </NavLink>{" "}
          and{" "}
          <NavLink to="https://www.instagram.com/adilsonsonhi.websites/" target="blank">
            Instagram
          </NavLink>{" "}
          for tech insights.
        </p>
        <ul className={styles.btn__list}>
          <li>
            <Button.Link to="/contact" variant="primary" size="lg">
              <span>Get Started Now</span>
            </Button.Link>
          </li>
          <li>
            <Button.Link to="/portfolio" variant="secondary" size="lg">
              <span>Explore Portfolio</span>
            </Button.Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
