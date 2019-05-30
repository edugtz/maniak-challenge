import { getPageOneData } from '../api/api';

const getTestimonialDataSuccess = data => ({
    type: 'GET_TESTIMONIAL_DATA_SUCCESS',
    payload: {
        ...data
    }
});

const getTestimonialDataStarted = () => ({
    type: 'GET_TESTIMONIAL_DATA_STARTED'
});

const getTestimonialDataFailure = err => ({
    type: 'GET_TESTIMONIAL_DATA_FAILURE',
    payload: {
        ...err
    }
});

export const getTestimonialData = () => {
    return dispatch => {
        dispatch(getTestimonialDataStarted());

        getPageOneData()
            .then(response => {
                dispatch(getTestimonialDataSuccess(response.data.slider))
            })
            .catch(err => {
                dispatch(getTestimonialDataFailure(err.message))
            });
    };
};