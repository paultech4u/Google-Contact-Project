import React, {Component} from "react";

import classes from "./Layout.module.css";
import Header from "../Navigation/NavigationItems/Navigation";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class  Layout extends  Component{
  constructor(props){
    super(props);
    this.state = {
      visible: true
    }
  }
  onCloseSideDrawer = () => {
    this.setState({visible: true})
  }
  onOpenSideDrawer = () => {
   this.setState({visible: !this.state.visible})
  }
  render(){
    return (
      <div>
        <header>
          <Header MenuClick={this.state.visible ===  true ? this.onOpenSideDrawer : this.onCloseSideDrawer}/>
        </header>
        <main className={classes.main}>
          <div className={classes.bld}>
            <div className={classes.name}>Name</div>
            <div className={classes.email}>Email</div>
            <div className={classes.email}>Email</div>
            <div className={classes.email}>Email</div>
          </div>
          <div className={classes}>
            <SideDrawer show={this.state.visible}/>
          </div>
        </main>
      </div>
    );
  }
};

export default Layout;
