import React from "react";
import style from "../Card/ServiceCard.module.css";
import { assets } from "../../assets/assets";

const ServiceCard = () => {
  return (
    <div className={style.service__card}>
      <div className={style.service__container}>
        <img className={style.service__image} src={assets.service1} alt="" />
        <ul>
          <li>
            <img className={style.service__icon} src={assets.circle_react} alt="" />
          </li>
          <li>
            <img className={style.service__icon} src={assets.circle_nodejs} alt="" />
          </li>
          <li>
            <img className={style.service__icon} src={assets.circle_mongodb} alt="" />
          </li>
        </ul>
      </div>
      <h3>Web Systems</h3>
      <p>Performance that converts. Landing pages optimized for maximum conversion, with design focused on quick results.</p>
    </div>
  );
};

export default ServiceCard;
