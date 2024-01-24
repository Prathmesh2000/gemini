import React, { useEffect, useState } from 'react'
import NavigationBar from './Navigation'
import ContentBox from './Content'
import Card from './Cards'
import PageNumber from './PageNumber'
import Button from './Button'
import styles from './css/HeroSection.module.css'
export default function HeroSection(props) {
    return (
        <div className={styles.wrapper}>
            <NavigationBar
                activeTab={props.ServiceDetails[0].attributes.slug}
                data={props.ServiceList}
                updateComponent={() => { props.updateComponent() }}
                details={props.ServiceDetails} />
            <div className={styles.serviceName}>
                {`Service / ${props.ServiceDetails[0].attributes.Main.heading}`}
            </div>
            <div className={styles.backgroundImage} />
            <PageNumber
                PageNumber={props.PageNumber} />
            <ContentBox
                className={styles.contentBox}
                Heading={props.ServiceDetails[0].attributes.Main.heading}
                Description={props.ServiceDetails[0].attributes.Main.description}
            />
            <a href='/contact-us'><Button name={props.ServiceDetails[0].attributes.Main.LHS_Button.name} /></a>
            <div className={styles.cardsContainer}>
                {
                    props.ServiceDetails[0].attributes.Main.RHS_Cards.map((e, index) => (
                        <Card
                            key={index}
                            Title={e.Title}
                            url={e.icon.data.attributes.url}
                            hoverURL={e.icon_white.data.attributes.url}
                        />
                    ))
                }
            </div>
        </div>
    )
}
