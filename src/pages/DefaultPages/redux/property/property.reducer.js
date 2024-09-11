import { propertyTypes } from "./property.types";

const INITIAL_STATE = {
    error: "",
    propertyData: "",
    loading: true,
};

const propertyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case propertyTypes.PROPERTY_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case propertyTypes.PROPERTY_GET_SUCCESS:
            return {
                ...state,
                propertyData: action.payload,
                error: "",
            };
        case propertyTypes.PROPERTY_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case propertyTypes.PROPERTY_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default propertyReducer;
