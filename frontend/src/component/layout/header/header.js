// Header.js

import React from "react";
import { ReactNavbar } from "overlay-navbar";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa"; // Import icons
import logo from "../../../images/logo.png";
import styles from "./header.css";

const Header = () => {
  return (
    <ReactNavbar
      className={styles.header}
      burgerColorHover="#eb4034"
      burgerColor="white"
      logo={logo}
      logoWidth="20vmax"
      nav1color="green"
      logoHoverSize="10px"
      logoHoverColor="#eb4034"
      link1Text="Home"
      link2Text="Product"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/product"
      link3Url="/contact"
      link4Url="/about"
      link1size="1.3vmax"
      link1Color="white"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      nav4justifyContent="flex-start"
      link1ColorHover="#eb4034"
      link1Margin="1vmax"
      profileIconColor="rgba(35, 35, 35, 0.8)"
      searchIconColor="rgba(35, 35, 35, 0.8)"
      cartIconColor="rgba(35, 35, 35, 0.8)"
      profileIconColorHover="#eb4034"
      searchIconColorHover="#eb4034"
      cartIconColorHover="#eb4034"
      cartIconMargin="1vmax"
    >
      <FaSearch />
      <FaShoppingCart />
      <FaUser />
    </ReactNavbar>
  );
};

export default Header;
