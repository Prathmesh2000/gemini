import React, { useState, useEffect } from "react";
import css from "./index.module.css";

const ImageGallery = ({ data }) => {
  return (
    <div className={css.galleryWrapper}>
      <div className={css.textWrapper}>
        <div className={css.title}>GALLERY</div>
        <div className={css.heading}>An evolving culture</div>
        <img src="./careers-2.svg" alt="dots" className={css.dots} />
      </div>
      {/* <Gallery photos={photos} direction={"row"} /> */}
      <div className={css.gridcontainer}>
        <div className={`${css.griditem} ${css.item1}`}>
          <img
            src={data.data[0].attributes.url}
            alt="ïmg"
            className={css.image}
          />
        </div>
        <div className={`${css.griditem} ${css.item2}`}>
          <img
            src={data.data[1].attributes.url}
            alt="ïmg"
            className={css.image}
          />
        </div>
        <div className={`${css.griditem} ${css.item3}`}>
          <img
            src={data.data[2].attributes.url}
            alt="ïmg"
            className={css.image}
          />
        </div>
        <div className={`${css.griditem} ${css.item4}`}>
          <img
            src={data.data[3].attributes.url}
            alt="ïmg"
            className={css.images}
          />
        </div>
        <div className={`${css.griditem} ${css.item5}`}>
          <img
            src={data.data[4].attributes.url}
            alt="ïmg"
            className={css.image}
          />
        </div>
        <div className={`${css.griditem} ${css.item6}`}>
          <img
            src={data.data[5].attributes.url}
            alt="ïmg"
            className={css.image}
          />
        </div>
        <div className={`${css.griditem} ${css.item7}`}>
          <img
            src={data.data[6].attributes.url}
            alt="ïmg"
            className={css.image}
          />
        </div>
        <div className={`${css.griditem} ${css.item8}`}>
          <img
            src={data.data[7].attributes.url}
            alt="ïmg"
            className={css.image}
          />
        </div>
        <div className={`${css.griditem} ${css.item9}`}>
          <img
            src={data.data[8].attributes.url}
            alt="ïmg"
            className={css.image}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
