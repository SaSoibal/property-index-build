import { areaGuideTypes } from "./areaGuide.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const areaGuideGetAction = () => async (dispatch) => {
    dispatch({
        type: areaGuideTypes.AREA_GUIDE_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-area-guide?api_key=${token}`).toPromise().then(
        (res) => {
            dispatch({
                type: areaGuideTypes.AREA_GUIDE_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: areaGuideTypes.AREA_GUIDE_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: areaGuideTypes.AREA_GUIDE_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: areaGuideTypes.AREA_GUIDE_ACTION_END,
            });
        }
    );
};
