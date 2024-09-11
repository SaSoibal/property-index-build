import { contactUsTypes } from "./contactUs.types";

const INITIAL_STATE = {
    error: "",
    contactUsData: "",
    loading: true,
};

const contactUsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case contactUsTypes.CONTACT_US_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case contactUsTypes.CONTACT_US_GET_SUCCESS:
            return {
                ...state,
                contactUsData: action.payload,
                error: "",
            };
        case contactUsTypes.CONTACT_US_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case contactUsTypes.CONTACT_US_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default contactUsReducer;
