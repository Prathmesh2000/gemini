import React, { useEffect, useState } from 'react'
import styles from "./styles/EvetModal.module.css";
import country from "../../lib/country.json"
import { useCookies } from 'react-cookie';

export default function index() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [cookies, setCookie] = useCookies(['event_content', 'jdc_concent']);

  const fetchData = async () => {
    fetch('https://ipinfo.io?token=a93fbb31a531ce', { cache: "no-cache", mode: "cors" })
      .then(async (res) => {
        let userCountry = await res.json()
        userCountry = country[userCountry.country]
        let content = await fetch(`${process.env.BASE_URL}/api/events?filters[enable][$eq]=true&populate=events.background&populate=events.button&publicationState=preview`)
        content = await content.json()
        let contentArray = []
        content.data.map((e) => {
          if (e.attributes.location.toLowerCase() == userCountry.toLowerCase() || e.attributes.location == "ANYWHERE") {
            contentArray.push(e)
          }
        })
        if (contentArray.length > 1) {
          let index = contentArray.findIndex(e => e.attributes.location.toLowerCase() == userCountry.toLowerCase())
          setTitle(contentArray[index].attributes.title)
          setDescription(contentArray[index].attributes.description)
          setDate(contentArray[index].attributes.date)
          setShowModal(true)
        } else {
          setTitle(contentArray[0].attributes.title)
          setDescription(contentArray[0].attributes.description)
          setDate(contentArray[0].attributes.date)
          setShowModal(true)
        }
      })
  }

  useEffect(() => {
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    if (cookies.event_content != date && cookies.jdc_concent == "true") {
      setCookie('event_content', date)
      fetchData()
    }
  }, [cookies.jdc_concent])

  return (
    showModal ?
      (<div className={styles.modal}>
        <div className={styles.title}>{title}</div>
        <div className={styles.date}>{date}</div>
        <div className={styles.description}>{description}</div>
        <button className={styles.button} onClick={() => { setShowModal(false) }} >ok</button>
      </div >) : null
  )
}
