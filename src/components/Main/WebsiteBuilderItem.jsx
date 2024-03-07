/* eslint-disable react/prop-types */
// import React from 'react'

import tick from "../../assets/tick.svg";
import Button from "../../UI/Button";
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
    <>
      {tagTitle !== "" && tagImage !== "" && (
        <div className={classes["tag"]}>
          <img src={tagImage} alt={tagTitle} />
          <span>{tagTitle}</span>
        </div>
      )}

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
          {highlightsText === "" && <p>26% off</p>}
          <h3 className={classes["builder__content--highlights"]}>
            Main highlights
          </h3>
          {highlightsText !== "" && (
            <p className={classes["builder__highlight--text"]}>
              {highlightsText}
            </p>
          )}
          {highlightsText === "" && (
            <div className={classes["builder__highlight--container"]}>
              <ul className={classes["builder__highlight--list"]}>
                <li>
                  <span>9.9</span>
                  <span>building responsive</span>
                </li>
                <li>
                  <span>8.9</span>
                  <span>cool</span>
                </li>
                <li>
                  <span>7.9</span>
                  <span>docs</span>
                </li>
              </ul>
              <div className={classes["builder__highlight--infolist"]}>
                <p>why do we love</p>
                <ul>
                  <li>
                    <img src={tick} alt="tick" />
                    <span>documentation</span>
                  </li>
                  <li>
                    <img src={tick} alt="tick" />
                    <span>easy use</span>
                  </li>
                  <li>
                    <img src={tick} alt="tick" />
                    <span>out of box</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
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
          <div className={classes["builder__rating--num"]}>{ratingNum}</div>
          <div className={classes["builder__rating--description"]}>
            {ratingDescription}
          </div>
          <div>
            <img src={ratingStars} alt="stars" />
          </div>
        </div>
        <Button>view more</Button>

        {/* {tagTitle !== "" && tagImage !== "" && (
        <div className={classes["tag"]}>
          <img src={tagImage} alt={tagTitle} />
          <span>{tagTitle}</span>
        </div>
      )} */}
      </div>
    </>
  );
}

export default WebsiteBuilderItem;
