/* eslint-disable react/prop-types */
// import React from 'react'

import classes from "./WebsiteBuilderItem.module.scss";

function WebsiteBuilderItem({
  serialNum,
  builderImage,
  builderName,
  ratingStars,
  tagImage,
  tagTitle,
  ratingNum,
  ratingDescription,
  contentTitle,
  contentText,
  highlightsText
}) {
  return (
    <div className={classes["builder"]}>
      <div className={classes["builder__serial-num"]}>{serialNum}</div>
      <div className={classes["builder__image"]}>
        <img src={builderImage} alt="builder" />
        <p>{builderName}</p>
      </div>
      <div className={classes["builder__content"]}>
        <p>
          <span className={classes["builder__content--title"]}>
            {contentTitle}
          </span>
          {contentText}
        </p>
        <h3 className={classes["builder__content--highlights"]}>
          Main highlights
        </h3>
        <p className={classes["builder__highlight-text"]}>{highlightsText}</p>
      </div>
      <button className={classes["builder__show-more"]}>
        <span>Show more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <div className={classes["builder__rating"]}>
        <div>{ratingNum}</div>
        <div>{ratingDescription}</div>
        <div>
          <img src={ratingStars} alt="stars" />
        </div>
      </div>
      <button className={classes["builder__view-more"]}>view more</button>

      <div className={classes["tag"]}>
        <img src={tagImage} alt={tagTitle} />
        <span>{tagTitle}</span>
      </div>
    </div>
  );
}

export default WebsiteBuilderItem;
