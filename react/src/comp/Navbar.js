import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../theme-context";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const {t} = useTranslation();
    const { theme, toggleTheme } = useTheme();

    console.log(theme, 'theme fb')
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/pagination">Pagination</Link>
        <button onClick={() => toggleTheme()}>change baby</button>
        <h1>{t("greeting")}</h1>
      </div>
    </nav>
  );
};

export default Navbar;
