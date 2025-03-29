import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  // Estado para controlar a abertura/fechamento do accordion
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o estado de aberto/fechado
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <p className={styles.warning}>🚧 Under Maintenance 🚧 Sorry! This section is under maintenance and does not reflect the final version.</p>
      <header className={styles.header}>
        {/* LOGO HEADER */}
        <Link to="/">
          <img className={styles.logo__img} src={assets.logo} alt="{assets.logo}" />
        </Link>
        {/* NAV HEADER */}
        <nav className={styles.nav__container}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__list__item}>
              <NavLink to="/">
                <span>Home</span>
              </NavLink>
            </li>

            <li className={`${styles.resources__item} ${styles.nav__list__item}`}>
              <span>Resources</span>
              <img className={styles.chevron__icon} src={assets.gray_chevron} alt="" />
              <div className={styles.dropdown__container}>
                <ul className={styles.dropdown}>
                  <li>
                    <NavLink to="/resources">
                      <div className={styles.dropdown__header}>
                        <img src={assets.folder} alt="" />
                        <h6>Resources / Tools</h6>
                      </div>
                      <small>Essential tools and resources for learning and productivity.</small>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/source-code">
                      <div className={styles.dropdown__header}>
                        <img src={assets.code} alt="" />
                        <h6>Source Code</h6>
                      </div>
                      <small>Ready-to-use code snippets for your projects.</small>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="https://blog.adilsonsonhi.com">
                      <div className={styles.dropdown__header}>
                        <img src={assets.news} alt="" />
                        <h6>Blog</h6>
                      </div>
                      <small>Explore insights, tutorials, and industry trends to stay ahead.</small>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li className={styles.nav__list__item}>
              <NavLink to="/portfolio">
                <span>Portfolio</span>
              </NavLink>
            </li>

            <li className={styles.nav__list__item}>
              <NavLink to="/about-me">
                <span>About me</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* NAV HEADER */}
        <nav className={styles.nav__container}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__list__item}>
              <NavLink className={styles.contact__button} to="https://wa.me/+351933617279" target="blank">
                <span>Let's talk</span>
                <img src={assets.row} alt="" />
              </NavLink>
            </li>

            <li onClick={() => setVisible(true)} className={styles.nav__list__item}>
              <img className={styles.menu__button} src={assets.menu} alt="" />
            </li>
          </ul>
        </nav>
      </header>

      {/* SIDEBAR MENU FOR MOBILE DEVIES */}
      <div className={`${styles.offcanvas__container} ${visible ? "menu__visible" : "menu__hidden"}`}>
        <div className={styles.offcanvas}>
          <div onClick={() => setVisible(false)} className={styles.offcanvas__header}>
            <img src={assets.close} className={styles.close__icon} alt="" />
          </div>

          <ul>
            {/* --------- */}
            <li>
              <NavLink onClick={() => setVisible(false)} to="/" className={({ isActive }) => (isActive ? styles.active : undefined)}>
                <span>Home</span>
              </NavLink>
            </li>
            {/* ------- */}
            <li className={styles.accordion__container}>
              <NavLink to="#" className={styles.accordion__header} onClick={toggleAccordion}>
                <span>Resources</span>
                {/* Adicionando classe condicional para rotação da imagem */}
                <img src={assets.gray_chevron} alt="Chevron" className={`${styles.chevron} ${isOpen ? styles.open : ""}`} />
              </NavLink>

              {/* Aplicando a classe 'open' quando o accordion está aberto */}
              <div className={`${styles.accordion__body} ${isOpen ? styles.open : ""}`}>
                <ul className={styles.accordion}>
                  <li>
                    <NavLink
                      onClick={() => {
                        setVisible(false);
                        toggleAccordion();
                      }}
                      to="/resources"
                    >
                      <div className={styles.accordion__box}>
                        <img src={assets.folder} alt="Folder" />
                        <h6>Resources / Tools</h6>
                      </div>
                      <small>Find helpful resources and tools to support your studies.</small>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      onClick={() => {
                        setVisible(false);
                        toggleAccordion();
                      }}
                      to="/source-code"
                    >
                      <div className={styles.accordion__box}>
                        <img src={assets.code} alt="Code" />
                        <h6>Source Code</h6>
                      </div>
                      <small>Find helpful source code to develop your projects.</small>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      onClick={() => {
                        setVisible(false);
                        toggleAccordion();
                      }}
                      to="https://blog.adilsonsonhi.com"
                    >
                      <div className={styles.accordion__box}>
                        <img src={assets.news} alt="News" />
                        <h6>Blog</h6>
                      </div>
                      <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            {/* --------- */}
            <li>
              <NavLink onClick={() => setVisible(false)} to="/portfolio" className={({ isActive }) => (isActive ? styles.active : undefined)}>
                <span>Portfolio</span>
              </NavLink>
            </li>
            {/* --------- */}
            <li>
              <NavLink onClick={() => setVisible(false)} to="/about-me" className={({ isActive }) => (isActive ? styles.active : undefined)}>
                <span>About me</span>
              </NavLink>
            </li>
          </ul>

          <NavLink onClick={() => setVisible(false)} to="https://wa.me/+351933617279" target="blank" className={styles.mobile__menu__btn}>
            <span>Let's talk</span>
            <img src={assets.row} alt="" />
          </NavLink>
        </div>
      </div>

      {/* OVERLAY */}
      <div onClick={() => setVisible(false)} className={`${styles.overlay} ${visible ? "is__visible" : "is__hidden"}`}></div>
    </div>
  );
};

export default NavBar;
