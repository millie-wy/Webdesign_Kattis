import { useMediaQuery } from "react-responsive";
import "./Stylesheets/Navbar.css";

const Navbar = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px" });

  return isDesktop ? (
    <div id="navbar">
      <ul>
        <li>Houseplants</li>
        <li>Pots</li>
        <li>Accessories</li>
        <li>Care</li>
        <li>Gifts</li>
        <li className="pink">Sale</li>
      </ul>
    </div>
  ) : (
    <div id="navbar">
      <div className="search-block" />
    </div>
  );
};

export default Navbar;
