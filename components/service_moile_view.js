import React from "react";
import styles from "../assets/css/service_moile_view.module.css";

const Box = ({ node }) => {
  return (
    <div className={styles.outerdiv}>
      <div className={styles.outerdivTitle}>{node.name}</div>
      <div className={styles.outerdivSubtitle}>{node.description}</div>
      <a href={node.slug} className={styles.middlediv}>
        <div className={styles.innerdiv}></div>
      </a>
    </div>
  );
};

export default function service_moile_view({ data }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{data.heading1}</div>
      <div className={styles.subtitle}>{data.heading2}</div>
      {(data.nodes || []).map((node, index) => {
        return <Box key={"box-" + index} node={node} />;
      })}
    </div>
  );
}
