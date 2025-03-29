// import React, { useEffect, useRef, useState } from "react";
// import styles from "./Carousel.module.css"; // Importação do CSS Module
// import { NavLink } from "react-router-dom";

// const Carousel = ({ products }) => {
//   const trackRef = useRef(null);
//   const animationFrameRef = useRef(null);
//   const [isPaused, setIsPaused] = useState(false); // Estado para controlar a pausa
//   const scrollSpeed = 0.5; // Velocidade da rolagem (em pixels por frame)

//   // Função para animar a rolagem
//   const animateScroll = () => {
//     if (trackRef.current && !isPaused) {
//       // Atualiza a posição do track
//       trackRef.current.style.transform = `translateX(-${trackRef.current.scrollPos || 0}px)`;

//       // Incrementa a posição de rolagem
//       trackRef.current.scrollPos = (trackRef.current.scrollPos || 0) + scrollSpeed;

//       // Se chegou ao final, reinicia a posição de forma imperceptível
//       const trackWidth = trackRef.current.scrollWidth / 2; // Largura total do track (itens duplicados)
//       if (trackRef.current.scrollPos >= trackWidth) {
//         trackRef.current.scrollPos = 0;
//       }
//     }

//     // Continua a animação
//     animationFrameRef.current = requestAnimationFrame(animateScroll);
//   };

//   // Inicia a animação quando o componente é montado
//   useEffect(() => {
//     animationFrameRef.current = requestAnimationFrame(animateScroll);
//     return () => cancelAnimationFrame(animationFrameRef.current); // Limpa o frame ao desmontar
//   }, [isPaused]); // Reinicia a animação quando isPaused muda

//   return (
//     <div className={styles.container}>
//       <div className={styles.track} ref={trackRef}>
//         {/* Renderiza os itens várias vezes para criar um loop infinito */}
//         {[...Array(10)].map((_, loopIndex) =>
//           products.map((product, index) => (
//             <div
//               key={`${loopIndex}-${index}`}
//               className={styles.item}
//               onMouseEnter={() => setIsPaused(true)} // Pausa no hover
//               onMouseLeave={() => setIsPaused(false)} // Retoma ao sair do hover
//             >
//               <img src={product.image[0]} alt={product.name} />
//               <h4>{product.name}</h4>
//               <p>{product.description}</p>
//               <NavLink to={product.link2}>{product.link1}</NavLink>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React, { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css"; // Importação do CSS Module
import { NavLink } from "react-router-dom";

const Carousel = ({ products }) => {
  const trackRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false); // Estado para controlar a pausa
  const scrollSpeed = 1; // Velocidade da rolagem (em pixels por frame)

  // Função para animar a rolagem
  const animateScroll = () => {
    if (trackRef.current && !isPaused) {
      // Atualiza a posição do track
      trackRef.current.style.transform = `translateX(-${trackRef.current.scrollPos || 0}px)`;

      // Incrementa a posição de rolagem
      trackRef.current.scrollPos = (trackRef.current.scrollPos || 0) + scrollSpeed;

      // Se chegou ao final, reinicia a posição de forma imperceptível
      const trackWidth = trackRef.current.scrollWidth / 2; // Largura total do track (itens duplicados)
      if (trackRef.current.scrollPos >= trackWidth) {
        trackRef.current.scrollPos = 0;
      }
    }

    // Continua a animação
    animationFrameRef.current = requestAnimationFrame(animateScroll);
  };

  // Inicia a animação 2 segundos após o componente ser montado (apenas ao carregar a página)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Define a posição inicial do track como 40px
      if (trackRef.current) {
        trackRef.current.scrollPos = -90; // Inicia em 40px
      }
      animationFrameRef.current = requestAnimationFrame(animateScroll);
    }, 50); // 2000 milissegundos = 2 segundos

    // Limpeza ao desmontar o componente
    return () => {
      clearTimeout(timeoutId); // Limpa o setTimeout
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current); // Cancela a animação
      }
    };
  }, []); // Array de dependências vazio: executa apenas ao montar o componente

  return (
    <div className={styles.container}>
      <div className={styles.track} ref={trackRef}>
        {/* Renderiza os itens várias vezes para criar um loop infinito */}
        {[...Array(10)].map((_, loopIndex) =>
          products.map((product, index) => (
            <NavLink
              to={product.link}
              target="blank"
              key={`${loopIndex}-${index}`}
              className={styles.item}
              onMouseEnter={() => setIsPaused(true)} // Pausa no hover
              onMouseLeave={() => setIsPaused(false)} // Retoma ao sair do hover
            >
              <img src={product.image[0]} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <h6>{product.category}</h6>
                <p>{product.description}</p>
              </div>
            </NavLink>
          ))
        )}
      </div>
    </div>
  );
};

export default Carousel;
