import { createContext } from "react";
import { products } from "../assets/assets";
export const portfolioContext = createContext();

const PortfolioContextProvider = ({ children }) => {
  const currency = "€";
  const delivery_fee = "10";
  const value = {
    products,
    currency,
    delivery_fee,
  };

  return <portfolioContext.Provider value={value}>{children}</portfolioContext.Provider>;
};

export default PortfolioContextProvider;
