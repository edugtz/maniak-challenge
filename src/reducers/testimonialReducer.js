const initialState = {
    slider: {},
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
                slider: { 
                    ...state.slider, 
                    ...action.payload 
                },
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