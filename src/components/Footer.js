import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import facebook from "../assets/Icons/facebook.png";
import instagram from "../assets/Icons/instagram.png";
import message from "../assets/Icons/message.png";
import logo from "../assets/Logo/logo-l.png";
import "./Stylesheets/Footer.css";

const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px" });

  let footerParts = [
    {
      subtitle: "About",
      links: [
        "About Kattis",
        "Plant Care",
        "FAQ",
        "Careers",
        "Contact",
        "Our Stories",
      ],
    },
    {
      subtitle: "Terms",
      links: [
        "Terms of Service",
        "Privacy Policy",
        "Delivery & Returns",
        "Cookies",
      ],
    },
    {
      subtitle: "My Kattis",
      links: ["My Account", "Subscriptions", "KattisBonus", "Track My Order"],
    },
  ];

  let socialMedia = [
    { name: "Facebook", img: facebook },
    { name: "Instagram", img: instagram },
    { name: "Contact Us", img: message, href: "/contact" },
  ];

  return (
    <div id="footer">
      <div id="footer-logo">
        <Link to="/">
          <img src={logo} alt="Kattis" id="logo-l" />
        </Link>
        <ul className="socialMedia-list">
          {socialMedia.map((link) =>
            link.href ? (
              <li key={link.name}>
                <Link to={link.href}>
                  <img
                    src={link.img}
                    alt={link.name}
                    className="socialMedia-icons"
                  />
                  {!isMobile ? link.name : null}
                </Link>
              </li>
            ) : (
              <li key={link.name}>
                <img
                  src={link.img}
                  alt={link.name}
                  className="socialMedia-icons"
                />
                {!isMobile ? link.name : null}
              </li>
            )
          )}
          <li></li>
        </ul>
      </div>

      {isMobile ? (
        <div className="footer-partswithtext">
          <h6 className="footer-subtitle">{footerParts[0].subtitle}</h6>
          <div className="footer-text">
            {footerParts[0].links.map((link) => (
              <ul className="footer-list" key={link}>
                <li>{link}</li>
              </ul>
            ))}
          </div>
          <div className="row">
            {footerParts.slice(1).map((part) => (
              <div className="footer-partswithtext" key={part.subtitle}>
                <h6 className="footer-subtitle">{part.subtitle}</h6>
                <div className="footer-text">
                  {part.links.map((link) => (
                    <ul className="footer-list" key={link}>
                      <li>{link}</li>
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        footerParts.map((part) => (
          <div className="footer-partswithtext" key={part.subtitle}>
            <h6 className="footer-subtitle">{part.subtitle}</h6>
            <div className="footer-text">
              {part.links.map((link) => (
                <ul className="footer-list" key={link}>
                  <li>{link}</li>
                </ul>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Footer;
