import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import ContactHeader from "./ContactHeader/ContactHeader";
import ContactContent from "../../pages/ContactContent";


const useStyles = makeStyles(() => ({
  display:{
    boxSizing: 'border-box',
    width: '100%',
    padding: '0 16px 20px',
  },
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 1,
  }
}))



export default function ContactDisplay(props){
  const styles = useStyles();
  return (
      <div className={styles.display}>
        <div className={styles.header}>
          <ContactHeader />
        </div>
        <div>
          <ContactContent />
        </div>
      </div>
  );
};

