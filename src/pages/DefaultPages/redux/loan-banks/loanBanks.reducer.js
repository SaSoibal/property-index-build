import { secondsInDay } from "date-fns";
import { loanBankTypes } from "./loanBanks.types";

const INITIAL_STATE = {
    error: "",
    loanBankData: "",
    loading: true,
};

const loanBankReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case loanBankTypes.LOAN_BANK_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case loanBankTypes.LOAN_BANK_GET_SUCCESS:
            return {
                ...state,
                loanBankData: action.payload,
                error: "",
            };
        case loanBankTypes.LOAN_BANK_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case loanBankTypes.LOAN_BANK_ACTION_END:
            return {
                ...state,
                loading: false,
            };

        default:
            return state;
    }
};
export default loanBankReducer;
