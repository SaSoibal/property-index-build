import { urgentPropertyTypes } from "./urgentProperty.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const urgentPropertyAction = (purpose) => async (dispatch) => {
    dispatch({
        type: urgentPropertyTypes.URGENT_PROPERTY_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-urgent-sale-property?purpose=${purpose}&api_key=${token}`).toPromise().then(
        (res) => {
            dispatch({
                type: urgentPropertyTypes.URGENT_PROPERTY_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: urgentPropertyTypes.URGENT_PROPERTY_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: urgentPropertyTypes.URGENT_PROPERTY_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: urgentPropertyTypes.URGENT_PROPERTY_ACTION_END,
            });
        }
    );
};
