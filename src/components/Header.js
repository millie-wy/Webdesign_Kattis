import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import basket from "../assets/Icons/basket.png";
import menu from "../assets/Icons/menu.png";
import profile from "../assets/Icons/profile.png";
import logo from "../assets/Logo/logo-s.png";
import "./Stylesheets/Header.css";

const Header = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px" });
  //   const isTablet = useMediaQuery({ query: "(max-width: 1024px" });
  const isMobile = useMediaQuery({ query: "(max-width: 640px" });

  return (
    <div id="header">
      {isMobile ? (
        <div id="menu-div">
          <img src={menu} alt="menu" className="menu" />
          <Link to="/">
            <img src={logo} alt="Kattis" id="logo-s" />
          </Link>
        </div>
      ) : (
        <Link to="/">
          <img src={logo} alt="Kattis" id="logo-s" />
        </Link>
      )}
      {isDesktop ? <div className="search-block" /> : null}
      <div id="header-icons">
        <img src={profile} alt="my Kattis" className="profile" />
        <img src={basket} alt="cart" className="basket" />
      </div>
    </div>
  );
};

export default Header;
