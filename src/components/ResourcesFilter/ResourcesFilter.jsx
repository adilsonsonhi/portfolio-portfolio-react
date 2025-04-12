import React, { useState, useRef, useEffect } from "react";
import { Resources } from "../../utils/assets";
import ResourceCard from "../Card/ResourceCard";
import styles from "./ResourcesFilter.module.css";
import Heading from "../Heading/Heading";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const ResourcesFilter = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const containerRef = useRef(null);

  // Extrai categorias únicas
  const categories = ["All", ...new Set(Resources.map((r) => r.category))];

  // Filtra recursos
  const filteredResources = activeFilter === "All" ? Resources : Resources.filter((r) => r.category === activeFilter);

  // Animação FLIP
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
          <Heading title="Resources / Tools" paragraph="Discover top resources to enhance your development process and elevate your projects and career." />
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
            {filteredResources.map((resource) => (
              <ResourceCard key={resource._id} resource={resource} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesFilter;
