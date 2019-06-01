import React, { Component } from 'react';
import Arrows from './components/Arrows'
import Review from './components/Review'
import Indicator from './components/Indicator';
import './Slider.scss';

class Slider extends Component {
    constructor(props) {
        super(props);

        this.handleGoToPreviousReview = this.handleGoToPreviousReview.bind(this);
        this.handleGoToNextReview = this.handleGoToNextReview.bind(this);

        this.state = {
            activeIndex: 0
        };
    }

    handleGoToPreviousReview = (e) => {
        e.preventDefault();

        const { reviews } = this.props;
        let index = this.state.activeIndex;
        let reviewsLength = reviews.length;

        if(index < 1) {
            index = reviewsLength;
        }

        index--;

        this.setState(() => ({
            activeIndex: index
        }));
    }

    handleGoToNextReview = (e) => {
        e.preventDefault();

        const { reviews } = this.props;
        let index = this.state.activeIndex;
        let reviewsLength = reviews.length - 1;

        if (index === reviewsLength) {
            index = -1;
        }

        index++;

        this.setState(() => ({
            activeIndex: index
        }));
    }

    render() {
        const { reviews } = this.props;
        return(
            <div className="slider-container">
                <div className="review-container">
                    {reviews.length > 0 && reviews.map((review, index) => 
                        <Review 
                            key={`${review.name} - ${index}`}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            review={review}
                        />
                    )}
                </div>
                <div className="controls-wrapper">
                        <Indicator
                            activeIndex={this.state.activeIndex + 1} 
                            total={reviews.length}
                        />
                        <Arrows 
                            handleGoToPreviousReview={this.handleGoToPreviousReview}
                            handleGoToNextReview={this.handleGoToNextReview}
                        />
                </div>
            </div>
        );
    }
} 

export default Slider;