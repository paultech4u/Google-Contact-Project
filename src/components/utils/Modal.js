import React from 'react'
import {
 makeStyles,
 Modal 
 } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  name: {
    background: theme.overrides()
  }
}))

function Mod(props) {
    return(
        <Modal>
            <h1>Am a modal</h1>
        </Modal>
    )
}