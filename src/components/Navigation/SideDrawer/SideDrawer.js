import React, { useState } from "react";

import classes from "./SideDrawer.module.css";
import Card from "../../Card/card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import RestoreIcon from "@material-ui/icons/Restore";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";
import FilterNoneOutlinedIcon from "@material-ui/icons/FilterNoneOutlined";
import PrintOutlinedIcon from "@material-ui/icons/PrintOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";

const useStyles = makeStyles(theme => ({
  items: {
    padding: "0",
    height: 37,
    width: 370
  },
  label: {
    color: "#202124",
    opacity: 1,
    letterSpacing: ".01785714em",
    fontFamily: "Google Sans Roboto,Arial,sans-serif",
    fontSize: ".2rem",
    fontWeight: 500,
    lineHeight: "1.25rem"
  }
}));

let label1 = [
  { Icon: PersonOutlineIcon, name: "Contacts" },
  { Icon: RestoreIcon, name: "Frequently contacted" },
  { Icon: FilterNoneOutlinedIcon, name: "Duplicates" }
];
let label2 = [
  { Icon: AddIcon, name: "Families" },
  { Icon: LabelOutlinedIcon, name: "Create label" }
];

let label3 = [
  { Icon: PersonOutlineIcon, name: "Import" },
  { Icon: CloudDownloadOutlinedIcon, name: "Exports" },
  { Icon: PrintOutlinedIcon, name: "Prints" }
];

const SideDrawer = props => {
  const Styles = useStyles();
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const drawer = (
    <div style={{ 
      visibility: props.show ? "visible" : "hidden"}}>
      <div className={classes.Contact_Card}>
        <a href="#jalj">
          <Card card={classes.Contact_add}>
            <span>Create Contact</span>
          </Card>
        </a>
      </div>
        <div className={classes.sideMain}>
          <div>
            {label1.map(({ Icon, name }) => (
              <div className={classes.labelTrans}>
                <List className={Styles.items} key={name} >
                  <ListItem>
                    <ListItemIcon style={{ minWidth: "45px" }}>
                      <Icon style={{fontSize: 20}} />
                    </ListItemIcon>
                    <ListItemText className={Styles.label}>{name}</ListItemText>
                  </ListItem>
                </List>
              </div>
            ))}
          </div>
          <Divider
            style={{ width: 260, marginTop: "10px", marginBottom: "5px" }}
          />
          <div>
            <div className={classes.labelTrans}>
              <ListItem style={{ height:20, paddingTop: '20px', paddingBottom: '10px' }} onClick={handleClick}>
                <ListItemIcon style={{ minWidth: "47px" }}>
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemIcon>
                <ListItemText className={Styles.label}>Labels</ListItemText>
              </ListItem>
            </div>
            <Collapse in={open} timeout="auto" unmountOnExit>
              {label2.map(({ Icon, name }) => (
                <div className={classes.labelTrans}>
                  <List className={Styles.items} key={name}>
                    <ListItem>
                      <ListItemIcon style={{ minWidth: "45px" }}>
                        <Icon style={{fontSize: 20}} />
                      </ListItemIcon>
                      <ListItemText className={Styles.label}>
                        {name}
                      </ListItemText>
                    </ListItem>
                  </List>
                </div>
              ))}
            </Collapse>
          </div>
          <Divider
            style={{ width: 260, marginTop: "10px", marginBottom: "4px" }}
          />
          <div>
            {label3.map(({ Icon, name }) => (
              <div className={classes.labelTrans}>
                <List className={Styles.items} key={name}>
                  <ListItem>
                    <ListItemIcon style={{ minWidth: "45px" }}>
                      <Icon style={{fontSize: 20}} />
                    </ListItemIcon>
                    <ListItemText className={Styles.label}>{name}</ListItemText>
                  </ListItem>
                </List>
              </div>
            ))}
          </div>
          <Divider
            style={{ width: 260, marginTop: "10px", marginBottom: "4px" }}
          />
          <div className={classes.labelTrans}>
            <ListItem>
              <ListItemIcon style={{ minWidth: "45px" }}>
                <ArchiveOutlinedIcon style={{fontSize: 20}} />
              </ListItemIcon>
              <ListItemText className={Styles.label}>
                Other contact
              </ListItemText>
            </ListItem>
          </div>
        </div>
      </div>
  );
  return <div>{drawer}</div>;
};

export default SideDrawer;
