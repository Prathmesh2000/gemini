import React, { useState } from "react";
import styles from "./css/TeamMemberCard.module.css";
import TeamMemberDetails from "../TeamMemberDetails/TeamMemberDetails";

export default function TeamMemberCard(props) {
  const [openModal, setOpenModal] = useState(false);
  const [memberDetails, setMemberDetails] = useState(null);

  let { data } = props;

  const showModal = (d) => {
    setMemberDetails(d);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className={styles.teamWrapper}>
        {data.map((d) => (
          <div className={styles.teamCardWrapper} key={d.id}>
            <div className={styles.imageWrapper}>
              <img
                className={styles.img}
                src={d.attributes.Image.data.attributes.url}
              />
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.name}>{d.attributes.Name}</p>
              <p className={styles.designation}>{d.attributes.Position}</p>
              <div className={styles.buttonWrapper}>
                <button onClick={() => showModal(d)} className={styles.button}>
                  VIEW PROFILE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {openModal && (
        <TeamMemberDetails details={memberDetails} closeModal={closeModal} />
      )}
    </>
  );
}
