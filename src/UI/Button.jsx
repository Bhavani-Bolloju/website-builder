import classes from "./Button.module.scss";

function Button(props) {
  // eslint-disable-next-line react/prop-types
  return <button className={classes.btn}>{props.children}</button>;
}

export default Button;
