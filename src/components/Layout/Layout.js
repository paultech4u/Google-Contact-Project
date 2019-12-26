import React, { Component } from "react";

import classes from "./Layout.module.css";
import Nav from "../Navigation/NavigationItems/NavigationItems";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }
  onCloseSideDrawer = () => {
    this.setState({ visible: true });
  };
  onOpenSideDrawer = () => {
    this.setState({ visible: !this.state.visible });
  };
  render() {
    return (
        <nav>
          <div>
            <Nav
              MenuClick={
                this.state.visible === true
                  ? this.onOpenSideDrawer
                  : this.onCloseSideDrawer
              }
            />
          </div>
          <div className={classes.Drawer}>
            <SideDrawer show={this.state.visible} />
          </div>
        </nav>
    );
  }
}

export default Layout;
