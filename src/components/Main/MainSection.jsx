// import React from "react";

import WebsiteBuilders from "./WebsiteBuilders";
import Deals from "./Deals";
import classes from "./MainSection.module.scss";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "../../UI/Button";

function MainSection() {
  return (
    <div className={classes.main}>
      <WebsiteBuilders />
      <Deals />
      <div className={classes["subscribe"]}>
        <h2 className={classes["subscribe__title"]}>
          Sign up and get exclusive special deals
        </h2>
        <InputGroup>
          <Form.Control
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button>Sign Up</Button>
        </InputGroup>
      </div>
    </div>
  );
}

export default MainSection;
