import { locationTypes } from "./location.types";

const INITIAL_STATE = {
    error: "",
    locationData: "",
    loading: true,
};

const locationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case locationTypes.LOCATION_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case locationTypes.LOCATION_GET_SUCCESS:
            return {
                ...state,
                locationData: action.payload,
                error: "",
            };
        case locationTypes.LOCATION_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case locationTypes.LOCATION_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default locationReducer;
