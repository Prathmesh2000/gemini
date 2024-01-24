import React from "react";
import styles from "./css/Card.module.css";
export default function Card(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{props.Title}</div>
      <div className={styles.detail}>{props.Detail}</div>
      <div className={styles.leftLinkWrapper}>
        <div className={styles.leftLink}>{props.LHSLink.name}</div>
        <div className={styles.icon}></div>
      </div>
      <div className={styles.footerIcons}>
        {props.SocialLinks.map((item, i) => (
          <a
            href={`https://${item.link}`}
            style={{ margin: "1.563rem 1.625rem 0rem 0rem" }}
            rel="noreferrer"
            target="_blank"
            key={item.id}
          >
            <img
              src={item.icon.data[0].attributes.url}
              alt={item.icon.data[0].caption}
              style={{ width: "30px" }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
