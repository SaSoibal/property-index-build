import { areaGuideDetailsTypes } from "./areaGuideDetails.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const areaGuideDetailsAction = (slug) => async (dispatch) => {
    dispatch({
        type: areaGuideDetailsTypes.AREA_GUIDE_DETAILS_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-area-guide-details?api_key=${token}&slug=${slug}`).toPromise().then(
        (res) => {
            dispatch({
                type: areaGuideDetailsTypes.AREA_GUIDE_DETAILS_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: areaGuideDetailsTypes.AREA_GUIDE_DETAILS_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: areaGuideDetailsTypes.AREA_GUIDE_DETAILS_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: areaGuideDetailsTypes.AREA_GUIDE_DETAILS_ACTION_END,
            });
        }
    );
};
