import { blogTypes } from "./blog.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const blogGetAction = () => async (dispatch) => {
    dispatch({
        type: blogTypes.BLOG_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-blog?api_key=${token}`).toPromise().then(
        (res) => {
            dispatch({
                type: blogTypes.BLOG_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: blogTypes.BLOG_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: blogTypes.BLOG_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: blogTypes.BLOG_ACTION_END,
            });
        }
    );
};
