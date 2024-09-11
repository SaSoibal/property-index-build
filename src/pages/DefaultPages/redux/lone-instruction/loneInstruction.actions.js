import { loneInstructionTypes } from "./loneInstruction.types";
import { token } from '../../../../Helper/apiToken';
import AxiosWithOutAuthInstance from "../../../../config/api/withoutauth.axios";
export const loneInstructionAction = () => async (dispatch) => {
    dispatch({
        type: loneInstructionTypes.LONE_INSTRUCTION_ACTION_START,
    });
    await AxiosWithOutAuthInstance.get(`/web-lone-instruction?api_key=${token}`).toPromise().then(
        (res) => {
            dispatch({
                type: loneInstructionTypes.LONE_INSTRUCTION_GET_SUCCESS,
                payload: res?.data,
            });
            dispatch({
                type: loneInstructionTypes.LONE_INSTRUCTION_ACTION_END,
            });
        },
        (error) => {
            dispatch({
                type: loneInstructionTypes.LONE_INSTRUCTION_GET_FAILED,
                payload: error,
            });
            dispatch({
                type: loneInstructionTypes.LONE_INSTRUCTION_ACTION_END,
            });
        }
    );
};
