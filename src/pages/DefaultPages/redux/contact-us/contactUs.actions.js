import { contactUsTypes } from "./contactUs.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const contactUsGetAction = () => async (dispatch) => {
    dispatch({
        type: contactUsTypes.CONTACT_US_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-contact-us?api_key=${token}`).toPromise().then(
        (res) => {
            dispatch({
                type: contactUsTypes.CONTACT_US_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: contactUsTypes.CONTACT_US_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: contactUsTypes.CONTACT_US_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: contactUsTypes.CONTACT_US_ACTION_END,
            });
        }
    );
};
