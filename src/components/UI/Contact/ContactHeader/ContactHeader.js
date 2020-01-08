import React from 'react'

import classes from './ContactHeader.module.css'

 
const ContactHeader = (props) => {
    return(
        <div className={classes.items}>
          <div className={classes.name}>Name</div>
          <div className={classes.email}>Email</div>
          <div className={classes.number}>Phone number</div>
          <div className={classes.title}>Job title & company</div>
        </div>
    )
}


export default ContactHeader;