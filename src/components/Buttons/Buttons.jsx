import React from 'react';
import './Buttons.css'

const Buttons = (props) => {
    return (
        <button {...props} className={'button' + props.className}/>
    );
};

export default Buttons;