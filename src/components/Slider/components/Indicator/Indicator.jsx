import React from 'react';
import './Indicator.scss';

const Indicator = props => {
    const { activeIndex, total } = props;
    return (
        <div className="indicator-container">
            <span className="indicator-text">{activeIndex}/{total}</span>
        </div>
    )
};

export default Indicator;