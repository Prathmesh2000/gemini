import backgroundImage from "../../../../public/videoPlayerBackgrond.svg";

import styles from "./index.module.css";

import Image from "next/image";

const Session = (props) => {
    const data = props.ServiceDetails[0].attributes.Book_a_session
    const myArray = data.heading_1.split("&#9733;");
    return (
        <div className={styles.session}>
            <div className={styles.sessioncontainer}>
                <div className={styles.sessioncardtext}>
                    <h4 className={styles.sessionHeading1}>
                        {myArray[0]}<span>&#9733;</span>{myArray[1]}
                    </h4>
                    <h4 className={styles.sessionHeading2}>
                        {data.heading_2}
                    </h4>
                    <h4 className={styles.sessionDescription}>
                        {data.description}
                    </h4>
                </div>
                <div className={styles.sessionButtonWrapper}>
                    <button className={styles.sessionButton}>
                        <h5 className={styles.sessionButtonText}>{data.button.name}</h5></button>
                </div>
            </div>
            <div className={styles.sessionBackgroundImage}>
                <Image src={backgroundImage} width={171} height={171} />
            </div>
        </div>
    );
};

export default Session;
