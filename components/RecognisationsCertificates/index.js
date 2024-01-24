import styles from "./index.module.css";

const Certificates = (props) => {
  const data = props.data;
  return (
    <div className={styles.certificate}>
      <div className={styles.certificatecontainer}>
        <div className={styles.certificatetop}>
          <h3 className={styles.certificateheading}>{data.heading}</h3>
        </div>
        <div className={styles.certificatebottom}>
          <div className={styles.certificatecards}>
            {(data.Cards || []).map((card, index) => (
              <div
                className={`${styles.certificatecard} ${
                  index == 1 && styles.certificatecardcenter
                }`}
                key={card.id}
              >
                <div className={styles.certificatemobilewrapper}>
                  <div className={styles.certificateCardImage}>
                    <img
                      src={card.logo.data.attributes.url}
                      alt="stories Image"
                      className={styles.certificateCardImageTag}
                    />
                  </div>
                  <div className={styles.certificatecardtext}>
                    <h4 className={styles.certificatecardsubText}>
                      {card.description}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
