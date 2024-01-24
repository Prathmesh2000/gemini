import React, { useState } from 'react'
import styles from './css/Cards.module.css'
import Image from "next/image";

export default function (props) {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <div className={styles.cardWrapper}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <div className={styles.hoverBackground} />
            <Image src={isHovering && window.innerWidth > 700 ? props.hoverURL : props.url} width={20} height={20} />
            <div className={styles.cardHeading}>{props.Title}</div>
        </div>
    )
}
