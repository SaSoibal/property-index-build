import { interiorTypes } from "./interior.types";

const INITIAL_STATE = {
    error: "",
    interiorData: "",
    loading: true,
};

const interiorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case interiorTypes.INTERIOR_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case interiorTypes.INTERIOR_GET_SUCCESS:
            return {
                ...state,
                interiorData: action.payload,
                error: "",
            };
        case interiorTypes.INTERIOR_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case interiorTypes.INTERIOR_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default interiorReducer;
