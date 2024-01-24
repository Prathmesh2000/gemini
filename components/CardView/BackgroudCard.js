import React from 'react'
import styles from './css/BackgroudCard.module.css'

export default function BackgroudCard(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.headingWrapper}>
                <div className={styles.heading1}>{props.Heading1}</div>
                <div className={styles.heading2}>{props.Heading2}</div>
                <button className={styles.button}>{props.Button.name}</button>
            </div>
        </div>
    )
}
