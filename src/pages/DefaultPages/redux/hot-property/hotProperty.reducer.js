import { hotPropertyTypes } from "./hotProperty.types";

const INITIAL_STATE = {
    error: "",
    hotPropertyData: "",
    loading: true,
};

const hotPropertyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case hotPropertyTypes.HOT_PROPERTY_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case hotPropertyTypes.HOT_PROPERTY_GET_SUCCESS:
            return {
                ...state,
                hotPropertyData: action.payload,
                error: "",
            };
        case hotPropertyTypes.HOT_PROPERTY_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case hotPropertyTypes.HOT_PROPERTY_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default hotPropertyReducer;
