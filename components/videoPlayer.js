import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import styles from "../assets/css/videoPlayer.module.css";
import Image from "next/image";
import backgroundImage from "../public/videoPlayerBackgrond.svg";
export default function videoPlayer({ data }) {
  const [showing, setShowing] = useState(false); //-------------------------------------------------------------
  // useEffect(() => {
  //   setShowing(true);
  // }, []);
  if (!showing) {
    // for error - >  Hydration failed because the initial
    // return null; //                UI does not match what was rendered on the server.
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    //---------------------------------------------------------------
    return (
      <div className={styles.playerWrapper}>
        <div className={styles.header}>
          <div className={styles.title}>{data.heading1}</div>
          <div className={styles.subtitle}>{data.heading2}</div>
        </div>
        <div className={styles.backgroundImage}>
          <Image src={backgroundImage} width={171} height={171} />
        </div>
        {showing ? (
          <ReactPlayer
            className={styles.reactPlayer}
            // light={data.videoThumbnail.data.attributes.url}
            playing={true}
            loop={false}
            controls={true}
            light={false}
            volume={1}
            muted={true}
            width={"75%"}
            height={"auto"}
            url={data.video.data.attributes.url}
          // playIcon={
          //   <div className={styles.playButton}>
          //     <div className={styles.playButtonText}>Play Video</div>
          //     <div className={styles.playButtonImage} />
          //   </div>
          // }
          />) : (
          <div className={styles.thumbnailWrapper}>
            <div className={styles.playButton} onClick={() => setShowing(true)}>
              <div className={styles.playButtonImage} />
            </div>
            <img src={data.videoThumbnail.data.attributes.url} className={styles.thumbnailImage} />
          </div>
        )}
      </div >
    );
  }
}
