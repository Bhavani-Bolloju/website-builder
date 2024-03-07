/* eslint-disable react/prop-types */
import classes from "./DealItem.module.scss";
import Button from "../../UI/Button";

function DealItem({
  image,
  offerPercent,
  offerText,
  name,
  title,
  finalPrice,
  originalPrice
}) {
  return (
    <div className={classes["deal"]}>
      <div className={classes["deal__image"]}>
        <img src={image} alt="deal" />
      </div>
      <div className={classes["deal__offer"]}>
        <span>{offerPercent}% off</span>
        <span>{offerText}</span>
      </div>
      <h4 className={classes["deal__name"]}>{name}</h4>
      <p className={classes["deal__title"]}>{title}</p>
      <p className={classes["deal__pricing"]}>
        <span className={classes["deal__final-price"]}>{finalPrice}</span>
        <span className={classes["deal__original-price"]}>{originalPrice}</span>
        <span className={classes["deal__offer-percentage"]}>
          ({offerPercent}% offer)
        </span>
      </p>

      <Button>view deal</Button>
    </div>
  );
}

export default DealItem;
