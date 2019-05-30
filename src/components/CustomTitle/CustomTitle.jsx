import React from 'react';
import './CustomTitle.scss';

const CustomTitle = props => {
    return(
        <div className="bellotero-title">
                <h1>{props.text}</h1>
        </div>
    );
};

export default CustomTitle;