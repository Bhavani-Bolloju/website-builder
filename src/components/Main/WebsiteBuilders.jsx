// import React from "react";
import image from "../../assets/builder-img.svg";
import stars from "../../assets/rating-stars.svg";
import bestChoice from "../../assets/best-choice.svg";
import bestValue from "../../assets/best-value.svg";
import WebsiteBuilderItem from "./WebsiteBuilderItem";
// import
import classes from "./WebsiteBuilders.module.scss";

function WebsiteBuilders() {
  return (
    <div className={classes.builders}>
      {/* <div className={classes["builders"]}>
        <div className={classes["builder__serial-num"]}>1</div>
        <div className={classes["builder__image"]}>
          <img src={image} alt="builder" />
          <p>Builder 1</p>
        </div>
        <div className={classes["builder__content"]}>
          <p>
            <span className={classes["builder__content--title"]}>
              WixPro 72-Inch Responsive Website Builder
            </span>
            - Comprehensive Digital Platform Creation Tool, Streamlined Design
            Interface for Professional Websites and Online Stores (Black/Blue)
          </p>
          <h3 className={classes["builder__content--highlights"]}>
            Main highlights
          </h3>
          <p className={classes["builder__highlight-text"]}>
            [What You Get]: Receive the WixPro website builder suite, access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-step guides.
          </p>
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
          <div>9.8</div>
          <div>Exceptional</div>
          <div>
            <img src={stars} alt="stars" />
          </div>
        </div>
        <button className={classes["builder__view-more"]}>view more</button>

        <div className={classes["tag"]}>
          <img src={bestChoice} alt="" />
          <span>best choice</span>
        </div>
      </div> */}
      <WebsiteBuilderItem
        serialNum="1"
        builderImage={image}
        builderName="builder 1"
        ratingStars={stars}
        tagImage={bestChoice}
        tagTitle="Best choice"
        ratingNum="9.8"
        ratingDescription="Exceptional"
        contentTitle="WixPro 72-Inch Responsive Website Builder-"
        contentText="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
        highlightsText="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
      />
      <WebsiteBuilderItem
        serialNum="2"
        builderImage={image}
        builderName="builder"
        ratingStars={stars}
        tagImage={bestValue}
        tagTitle="Best value"
        ratingNum="9.5"
        ratingDescription="Excellent"
        contentTitle="SiteCraft 68-Inch Ultimate Web Design Studio-"
        contentText="Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"
        highlightsText="[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
      />
      <WebsiteBuilderItem
        serialNum="3"
        builderImage={image}
        builderName="builder"
        ratingStars={stars}
        tagImage=""
        tagTitle=""
        ratingNum="9.3"
        ratingDescription="Exceptional"
        contentTitle="WixPro 72-Inch Responsive Website Builder-"
        contentText=" Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
        highlightsText="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
      />
      <WebsiteBuilderItem
        serialNum="4"
        builderImage={image}
        builderName="CDK"
        ratingStars={stars}
        tagImage=""
        tagTitle=""
        ratingNum="9.1"
        ratingDescription="very good"
        contentTitle="CDK Resposive Builder:"
        contentText="An extensive library of widgets and apps, and detailed step-by-step guides"
        highlightsText=""
      />
    </div>
  );
}

export default WebsiteBuilders;
