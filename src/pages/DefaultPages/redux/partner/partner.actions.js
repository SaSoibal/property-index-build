import { partnerTypes } from "./partner.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const partnerAction = () => async (dispatch) => {
    dispatch({
        type: partnerTypes.PARTNER_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-partner-list?api_key=${token}`).toPromise().then(
        (res) => {
            dispatch({
                type: partnerTypes.PARTNER_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: partnerTypes.PARTNER_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: partnerTypes.PARTNER_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: partnerTypes.PARTNER_ACTION_END,
            });
        }
    );
};
