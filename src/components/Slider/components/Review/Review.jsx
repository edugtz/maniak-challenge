import React from 'react';
import './Review.scss';

const Review = props => {
    const { review, index, activeIndex } = props;
    return (
        <div className={ index === activeIndex ? 'review active-review' : 'review' }>
            <div className="review-left-section">
                <h1 className="review-name">{review.name}</h1>
                <p className="review-position">{review.position}</p>
            </div>
            <div className="review-right-section">
                <p className="review-comment">{review.comment}</p>
            </div>
        </div>
    );
};

export default Review;