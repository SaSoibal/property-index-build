import { buySaleGuideDetailsTypes } from "./buySaleGuideDetails.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const buySaleGuideDetailsAction = (slug) => async (dispatch) => {
    dispatch({
        type: buySaleGuideDetailsTypes.BUY_SALE_GUIDE_DETAILS_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-buy-and-sell-details?slug=${slug}&api_key=${token}`).toPromise().then(
        (res) => {
            dispatch({
                type: buySaleGuideDetailsTypes.BUY_SALE_GUIDE_DETAILS_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: buySaleGuideDetailsTypes.BUY_SALE_GUIDE_DETAILS_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: buySaleGuideDetailsTypes.BUY_SALE_GUIDE_DETAILS_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: buySaleGuideDetailsTypes.BUY_SALE_GUIDE_DETAILS_ACTION_END,
            });
        }
    );
};
