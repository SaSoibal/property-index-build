import { landSalesDetailsTypes } from "./landSalesDetails.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const landSalesDetailsAction = (lpid) => async (dispatch) => {
    dispatch({
        type: landSalesDetailsTypes.LAND_SALES_DETAILS_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-land-sales-details?pid=${lpid}&api_key=${token}`).toPromise().then(
        (res) => {
            dispatch({
                type: landSalesDetailsTypes.LAND_SALES_DETAILS_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: landSalesDetailsTypes.LAND_SALES_DETAILS_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: landSalesDetailsTypes.LAND_SALES_DETAILS_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: landSalesDetailsTypes.LAND_SALES_DETAILS_ACTION_END,
            });
        }
    );
};
