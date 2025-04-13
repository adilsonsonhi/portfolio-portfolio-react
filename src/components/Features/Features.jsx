import React from "react";
import styles from "./Features.module.css";
import FeaturesCard from "../Card/FeaturesCard";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Features = () => {
  const servicesRef = useIntersectionObserver((target) => {
    // Adiciona as classes de animação aos elementos
    target.querySelector(`.${styles.heading} h2`).classList.add(styles.slideIn__03);
    target.querySelector(`.${styles.heading} p`).classList.add(styles.slideIn__04);
    target.querySelector(`.${styles.web__features}`).classList.add(styles.slideIn__06);
    target.querySelector(`.${styles.design__features}`).classList.add(styles.slideIn__09);
    target.querySelector(`.${styles.btn__container}`).classList.add(styles.slideIn__12);
  });

  return (
    <div ref={servicesRef}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <Heading
            title="What I Build for Your Business"
            paragraph="Whether you're launching a product, optimizing an existing platform, or crafting a new user experience — I turn your goals into high-performing digital solutions."
          />
        </div>

        <div className={styles.features}>
          <div className={styles.web__features}>
            <h6>Custom Web Development Services</h6>
            <div className={styles.features__container}>
              <FeaturesCard id="1" />
              <FeaturesCard id="2" />
              <FeaturesCard id="3" />
              <FeaturesCard id="4" />
              <FeaturesCard id="5" />
              <FeaturesCard id="6" />
            </div>
          </div>
          <div className={styles.design__features}>
            <h6>Custom Web Development Services</h6>
            <div className={styles.features__container}>
              <FeaturesCard id="7" />
              <FeaturesCard id="8" />
              <FeaturesCard id="9" />
              <FeaturesCard id="10" />
              <FeaturesCard id="11" />
              <FeaturesCard id="12" />
            </div>
          </div>
        </div>

        <div className={styles.btn__container}>
          <Button.Link to="/contact" variant="secondary" size="md">
            <span>Let’s Work Together</span>
          </Button.Link>
        </div>
      </div>
    </div>
  );
};

export default Features;
