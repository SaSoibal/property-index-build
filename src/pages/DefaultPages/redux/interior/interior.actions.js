import { interiorTypes } from "./interior.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const interiorAction = () => async (dispatch) => {
    dispatch({
        type: interiorTypes.INTERIOR_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-interior?api_key=${token}`).toPromise().then(
        (res) => {
            dispatch({
                type: interiorTypes.INTERIOR_GET_SUCCESS,
                payload: res?.data
            });
            dispatch({
                type: interiorTypes.INTERIOR_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: interiorTypes.INTERIOR_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: interiorTypes.INTERIOR_ACTION_END,
            });
        }
    );
};
