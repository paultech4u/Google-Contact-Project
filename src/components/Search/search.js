import React, {Component} from "react";


import searchIcon from '../../assets/svg/search-solid.svg'
import classes from "./search.module.css";
import Input from "../Input/Input";


class SearchInput extends Component{
  render(){
    return (
      <div className={classes.leftInnerAddon}>
      <Input type="input" placeholder='Search' />
       <a href='#afd'><img role="img" src={searchIcon} alt='' aria-hidden='false'/></a>
     </div>
    );
  }
  
};

export default SearchInput;
