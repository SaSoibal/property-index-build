import { careerTypes } from "./career.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const careerGetAction = () => async (dispatch) => {
    dispatch({
        type: careerTypes.CAREER_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-career-page?api_key=${token}`).toPromise().then(
        (res) => {
            dispatch({
                type: careerTypes.CAREER_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: careerTypes.CAREER_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: careerTypes.CAREER_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: careerTypes.CAREER_ACTION_END,
            });
        }
    );
};
