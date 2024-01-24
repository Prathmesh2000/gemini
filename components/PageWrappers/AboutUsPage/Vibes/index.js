import React from "react";

import css from "./index.module.css";

export default function Vibes({ data }) {
  return (
    <div className={css.vibesContainer}>
      <div className={css.vibesWrapper}>
        <div className={css.vibes}>
          <div className={css.vibesHeader}>
            <span className={css.Head}>{data.Heading}</span>
            <img
              src={"./images/featured_background.svg"}
              alt=""
              className={css.hoveImage}
            />
          </div>
          <div className={css.vibesContentWrapper}>
            <div className={css.vibesContent}>
              {(data.Sections || []).map((section, index) => (
                <div
                  className={`${css.SectionWrapper} ${
                    index % 4 >= 2 && css.ReverseWrap
                  }`}
                  key={section.id}
                >
                  <img src={section.Image.data.attributes.url} alt="" />
                  <div className={css.SectionContent}>
                    <span className={css.Title}>{section.Title}</span>
                    <span className={css.Desc}>{section.Description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
