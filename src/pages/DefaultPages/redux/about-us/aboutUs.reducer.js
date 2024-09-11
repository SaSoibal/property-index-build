import { aboutUsTypes } from "./aboutUs.types";

const INITIAL_STATE = {
    error: "",
    aboutUsData: "",
    loading: true,
};

const aboutUsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case aboutUsTypes.ABOUT_US_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case aboutUsTypes.ABOUT_US_GET_SUCCESS:
            return {
                ...state,
                aboutUsData: action.payload,
                error: "",
            };
        case aboutUsTypes.ABOUT_US_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case aboutUsTypes.ABOUT_US_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default aboutUsReducer;
