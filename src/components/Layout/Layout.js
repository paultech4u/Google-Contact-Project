import React from "react";
import { BrowserRouter as Router , Route as RouteLink } from "react-router-dom";
import Aux from "../../hoc/Aux";
import { makeStyles } from '@material-ui/core/styles'

import Nav from "../Navigation/NavigationItems/NavigationItems";
import ContactDisplay from "../UI/Contact/ContactDisplay";
import SideBar from "../Navigation/Sidebar/Sidebar";
import Families from "../pages/Families"

const useStyles = makeStyles(() => ({
  nav: {
    height: '64px',
  },
  main: {
    marginLeft: '280px',
    flex: 1,
    overflowY: 'auto',
    zIndex: 1,
}
}))

export default function Layout(props){
  const styles = useStyles()
  return (
    <Aux>
      <Router>
          <header className={styles.nav}>
            <Nav />
            <SideBar />
          </header>
          <main className={styles.main}>
            <div>
              <RouteLink exact path='/' component={ContactDisplay}/>
              <RouteLink  path='/label' component={Families}/>
            </div>
          </main>
      </Router>
    </Aux>
  );
};

// export default Layout;
