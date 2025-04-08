import React, { useState, useRef, useEffect } from "react";
import { Resources } from "../../assets/assets";
import ResourceCard from "../Card/ResourceCard";
import styles from "./TabFilter.module.css";
import Heading from "../Heading/Heading";

const TabFilter = () => {
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

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Heading title="Resources and Tools" paragraph="Discover top resources to enhance your development process and elevate your projects and career." />
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
  );
};

export default TabFilter;
