import {areaGuideTypes} from "./areaGuide.types";

const INITIAL_STATE = {
    error: "",
    areaGuideData: "",
    loading: true,
};

const areaGuideReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case areaGuideTypes.AREA_GUIDE_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case areaGuideTypes.AREA_GUIDE_GET_SUCCESS:
            return {
                ...state,
                areaGuideData: action.payload,
                error: "",
            };
        case areaGuideTypes.AREA_GUIDE_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case areaGuideTypes.AREA_GUIDE_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default areaGuideReducer;
