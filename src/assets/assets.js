import p_img1 from "./images/p_img1.png";
import p_img2 from "./images/p_img2.png";
import p_img3 from "./images/p_img3.png";
import service1 from "./images/service-1.png";
import service2 from "./images/service-2.png";

import services from "./images/services_placeholder.png";

import black_chevron from "./icons/black-chevron.svg";
import close from "./icons/close.svg";
import code from "./icons/code.svg";
import dark_row from "./icons/dark-row.svg";
import folder from "./icons/folder.svg";
import gray_chevron from "./icons/gray-chevron.svg";
import logo from "./images/adilson-logo.svg";
import menu from "./icons/menu.svg";
import news from "./icons/news.svg";
import profile_pic from "./images/profile-pic.png";
import row from "./icons/row.svg";
import whatsapp from "./icons/whatsapp.svg";
import mousecursor from "./icons/mouse-cursor.svg";
// SKILL ICONS
import angular from "./icons/angular.svg";
// import adobexd from "./icons/adobexd.svg";
import aws from "./icons/aws.svg";
import azure from "./icons/azure.svg";
// import bootstrap from "./icons/bootstrap.svg";
import csharp from "./icons/csharp.svg";
import css from "./icons/css.svg";
import docker from "./icons/docker.svg";
import dotNet from "./icons/dotNet.svg";
import expressjs from "./icons/expressjs.svg";
import figma from "./icons/figma.svg";
import firebase from "./icons/firebase.svg";
import github from "./icons/github.svg";
import git from "./icons/git.svg";
import html from "./icons/html.svg";
import java from "./icons/java.svg";
import js from "./icons/js.svg";
import mongodb from "./icons/mongodb.svg";
import mysql from "./icons/mysql.svg";
import nextjs from "./icons/nextjs.svg";
import nodejs from "./icons/nodejs.svg";
import php from "./icons/php.svg";
import postman from "./icons/postman.svg";
import python from "./icons/python.svg";
import react from "./icons/react.svg";
import tailwind from "./icons/tailwind.svg";
import typescript from "./icons/typescript.svg";
// import vite from "./icons/vite.svg";
import vuejs from "./icons/vuejs.svg";

// SERVICE ICONS
import circle_figma from "./icons/circle-figma.svg";
import circle_react from "./icons/circle-react.svg";
import circle_nodejs from "./icons/circle-nodejs.svg";
import circle_mongodb from "./icons/circle-mongodb.svg";

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
  whatsapp,
  service1,
  service2,
  figma,
  mousecursor,
};

export const servicesArray = [
  {
    _id: "1",
    name: "Web Systems",
    description: "Robust, scalable solutions. Complete web systems with seamless API REST integration for optimal efficiency and performance.",
    image: [service1],
    techs: [circle_react, circle_nodejs, circle_mongodb],
  },
  {
    _id: "2",
    name: "Interface Design (UX/UI)",
    description: "Engaging user experiences. Intuitive, functional interfaces that provide smooth and engaging navigation.",
    image: [service2],
    techs: [circle_figma],
  },
];

export const Features = [
  {
    _id: "1",
    name: "E-commerce Solutions",
    description: "Custom online stores with payment integration, inventory management, and customer management systems.",
  },
  {
    _id: "2",
    name: "Booking & Reservation Systems",
    description: "Automated booking platforms for hotels, appointments, event registrations, or table reservations at restaurants.",
  },
  {
    _id: "3",
    name: "Custom Web Applications",
    description: "Bespoke web apps tailored to specific business processes, functionalities, or customer engagement strategies.",
  },
  {
    _id: "4",
    name: "API Integration & Development",
    description: "Seamlessly integrating third-party APIs (e.g., payment gateways, CRM, shipping services) for extended functionalities.",
  },
  {
    _id: "5",
    name: "CRM Systems",
    description: "Tailored CRM systems to manage client interactions and data throughout the customer lifecycle.",
  },
  {
    _id: "6",
    name: "Website Maintenance",
    description: "Providing ongoing support, updates, and optimization to keep your site secure, fast, and functional.",
  },

  {
    _id: "7",
    name: "UX/UI Design",
    description: "User-centered design focused on seamless interactions, with user flows, wireframes, and prototypes.",
  },

  {
    _id: "8",
    name: "App Design (iOS & Android)",
    description: "Designing intuitive, user-friendly interfaces for mobile apps on both iOS and Android platforms.",
  },

  {
    _id: "9",
    name: "Website Design",
    description: "Custom web designs with focus on aesthetics, functionality, and ease of use across all devices.",
  },

  {
    _id: "10",
    name: "Interactive Prototyping",
    description: "High-fidelity prototypes with interactive elements to simulate real user interactions and user flows.",
  },

  {
    _id: "11",
    name: "Design System Development",
    description: "Creating consistent design systems and style guides for scalable and maintainable design across platforms.",
  },
  {
    _id: "12",
    name: "Design for Conversion",
    description: "Crafting designs specifically optimized for increasing user engagement and conversion rates.",
  },
];

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
  { name: "Tailwind", icon: tailwind },
  { name: "JavaScript", icon: js },
  { name: "TypeScript", icon: typescript },
  { name: "React", icon: react },
  { name: "Next.js", icon: nextjs },
  { name: "Vue.js", icon: vuejs },
  { name: "Angular", icon: angular },
  { name: "Node.js", icon: nodejs },
  { name: "Express.js", icon: expressjs },
  { name: "Php", icon: php },
  { name: "C#", icon: csharp },
  { name: ".NET", icon: dotNet },
  { name: "Figma", icon: figma },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
  { name: "Git / GitHub", icon: git },
  { name: "Docker", icon: docker },
  { name: "azure", icon: azure },
  { name: "Firebase", icon: firebase },
  { name: "Python", icon: python },
  { name: "Java", icon: java },
  { name: "Postman", icon: postman },
  { name: "AWS", icon: aws },
];
