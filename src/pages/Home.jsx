import React from "react";
import Hero from "../components/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";
import { products } from "../assets/assets"; // Importando os produtos
import Services from "../components/MyServices/Services";
import MainSkills from "../components/Skills/MainSkills";

const Home = () => {
  return (
    <div>
      <Hero />
      <Carousel products={products} />
      <MainSkills />
      <Services />
    </div>
  );
};

export default Home;
