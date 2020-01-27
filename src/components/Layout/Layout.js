import React, { useState } from "react";
import { BrowserRouter as Router, Route as RouteLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Aux from "../../hoc/Aux";
import Nav from "../Navigation/NavigationItems";
import SideBar from "../Navigation/Sidebar/Sidebar";
import Families from "../pages/Families";
import Contact from "../pages/Contact";

const useStyles = makeStyles(() => ({
  nav: {
    height: "64px"
  },
  main: {
    // marginLeft: "280px",
    height: "98vh"
  }
}));

export default function Layout(props) {
  const [expand, setExpand] = useState(true);
  const HandleExpand = () => {
      setExpand(!expand) 
  };
  const styles = useStyles();
  const show = ( expand === true ? <SideBar /> : null )
  return (
    <Aux>
      <Router>
        <header className={styles.nav}>
          <Nav MenuClick={HandleExpand} />
          { show }
        </header>
        <main className={styles.main} style={{marginLeft: expand === true ? '280px' : '0'}}>
          <RouteLink exact path='/' component={Contact} />
          <RouteLink path='/label' component={Families} />
        </main>
      </Router>
    </Aux>
  );
}
