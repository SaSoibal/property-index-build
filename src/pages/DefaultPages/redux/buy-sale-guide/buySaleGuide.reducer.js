import { buySaleGuideTypes } from "./buySaleGuide.types";

const INITIAL_STATE = {
    error: "",
    buySaleGuideData: "",
    loading: true,
};

const buySaleGuideReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case buySaleGuideTypes.BUY_SALE_GUIDE_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case buySaleGuideTypes.BUY_SALE_GUIDE_GET_SUCCESS:
            return {
                ...state,
                buySaleGuideData: action.payload,
                error: "",
            };
        case buySaleGuideTypes.BUY_SALE_GUIDE_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case buySaleGuideTypes.BUY_SALE_GUIDE_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default buySaleGuideReducer;
