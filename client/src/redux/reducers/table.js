import { INIT_STATE } from "../../constant";
import { getType,getData, createData, deleteData, editData } from "../actions";

export default function tableReducer(state = INIT_STATE.table, action){
    switch(action.type){
        case getType(getData.getDataRequest):
            return {
                ...state,
                isLoading : true
            } 
        case getType(getData.getDataSuccess):
            return {
                ...state,
                isLoading : false,
                data : action.payload
            }
        case getType(getData.getDataFailure):
            return {
                ...state,
                isLoading : false,
            }
        case getType(createData.createDataSuccess):
            return{
                ...state,
                data : [...state.data,action.payload]
            }
        case getType(deleteData.deleteDataSuccess):
            return{
                ...state,
                data : state.data.filter((table_row) => table_row._id !== action.payload._id )
            }
        case getType(editData.editDataSuccess) :
            return{
                ...state,
                data : state.data.map((table_row)=> table_row._id === action.payload._id ? action.payload : table_row)
            }
        default:
            return state;
    }
}