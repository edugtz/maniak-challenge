import { getPageTwoData } from '../api/api';

const getConfiguratorDataSuccess = data => ({
    type: 'GET_CONFIGURATOR_DATA_SUCCESS',
    payload: {
        ...data
    }
});

const getConfiguratorDataStarted = () => ({
    type: 'GET_CONFIGURATOR_DATA_STARTED'
});

const getConfiguratorDataFailure = err => ({
    type: 'GET_CONFIGURATOR_DATA_FAILURE',
    payload: {
        ...err
    }
});

export const getConfiguratorData = () => {
    return dispatch => {
        dispatch(getConfiguratorDataStarted());

        getPageTwoData()
            .then(response => {
                dispatch(getConfiguratorDataSuccess(response.data.calculator))
            })
            .catch(err => {
                dispatch(getConfiguratorDataFailure(err.message))
            });
    };
};