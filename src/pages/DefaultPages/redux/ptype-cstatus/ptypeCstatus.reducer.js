import { ptypeCstatusTypes } from "./ptypeCstatus.types";

const INITIAL_STATE = {
    error: "",
    ptypecstatusData: "",
    loading: true,
};

const ptypeCstatusReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ptypeCstatusTypes.PTYPE_CSTATUS_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case ptypeCstatusTypes.PTYPE_CSTATUS_GET_SUCCESS:
            return {
                ...state,
                ptypecstatusData: action.payload,
                error: "",
            };
        case ptypeCstatusTypes.PTYPE_CSTATUS_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case ptypeCstatusTypes.PTYPE_CSTATUS_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default ptypeCstatusReducer;
