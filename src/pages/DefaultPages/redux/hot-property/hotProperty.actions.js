import { hotPropertyTypes } from "./hotProperty.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const hotPropertyAction = (purpose) => async (dispatch) => {
    dispatch({
        type: hotPropertyTypes.HOT_PROPERTY_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-hot-property?purpose=${purpose}&api_key=${token}`).toPromise().then(
        (res) => {
            dispatch({
                type: hotPropertyTypes.HOT_PROPERTY_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: hotPropertyTypes.HOT_PROPERTY_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: hotPropertyTypes.HOT_PROPERTY_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: hotPropertyTypes.HOT_PROPERTY_ACTION_END,
            });
        }
    );
};
