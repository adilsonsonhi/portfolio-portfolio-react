import React, { useState, useRef, useEffect } from "react";
import { products } from "../../utils/assets";
import PortfolioCard from "../Card/PortfolioCard";
import styles from "./PortfolioFilter.module.css";
import Heading from "../Heading/Heading";

const TabFilter = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const containerRef = useRef(null);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = activeFilter === "All" ? products : products.filter((p) => p.category === activeFilter);

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

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Heading title="Discover my Latest Work" paragraph="Take a look at what I've been building — a collection of projects crafted with care, creativity, and clean code." />
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
          {filteredProducts.map((product) => (
            <PortfolioCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabFilter;
