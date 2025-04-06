import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
import styles from "./Button.module.css";

/**
 * A customizable button component with support for icons and different styles.
 * @param {string} variant - Button style variant ('primary', 'secondary', etc.)
 * @param {string} size - Button size ('sm', 'md', 'lg', etc.)
 * @param {string} icon - Name of the icon to display (matches keys in assets)
 * @param {string} iconPosition - Position of the icon ('left' or 'right')
 * @param {ReactNode} children - Button content
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional button HTML attributes
 */
const Button = ({ variant = "primary", size = "md", icon, iconPosition = "left", children, className = "", ...props }) => {
  // Combine base button class with variant, size, and any additional classes
  const buttonClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  // Get the icon component from assets if provided
  const Icon = icon ? assets[icon] : null;

  return (
    <button className={buttonClasses} {...props}>
      {/* Render icon on left if specified */}
      {iconPosition === "left" && Icon && <img src={Icon} alt="" className={styles.icon} />}

      {/* Button content */}
      {children}

      {/* Render icon on right if specified */}
      {iconPosition === "right" && Icon && <img src={Icon} alt="" className={styles.icon} />}
    </button>
  );
};

/**
 * A Button component that renders as a NavLink for navigation.
 * Inherits all Button props plus:
 * @param {string} to - The path to navigate to (react-router path)
 */
const ButtonLink = ({ variant = "primary", size = "md", icon, iconPosition = "left", children, className = "", to, ...props }) => {
  // Combine classes same as Button component
  const buttonClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;
  const Icon = icon ? assets[icon] : null;

  return (
    <NavLink to={to} className={buttonClasses} {...props}>
      {/* Icon rendering logic same as Button */}
      {iconPosition === "left" && Icon && <img src={Icon} alt="" className={styles.icon} />}
      {children}
      {iconPosition === "right" && Icon && <img src={Icon} alt="" className={styles.icon} />}
    </NavLink>
  );
};

// Attach ButtonLink as a static property of Button
Button.Link = ButtonLink;

export default Button;

{
  /* 

<Button variant="primary" size="lg">
  Botão Grande
</Button>

<Button variant="secondary" size="md">
  Botão Médio
</Button>

<Button variant="alternative" size="sm">
  Botão Pequeno
</Button>

<Button>
  Botão normal
</Button>

<Button.Link to="/sobre">
  Sobre nós
</Button.Link>

<Button icon="whatsapp">
  Enviar mensagem
</Button>

<Button icon="github" iconPosition="right">
  Ver código
</Button>

<Button.Link to="/portfolio" icon="folder">
  Meu portfólio
</Button.Link>

<Button variant="secondary">
  Cancelar
</Button>

*/
}
