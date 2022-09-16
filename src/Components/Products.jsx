import React from "react";
import { useEffect, useState } from "react";
import "../Styles/songlist.css";
import "../Styles/songitem.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import { MdFilterList, MdFavorite } from "react-icons/md";
import { IoAddCircleSharp, IoLogoFacebook } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Songlist = (props) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [released, setReleased] = useState([]);
  const getmusic = async () => {
    const fetchereleased = await fetch(`https://fakestoreapi.com/products/category/${props.cat}`);

    const json = await fetchereleased.json();
    setReleased(json);
    //  console.log(released);
  };

  useEffect(() => {
    getmusic();
  });

  return (
    <>
      <div className="main-container">
 
        <div className="flex-box">
          <h2 className=" f-hr-lines">WEEKLY COLLECTION</h2>
          <div
            className="next-previous"
            style={{ position: "relative", top: "-14px" }}
          >
            <IoIosArrowBack color="black" />
            <IoIosArrowForward color="black" />
          </div>
          <Slider {...settings}>
            {released.map((released, i) => {
              return (
                <div className="img-container" key={i}>
                  <img src={released.image} className="card-img" />

                  <div className="text-container">
                    <h3>{released.title ? released.title.slice(0, 23) : ""}{released.title.length > 28 ? "" : "..."}</h3>
                  </div>
                  <div className="text-container">
                    <h3>${released.price}</h3>
                  </div>
                  <div className="text-container">
                   <button className="buy-btn">Buy Now</button>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Songlist;
