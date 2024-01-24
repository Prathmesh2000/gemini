import React from "react";
import styles from "./css/TeamMemberDetails.module.css";
import Modal from "react-modal";
import Image from "next/image";
import Facebook from "../../../../assets/images/Facebook.svg";
import Twitter from "../../../../assets/images/Twitter.svg";
import Linkedin from "../../../../assets/images/Linkedin.svg";
import Share from "../../../../assets/images/Share.svg";
import cross_icon from "../../../../assets/images/cross_icon.svg";
import Line from "../../../../assets/images/Line.svg";
Modal.defaultStyles.overlay.zIndex = "90";

export default function TeamMemberDetails(props) {
  console.log("PROPS IN TEAM MEMBER DETAILS");
  console.log(props.details);
  let { details } = props;
  return (
    <>
      <Modal isOpen={true} className={styles.teamMemberModal}>
        <div className={styles.webModal}>
          <div onClick={props.closeModal} className={styles.closeModal}>
            <Image src={cross_icon} />
          </div>
          <div className={styles.teamMemberDetails}>
            <div className={styles.imgWrapper}>
              <img src={details.attributes.Image.data.attributes.url} />
            </div>
            <div className={styles.detailsWrapper}>
              <p className={styles.name}>{details.attributes.Name}</p>
              <p className={styles.position}>{details.attributes.Position}</p>
              <p className={styles.description}>
                {details.attributes.Description}
              </p>
              <div className={styles.profilesWrapper}>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon}>
                    {" "}
                    <Image src={Facebook} />
                  </div>

                  <div className={styles.icon}>
                    {" "}
                    <Image src={Twitter} />
                  </div>

                  <div className={styles.icon}>
                    <Image src={Linkedin} />
                  </div>
                </div>
                <div className={styles.buttonWrapper}>
                  <button className={styles.button}>
                    <p className={styles.buttonText}>SHARE PROFILE</p>{" "}
                    <Image src={Share} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mobileModal}>
          <div className={styles.closeModal}>
            <Image src={Line} />

            <Image src={cross_icon} onClick={props.closeModal} />
          </div>
          <div className={styles.imageNameWrapper}>
            <div className={styles.imgWrapper}>
              <img
                className={styles.img}
                src={details.attributes.Image.data.attributes.url}
              />
            </div>
            <div className={styles.namePositionWrapper}>
              <p className={styles.name}>{details.attributes.Name}</p>
              <p className={styles.position}>{details.attributes.Position}</p>
            </div>
          </div>
          <div className={styles.descriptionWrapper}>
            <p className={styles.description}>
              {details.attributes.Description}
            </p>
          </div>
          <div className={styles.iconWrapper}>
            <div className={styles.icon}>
              {" "}
              <Image src={Facebook} />
            </div>

            <div className={styles.icon}>
              {" "}
              <Image src={Twitter} />
            </div>

            <div className={styles.icon}>
              <Image src={Linkedin} />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
