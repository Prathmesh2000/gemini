import React from "react";
import css from "./index.module.css";

export default function index({ data }) {
  // TODO:
  const filterMobile = () => (data.Cards || []).filter((card, index) => index < 2);

  return (
    <div className={css.PrinciplesContainer}>
      <div className={css.PrinciplesWrapper}>
        <div className={css.Principles}>
          <div className={css.PrinciplesHead}>
            <div className={css.Title}>{data.Title}</div>
            <div className={css.Heading}>{data.Heading}</div>
            <div className={css.Desc}>{data.Description}</div>
          </div>
          <div className={`${css.PrinciplesCards} ${css.LargeScreen}`}>
            {(data.Cards || []).map((card) => (
              <div className={css.Card} key={card.id}>
                <img
                  className={css.CardImage}
                  src={card.Image.data.attributes.url}
                  alt={card.Image.data.attributes.alternativeText}
                />
                <div className={css.CardTitle}>{card.Title}</div>
                <div className={css.CardDesc}>{card.Description}</div>
              </div>
            ))}
          </div>
          <div className={`${css.PrinciplesCards} ${css.SmallScreen}`}>
            {filterMobile().map((card) => (
              <div className={css.Card} key={card.id}>
                <img
                  className={css.CardImage}
                  src={card.Image.data.attributes.url}
                  alt={card.Image.data.attributes.alternativeText}
                />
                <div className={css.CardTitle}>{card.Title}</div>
                <div className={css.CardDesc}>{card.Description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
