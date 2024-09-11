import {areaGuideDetailsTypes} from "./areaGuideDetails.types";

const INITIAL_STATE = {
    error: "",
    areaGuideDetailsData: "",
    loading: true,
};

const areaGuideDetailsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case areaGuideDetailsTypes.AREA_GUIDE_DETAILS_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case areaGuideDetailsTypes.AREA_GUIDE_DETAILS_GET_SUCCESS:
            return {
                ...state,
                areaGuideDetailsData: action.payload,
                error: "",
            };
        case areaGuideDetailsTypes.AREA_GUIDE_DETAILS_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case areaGuideDetailsTypes.AREA_GUIDE_DETAILS_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default areaGuideDetailsReducer;
