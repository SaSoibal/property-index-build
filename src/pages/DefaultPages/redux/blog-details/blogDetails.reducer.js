import {blogDetailsTypes} from "./blogDetails.types";

const INITIAL_STATE = {
    error: "",
    blogDetailsData: "",
    loading: true,
};

const blogDetailsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case blogDetailsTypes.BLOG_DETAILS_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case blogDetailsTypes.BLOG_DETAILS_GET_SUCCESS:
            return {
                ...state,
                blogDetailsData: action.payload,
                error: "",
            };
        case blogDetailsTypes.BLOG_DETAILS_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case blogDetailsTypes.BLOG_DETAILS_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default blogDetailsReducer;
