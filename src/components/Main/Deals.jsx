// import React from "react";

import image from "../../assets/builder-img.svg";
import DealItem from "./DealItem";
import classes from "./Deals.module.scss";

function Deals() {
  return (
    <div className={classes.deals}>
      <h2 className={classes["deals__heading"]}>
        Related deals you might like for
      </h2>
      <div className={classes["deals__list"]}>
        {/* <div className={classes["deal__item"]}>
          <div className={classes["deal__image"]}>
            <img src={image} alt="deal" />
          </div>
          <div className={classes["deal__offer"]}>
            <span>20% Off</span>
            <span>Limited time</span>
          </div>
          <h4 className={classes["deal__name"]}>Webbuilder 1</h4>
          <p className={classes["deal__title"]}>
            computer modern classic with wix support
          </p>
          <p className={classes["deal__pricing"]}>
            <span className={classes["deal__final-price"]}>$39.96</span>
            <span className={classes["deal__original-price"]}>$49.96</span>
            <span className={classes["deal__offer-percentage"]}>
              (20% offer)
            </span>
          </p>

          <Button>view deal</Button>
        </div> */}
        <DealItem
          image={image}
          offerPercent="20"
          offerText="limited offer"
          name="Webbuilder 1"
          title="Computer  Modern clasic with wix support"
          finalPrice="39.96"
          originalPrice="49.96"
        />
        <DealItem
          image={image}
          offerPercent="20"
          offerText="limited offer"
          name="Webbuilder 1"
          title="Computer  Modern clasic with wix support"
          finalPrice="39.96"
          originalPrice="49.96"
        />
        <DealItem
          image={image}
          offerPercent="20"
          offerText="limited offer"
          name="Webbuilder 1"
          title="Computer  Modern clasic with wix support"
          finalPrice="39.96"
          originalPrice="49.96"
        />
      </div>
    </div>
  );
}

export default Deals;
