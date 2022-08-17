import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import addtocart from "../../assets/Icons/addtocart.png";
import calatheapeacock from "../../assets/Images/calatheapeacock.webp";
import calatheaprayer from "../../assets/Images/calatheaprayer.webp";
import fishbonecactus from "../../assets/Images/fishbonecactus.webp";
import moneytree from "../../assets/Images/moneytree.webp";
import "../Stylesheets/HomeProduct.css";

const HomeProduct = () => {
  const isXLScreen = useMediaQuery({ query: "(min-width: 1600px" });
  const isMobile = useMediaQuery({ query: "(max-width: 640px" });
  const [productToShow, setProductsToShow] = useState();

  useEffect(() => {
    isMobile || isXLScreen ? setProductsToShow(4) : setProductsToShow(3);
  }, [isMobile, isXLScreen, setProductsToShow]);

  let products = [
    {
      title: "Calathea Prayer Plant",
      img: calatheaprayer,
      height: "50-60",
      price: 129,
    },
    {
      title: "Calathea Peacock",
      img: calatheapeacock,
      height: "60-70",
      price: 149,
    },
    { title: "Money Tree", img: moneytree, height: "140-150", price: 539 },
    {
      title: "Fishbone Cactus",
      img: fishbonecactus,
      height: "12-15",
      price: 119,
    },
  ];

  return (
    <div id="product-page">
      <h2>Popular Products</h2>

      <div id="products">
        {products.slice(0, productToShow).map((product) => (
          <div className="product-card" key={product.title}>
            <div className="product-img-div">
              <img
                src={product.img}
                alt={product.title}
                className="product-img"
              />
            </div>
            <div className="product-detail-div">
              <h6 className="product-title">{product.title}</h6>
              <p className="product-height">{product.height} cm height</p>
              <div className="price-div">
                <p className="product-price">{product.price} SEK</p>
                <div className="icon-border">
                  <img
                    src={addtocart}
                    alt="add to cart"
                    className="addtocart-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div id="slider">
        <div className="dot" />
        <div className="dot opac" />
        <div className="dot opac" />
      </div>
    </div>
  );
};

export default HomeProduct;
