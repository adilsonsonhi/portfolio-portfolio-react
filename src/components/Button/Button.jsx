import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../utils/assets";
import styles from "./Button.module.css";

// Helper to render icon if it exists and matches position
const renderIcon = (icon, position, currentPosition) => {
  if (!icon || position !== currentPosition) return null;
  const Icon = assets[icon];
  return <img src={Icon} alt="" className={styles.icon} />;
};

// Handles the common content structure for both button types
const ButtonContent = ({ icon, iconPosition = "left", children }) => (
  <>
    {renderIcon(icon, iconPosition, "left")}
    {children}
    {renderIcon(icon, iconPosition, "right")}
  </>
);

//Creates the combined className string for buttons
const getButtonClasses = (variant, size, className) => {
  return `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`.trim();
};

// A customizable button component with support for icons and different styles.
const Button = ({ variant = "primary", size = "md", icon, iconPosition = "left", children, className = "", ...props }) => {
  return (
    <button className={getButtonClasses(variant, size, className)} {...props}>
      <ButtonContent icon={icon} iconPosition={iconPosition}>
        {children}
      </ButtonContent>
    </button>
  );
};

// Navigation version of Button that uses NavLink
const ButtonLink = ({ variant = "primary", size = "md", icon, iconPosition = "left", children, className = "", to, ...props }) => {
  return (
    <NavLink to={to} className={getButtonClasses(variant, size, className)} {...props}>
      <ButtonContent icon={icon} iconPosition={iconPosition}>
        {children}
      </ButtonContent>
    </NavLink>
  );
};

Button.Link = ButtonLink;

export default Button;

{
  /* 
  <Button variant="primary" size="lg"> Large </Button>
  <Button variant="secondary" size="md"> Mid </Button>
  <Button variant="primalternativeary" size="sm"> Small </Button>
  <Button> Normal </Button>
  <Button.Link to="/about"> About us </Button.Link>
  <Button icon="github" iconPosition="right"> Large </Button>
*/
}
