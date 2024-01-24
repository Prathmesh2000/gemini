import React, { Component, useState } from 'react';
import Collaborative from "../assets/images/collaborative..svg";
import Vector from "../assets/images/technologiesVector.svg";
import styles from "../assets/css/technologies.module.css";
import Image from "next/image";

// single card Component
const Card = ({ card }) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div className={styles.technologiessingleCard}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <div className={styles.techonlogiessingleCardframe}>
        <i className={styles.technologiescardicon}>
          <Image
            src={!isHovering ? card.icon.data[0].attributes.url : card.icon_white.data.attributes.url}
            alt="title"
            layout="responsive"
            width={"45px"}
            height={"45px"}
          />
        </i>
        <a href={card.slug} className={styles.technologiescardtext}>
          {card.name}
        </a>
      </div>
    </div>
  )
}

// technologies component with every cards
const Technologies = ({ data }) => {

  return (
    <div className={styles.technologies}>
      <div className={styles.technologiesWrapper}>
        <div>
          <div className={styles.technologiestextDiv}>
            <h3 className={styles.technologiesmainText}>{data.heading1}</h3>
            <h4 className={styles.technologiessubText}>{data.heading2}</h4>
          </div>
          <div className={styles.technologiesbottomDiv}>
            <div className={styles.technologiescards}>
              {(data.cards || []).map((card, index) => (
                <Card card={card} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.technologiessideDiv}>
          <div className={styles.technologiescollaborativ}>
            <Image src={Collaborative} alt="title" />
          </div>
          <div className={styles.personImage}>
            <Image
              alt="Mountains"
              src={data.RHS_image.data.attributes.url}
              layout="responsive"
              width={"300px"}
              height={"500px"}
            />
          </div>
          <div className={styles.vector}>
            <Image src={Vector} alt="title" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
