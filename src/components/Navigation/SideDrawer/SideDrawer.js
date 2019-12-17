import React from "react";

import classes from "./SideDrawer.module.css";
import Card from "../../Card/card";

const SideDrawer = props => {
  return (
    <div  
    style={{visibility: props.show ? 'visible' : 'hidden'}}>
      <div className={classes.Card}>
        <a href="#jalj">
          <Card card={classes.Contact_add}>
            <span>Create Contact</span>
          </Card>
        </a>
      </div>
      <div className={classes.Card}>
        <span>Import</span>
        <span>Export</span>
        <span>Print</span>
      </div>
      <div className={classes.Card}>
        <span>Import</span>
        <span>Export</span>
        <span>Print</span>
      </div>
      <span>Other Contact</span>
    </div>
  );
};

export default SideDrawer;
