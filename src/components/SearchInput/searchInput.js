import React, {Component} from "react";

import classes from "./searchInput.module.css";
import SearchIcon from '@material-ui/icons/Search';
import Input from "../Input/Input";


class SearchInput extends Component{
  render(){
    return (
      <div className={classes.leftInnerAddon}>
      <Input type="input" placeholder='Search' />
       <a href='kjak' className={classes.icon}><SearchIcon className={classes.svg}/></a>
     </div>
    );
  }
  
};

export default SearchInput;
