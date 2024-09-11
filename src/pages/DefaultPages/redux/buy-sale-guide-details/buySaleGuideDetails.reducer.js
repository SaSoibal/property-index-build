import { buySaleGuideDetailsTypes } from "./buySaleGuideDetails.types";

const INITIAL_STATE = {
    error: "",
    buySaleGuideDetailsData: "",
    loading: true,
};

const buySaleGuideDetailsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case buySaleGuideDetailsTypes.BUY_SALE_GUIDE_DETAILS_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case buySaleGuideDetailsTypes.BUY_SALE_GUIDE_DETAILS_GET_SUCCESS:
            return {
                ...state,
                buySaleGuideDetailsData: action.payload,
                error: "",
            };
        case buySaleGuideDetailsTypes.BUY_SALE_GUIDE_DETAILS_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case buySaleGuideDetailsTypes.BUY_SALE_GUIDE_DETAILS_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default buySaleGuideDetailsReducer;
