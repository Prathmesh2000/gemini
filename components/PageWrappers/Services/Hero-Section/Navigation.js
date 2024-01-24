import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './css/Navigation.module.css'
import { useStore } from "../../../../contexts/StoreContext";
import Link from 'next/link'

export default function Navigation(props) {
    const { data, setData } = useStore();
    const [currentService, setCurrentService] = useState(props.activeTab)
    const menuButtonHandler = async (service_id) => {
        setCurrentService(service_id)
        let url = `${process.env.BASE_URL}/api/services`
        let queryparams = `?filters[slug][$eq]=${service_id}&populate=Main.LHS_Button&populate=featured.button&populate=Main.RHS_Cards.icon&populate=Features.icon&populate=Technologies.Tech_stacks.icon&populate=Technologies.Tech_stacks.icon_pink&populate=Success_stories.Stories.banner&populate=Success_stories.Stories.compony_logo&populate=Recognitions.Cards.logo&populate=Trusted_by.Companies.compony_logo&populate=Book_a_session.button&populate=Address.LHS_link&populate=Address.RHS_button&populate=Address.Social_Links.icon&populate=seo.metaImage&populate=seo.favicon&populate=Main.RHS_Cards.icon_white&populate=seo.metaSocial.image&previewState==${process.env.PUBLICATION_STATE}`
        let pageData = await axios.get(url + queryparams).then((res) => { return res.data.data[0] })
        props.details[0].id = pageData.id
        props.details[0].attributes = pageData.attributes
        props.updateComponent()
        window.history.pushState({}, '', `/services/${service_id}`);
    }

    useEffect(() => {
    })
    return (
        <div className={styles.wrapper}>
            {
                props.data.map((e) =>
                (
                    <div className={styles.tabWrapper} key={e.attributes.slug}>
                        <button
                            className={styles.tab}
                            style={currentService == e.attributes.slug ? { color: '#9b2f9b' } : { color: '#1b2f3f' }}
                            onClick={
                                () => {
                                    menuButtonHandler(e.attributes.slug)
                                }}>
                            {e.attributes.Service}
                        </button>
                        <div
                            className={styles.bottomBar}
                            style={currentService == e.attributes.slug ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}
