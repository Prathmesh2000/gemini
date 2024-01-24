import React, { useState, useEffect } from "react";
import Navbar from "./TeamNavbar";
import TeamMemberCard from "./TeamMemberCard/TeamMemberCard";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "../../footer";
import styles from "./index.module.css";
import TeamCategories from "./TeamCategories/TeamCategories";
import TeamHeading from "./TeamsHeading/TeamHeading";
import { fetchAPI } from "../../../lib/api";
import ShareRound from "../../../assets/images/ShareRound.svg";
import Image from "next/image";

import { useStore } from "../../../contexts/StoreContext";

export default function index(props) {
  const [category, setCategory] = useState("Leadership");
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeamsData = async () => {
      const res = await fetchAPI(
        `/api/teams?filters[Category][$eq]=${category}&populate=Image`
      );
      console.log(res);
      setTeams(res.data);
    };
    fetchTeamsData();
  }, [category]);

  const {
    data: { paths, contact_us, seoData },
  } = useStore();

  const getCategory = (cat) => {
    setCategory(cat);
  };

  return (
    <div style={{ backgroundColor: "#E7F2FA" }}>
      <Navbar />
      <TeamHeading data={seoData} />
      <div className={styles.teamsWrapper}>
        <TeamCategories getCategory={getCategory} />
        <div>
          <div className={styles.categoryWrapper}>
            <div className={styles.selectedCategoryWrapper}>
              <p className={styles.selectedCategory}>
                {category !== null ? category : "Leadership"}
              </p>
              <p className={styles.selectedCategoryTotalMembers}>
                ({teams.length} members)
              </p>
            </div>
            <div>
              <Image src={ShareRound} />
            </div>
          </div>
          <TeamMemberCard data={teams} />
        </div>
      </div>
      <div className={styles.contactUsWrapper}>
        <div className={styles.contactUsForm}>
          <ContactUs contact_us={contact_us} />
        </div>
        <div className={styles.contactUsImageWrapper}>
          <img
            src={contact_us.Background.data.attributes.url}
            className={styles.contactUsImage}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
