import React from "react";

import classes from './tooltips.module.css'

const Tooltip = props => {
  return(
    <div className={classes.tooltip}>
      {props.children}
      <span className={classes.tooltiptext}>{props.value}</span>
    </div>
  );
};


export default Tooltip;