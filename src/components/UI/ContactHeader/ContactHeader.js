import React, { useState } from "react";

import { MoreVert, List } from "@material-ui/icons";
import classes from "./ContactHeader.module.css";
import Tooltips from "../../DataDisplay/tooltip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  card: {
    position: "fixed",
    top: "106px",
    left: "1000px",
    maxHeight: "96px",
    maxWidth: "256px",
    backgroundColor: "white",
    border: 0,
    borderRadius: "2px",
    boxShadow:
      "0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2)",
    boxSizing: "border-box",
    opacity: 1,
    outline: "1px solid transparent",
    zIndex: 2000
  },
  Label1: {
    marginBottom: "20px"
  }
}));

function ContactHeader(props) {
  const Styles = useStyles();
  const [open, setOpen] = useState(false);
  const HandlePopperOpen = () => {
    setOpen(!open);
  };
  const popper =
    Display === false ? null : (
      <div className={[Styles.card, classes.card2].join(" ")}>
        <div
          style={{
            maxHeight: "96px",
            maxWidth: "256px",
            overflowY: "auto",
            overflowX: "hidden"
          }}>
          <div
            style={{
              minWidth: "256px",
              width: "256px",
              height: "auto",
              padding: "8px 0",
              float: "left"
            }}>
            <span>
              <div>
                <span style={{ display: "inline-block" }}>
                  <List />
                </span>
              </div>
              <div>
                <div>Change density</div>
              </div>
            </span>
          </div>
        </div>
      </div>
    );
  return (
    <div className={classes.row}>
      <div className={classes.nameCol}>Name</div>
      <div className={classes.numberCol}>Phone number</div>
      <div className={classes.emailCol}>Email</div>
      <div className={classes.titleCol}>Job title & company</div>
      <div
        className={[classes.morevert1, classes.morevert2].join(" ")}
        onClick={HandlePopperOpen}>
        <Tooltips title='List setting'>
          <div className={classes.MoreIcon}>
            <span style={{ lineHeight: "44px", position: "relative" }}>
              <span style={{ display: "inline-block" }}>
                <MoreVert style={{ width: "20px", height: "20px" }} />
              </span>
            </span>
          </div>
        </Tooltips>
        { popper }
      </div>
    </div>
  );
}

export default ContactHeader;
