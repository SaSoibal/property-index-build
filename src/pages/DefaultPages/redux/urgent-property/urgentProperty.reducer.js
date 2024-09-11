import { urgentPropertyTypes } from "./urgentProperty.types";

const INITIAL_STATE = {
    error: "",
    urgentPropertyData: "",
    loading: true,
};

const urgentPropertyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case urgentPropertyTypes.URGENT_PROPERTY_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case urgentPropertyTypes.URGENT_PROPERTY_GET_SUCCESS:
            return {
                ...state,
                urgentPropertyData: action.payload,
                error: "",
            };
        case urgentPropertyTypes.URGENT_PROPERTY_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case urgentPropertyTypes.URGENT_PROPERTY_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default urgentPropertyReducer;
