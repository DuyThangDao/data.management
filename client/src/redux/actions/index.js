import {createActions,createAction} from 'redux-actions';

export const getType = (reduxAction)=>{
    return reduxAction().type;
}

export const getData = createActions({
    getDataRequest : undefined,
    getDataSuccess : (payload) => payload,
    getDataFailure : (err) => err
})

export const createData = createActions({
    createDataRequest : (payload) => payload,
    createDataSuccess : (payload) => payload,
    createDataFailure : (err) => err
})

export const deleteData = createActions({
    deleteDataRequest : (payload) => payload,
    deleteDataSuccess : (payload) => payload,
    deleteDataFailure : (err) => err
})

export const editData = createActions({
    editDataRequest : (payload) => payload,
    editDataSuccess : (payload) => payload,
    editDataFailure : (err) => err
})

export const showModal = createAction('SHOW_CREATE_MODAL');
export const hideModal = createAction('HIDE_CREATE_MODAL');
export const showEditModal = createAction('SHOW_EDIT_MODAL');
export const hideEditModal = createAction('HIDE_EDIT_MODAL');

export const showTableRowState = createAction('SHOW_TABLE_ROW_STATE',(payload)=> payload);