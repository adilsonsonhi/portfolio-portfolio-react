import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.footer__left}>
          <small>&copy; 2025 www.adilsonsonhi.com | All rights reserved</small>
        </div>
        <div className={styles.footer__right}>
          <ul>
            <li>
              <NavLink to="/">
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/resources">
                <span>Resources/Tools</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/snippets">
                <span>Snippets</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog">
                <span>Blog</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <span>About me</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <span>Contact</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="https://www.linkedin.com/in/adilsonsonhi/" target="blank">
                <span>LinkedIn</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="https://www.instagram.com/adilsonsonhi.pt/" target="blank">
                <span>Instagram</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="https://wa.me/+351933617279" target="blank">
                <span>WhatsApp</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
