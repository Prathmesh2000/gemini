import React from 'react'
import styles from './css/Button.module.css'
export default function Button(props) {
    return (
        <button className={styles.button}>{props.name}</button>
    )
}
