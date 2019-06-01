const initialState = {
    title: '',
    reviews: [{}],
    error: null
};
  
export default function testimonialReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_TESTIMONIAL_DATA_STARTED':
            return {
                ...state,
            };
        case 'GET_TESTIMONIAL_DATA_SUCCESS':
            return {
                ...state,
                title: action.payload.title,
                reviews: [
                    ...action.payload.reviews
                ],
                error: null
            };
        case 'GET_TESTIMONIAL_DATA_FAILURE':
            return {
                ...state,
                error: action.payload.error
            };
        default:
            return state;
    }
}