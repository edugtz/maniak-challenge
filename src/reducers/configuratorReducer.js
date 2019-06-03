const initialState = {
    title: '',
    description: '',
    error: null
};
  
export default function configuratorReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_CONFIGURATOR_DATA_STARTED':
            return {
                ...state,
            };
        case 'GET_CONFIGURATOR_DATA_SUCCESS':
            return {
                ...state,
                title: action.payload.title,
                description: action.payload.description,
                error: null
            };
        case 'GET_CONFIGURATOR_DATA_FAILURE':
            return {
                ...state,
                error: action.payload.error
            };
        default:
            return state;
    }
}