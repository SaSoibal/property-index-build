import { careerTypes } from "./career.types";

const INITIAL_STATE = {
    error: "",
    careerData: "",
    loading: true,
};

const careerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case careerTypes.CAREER_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case careerTypes.CAREER_GET_SUCCESS:
            return {
                ...state,
                careerData: action.payload,
                error: "",
            };
        case careerTypes.CAREER_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case careerTypes.CAREER_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default careerReducer;
