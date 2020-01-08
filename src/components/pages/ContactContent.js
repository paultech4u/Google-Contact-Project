import React from "react";
import Aux from "../../hoc/Aux"
import { makeStyles } from '@material-ui/core/styles'
import ContactList from "./ContactList";

const useStyles = makeStyles(() => ({
  label: {
    letterSpacing: '.07272727em',
    fontFamily: 'Roboto,Arial,sans-serif',
    fontSize: '.6875rem',
    fontWeight: 500,
    lineHeight: '1rem',
    textTransform: 'uppercase',
    color: '#5f6368',
    display: 'flex',
    padding: '10px 0 10px 10px',
    maxHeight: '20px'
  },
  list: {
    position: 'relative',
    overflow: 'hidden',
  }
}))


const ContactContent = (props) => {
  const styles = useStyles();
  return (
    <Aux>
      <div className={styles.label}>
        Contacts&nbsp;
        <span>(40)</span>
      </div>
      <div className={styles.list} style={{ height: "4144px" }}>
        <div  style={{height: '56px'}}>
          <ContactList/>
        </div>
      </div>
    </Aux>
  );
};

export default ContactContent;
