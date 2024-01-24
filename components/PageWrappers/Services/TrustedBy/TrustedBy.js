import React from 'react'
import styles from './css/TrustedBy.module.css'
export default function TrustedBy(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.heading}>{props.data.heading}</div>
                <div className={styles.description}>{props.data.description}</div>
            </div>

            <div className={styles.logoWrapper}>
                {
                    props.data.Companies.map((e, index) => (
                        <img key={index} className={styles.logo} src={e.compony_logo.data.attributes.url} />
                    ))
                }
            </div>
        </div>
    )

}
