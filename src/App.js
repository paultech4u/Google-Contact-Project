import React from 'react'
import classes from "./App.module.css";
import Layout from '../src/components/Layout/Layout'

function App(){ 
    return (
      <div className={classes.App}>
          <Layout/>
      </div>
     
    );
  }

export default App;
