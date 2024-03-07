// import React from "react";

import WebsiteBuilders from "./WebsiteBuilders";
import Deals from "./Deals";
import classes from "./MainSection.module.scss";

function MainSection() {
  return (
    <div className={classes.main}>
      <WebsiteBuilders />
      <Deals />
    </div>
  );
}

export default MainSection;
