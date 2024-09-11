import { ptypeCstatusTypes } from "./ptypeCstatus.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const ptypeCstatusAction = () => async (dispatch) => {
    dispatch({
        type: ptypeCstatusTypes.PTYPE_CSTATUS_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-ptype-cstatus?api_key=${token}`).toPromise().then(
        (res) => {
            dispatch({
                type: ptypeCstatusTypes.PTYPE_CSTATUS_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: ptypeCstatusTypes.PTYPE_CSTATUS_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: ptypeCstatusTypes.PTYPE_CSTATUS_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: ptypeCstatusTypes.PTYPE_CSTATUS_ACTION_END,
            });
        }
    );
};
