import Background from "../assets/images/background.jpg";
import Temp from "../assets/images/temp1.svg";
import Arrow from "../assets/images/career-arrow.svg";
import Careers1 from "../assets/images/careers-1.svg";
import Careers2 from "../assets/images/careers-2.svg";
import styles from "../assets/css/career.module.css";
import ReactPlayer from "react-player";

import Image from "next/image";

const Careers = ({ data }) => {
  return (
    <div className={styles.careers}>
      <div style={{
        background: "linear-gradient(to bottom, white 26%, #fbf1fb 26%)"
      }}
        className={styles.careersBlock}>
        <div className={styles.relative}>

          <div className={styles.careersWrapper}>
            <div className={styles.contentMainWrapper}>
              <div className={styles.careersContent}>
                <h2 className={styles.careersMainText}>{data.heading1}</h2>
                <h4 className={styles.careersSubText}>{data.heading2}</h4>
              </div>
              <div className={styles.careersMobileImageWrapper}>
                <div className={styles.overlapedMobileBackground}>
                  <Image src={Careers1} alt="title" layout="responsive" />
                </div>
                <div className={styles.careersMobileVideo}>
                  {/* <Image src={Temp} alt="title" layout="responsive" /> */}
                  <video
                    controls={false}
                    autoPlay
                    loop
                    muted
                    width={"100%"}
                    height={"auto"}
                    className={styles.careersVideoWrapper}
                  >
                    <source src={data.video.data.attributes.url} type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className={styles.careersSubContentWrappper}>
                <h4 className={styles.careersParagraph}>{data.description} </h4>
                <div className={styles.careersSubcontentBottom}>
                  <div className={styles.careersButtonWrapper}>
                    <h3 className={styles.careersButtonHeading}>
                      {data.highlight_text}
                    </h3>
                    <a
                      href={data.button.slug}
                      className={styles.careersButtonText}
                    >
                      {data.button.name}
                    </a>
                  </div>
                  <div className={styles.careersArrow}>
                    <Image src={Arrow} alt="title" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.careersImageWrapper}>
              <div className={styles.overlapedBackground}>
                <Image
                  src={Careers1}
                  alt="title"
                  layout="fill"
                  width={"500vw"}
                  height={"500vh"}
                />
              </div>
              <div className={styles.careersVideo}>
                <video
                  controls={false}
                  autoPlay
                  loop
                  muted
                  width={"100%"}
                  height={"auto"}
                  className={styles.careersVideoWrapper}
                >
                  <source src={data.video.data.attributes.url} type="video/mp4" />
                </video>
                {/* <Image src={Temp} alt="title" layout="responsive" /> */}
              </div>
            </div>
          </div>
          <div className={styles.careersDots}>
            <Image layout="fixed" src={Careers2} alt="title" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
