import React, { Component } from 'react';
import './Testimonial.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTestimonialData } from '../../actions/testimonialActions';

class Testimonial extends Component {
    componentDidMount() {
        this.props.getTestimonialData();
    }

    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <div className="testimonial-container">
                        <div className="col-md-4">
                            <h1>{this.props.slider.title}</h1>
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
    console.log(state);
    return {
        slider: state.testimonial.slider
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Testimonial);