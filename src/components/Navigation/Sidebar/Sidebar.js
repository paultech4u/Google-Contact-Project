import React, { useState } from 'react'
import { Link } from "react-router-dom";

import classes from "./Sidebar.module.css";
import SimpleDialog from '../../utils/Dialog'
import {
 PersonOutline,
 Restore,
 Filter,
 ExpandLess,
 ExpandMore,
 Add,
 LabelOutlined,
 ArchiveOutlined ,
 CloudDownloadOutlined,
 PrintOutlined, 
} from '@material-ui/icons';



function SideBar(){
    const [label, setLabel] = useState(true)
    const [open, setOpen] = useState(false)
    function HandleOpen(){
        setLabel(!label)
    }
    function HandleDialog(){
      setOpen(!open)
    }
    return(
        <div className={classes.side}>
        <div className={classes.sideDrawer}>
          <div className={classes.sidebar} role='menu'>
            <div className={classes.XYZ}>
              <div className={classes.contactAdd}>
                <div>
                  <button className={classes.button}>
                    <span style={{ color: "#3c4043" }}>Create contact</span>
                  </button>
                </div>
              </div>
            </div>
            <div className={classes.label}>
              <Link to='/' className={classes.contact}>
                <span className={classes.personOutline}>
                  <PersonOutline
                    className={classes.personIcon}
                    style={{ width: "20px", height: "20px" }}
                  />
                </span>
                <span className={classes.contactLabel}>Contacts</span>
                <span>10</span>
              </Link>
            </div>
            <div className={classes.label}>
              <a href='#frequent'>
                <span className={classes.personOutline}>
                  <Restore
                    className={classes.personIcon}
                    style={{ width: "20px", height: "20px" }}
                  />
                </span>
                <span className={classes.contactLabel}>
                  Frequently contacted
                </span>
              </a>
            </div>
            <div className={classes.label}>
              <a href='#contacts'>
                <span className={classes.personOutline}>
                  <Filter
                    className={classes.personIcon}
                    style={{ width: "20px", height: "20px" }}
                  />
                </span>
                <span className={classes.contactLabel}>Duplicates</span>
              </a>
            </div>
            <hr />
            <div className={classes.label} onClick={label ? HandleOpen : HandleOpen}>
              <Link role='button' to>
                <span className={classes.personOutline}>
                  { label ? (
                    <ExpandLess className={classes.personIcon} />
                  ) : (
                    <ExpandMore className={classes.personIcon} />
                  )}
                </span>
                <span className={classes.contactLabel}>Labels</span>
              </Link>
            </div>
            <div className={label ? null : classes.closeShow}>
              <div className={classes.label}>
                <Link to='/label'>
                  <span className={classes.personOutline}>
                    <LabelOutlined
                      className={classes.personIcon}
                      style={{ width: "20px", height: "20px" }}
                    />
                  </span>
                  <span className={classes.contactLabel}>Families</span>
                </Link>
              </div>
              <div className={classes.label}>
                <a href='#contacts' onClick={HandleDialog}>
                  <span className={classes.personOutline}>
                    <Add
                      className={classes.personIcon}
                      style={{ width: "20px", height: "20px" }}
                    />
                  </span>
                  <span className={classes.contactLabel}>Create label</span>
                </a>
                <SimpleDialog 
                    title="Create label"
                    label=''
                    open={open} 
                    Click={HandleDialog}
                   />
              </div> 
            </div>
            <hr />
            <div className={classes.label}>
              <a href='#contacts'>
                <span className={classes.personOutline}>
                  <PersonOutline
                    className={classes.personIcon}
                    style={{ width: "20px", height: "20px" }}
                  />
                </span>
                <span className={classes.contactLabel}>Imports</span>
              </a>
            </div>
            <div className={classes.label}>
              <a href='#contacts'>
                <span className={classes.personOutline}>
                  <CloudDownloadOutlined
                    className={classes.personIcon}
                    style={{ width: "20px", height: "20px" }}
                  />
                </span>
                <span className={classes.contactLabel}>Exports</span>
              </a>
            </div>
            <div className={classes.label}>
              <a href='#contacts'>
                <span className={classes.personOutline}>
                  <PrintOutlined
                    className={classes.personIcon}
                    style={{ width: "20px", height: "20px" }}
                  />
                </span>
                <span className={classes.contactLabel}>Prints</span>
              </a>
            </div>
            <hr />
            <div className={classes.label}>
              <a href='#contacts'>
                <span className={classes.personOutline}>
                  <ArchiveOutlined
                    className={classes.personIcon}
                    style={{ width: "20px", height: "20px" }}
                  />
                </span>
                <span className={classes.contactLabel}>Other contacts</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )

}

export default SideBar