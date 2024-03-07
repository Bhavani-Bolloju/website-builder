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
