import accessories from "../../assets/Images/accessories.jpg";
import cactus from "../../assets/Images/cactus.jpg";
import member from "../../assets/Images/member.jpg";
import presentation from "../../assets/Images/presentation.jpeg";
import "../Stylesheets/HomeOffer.css";
import { useMediaQuery } from "react-responsive";

const HomeOffer = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px" });
  //   const isTablet = useMediaQuery({ query: "(max-width: 1024px" });
  const isMobile = useMediaQuery({ query: "(max-width: 640px" });
  const isXLScreen = useMediaQuery({ query: "(min-width: 1600px" });

  let offers = [
    {
      title: "mini cactus buy 3 get 4",
      img: cactus,
    },
    { title: "15% off accessories", img: accessories },
    { title: "50 sek off new members", img: member },
  ];

  return (
    <div id="offer-page">
      <div className="presentation-card">
        <img
          src={presentation}
          alt="Find purrfect plants for your home and your cats"
          className="pcard-img"
        />
        <div className="pcard-content">
          <h5 className="pcard-title">
            find purrfect plants for your home and your cats
            <br />
          </h5>
          <button className="explore-button">EXPLORE</button>
        </div>
      </div>

      <div id="offers">
        {offers.map((offer) => (
          <div className="offer-card" key={offer.title}>
            <img src={offer.img} alt={offer.title} className="ocard-img" />
            <h5 className="ocard-title">{offer.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeOffer;
