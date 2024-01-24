import React from 'react'
import styles from './css/PageNumber.module.css'

export default function PageNumber(props) {
    return (
        <div className={styles.pageNumber}>{props.PageNumber}</div>
    )
}
