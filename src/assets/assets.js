import p_img1 from "./images/p_img1.png";
import p_img2 from "./images/p_img2.png";
import p_img3 from "./images/p_img3.png";

import services from "./images/services_placeholder.png";

import logo from "./images/adilson-logo.svg";
import gray_chevron from "./icons/gray-chevron.svg";
import black_chevron from "./icons/black-chevron.svg";
import menu from "./icons/menu.svg";
import close from "./icons/close.svg";
import code from "./icons/code.svg";
import folder from "./icons/folder.svg";
import news from "./icons/news.svg";
import profile_pic from "./images/profile-pic.png";
import row from "./icons/row.svg";
import dark_row from "./icons/dark-row.svg";
import html from "./icons/html.svg";
import css from "./icons/css.svg";
import js from "./icons/js.svg";
import react from "./icons/react.svg";
import vite from "./icons/vite.svg";
import typescript from "./icons/typescript.svg";
import nodejs from "./icons/nodejs.svg";
import mongodb from "./icons/mongodb.svg";
import figma from "./icons/figma.svg";
import adobexd from "./icons/adobexd.svg";
import tailwind from "./icons/tailwind.svg";
import bootstrap from "./icons/bootstrap.svg";
import github from "./icons/github.svg";
import whatsapp from "./icons/whatsapp.svg";

//   { name: "React", icon: react },
//   { name: "Vite", icon: vite },
//   { name: "TypeScript", icon: typescript },
//   { name: "Node.js", icon: nodejs },
//   { name: "MongoDB", icon: mongodb },
//   { name: "Figma", icon: figma },
//   { name: "Adobe XD", icon: adobexd },
//   { name: "Tailwind", icon: tailwind },
//   { name: "Bootstrap", icon: bootstrap },
//   { name: "Git / GitHub", icon: github },

export const assets = {
  logo,
  gray_chevron,
  black_chevron,
  menu,
  close,
  code,
  folder,
  news,
  row,
  dark_row,
  profile_pic,
  services,
  html,
  css,
  js,
  react,
  vite,
  typescript,
  nodejs,
  mongodb,
  figma,
  adobexd,
  tailwind,
  bootstrap,
  github,
  whatsapp,
};

export const products = [
  {
    _id: "1",
    name: "Personal Portfolio Website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, dignissimos! Exercitationem dolores, debitis a mollitia neque eum incidunt consequatur in ratione facilis temporibus aut optio repellendus voluptatibus soluta ea blanditiis.",
    image: [p_img1],
    techs: ["a", "b", "c"],
    category: "Web Development",
    link: "https://www.adilsonsonhi.com",
  },
  {
    _id: "2",
    name: "E-commerce Mobile App Design",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, dignissimos! Exercitationem dolores, debitis a mollitia neque eum incidunt consequatur in ratione facilis temporibus aut optio repellendus voluptatibus soluta ea blanditiis.",
    image: [p_img2],
    techs: ["a", "b", "c"],
    category: "Mobile App Desgin",
    link: "https://www.adilsonsonhi.com",
  },
  {
    _id: "3",
    name: "Idealista MarketPlace [Redesign]",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, dignissimos! Exercitationem dolores, debitis a mollitia neque eum incidunt consequatur in ratione facilis temporibus aut optio repellendus voluptatibus soluta ea blanditiis.",
    image: [p_img3],
    techs: ["a", "b", "c"],
    category: "Mobile App Design",
    link: "https://www.adilsonsonhi.com",
  },
];

export const skills = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "React", icon: react },
  { name: "Vite", icon: vite },
  { name: "TypeScript", icon: typescript },
  { name: "Node.js", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Figma", icon: figma },
  { name: "Adobe XD", icon: adobexd },
  { name: "Tailwind", icon: tailwind },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Git / GitHub", icon: github },
];
