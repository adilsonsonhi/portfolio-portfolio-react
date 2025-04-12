import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PortfolioContextProvider from "./context/Portfoliocontext";
// import { colorPalette, systemColor } from "./utils/colors";
import { baseColors, semanticColors } from "./utils/colors";

// Aplica as variáveis CSS globalmente
const colorKeys = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const colorTypes = ["neutral", "brand"];

colorTypes.forEach((type) => {
  colorKeys.forEach((key) => {
    document.documentElement.style.setProperty(`--${type}-${key}`, baseColors[type][key]);
  });
});

// document.documentElement.style.setProperty("--primaryButton", systemColor.primaryButton);
// document.documentElement.style.setProperty("--border", systemColor.border);
// document.documentElement.style.setProperty("--shadow", systemColor.shadow);

// BACKGROUND
document.documentElement.style.setProperty("--bg-primary", semanticColors.background.primary);
document.documentElement.style.setProperty("--bg-secondary", semanticColors.background.secondary);
// BTN
document.documentElement.style.setProperty("--primary-btn", semanticColors.button.primary.background);
document.documentElement.style.setProperty("--primary-btn-hover", semanticColors.button.primary.hover);
document.documentElement.style.setProperty("--primary-btn-border", semanticColors.button.primary.border);
document.documentElement.style.setProperty("--primary-btn-text", semanticColors.button.primary.text);

document.documentElement.style.setProperty("--secondary-btn", semanticColors.button.secondary.background);
document.documentElement.style.setProperty("--secondary-btn-hover", semanticColors.button.secondary.hover);
document.documentElement.style.setProperty("--secondary-btn-border", semanticColors.button.secondary.border);
document.documentElement.style.setProperty("--secondary-btn-text", semanticColors.button.secondary.text);

document.documentElement.style.setProperty("--tertiary-btn", semanticColors.button.tertiary.background);
document.documentElement.style.setProperty("--tertiary-btn-hover", semanticColors.button.tertiary.hover);
document.documentElement.style.setProperty("--tertiary-btn-border", semanticColors.button.tertiary.border);
document.documentElement.style.setProperty("--tertiary-btn-text", semanticColors.button.tertiary.text);
// TEXT COLORS
document.documentElement.style.setProperty("--heading-primary", semanticColors.text.heading.primary);
document.documentElement.style.setProperty("--heading-secondary", semanticColors.text.heading.secondary);
document.documentElement.style.setProperty("--text-primary", semanticColors.text.body.primary);
document.documentElement.style.setProperty("--text-secondary", semanticColors.text.body.secondary);
document.documentElement.style.setProperty("--text-tertiary", semanticColors.text.body.tertiary);
document.documentElement.style.setProperty("--accent-color", baseColors.brand[700]);
// BORDER
document.documentElement.style.setProperty("--border", semanticColors.border.default);
document.documentElement.style.setProperty("--border-form", semanticColors.border.form);
// EFFECTS
document.documentElement.style.setProperty("--shadow", semanticColors.effects.shadow);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PortfolioContextProvider>
      <App />
    </PortfolioContextProvider>
  </BrowserRouter>
);
