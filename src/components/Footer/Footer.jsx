// import React from 'react'
import classes from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer__container"]}>
        <div className={classes["footer__links"]}>
          <div className={classes["footer__title"]}>catergories</div>
          <ul>
            <li>website builder</li>
            <li>hosting</li>
            <li>data center</li>
            <li>robotic-automation</li>
          </ul>
        </div>
        <div className={classes["footer__links"]}>
          <div className={classes["footer__title"]}>contact</div>
          <ul>
            <li>contact</li>
            <li>private policy</li>
            <li>terms of service</li>
            <li>catergories</li>
            <li>about</li>
          </ul>
        </div>
        <div>united states</div>
      </div>
    </footer>
  );
}

export default Footer;
