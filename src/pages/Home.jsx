import React from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import { products } from "../assets/assets"; // Importando os produtos
import Services from "../components/Services";
import MainSkills from "../components/Mainskills";

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
