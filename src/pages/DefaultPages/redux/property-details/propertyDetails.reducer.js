import { propertyDetailsTypes } from "./propertyDetails.types";

const INITIAL_STATE = {
    error: "",
    propertyDetailsData: "",
    loading: true,
};

const propertyDetailsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case propertyDetailsTypes.PROPERTY_DETAILS_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case propertyDetailsTypes.PROPERTY_DETAILS_GET_SUCCESS:
            return {
                ...state,
                propertyDetailsData: action.payload,
                error: "",
            };
        case propertyDetailsTypes.PROPERTY_DETAILS_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case propertyDetailsTypes.PROPERTY_DETAILS_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default propertyDetailsReducer;
