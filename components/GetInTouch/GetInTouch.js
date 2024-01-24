import React from 'react'
import styles from './css/GetInTouch.module.css'
import CardView from '../CardView/CardView'

export default function GetInTouch(props) {
    return (
        <div className={styles.wrapper}>
            <CardView
                Title={"Address"}
                Detail={props.data.address}
                RHSButton={props.data.RHS_button}
                LHSLink={props.data.LHS_link}
                Heading1={props.data.RHS_heading1}
                Heading2={props.data.RHS_heading2}
                SocialLinks={props.data.Social_Links}
            />
        </div>
    )
}
