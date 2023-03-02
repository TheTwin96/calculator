import React from 'react';
import '../style_sheets/Button_Clear.css'

const Button_Clear = (props) => (
    <div className="button_clear">
        { props.children }
    </div>
);

export default Button_Clear;