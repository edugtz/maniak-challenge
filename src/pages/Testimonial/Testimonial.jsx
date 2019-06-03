import React, { Component } from 'react';
import './Testimonial.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTestimonialData } from '../../actions/testimonialActions';
import Slider from '../../components/Slider';

class Testimonial extends Component {
    componentDidMount() {
        this.props.getTestimonialData();
    }

    render() {
        const { title, reviews } = this.props;
        return (
            <div className="container testimonial-container">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="testimonial-title">{title}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-11">
                        <div className="testimonial-reviews">
                            <Slider reviews={reviews} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getTestimonialData }, dispatch);
};

const mapStateToProps = (state) => {
    return {
        title: state.testimonial.title,
        reviews: state.testimonial.reviews
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Testimonial);