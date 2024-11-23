import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link, Navigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import user from "../../assets/user.png";
import "./Navbar.css";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);

  const accessProfil = localStorage.getItem("access");

  return (
    <div className="navbar">
      <Link to="/" style={{ width: "40px" }}>
        <img className="logo" src={assets.logo} alt="" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`${menu === "home" ? "active" : ""}`}
        >
          главная
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={`${menu === "menu" ? "active" : ""}`}
        >
          меню
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={`${menu === "contact" ? "active" : ""}`}
        >
          наши контакты
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <Link to="/cart" className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        {!accessProfil ? (
          <button onClick={() => setShowLogin(true)}>Регистрация</button>
        ) : (
          <Link to={"/profil"}>
            <img
              style={{ cursor: "pointer", width: "30px" }}
              src={user}
              alt="user"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
