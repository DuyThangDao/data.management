import { INIT_STATE } from "../../constant";
import { getType, hideEditModal, showEditModal } from "../actions";

export default function modalReducers(state = INIT_STATE.editmodal,action){
    switch(action.type){
        case getType(showEditModal):
            return{
                ...state,
                isShowEdit : true
            }
        case getType(hideEditModal):
            return{
                ...state,
                isShowEdit : false
            }
        default:
            return state;
    }
}