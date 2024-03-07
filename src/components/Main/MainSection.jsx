import WebsiteBuilders from "./WebsiteBuilders";
import Deals from "./Deals";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "../../UI/Button";

import clock from "../../assets/clock.svg";
import disclosure from "../../assets/disclosure.svg";

import classes from "./MainSection.module.scss";

function MainSection() {
  return (
    <section className={classes.main}>
      <div className={classes["last-updated"]}>
        <div>
          <img src={clock} alt="clock" />
          <span>Last Updated - February 22, 2020</span>
        </div>
        <div>
          <img src={disclosure} alt="disclosure" />
          <span>Advertising disclosure</span>
        </div>
      </div>
      <ul className={classes.links}>
        <li>tools</li>
        <li>AWS builder</li>
        <li>start build</li>
        <li>build supplies</li>
        <li>tooling</li>
        <li>Blue Hosting</li>
      </ul>
      <div className={classes.navigation}>
        <span>Home</span>
        <span>Hosting for all</span>
        <span>Hosting</span>
        <span>Hosting5</span>
      </div>
      <WebsiteBuilders />
      <Deals />
      <div className={classes["subscribe"]}>
        <h2 className={classes["subscribe__title"]}>
          Sign up and get exclusive special deals
        </h2>
        <InputGroup>
          <Form.Control
            placeholder="Subscribe"
            aria-label="Subscribe"
            aria-describedby="basic-addon2"
          />
          <Button>Sign Up</Button>
        </InputGroup>
      </div>
    </section>
  );
}

export default MainSection;
