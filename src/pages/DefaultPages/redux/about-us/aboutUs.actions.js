import { aboutUsTypes } from "./aboutUs.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const aboutUsGetAction = () => async (dispatch) => {
    dispatch({
        type: aboutUsTypes.ABOUT_US_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-about-us?api_key=${token}`).toPromise().then(
        (res) => {
            dispatch({
                type: aboutUsTypes.ABOUT_US_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: aboutUsTypes.ABOUT_US_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: aboutUsTypes.ABOUT_US_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: aboutUsTypes.ABOUT_US_ACTION_END,
            });
        }
    );
};
