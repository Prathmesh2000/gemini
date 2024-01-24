import React from "react";
import styles from "./css/Technologies.module.css";
import Card from "./Card";
import ContentBox from "./ContentBox";

export default function Technologies(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.technologiesBackground}>Technologies</div>
      <div className={styles.title}>{props.data.title}</div>
      <ContentBox
        Title={props.data.heading}
        Description={props.data.description}
      />
      <Card data={props.data.Tech_stacks} />
    </div>
  );
}
