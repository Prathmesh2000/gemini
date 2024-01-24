import React from "react";
import Navbar from "../../AboutUsNavbar";
import Footer from "../../footer";
import GetInTouch from "../../GetInTouch/GetInTouch";
import Certificates from "../../RecognisationsCertificates";
import Vibes from "./Vibes";
import Our_Values from "./Our_Values";
import Our_Principles from "./Our_Principles";
import Experience from "./Experience";
import Featured from "./Featured";
import Story from "./Our_Story";
import Journey from "./Journey";
import Values from "./Values";
import ImageGallery from "./Gallery";

import { useStore } from "../../../contexts/StoreContext";

export default function index() {
  const {
    data: { about_us },
  } = useStore();
  console.log(about_us);
  return (
    <div>
      <Navbar data={about_us.Main} />
      <div className="empty-div"></div>
      <Story data={about_us.Our_Story} />
      <ImageGallery data={about_us.Gallery} />
      <Journey data={about_us.Journey} />
      <Values data={about_us.Values} />
      <Featured data={about_us.Featured_Section} />
      <Experience data={about_us.Counts} />
      <Vibes data={about_us.Vibes} />
      <Our_Values data={about_us.Our_Values} />
      <Our_Principles data={about_us.Our_Principles} />
      <Certificates data={about_us.Recognitions} />
      <GetInTouch data={about_us.Get_in_Touch} />
      <Footer />
    </div>
  );
}
