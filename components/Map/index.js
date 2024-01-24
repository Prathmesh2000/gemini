import React, { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import World from "../../assets/images/world.svg";
import PhoneDark from "../../assets/images/phone-dark.svg";
import PhoneWhite from "../../assets/images/phone-white.svg";
import styles from "./index.module.css";
import Image from "next/image";
import Slider from "react-slick";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { createTheme } from "@mui/material/styles";

const Map = ({ data }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [usaPopup, setUsaPopup] = React.useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const slider1 = useRef();
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: false,
    autoplay: true,
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const outsideIndia = data.locations.data.filter(
    (c) => c.attributes.Country.toLowerCase() != "india"
  );
  const inIndia = data.locations.data.filter(
    (c) => c.attributes.Country.toLowerCase() == "india"
  );

  const theme = createTheme({
    palette: {
      primary: {
        main: "#9B2F9B",
      },
      secondary: {
        main: "#9B2F9B",
      },
    },
  });
  const [map, setMap] = useState(data.locations.data[1]);
  const [address, setAddress] = useState(1);
  const [city, setCity] = useState(inIndia);
  // check if esc key is pressed
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      e.key === "Escape" && setIsOpen(false);
    });
    return () => {
      document.removeEventListener("keydown", (e) => e);
    };
  }, []);

  return (
    <div>
      <div className={styles.mapWrapper}>
        <div style={{ display: modalIsOpen ? "none" : "block" }}>
          <div className={styles.worldMapWrapper}>
            <h3 className={styles.worldMapHeading}>{data.Title}</h3>

            <div className={styles.worldMap}>
              <div className={styles.worldMapImage}>
                <Image src={World} width={1000} height={600} />
              </div>
              <div className={styles.worldMapDot1}>
                {usaPopup && outsideIndia.length && (
                  <div className={styles.usaPopup}>
                    <div className={styles.popupPosition}>
                      {outsideIndia[0].attributes.address}
                    </div>
                  </div>
                )}
                <div
                  className={styles.chip}
                  onMouseEnter={(e) => setUsaPopup(true)}
                  onClick={(e) => setUsaPopup(!usaPopup)}
                >
                  <span>{outsideIndia.length}</span>
                </div>
              </div>
              <div className={styles.worldMapDot2} onClick={handleOpenModal}>
                <div className={styles.chip}>
                  <span>{inIndia.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.indiaMapWrapper} ${styles.mapWrapper}`}
          style={{ display: modalIsOpen ? "block" : "none" }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "3.125rem",
              }}
              theme={theme}
            >
              <KeyboardBackspaceIcon
                color="secondary"
                onClick={() => {
                  setIsOpen(!modalIsOpen);
                }}
              />
              <h3 className={styles.indiaMapHeading}>Prime Locations</h3>
            </div>
            <div className={styles.indiaMapDiv}>
              <div className={styles.indiaMap}>
                <Image
                  src={map.attributes.pic.data.attributes.url}
                  layout="responsive"
                  width={100}
                  height={75}
                  onClick={() => {
                    if (data.locations.data.length > address + 1) {
                      setAddress(address + 1);
                      setMap(data.locations.data[address + 1]);
                    } else {
                      setAddress(1);
                      setMap(data.locations.data[1]);
                    }
                  }}
                />
              </div>
              <div className={styles.addressWrapper}>
                {(city || []).map((item) => {
                  let marked = map.attributes.city === item.attributes.city;
                  return (
                    <div
                      className={`${styles.addressDiv} ${
                        marked && styles.activeAddressDiv
                      }`}
                      onClick={() => setMap(item)}
                    >
                      <div className={styles.addressTextWrapper}>
                        <h3 className={styles.cityName}>
                          {item.attributes.city}
                        </h3>
                        <h4 className={styles.cityAddress}>
                          {item.attributes.address}
                        </h4>
                      </div>
                      <div className={styles.cityPhoneWrapper}>
                        <div className={styles.phoneIcon}>
                          <Image
                            src={marked ? PhoneWhite : PhoneDark}
                            width={20}
                            height={20}
                          />
                        </div>
                        <h4 className={styles.cityPhoneNumber}>
                          {item.attributes.phone}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobileMapWrapper}>
        <h3 className={styles.mobileMapHeading}>Our Locations</h3>
        <div className={styles.sliderWrapper}>
          <Slider {...settings}>
            {(data.locations.data || []).map((item, index) => {
              return (
                <div className={styles.addressDiv} key={"key-item-" + index}>
                  <div className={styles.addressTextWrapper}>
                    <h3 className={styles.cityName}>{item.attributes.city}</h3>
                    <h4 className={styles.cityAddress}>
                      {item.attributes.address}
                    </h4>
                  </div>
                  <div className={styles.cityPhoneWrapper}>
                    <div className={styles.phoneIcon}>
                      <Image src={PhoneDark} width={20} height={20} />
                    </div>
                    <h4 className={styles.cityPhoneNumber}>
                      {item.attributes.phone}
                    </h4>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Map;
