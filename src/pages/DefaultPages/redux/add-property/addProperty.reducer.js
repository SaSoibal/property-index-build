import { addProperty } from "./addProperty.types";

const INITIAL_STATE = {
    error: "",
    addPropertyData: "",
    loading: true,
};

const addPropertyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case addProperty.ADD_PROPERTY_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case addProperty.ADD_PROPERTY_GET_SUCCESS:
            return {
                ...state,
                addPropertyData: action.payload,
                error: "",
            };
        case addProperty.ADD_PROPERTY_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case addProperty.ADD_PROPERTY_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default addPropertyReducer;
