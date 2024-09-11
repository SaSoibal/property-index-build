import { cityListTypes } from "./cityList.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const cityAction = (limit) => async (dispatch) => {
    dispatch({
        type: cityListTypes.CITY_LIST_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-city-list?limit=${limit}&api_key=${token}`).toPromise().then(
        (res) => {
            dispatch({
                type: cityListTypes.CITY_LIST_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: cityListTypes.CITY_LIST_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: cityListTypes.CITY_LIST_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: cityListTypes.CITY_LIST_ACTION_END,
            });
        }
    );
};
