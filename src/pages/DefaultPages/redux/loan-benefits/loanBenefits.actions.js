import { loanBenefitTypes } from "./loanBenefits.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const loanBenefitGetAction = () => async (dispatch) => {
    dispatch({
        type: loanBenefitTypes.LOAN_BENEFIT_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-loan-benefits?api_key=${token}`).toPromise().then(
        (res) => {
            dispatch({
                type: loanBenefitTypes.LOAN_BENEFIT_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: loanBenefitTypes.LOAN_BENEFIT_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: loanBenefitTypes.LOAN_BENEFIT_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: loanBenefitTypes.LOAN_BENEFIT_ACTION_END,
            });
        }
    );
};
