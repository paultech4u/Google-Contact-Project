import React from 'react'
import Tooltip  from '@material-ui/core/Tooltip'

function Tooltips(props){
    const { title, placement} = props;
    return(
        <Tooltip title={title} placement={placement}>{props.children}</Tooltip>
    )
}

export default Tooltips