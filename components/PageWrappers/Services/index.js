import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar2";
import HeroSection from "./Hero-Section/HeroSection";
import TopFeatures from "./TopFeatures/TopFeatures";
import Technologies from "./Technologies/Technologies";
import TrustedBy from "./TrustedBy/TrustedBy";
import GetInTouch from "../../GetInTouch/GetInTouch";
import Certificates from "../../RecognisationsCertificates";
import Session from "./Session";
import Stories from "./SuccessStories";
import Footer from "../../footer";
import { useStore } from "../../../contexts/StoreContext";

export default function index() {
  useEffect(() => {});
  const {
    data: { services, home },
  } = useStore();
  const [update, setUpdate] = useState(1);
  const findPageNumber = () => {
    let pageNumber = services.list.findIndex(
      (e) => e.attributes.slug == services.details[0].attributes.slug
    );
    pageNumber += 1;
    return pageNumber < 10 ? `0${pageNumber}` : pageNumber.toString();
  };

  return (
    <div>
      <Navbar data={home.Main} />
      <HeroSection
        ServiceList={services.list}
        ServiceDetails={services.details}
        updateComponent={() => {
          setUpdate(update + 1);
        }}
        PageNumber={findPageNumber()}
      />
      <TopFeatures ServiceDetails={services.details} />
      <Technologies data={services.details[0].attributes.Technologies} />
      <Stories ServiceDetails={services.details} />
      {/* <Certificates data={services.details[0].attributes.Recognitions} /> */}
      <TrustedBy data={services.details[0].attributes.Trusted_by} />
      {/* <Session ServiceDetails={services.details} /> */}
      {/* <GetInTouch data={services.details[0].attributes.Address} /> */}
      <Footer />
    </div>
  );
}
