import React from 'react';
// import classes from './card.module.css'

const Card = (props) => {
    return(
        <div className={props.card}>
            {props.children}
        </div>
    )
}

export default Card;