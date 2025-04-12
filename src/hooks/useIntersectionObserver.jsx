import { useEffect, useRef } from "react";

const useIntersectionObserver = (callback, options = { threshold: 0.25 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target); // Executa o callback quando o elemento é visível
          observer.unobserve(entry.target); // Para de observar após a animação
        }
      });
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [callback, options]);

  return ref;
};

export default useIntersectionObserver;
