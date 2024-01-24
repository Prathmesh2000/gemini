import Arrow from "../../assets/images/arrow.svg";
import Team_background from "../../assets/images/team_background.svg";

import styles from "../../assets/css/teams.module.css";
import Circle from "./circle";
import Image from "next/image";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  // import ChangingProgressProvider from "./ChangingProgressProvider";
  import VisibilitySensor from "react-visibility-sensor";

const Team = ({ data }) => {
    return (
      <div className={styles.team}>
        <div className={styles.teamconatiner}>
          <div className={styles.teamleftDiv}>
            {/* <div className={styles.teamleftDivMain}> */}
            <div className={styles.teamheadingDiv}>
              <h4 className={styles.teammainheading}>{data.heading1}</h4>
              <h4 className={styles.teamsubheading}>{data.heading2}</h4>
            </div>
            <div className={styles.teamgraphDiv}>
              <div className={styles.graphDivTextWrapper}>
                <div className={styles.teamgraphtext}>{data.graph_title}</div>
                <div className={styles.leftBackgroundImage}>
                  <Image
                    src={Team_background}
                    alt="image"
                    width={100}
                    height={100}
                  // layout="responsive"
                  // style={{ position: "absolute !important" }}
                  />
                </div>
              </div>
              <Image
                src={data.employees_graph.data.attributes.url}
                style={{
                  minHeight: "0 !important",
                  height: "auto !important",
                  margin: "0 !important",
                }}
                className={styles.teamgraphimg}
                // width={300}
                // height={200}
                width={700}
                height={475}
                objectFit="contain"
              // objectFit="fit"
              />
            </div>
          </div>
          <div className={styles.teamdreamDiv}>
            <div className={styles.teamdream}>
              <div className={styles.circleWrapper}>
              {/* FIRST */}
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div className={styles.teamcircle1} >
                    <VisibilitySensor>
                      {({ isVisible }) => {
                        const percentage = isVisible ? 85 : 0;
                        return (
                          <CircularProgressbarWithChildren
                            value={percentage}
                            strokeWidth={7}
                            styles={buildStyles({
                              root: { width: 24 },
                              width: '10%',
                              strokeLinecap: 'rounded',
                              textSize: '16px',
                              pathTransitionDuration: 0.5,
                              textColor: "#fff",
                              pathColor: "#00F3CF",
                              trailColor: "#07192C"
                            })}
                          >
                            <h4>06+</h4>
                            <h4>Technologies</h4></CircularProgressbarWithChildren>
                        );
                      }}
                    </VisibilitySensor>
                  </div>
                </div>
                {/* second */}
                
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative' }}>
                  <div className={styles.teambackgroundTextdream}>Dream
                  </div>
  
                  <div className={styles.teamcircle2}  >
                    <VisibilitySensor>
                      {({ isVisible }) => {
                        const percentage = isVisible ? 100 : 0;
                        return (
                          <CircularProgressbarWithChildren
                            value={percentage}
                            strokeWidth={7}
                            styles={buildStyles({
                              root: { width: 24 },
                              width: '10%',
                              strokeLinecap: 'rounded',
                              textSize: '16px',
                              pathTransitionDuration: 0.5,
                              textColor: "#fff",
                              pathColor: "#FFA06E",
                              trailColor: "#07192C"
                            })}
                          >
                            <h4>24/7</h4>
                            <h4>Support</h4></CircularProgressbarWithChildren>
                        );
                      }}
                    </VisibilitySensor>
                  </div>
                </div>
                {/* THIRD */}
              
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div className={styles.teamcircle3}  >
                    <VisibilitySensor>
                      {({ isVisible }) => {
                        const percentage = isVisible ? 75 : 0;
                        return (
                          <CircularProgressbarWithChildren
                            value={percentage}
                            strokeWidth={7}
                            styles={buildStyles({
                              root: { width: 24 },
                              width: '10%',
                              strokeLinecap: 'rounded',
                              textSize: '16px',
                              pathTransitionDuration: 0.5,
                              textColor: "#fff",
                              pathColor: "#3C79E6",
                              trailColor: "#07192C"
                            })}
                          >
                            <h4>75+</h4>
                            <h4>Location</h4></CircularProgressbarWithChildren>
                        );
                      }}
                    </VisibilitySensor>
                  </div>
                </div>
                  {/* THIRD END */}
              </div>
              <div className={styles.teamparagraph}>
                <div className={styles.teambackgroundTextfuture}>Future</div>
                <p style={{ zIndex: 5 }}>{data.description} </p>
              </div>
              <div className={styles.teamdiscover}>
                <div className={styles.teamdiscoverimagediv}>
                  <Image
                    className={styles.teamdiscoverimage}
                    src={Arrow}
                    width={30}
                    height={20}
                  />
                </div>
                <a href={data.hyperlink.slug} className={styles.teamdiscovertext}>
                  {data.hyperlink.name}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Team;
  