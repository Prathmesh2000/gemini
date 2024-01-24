import css from "./index.module.css";
import {} from "../../../../public/story_dots.svg";

const Story = ({ data }) => {
  return (
    <div className={css.storyContainer}>
      <div className={css.card}>
        <div className={css.textWrapper}>
          <h4 className={css.subHeading}>{data.title}</h4>
          <h4 className={css.heading}>{data.heading1}</h4>
          <h4 className={css.text}>{data.heading2}</h4>
          <p className={css.paragraph}>
            {(data.description || "")
              .split("\n")
              .filter(t => t)
              .map(t => (
                <span className={css.paragraph}>
                  {t}
                  <br />
                  <br />
                </span>
              ))}
          </p>
        </div>
        <div className={css.imageContainer}>
          <div className={css.imageWrapper}>
            <div className={css.family}>Family.</div>
            <img src="./story_dots.svg" className={css.dots} />
            <img
              src={data.teamImage.data.attributes.url}
              alt="team"
              className={css.teamImage}
            />
          </div>
          <img src="./story_dots.svg" className={css.dotsMobile} />
        </div>
      </div>
    </div>
  );
};

export default Story;
