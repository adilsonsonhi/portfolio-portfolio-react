import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets"; // Importe seus assets
import styles from "./Button.module.css";

const Button = ({
  variant = "primary",
  size = "md",
  icon, // Nome do ícone (ex: 'whatsapp', 'github')
  iconPosition = "left", // 'left' ou 'right'
  children,
  className = "",
  ...props
}) => {
  const buttonClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  // Obter o componente do ícone
  const Icon = icon ? assets[icon] : null;

  return (
    <button className={buttonClasses} {...props}>
      {iconPosition === "left" && Icon && <img src={Icon} alt="" className={styles.icon} />}
      {children}
      {iconPosition === "right" && Icon && <img src={Icon} alt="" className={styles.icon} />}
    </button>
  );
};

const ButtonLink = ({ variant = "primary", size = "md", icon, iconPosition = "left", children, className = "", to, ...props }) => {
  const buttonClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;
  const Icon = icon ? assets[icon] : null;

  return (
    <NavLink to={to} className={buttonClasses} {...props}>
      {iconPosition === "left" && Icon && <img src={Icon} alt="" className={styles.icon} />}
      {children}
      {iconPosition === "right" && Icon && <img src={Icon} alt="" className={styles.icon} />}
    </NavLink>
  );
};

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
