import { loanBenefitTypes } from "./loanBenefits.types";

const INITIAL_STATE = {
    error: "",
    loanBenefitData: "",
    loading: true,
};

const loanBenefitReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case loanBenefitTypes.LOAN_BENEFIT_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case loanBenefitTypes.LOAN_BENEFIT_GET_SUCCESS:
            return {
                ...state,
                loanBenefitData: action.payload,
                error: "",
            };
        case loanBenefitTypes.LOAN_BENEFIT_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case loanBenefitTypes.LOAN_BENEFIT_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default loanBenefitReducer;
