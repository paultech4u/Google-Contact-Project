import React from "react";

import classes from "./NavigationItems.module.css";
import { ReactComponent as HelpIcon } from "../../../assets/svg/helpbtn.svg";
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import AppsIcon from '@material-ui/icons/Apps';
import SearchInput from "../../Search/search";




const Nav = props => {
  return (
    <div className={classes.Header}>
      <div className={classes.menuIcon}>
        <MenuIcon className={classes.Menu} onClick={props.MenuClick}/>
      </div>
      <div className={classes.AvatarIcon}>
        <AccountCircleSharpIcon style={{fontSize: 40, color: '#0000e6'}}/>
        <span className={classes.label}>Contacts</span>
      </div>
      <div className={classes.Search}>
        <SearchInput/>
      </div>
      <div className={classes.HelpIcon}>
        <HelpIcon/>
      </div>
      <div className={classes.Set}>
        <SettingsOutlinedIcon style={{fontSize: 20, color: 'grey'}}/>
      </div>
      <div className={classes.AppsIcon}>
        <AppsIcon />
      </div>
      <div className={classes.ImgAvatar}>
        <Avatar/>
      </div>
    </div>
  );
};

export default Nav;