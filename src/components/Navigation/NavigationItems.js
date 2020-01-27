import React from "react";
import classes from "./NavigationItems.module.css";
import Avatar from "@material-ui/core/Avatar";
import { ReactComponent as HelpIcon } from "../../assets/svg/helpbtn.svg";
import SearchInput from "../SearchInput/searchInput";
import Tooltips from "../DataDisplay/tooltip";
import { Menu, Apps, SettingsOutlined } from "@material-ui/icons";


const Nav = (props) => {
  return (
    <div className={classes.Header}>
      <div className={classes.menu} style={{ minWidth: "268px" }}>
        <Tooltips id='menu' title='Main menu' interactive>
          <div className={[classes.mainmenu, classes.hover].join(" ")} onClick={props.MenuClick}>
            <Menu />
          </div>
        </Tooltips>
        <div className={classes.icon}>
            <div className={classes.avatarIcon}>
              <a className={classes.avatar} href='#lkasj'>
                <img
                  src={require("../../assets/img/contacts.png")}
                  alt='avartar'
                  className={classes.circleIcon}
                  style={{ color: "blue", width: "40px", height: "40px" }}
                />
                <span className={classes.label}>Contacts</span>
              </a>
            </div>
        </div>
      </div>
      <div className={classes.icon2}>
        <div className={classes.Search}>
          <SearchInput />
        </div>
        <div style={{ display: "flex", flex: "1 0 auto" }}>
          <div className={classes.helpicon}>
            <div className={[classes.helpicon2, classes.hover].join(" ")}>
              <Tooltips id='help' title='Help menu'>
                <span style={{ lineHeight: "44px", position: "relative" }}>
                  <span
                    style={{
                      margin: "8px",
                      display: "inline-block",
                      lineHeight: "44px"
                    }}>
                    <HelpIcon style={{ width: "18px", height: "18px" }} />
                  </span>
                </span>
              </Tooltips>
            </div>
          </div>
          <div className={classes.setting}>
            <div className={classes.setting2}>
              <Tooltips id='settings' title='Settings menu' interactive>
                <span style={{ lineHeight: "44px", position: "relative" }}>
                  <span
                    style={{
                      margin: "9px",
                      display: "inline-block",
                      lineHeight: "44px"
                    }}>
                    <SettingsOutlined
                      style={{ width: "20px", height: "20px" }}
                    />
                  </span>
                </span>
              </Tooltips>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.icon3}>
        <div style={{ padding: "4px", paddingLeft: "0" }}>
          <div className={classes.hover} style={{ position: "relative" }}>
            <div className={classes.appicon}>
              <a href='#afsa' className={classes.appicon2}>
                <Apps
                  style={{ width: "24px", height: "24px", color: "#666666" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className={classes.avataricon}>
          <a
            href='#sfas'
            className={classes.hover}
            style={{ width: "32px", height: "32px", padding: "4px" }}>
            <Avatar style={{ width: "32px", height: "32px" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
