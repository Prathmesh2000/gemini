import React, { Component, useRef, useState, useEffect } from "react";
import css from "./index.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const SimpleSlider = ({ data }) => {
  const [slidesToShow, setSlidesToShow] = useState(1);
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
  }, []);
  const slider1 = useRef();

  const prevFunc = () => {
    slider1.current.slickPrev();
  };
  const nextFunc = () => {
    slider1.current.slickNext();
  };

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

    appendDots: dots => (
      <div className={css.button__bar}>
        <div className={css.actionButtonMobile}>
          <button className={css.actionPrevIcons} onClick={prevFunc} />
          <ul style={{ margin: "0px 1px" }}> {dots} </ul>
          <button className={css.actionNextIcons} onClick={nextFunc} />
        </div>
      </div>
    )
  };
  return (
    <Slider {...settings} ref={slider => (slider1.current = slider)}>
      {data.Sections.map((item, index) => (
        <div>
          <div className={css.mobileCard} key={index}>
            <img
              className={css.mobileCardImage}
              src={item.image.data.attributes.url}
              alt={item.image.data.attributes.alternativeText}
            />
            <div className={css.mobileCardNumber}>{`0${index + 1}`}</div>
            <div className={css.mobileCardTitle}>{item.title}</div>
            <div className={css.mobileCardSub}>{item.sub_title}</div>
            <p className={css.mobileCardDesc}>{item.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SimpleSlider;
