import * as actions from '../actions';
import {takeLatest,call,put} from 'redux-saga/effects';
import * as api from '../../api';

function* getDataSaga(action){
    try{
        const data = yield call(api.getDataApi);
        yield put(actions.getData.getDataSuccess(data.data));
    }catch(err){
        console.error(err);
        yield put(actions.getData.getDataFailure(err));
    }
}
function* createDataSaga(action){
    try{
        console.log('[create-table-saga] Start',action.payload);
        const data = yield call(api.createDataApi,action.payload);
        console.log('[create-table-saga] Success:', data);
        yield put(actions.createData.createDataSuccess(data.data));
    }
    catch(err){
        console.error(err);
        yield put(actions.createData.createDataFailure(err));
    }
}    

function* deleteDataSaga(action){
    try{
        console.log('[delete-table-saga] Start',action.payload);
        const data = yield call(api.deleteDataApi,action.payload);
        console.log('[delete-table-saga] Success:', data);
        yield put(actions.deleteData.deleteDataSuccess(data.data));
    }
    catch(err){
        console.error(err);
        yield put(actions.deleteData.deleteDataFailure(err));
    }
}  

function* editDataSaga(action){
    try{
        const editedData = yield call(api.editDataApi,action.payload);
        yield put(actions.editData.editDataSuccess(editedData.data));
    }
    catch(err){
        console.error(err);
        yield put(actions.editData.editDataFailure(err));
    }

}


function* mySaga(){
    yield takeLatest(actions.getData.getDataRequest,getDataSaga);
    yield takeLatest(actions.createData.createDataRequest,createDataSaga);
    yield takeLatest(actions.deleteData.deleteDataRequest,deleteDataSaga);
    yield takeLatest(actions.editData.editDataRequest,editDataSaga);
}

export default mySaga