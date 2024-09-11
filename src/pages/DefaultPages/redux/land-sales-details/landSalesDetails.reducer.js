import { landSalesDetailsTypes } from "./landSalesDetails.types";

const INITIAL_STATE = {
    error: "",
    landSalesDetailsData: "",
    loading: true,
};

const landSalesDetailsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case landSalesDetailsTypes.LAND_SALES_DETAILS_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case landSalesDetailsTypes.LAND_SALES_DETAILS_GET_SUCCESS:
            return {
                ...state,
                landSalesDetailsData: action.payload,
                error: "",
            };
        case landSalesDetailsTypes.LAND_SALES_DETAILS_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case landSalesDetailsTypes.LAND_SALES_DETAILS_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default landSalesDetailsReducer;
