import React from 'react';
import './CustomTitle.scss';

const CustomTitle = props => {
    const { text } = props;
    return (
        <div>
            <h1 className="custom-title">{text}</h1>
        </div>
    );
};

export default CustomTitle;