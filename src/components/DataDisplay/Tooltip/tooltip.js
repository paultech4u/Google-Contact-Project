import React from "react";

import Tooltip from '@material-ui/core/Tooltip';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     color: 'black'
//   }
// }))

const Tooltips = (props) => {
  // const classes = useStyles();
  const {...other} = props;
  return(
      <Tooltip 
      //  classes={{
      //    root: classes.root
      //  }}
       {...other}>
        {props.children}
      </Tooltip>
  );
};


export default Tooltips;