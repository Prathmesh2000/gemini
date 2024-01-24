import React from "react";
import styles from "./css/CardView.module.css";
import Card from "./Card";
import BackgroundCard from "./BackgroudCard";

export default function CardView(props) {
  return (
    <div className={styles.wrapper}>
      <Card
        Title={props.Title}
        Detail={props.Detail}
        LHSLink={props.LHSLink}
        SocialLinks={props.SocialLinks}
      />
      <BackgroundCard
        Heading1={props.Heading1}
        Heading2={props.Heading2}
        Button={props.RHSButton}
      />
    </div>
  );
}
