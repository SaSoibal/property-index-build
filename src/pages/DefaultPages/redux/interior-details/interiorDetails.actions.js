import { interiorDetailsTypes } from "./interiorDetails.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const interiorDetailsAction = (slug) => async (dispatch) => {
    dispatch({
        type: interiorDetailsTypes.INTERIOR_DETAILS_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-interior-details?slug=${slug}&api_key=${token}`).toPromise().then(
        (res) => {
            dispatch({
                type: interiorDetailsTypes.INTERIOR_DETAILS_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: interiorDetailsTypes.INTERIOR_DETAILS_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: interiorDetailsTypes.INTERIOR_DETAILS_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: interiorDetailsTypes.INTERIOR_DETAILS_ACTION_END,
            });
        }
    );
};
