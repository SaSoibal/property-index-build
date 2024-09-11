import { partnerTypes } from "./partner.types";

const INITIAL_STATE = {
    error: "",
    partnerData: "",
    loading: true,
};

const partnerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case partnerTypes.PARTNER_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case partnerTypes.PARTNER_GET_SUCCESS:
            return {
                ...state,
                partnerData: action.payload,
                error: "",
            };
        case partnerTypes.PARTNER_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case partnerTypes.PARTNER_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default partnerReducer;
