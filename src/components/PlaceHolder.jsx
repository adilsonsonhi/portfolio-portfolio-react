import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./PlaceHolder.module.css";

const PlaceHolder = () => {
  return (
    <div>
      <div className={styles.placeholder}>
        <p>
          This page is not yet available. Click
          <NavLink to="https://wa.me/+351933617279" target="blank">
            Here
          </NavLink>
          to contact me.
        </p>
      </div>
    </div>
  );
};

export default PlaceHolder;
