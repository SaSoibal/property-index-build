import { blogTypes } from "./blog.types";

const INITIAL_STATE = {
    error: "",
    blogData: "",
    loading: true,
};

const blogReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case blogTypes.BLOG_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case blogTypes.BLOG_GET_SUCCESS:
            return {
                ...state,
                blogData: action.payload,
                error: "",
            };
        case blogTypes.BLOG_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case blogTypes.BLOG_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default blogReducer;
