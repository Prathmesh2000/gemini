import React from "react";
import Navbar from "./ContactUsNavbar";
import Footer from "../../footer";
import Map from "../../Map";

import { useStore } from "../../../contexts/StoreContext";

export default function index() {
  const {
    data: { contact_us },
  } = useStore();

  return (
    <div>
      <Navbar />
      <div className="empty-div"></div>
      <Map data={contact_us.Locations} />
      <Footer />
    </div>
  );
}
