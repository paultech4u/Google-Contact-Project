import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContactHeader from "../UI/ContactHeader/ContactHeader";
import ContactList from "../UI/ContactList";

const useStyles = makeStyles(() => ({
  label: {
    letterSpacing: ".07272727em",
    fontFamily: "Roboto,Arial,sans-serif",
    fontSize: ".6875rem",
    fontWeight: 500,
    lineHeight: "1rem",
    textTransform: "uppercase",
    color: "#5f6368",
    display: "flex",
    padding: "10px 0 10px 10px",
    maxHeight: "20px"
  },
  list: {
    position: "relative",
    overflow: "hidden",
    height: '98vh',
    overflowY: 'auto'
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1
  }
}));

const Contact = (props) => {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.header}>
        <ContactHeader />
      </div>
      <div>
        <div className={styles.label}>
          Contacts&nbsp;
          <span>(40)</span>
        </div>
      </div>
      <div className={styles.list}>
        <ContactList />
      </div>
    </div>
  );
};

export default Contact;
