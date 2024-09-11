import { cityListTypes } from "./cityList.types";

const INITIAL_STATE = {
    error: "",
    cityData: "",
    loading: true,
};

const cityListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cityListTypes.CITY_LIST_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case cityListTypes.CITY_LIST_GET_SUCCESS:
            return {
                ...state,
                cityData: action.payload,
                error: "",
            };
        case cityListTypes.CITY_LIST_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case cityListTypes.CITY_LIST_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default cityListReducer;
