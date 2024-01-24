import React from "react";
import styles from "./css/TeamHeading.module.css";

export default function TeamHeading(props) {
  let { data } = props;
  return (
    <div className={styles.headingWrapper}>
      <p className={styles.heading}>{data.heading}</p>
      <div className={styles.description}>{data.description}</div>
    </div>
  );
}
