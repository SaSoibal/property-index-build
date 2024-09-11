import { loanBankTypes } from "./loanBanks.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const loanBankGetAction = () => async (dispatch) => {
    dispatch({
        type: loanBankTypes.LOAN_BANK_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-loan-banks?api_key=${token}`).toPromise().then(
        (res) => {
            dispatch({
                type: loanBankTypes.LOAN_BANK_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: loanBankTypes.LOAN_BANK_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: loanBankTypes.LOAN_BANK_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: loanBankTypes.LOAN_BANK_ACTION_END,
            });
        }
    );
};
