import React from "react";
import Navbar from "../../Navbar";
import Careers from "../../careers";
import Footer from "../../footer";
import Featured from "../../featured";
import VideoPlayer from "../../videoPlayer.js";
import Service from "../../service.js";
import Testimonial from "../../testimonial.js";
import Map from "../../../components/Map";
import Technologies from "../../technologies";
import Team from "../../../components/Graph";
import { useStore } from "../../../contexts/StoreContext";

export default function index() {
  const {
    data: { home },
  } = useStore();

  return (
    <div>
      <Navbar data={home.Main} />
      <div className="empty-div"></div>
      <Careers data={home.Careers} />
      <VideoPlayer data={home.Culture} />
      <Service data={home.Solutions} />
      <Technologies data={home.Technologies} />
      <Team data={home.Experience} />
      <Featured data={home.Featured} />
      <Testimonial data={home.Testimonials} />
      <Map data={home.Locations} />
      <Footer />
    </div>
  );
}
