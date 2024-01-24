import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useCookies } from 'react-cookie';
import styles from './styles/Cookies.module.css'


export default function index() {
    const [markdown, setMarkdown] = useState("")
    const [cookies, setCookie] = useCookies(['jdc_concent']);

    useEffect(() => {
        const fetchData = async () => {
            let content = await fetch(`${process.env.BASE_URL}/api/cookie-consent`)
            content = await content.json()
            setMarkdown(content.data.attributes.content)
        }
        fetchData()
    }, [])

    return (
        cookies.jdc_concent ? null : markdown.length ? (
            <div className={styles.wrapper}>
                <div className={styles.innerWrapper}>
                    <ReactMarkdown children={markdown} />
                    <div className={styles.buttonWrapper}>
                        <button className={styles.button} onClick={() => {
                            setCookie('jdc_concent', true)
                        }}>Accept All</button>
                    </div>
                </div>
            </div>
        ) : null
    )
}
