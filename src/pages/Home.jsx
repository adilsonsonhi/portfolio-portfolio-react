import React from "react";
import Hero from "../components/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";
import { products } from "../assets/assets"; // Importando os produtos
import Services from "../components/MyServices/Services";
import MainSkills from "../components/Skills/MainSkills";
import Features from "../components/Features/Features";
import NewsLetter from "../components/NewsLetter/NewsLetter";

const Home = () => {
  return (
    <main>
      <Hero />
      <Carousel products={products} />
      <Services />
      <MainSkills />
      <Features />
      <NewsLetter />
    </main>
  );
};

export default Home;
