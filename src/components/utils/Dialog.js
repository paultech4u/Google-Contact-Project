import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles'

import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField,
  Button
} from "@material-ui/core";

/**
 *
 * @param {object} props component props
 * 
 */

 const useStyles = makeStyles( ()=>({
    label: {
        textTransform: 'none'
    },
    textField: {
      width: '300px',
    }
 }))

function SimpleDialog(props) {
  const { title, open, ...others} = props;
  const classes = useStyles();
  return (
    <Dialog open={open} {...others} aria-labelledby='simple-dialog-title'>
      <DialogTitle id='form-dialog-title'>{title}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          className={classes.textField}
        />
      </DialogContent>
      <DialogActions>
        <Button className={classes.label} onClick={props.Click} color='primary'>
           Cancel
        </Button>
        <Button className={classes.label}  color='primary'>
           Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};

export default SimpleDialog;