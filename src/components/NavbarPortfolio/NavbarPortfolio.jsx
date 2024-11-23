import React from "react";
import "./NavbarPortfolio.css";
import { assets } from "../../assets/assets";

const NavbarPortfolio = () => {
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  );
};

export default NavbarPortfolio;
