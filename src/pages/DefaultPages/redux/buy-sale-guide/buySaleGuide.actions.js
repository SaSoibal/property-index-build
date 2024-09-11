import { buySaleGuideTypes } from "./buySaleGuide.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const buySaleGuideGetAction = () => async (dispatch) => {
    dispatch({
        type: buySaleGuideTypes.BUY_SALE_GUIDE_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-buy-and-sell?api_key=${token}`).toPromise().then(
        (res) => {
            dispatch({
                type: buySaleGuideTypes.BUY_SALE_GUIDE_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: buySaleGuideTypes.BUY_SALE_GUIDE_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: buySaleGuideTypes.BUY_SALE_GUIDE_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: buySaleGuideTypes.BUY_SALE_GUIDE_ACTION_END,
            });
        }
    );
};
