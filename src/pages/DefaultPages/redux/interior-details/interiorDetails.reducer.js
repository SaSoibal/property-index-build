import { interiorDetailsTypes } from "./interiorDetails.types";

const INITIAL_STATE = {
    error: "",
    interiorDetailsData: "",
    loading: true,
};

const interiorDetailsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case interiorDetailsTypes.INTERIOR_DETAILS_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case interiorDetailsTypes.INTERIOR_DETAILS_GET_SUCCESS:
            return {
                ...state,
                interiorDetailsData: action.payload,
                error: "",
            };
        case interiorDetailsTypes.INTERIOR_DETAILS_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case interiorDetailsTypes.INTERIOR_DETAILS_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default interiorDetailsReducer;
