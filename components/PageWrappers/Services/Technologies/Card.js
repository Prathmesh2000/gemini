import React, { Component, useRef, useState, useEffect } from "react";
import css from "./css/Cards.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Card = ({ data }) => {
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [rowstoShow, setRowsToShow] = useState(2);
  const [image, setImage] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 550) {
        setSlidesToShow(1);
      }
    }
    if (typeof window !== "undefined") {
      if (window.innerWidth > 550) {
        setSlidesToShow(2);
      }
    }
    if (typeof window !== "undefined") {
      if (window.innerWidth > 600) {
        setRowsToShow(2);
        setImage(true);
      } else {
        setRowsToShow(3);
        setImage(false);
      }
    }
  }, []);
  const slider1 = useRef();

  var settings = {
    className: css.slider,
    dots: true,
    autoPlay: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: false,
    dotsClass: css.button__bar,
    rows: rowstoShow,
    slidesPerRow: 2,

    appendDots: dots => (
      <div className={css.button__bar}>
        <div className={css.actionButtonMobile}>
          <ul style={{ margin: "0px 1px" }}> {dots} </ul>
        </div>
      </div>
    )
  };
  return (
    <Slider {...settings} ref={slider => (slider1.current = slider)}>
      {data.map((e, index) => {
        let mobile = image;
        return (
          <div key={index}>
            <div className={css.iconWrapper}>
              <img
                src={
                  mobile
                    ? e.icon.data.attributes.url
                    : e.icon_pink.data.attributes.url
                }
              />
              <div className={css.technologyName}>{e.stack_name}</div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default Card;
