import { SET_ALERT, REMOVE_ALERT } from "./types" 

export const setAlert = (msg, type) => async dispatch => {
    dispatch({
        type: SET_ALERT,
        payload: {msg, type}
    })

    setTimeout(() => {
        dispatch({
            type: REMOVE_ALERT
        })
    }, 3000);

}