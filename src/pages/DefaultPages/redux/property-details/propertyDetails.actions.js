import { propertyDetailsTypes } from "./propertyDetails.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const propertyDetailsAction = (purpose,lid,pid) => async (dispatch) => {
    dispatch({
        type: propertyDetailsTypes.PROPERTY_DETAILS_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-property-details?purpose=${purpose}&listing_id=${lid}&property_id=${pid}&api_key=${token}`).toPromise().then(
        (res) => {
            dispatch({
                type: propertyDetailsTypes.PROPERTY_DETAILS_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: propertyDetailsTypes.PROPERTY_DETAILS_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: propertyDetailsTypes.PROPERTY_DETAILS_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: propertyDetailsTypes.PROPERTY_DETAILS_ACTION_END,
            });
        }
    );
};
