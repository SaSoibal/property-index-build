import { landSalesTypes } from "./landSales.types";

const INITIAL_STATE = {
    error: "",
    landSalesData: "",
    loading: true,
};

const landSalesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case landSalesTypes.LAND_SALES_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case landSalesTypes.LAND_SALES_GET_SUCCESS:
            return {
                ...state,
                landSalesData: action.payload,
                error: "",
            };
        case landSalesTypes.LAND_SALES_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case landSalesTypes.LAND_SALES_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default landSalesReducer;
