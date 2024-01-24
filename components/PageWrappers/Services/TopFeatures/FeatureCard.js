import React from 'react'
import styles from './css/FeatureCard.module.css'

export default function FeatureCard(props) {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.iconWrapper}>
                <img className={styles.icon} src={props.Icon} />
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.heading}>
                    {props.Heading}
                </div>
                <div className={styles.content}>
                    {props.Description}
                </div>
            </div>
        </div>
    )
}
