import { latestPropertyTypes } from "./latestProperty.types";

const INITIAL_STATE = {
    error: "",
    LatestPropertyData: "",
    loading: true,
};

const latestPropertyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case latestPropertyTypes.LATEST_PROPERTY_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case latestPropertyTypes.LATEST_PROPERTY_GET_SUCCESS:
            return {
                ...state,
                LatestPropertyData: action.payload,
                error: "",
            };
        case latestPropertyTypes.LATEST_PROPERTY_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case latestPropertyTypes.LATEST_PROPERTY_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default latestPropertyReducer;
