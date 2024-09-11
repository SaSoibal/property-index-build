import { latestPropertyTypes } from "./latestProperty.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const latestPropertyAction = (purpose) => async (dispatch) => {
    dispatch({
        type: latestPropertyTypes.LATEST_PROPERTY_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-latest-property?purpose=${purpose}&api_key=${token}`).toPromise().then(
        (res) => {
            dispatch({
                type: latestPropertyTypes.LATEST_PROPERTY_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: latestPropertyTypes.LATEST_PROPERTY_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: latestPropertyTypes.LATEST_PROPERTY_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: latestPropertyTypes.LATEST_PROPERTY_ACTION_END,
            });
        }
    );
};
