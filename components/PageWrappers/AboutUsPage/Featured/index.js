import React from "react";
import css from "./index.module.css";

export default function index({ data }) {
  // TODO:
  const filterMobile = () => (data || []).filter((section, index) => index < 3);
  return (
    <div className={css.FeaturedContainer}>
    <div className={css.Background}>
      <span>Gemini</span>
    </div>
      <div className={css.FeaturedWrapper}>
        <div className={`${css.FeaturedCards} ${css.TabCards}`}>
          {(data || []).map((section) => (
            <div className={css.FeaturedCard} key={section.id}>
              <img
                src={section.image.data.attributes.url}
                alt={section.image.data.attributes.alternativeText}
              />
              <h3 className={css.Head1}>{section.heading1}</h3>
              <h4 className={css.Head2}>{section.heading2}</h4>
              <span className={css.Desc}>{section.description}</span>
            </div>
          ))}
        </div>
        <div className={`${css.FeaturedCards} ${css.MobileCards}`}>
          {filterMobile().map((section) => (
            <div className={css.FeaturedCard} key={section.id}>
              <img
                src={section.image.data.attributes.url}
                alt={section.image.data.attributes.alternativeText}
              />
              <h3 className={css.Head1}>{section.heading1}</h3>
              <h4 className={css.Head2}>{section.heading2}</h4>
              <span className={css.Desc}>{section.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
