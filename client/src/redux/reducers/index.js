import {combineReducers} from 'redux';
import table from './table';
import modal from './modal';
import editmodal from './editmodal';
import tablerowstate from './tablerowstate'

export default combineReducers({
    table,
    modal,
    editmodal,
    tablerowstate
});