import React from 'react'
import styles from './css/ContentBox.module.css'

export default function ContentBox(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{props.Title}</div>
            <div className={styles.description}>{props.Description}</div>
        </div>
    )
}
