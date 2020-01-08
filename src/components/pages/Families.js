import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  label: {
    textAlign: "center"
  },
  text: {
    lineHeight: "2rem",
    color: "#202124",
    font: "400 16px/24px Roboto,RobotoDraft,Helvetica,Arial,sans-serif",
    padding: "32px 0 20px"
  },
  items: {
    alignItems: "center",
    display: "flex",
    height: "calc(100vh - 104px)",
    justifyContent: "center"
  }
}));

const Families = (props) => {
  const styles = useStyles();
  return (
    <div className={styles.items}>
      <div className={styles.label}>
        {/* <div className={classes.images}>
          <img src={require("../../assets/img/images.png")} alt='families' />
        </div> */}
        <div className={styles.text}>No contacts with this label</div>
      </div>
    </div>
  );
};

export default Families;
