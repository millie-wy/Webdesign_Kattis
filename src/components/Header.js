import { useMediaQuery } from "react-responsive";
import basket from "../assets/Icons/basket.png";
import menu from "../assets/Icons/menu.png";
import profile from "../assets/Icons/profile.png";
import logo from "../assets/Logo/logo-s.png";
import "./Stylesheets/Header.css";

const Header = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px" });
  //   const isTablet = useMediaQuery({ query: "(max-width: 1024px" });
  //   const isMobile = useMediaQuery({ query: "(max-width: 640px" });

  return isDesktop ? (
    <div id="header">
      <img src={logo} alt="Kattis" id="logo" />
      <div className="search_block" />
      <div id="icons">
        <img src={profile} alt="my Kattis" className="profile" />
        <img src={basket} alt="cart" className="basket" />
      </div>
    </div>
  ) : (
    <div id="header">
      <div id="menu-div">
        <img src={menu} alt="Kattis" className="menu" />
        <img src={logo} alt="Kattis" id="logo" />
      </div>
      <div id="icons">
        <img src={profile} alt="my Kattis" className="profile" />
        <img src={basket} alt="cart" className="basket" />
      </div>
    </div>
  );
};

export default Header;
