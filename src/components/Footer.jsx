import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__left}>
          <small>&copy; 2024 www.adilsonsonhi.com | All rights reserved</small>
        </div>
        <div className={styles.footer__right}>
          <ul>
            <li>
              <NavLink>
                <span>LinkedIn</span>
              </NavLink>
            </li>
            <li>
              <NavLink>
                <span>Instagram</span>
              </NavLink>
            </li>
            <li>
              <NavLink>
                <span>WhatsApp</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
