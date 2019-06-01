import React from 'react';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Arrows.scss';

const Arrows = props => {
    return (
        <div className="arrows-container">
            <span className="review-arrow" onClick={e => props.handleGoToPreviousReview(e)}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </span>
            <span className="review-arrow" onClick={e => props.handleGoToPreviousReview(e)}>
                <FontAwesomeIcon icon={faArrowRight} />
            </span>
        </div>
    );
};

export default Arrows;