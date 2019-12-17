import React from "react";

import classes from "./Navigation.module.css";
import { ReactComponent as Menu } from "../../../assets/svg/menu.svg";
import { ReactComponent as Avater } from "../../../assets/svg/contact_Avater.svg";
import { ReactComponent as Helpbtn } from "../../../assets/svg/helpbtn.svg";
import SearchInput from "../../Search/search";

const Header = props => {
  return (
    <div className={classes.Header}>
      <div>
        <Menu className={classes.Menu} onClick={props.MenuClick}/>
      </div>
      <div className={classes.Avater}>
        <Avater />
        <span className={classes.label}>Contacts</span>
      </div>
      <div className={classes.Search}>
        <SearchInput/>
      </div>
      <div className={classes.Helpbtn}>
        <Helpbtn />
      </div>
    </div>
  );
};

export default Header;