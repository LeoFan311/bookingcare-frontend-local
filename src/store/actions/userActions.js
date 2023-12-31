import actionTypes from './actionTypes';

export const addUserSuccess = () => ({
    type: actionTypes.ADD_USER_SUCCESS,
});

export const userLoginSuccess = () => ({
    type: actionTypes.USER_LOGIN_SUCCESS,
});

export const userLoginFail = () => ({
    type: actionTypes.USER_LOGIN_FAIL,
});

export const processLogout = () => ({
    type: actionTypes.PROCESS_LOGOUT,
});

export const setNavigateUrl = (inputUrl) => {
    return {
        type: actionTypes.SET_NAVIGATE_URL,
        url: inputUrl,
    };
};
