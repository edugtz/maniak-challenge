import React from 'react';
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Savings.scss';

const Savings = props => {
    const { amount, description } = props;
    return (
        <div>
            <span className="spending-estimation-icon"><FontAwesomeIcon icon={faDollarSign} /></span>
            <span className="spending-estimation">{amount}</span>
            <p className="spending-estimation-description">{description}</p>
        </div>
    );
};

export default Savings;