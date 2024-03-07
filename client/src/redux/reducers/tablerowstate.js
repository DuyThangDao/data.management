import { INIT_STATE } from "../../constant";
import { getType, showTableRowState } from "../actions";

export default function tableRowStateReducers(state = INIT_STATE.tablerowstate,action){
    switch(action.type){
        case getType(showTableRowState):
            return{
                ...state,
                state_data : {...state.state_data,...action.payload}
            }
        default:
            return state;
    }
}