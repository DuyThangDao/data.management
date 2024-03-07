import axios from 'axios';

const URL = 'http://localhost:5000';

export const getDataApi = () => axios.get(URL+'/table');
export const createDataApi = (payload) => axios.post(URL+'/table',payload);
export const deleteDataApi = (payload) => axios.delete(URL+'/table/'+payload._id);
export const editDataApi = (payload) => axios.post(URL+'/table/edit',payload);