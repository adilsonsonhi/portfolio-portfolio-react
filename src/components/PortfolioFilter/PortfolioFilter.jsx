import React, { useState, useRef, useEffect } from "react";
import { Portfolio } from "../../utils/assets"; // Alterado de products para Portfolio
import PortfolioCard from "../Card/PortfolioCard";
import styles from "./PortfolioFilter.module.css";
import Heading from "../Heading/Heading";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const PortfolioFilter = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const containerRef = useRef(null);

  const categories = ["All", ...new Set(Portfolio.map((p) => p.category))]; // Alterado de products para Portfolio

  const filteredPortfolio = activeFilter === "All" ? Portfolio : Portfolio.filter((p) => p.category === activeFilter); // Alterado de products/filteredProducts para Portfolio/filteredPortfolio

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(container.children);
    const firstPositions = items.map((item) => item.getBoundingClientRect());

    requestAnimationFrame(() => {
      const lastPositions = items.map((item) => item.getBoundingClientRect());

      items.forEach((item, index) => {
        const first = firstPositions[index];
        const last = lastPositions[index];

        if (!first || !last) return;

        const deltaX = first.left - last.left;
        const deltaY = first.top - last.top;
        const deltaW = first.width / last.width;
        const deltaH = first.height / last.height;

        if (deltaX || deltaY || deltaW !== 1 || deltaH !== 1) {
          item.animate(
            [
              {
                transform: `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})`,
                opacity: 0.8,
              },
              { transform: "translate(0, 0) scale(1, 1)", opacity: 1 },
            ],
            {
              duration: 400,
              easing: "cubic-bezier(0.4, 0, 0.2, 1)",
              fill: "both",
            }
          );
        }
      });
    });
  }, [activeFilter]);

  const servicesRef = useIntersectionObserver((target) => {
    // Adiciona as classes de animação aos elementos
    target.querySelector(`.${styles.heading} h2`).classList.add(styles.slideIn__03);
    target.querySelector(`.${styles.heading} p`).classList.add(styles.slideIn__06);
    target.querySelector(`.${styles.filterTabs}`).classList.add(styles.slideIn__09);
  });

  return (
    <div ref={servicesRef}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <Heading title="Portfolio" paragraph="Take a look at what I've been building — a collection of projects crafted with care, creativity, and clean code." />
        </div>

        <div className={styles.tabs__container}>
          <div className={styles.filterTabs}>
            {categories.map((category) => (
              <button key={category} className={`${styles.tab} ${activeFilter === category ? styles.active : ""}`} onClick={() => setActiveFilter(category)}>
                {category}
                {activeFilter === category && <span className={styles.activeIndicator} />}
              </button>
            ))}
          </div>

          <div ref={containerRef} className={styles.resourcesGrid}>
            {filteredPortfolio.map(
              (
                item // Alterado de filteredProducts para filteredPortfolio e product para item
              ) => (
                <PortfolioCard key={item._id} product={item} /> // Alterado de product para item (opcional - mantenha se o prop ainda se chamar 'product')
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFilter;
