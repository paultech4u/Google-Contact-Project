import React, { Component } from "react";

import Avatar from "@material-ui/core/Avatar";
import table from "./ContactList.module.css";

function ContactDetails() {
  return (
    <React.Fragment>
      <div className={table.row}>
        <div className={table.avatarCell}>
          <Avatar>P</Avatar>
        </div>
        <div className={table.nameCell}>
          <span>Paulsimon</span>    
        </div>
        <div className={table.numberCell}>
          <span>08052412415</span>
        </div>
        <div className={table.emailCell}></div>
        <div className={table.titleCell}></div>
      </div>
    </React.Fragment>
  );
}

export default ContactDetails;
