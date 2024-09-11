import { addProperty } from "./addProperty.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const addPropertyGetAction = () => async (dispatch) => {
    dispatch({
        type: addProperty.ADD_PROPERTY_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-add-property?api_key=${token}`).toPromise().then(
        (res) => {
            dispatch({
                type: addProperty.ADD_PROPERTY_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: addProperty.ADD_PROPERTY_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: addProperty.ADD_PROPERTY_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: addProperty.ADD_PROPERTY_ACTION_END,
            });
        }
    );
};
