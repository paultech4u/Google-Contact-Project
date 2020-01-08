import React from 'react';

// import styles from './input.module.css'

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
        <div>
            {inputElement}
        </div>
             
    )
}

export default Input;