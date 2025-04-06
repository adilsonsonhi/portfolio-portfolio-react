import React from "react";
import styles from "../Features/Features.module.css";
import FeaturesCard from "../Card/FeaturesCard";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";

const Features = () => {
  return (
    <div className={styles.features__container}>
      <div className={styles.features__description}>
        <Heading
          title="What I Build for Your Business"
          paragraph="From sleek designs to seamless functionality, I ensure your online platform reflects your vision and drives results"
        />
      </div>
      <div className={styles.features}>
        <div className={styles.webdev__features}>
          <h6>Custom Web Development Services</h6>
          <div>
            <FeaturesCard id="1" />
            <FeaturesCard id="2" />
            <FeaturesCard id="3" />
            <FeaturesCard id="4" />
            <FeaturesCard id="5" />
            <FeaturesCard id="5" />
          </div>
        </div>
        <div className={styles.uxui__features}>
          <h6>Custom Web Development Services</h6>
          <div>
            <FeaturesCard id="7" />
            <FeaturesCard id="8" />
            <FeaturesCard id="9" />
            <FeaturesCard id="10" />
            <FeaturesCard id="11" />
            <FeaturesCard id="12" />
          </div>
        </div>
      </div>
      <Button.Link to="/contact" variant="secondary" size="lg">
        <span>Get Started Now</span>
      </Button.Link>
    </div>
  );
};

export default Features;
