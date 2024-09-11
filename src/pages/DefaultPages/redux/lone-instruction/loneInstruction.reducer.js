import { loneInstructionTypes } from "./loneInstruction.types";

const INITIAL_STATE = {
    error: "",
    loneInstructionData: "",
    loading: true,
};

const loneInstructionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case loneInstructionTypes.LONE_INSTRUCTION_ACTION_START:
            return {
                ...state,
                loading: true,
            };
        case loneInstructionTypes.LONE_INSTRUCTION_GET_SUCCESS:
            return {
                ...state,
                loneInstructionData: action.payload,
                error: "",
            };
        case loneInstructionTypes.LONE_INSTRUCTION_GET_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case loneInstructionTypes.LONE_INSTRUCTION_ACTION_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default loneInstructionReducer;
