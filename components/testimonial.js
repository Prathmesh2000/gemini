import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import styles from "../assets/css/testimonial.module.css";
export default function Home({ data }) {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [opac, setOpac] = useState(3);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 550) {
        setSlidesToShow(1);
        setOpac(1);
      }
    }
    if (typeof window !== "undefined") {
      if (window.innerWidth > 550 && window.innerWidth <= 700) {
        setSlidesToShow(2);
        setOpac(2);
      }
    }
    if (typeof window !== "undefined") {
      if (window.innerWidth > 700 && window.innerWidth <= 900) {
        setSlidesToShow(3);
        setOpac(3);
      }
    }
    if (typeof window !== "undefined") {
      if (window.innerWidth > 900) {
        setSlidesToShow(4);
        setOpac(4);
      }
    }
  }, []);

  const slider1 = useRef();

  const prevFunc = () => {
    if (data.reviews.length == opac) setOpac(1);
    else setOpac(opac - 1);
    slider1.current.slickPrev();
  };
  const nextFunc = () => {
    if (data.reviews.length == opac) setOpac(1);
    else setOpac(opac + 1);
    slider1.current.slickNext();
  };
  var settings = {
    dots: true,
    autoPlay: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: false,
    dotsClass: styles.button__bar,

    appendDots: dots => (
      <div className={styles.button__bar}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
        <div className={styles.actionButtonMobile}>
          <button className={styles.actionPrevIcons} onClick={prevFunc} />
          <button className={styles.actionNextIcons} onClick={nextFunc} />
        </div>
        <p className={styles.rewardingtext}>Rewarding</p>
      </div>
    )
  };
  return (
    <>
      <div className={styles.headerBox}>
        <div className={styles.headertitle}>{data.heading}</div>
        <div className={styles.headerInnerBox}>
          <div className={styles.headersubtitle}>{data.description}</div>
          <div style={{ position: "relative" }}>
            <img
              src="./dots.svg"
              alt="dots"
              style={{
                position: "absolute",
                width: "30vw",
                height: "39vh",
                top: "-214%"
              }}
            />
          </div>
          <div className={styles.actionButton}>
            <button className={styles.actionPrevIcons} onClick={prevFunc} />
            <button className={styles.actionNextIcons} onClick={nextFunc} />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <Slider ref={slider => (slider1.current = slider)} {...settings}>
          {(data.reviews || []).map((review, index) => {
            let marked = index == opac - 1;
            return (
              <div
                className={`${styles.testimonialBox} ${marked && styles.lastcard
                  }`}
                key={`${index}-slide`}
              >
                <div className={styles.box1}>
                  <img
                    src={review.profile_pic.data.attributes.url}
                    alt="Avatar"
                    className={styles.avatar}
                  />
                  <div className={styles.titleBox}>
                    <div className={styles.title}>{review.full_name}</div>
                    <div className={styles.subtitle}>{review.position}</div>
                  </div>
                </div>
                <div className={styles.contentBox}>{review.review}</div>
                <img
                  src={review.company_logo.data.attributes.url}
                  alt="Company Logo"
                  className={styles.companyLogo}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
