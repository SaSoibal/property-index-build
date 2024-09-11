import { locationTypes } from "./location.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const locationAction = (keyword) => async (dispatch) => {
    dispatch({
        type: locationTypes.LOCATION_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/search-location?keyword=${keyword}&api_key=${token}`).toPromise().then(
        (res) => {
            dispatch({
                type: locationTypes.LOCATION_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: locationTypes.LOCATION_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: locationTypes.LOCATION_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: locationTypes.LOCATION_ACTION_END,
            });
        }
    );
};
