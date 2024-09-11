import { blogDetailsTypes } from "./blogDetails.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const blogDetailsGetAction = (slug) => async (dispatch) => {
    dispatch({
        type: blogDetailsTypes.BLOG_DETAILS_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-blog-details?slug=${slug}&api_key=${token}`).toPromise().then(
        (res) => {
            dispatch({
                type: blogDetailsTypes.BLOG_DETAILS_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: blogDetailsTypes.BLOG_DETAILS_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: blogDetailsTypes.BLOG_DETAILS_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: blogDetailsTypes.BLOG_DETAILS_ACTION_END,
            });
        }
    );
};
