import React from 'react'
import styles from './css/Content.module.css'
export default function (props) {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>{props.Heading}</div>
            <div className={styles.description}>{props.Description}</div>
        </div>
    )
}
