import React from 'react'
import styles from './css/TopFeatures.module.css'
import FeatureCard from './FeatureCard'

export default function TopFeatures(props) {
    return (
        <div className={styles.wrapper}>
            {
                props.ServiceDetails[0].attributes.Features.map((e, index) => (
                    <FeatureCard
                        key={index}
                        Heading={e.heading}
                        Description={e.description}
                        Icon={e.icon.data.attributes.url}
                    />
                ))
            }
        </div>
    )
}
