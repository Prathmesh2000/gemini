import styles from "./index.module.css";

const Stories = props => {
  const data = props.ServiceDetails[0].attributes.Success_stories;
  const featuredData = props.ServiceDetails[0].attributes.featured;
  return (
    <div className={styles.stories}>
      <div className={styles.storiescontainer}>
        <div className={styles.storiestop}>
          <div className={styles.storiestext}>
            <h3 className={styles.storiesheading}>{data.heading}</h3>
            <h5 className={styles.storiessubText}>{data.description}</h5>
          </div>
          {/* <div className={styles.backgroundImage}>
                        <Image src={Background} alt="Background" />
                    </div> */}
        </div>
        <div className={styles.storiesbottom}>
          <div className={styles.storiescards}>
            {(data.Stories || []).map((story, index) => (
              <div
                key={index}
                className={`${styles.storiescard} ${index == 1 && styles.storiescardcenter
                  } ${index > 1 && styles.storiesMobileCardHidden}`}
              >
                <div className={styles.storiesmobilewrapper}>
                  <div className={styles.storiesCardImage}>
                    <img
                      src={story.banner.data.attributes.url}
                      alt="stories Image"
                      className={styles.storiesCardImageTag}
                      style={{
                        objectFit: "cover",
                        borderRadius: "16px 16px 0px 0px",
                        width: "100%",
                        height: "250px"
                      }}
                    />
                  </div>
                  <div className={styles.storiesCompanyWrapper}>
                    <div style={{ position: "relative" }}>
                      <img
                        src={story.compony_logo.data.attributes.url}
                        className={styles.storiesComponyImage}
                      />
                    </div>
                    <h4 className={styles.storiescardheading}>
                      {story.company_region}
                    </h4>
                  </div>
                  <div className={styles.storiescardtext}>
                    <h4 className={styles.storiescardsubText}>
                      {story.description}
                    </h4>
                  </div>
                </div>
                <div className={styles.storiesCategoryWrapper}>
                  <h5 className={styles.storiesCategory}>
                    #{story.category_1}
                  </h5>
                  <h5
                    className={`${styles.storiesCategory} ${styles.storiesSecondCategory}`}
                  >
                    #{story.category_2}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.featuredWork}>
        <div className={styles.featuredWorkTitle}>{featuredData.heading}</div>
        <div className={styles.featuredWorkSubWrapper}>
          <div className={styles.featuredWorkHeading}>
            {featuredData.description}
          </div>
          <div className={styles.featuredWorkButtonWrapper}>
            <div className={styles.featuredWorkButtonText}>
              {featuredData.button.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
