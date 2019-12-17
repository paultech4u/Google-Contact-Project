import React from 'react';

// import styles from './input.module.css'
import Aux from '../../hoc/hoc'
const Input = (props) => {
    let inputElement = null;
    switch (props.type) {
        case ('input'):
            inputElement = <input  {...props} />
            break;
        case ('button'):
            inputElement = <button {...props}/>
            break;
        default:
            break;
    }
    return(
        <Aux>
            {inputElement}
        </Aux>
             
    )
}

export default Input;