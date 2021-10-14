import React from "react";

import classes from "./style.module.css";

const Button = ({ type, children }) => {
  return (
    <button type={type} className={classes.button}>
      {children}
    </button>
  );
};

export default Button;
