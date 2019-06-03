import React from 'react';
import Slider from 'rc-slider';
import './RangeSlider.scss';
import 'rc-slider/assets/index.css';

const RangeSlider = props => {
    const { min, max, handleOnChange, defaultValue, value} = props;
    return (
        <Slider
            defaultValue={Number(defaultValue)} 
            min={min}
            max={max}
            onChange={handleOnChange}
            value={Number(value)}
        />
    );
};

export default RangeSlider;