import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import * as actions from '../../redux/actions';
import { modalState$, tableState$ } from '../../redux/selectors';
import {Button} from '@mui/material';
import HandleTableMenu from '../HandleTableMenu/HandleTableMenu';

export default function Dashboard() {
  const dispatch = useDispatch();
  const table = useSelector(tableState$);
  console.log('[table-data]',table);
  const openCreateModal = React.useCallback(()=>{
    dispatch(actions.showModal());
  },[dispatch])
  React.useEffect(()=>{
    dispatch(actions.getData.getDataRequest());
  },[dispatch]);
  const {isShow} = useSelector(modalState$);
  console.log('isShow :', isShow);
  return (
    <div>
    <div className="content-wrapper">
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>DataTables</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">DataTables</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <Button variant="contained" size="small" color='info' onClick={openCreateModal}>
                Import Data
              </Button>
            </div>
            <div className="card-body">
              <table id="example2" className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Nickname</th>
                    <th>Username</th>
                    <th>Follower</th>
                    <th>Link</th>
                    <th>Total Item</th>
                    <th>Rate</th>
                    <th>Response Rate</th>
                    <th>Response Time</th>
                  </tr>
                </thead>
                <tbody>
                  {table.map((table_row)=>{
                    return (
                      <tr key={table_row._id} >
                        <td>{table_row.nickname}</td>
                        <td>{table_row.username}</td>
                        <td>{table_row.follower}</td>
                        <td> {table_row.link}</td>
                        <td>{table_row.total_item}</td>
                        <td>{table_row.rate}</td>
                        <td>{table_row.response_rate}</td>
                        <td>{table_row.response_time}</td>
                        <td>
                          <HandleTableMenu table_row={table_row} />
                        </td>
                      </tr>
                    )
                  })}
                 
                </tbody>
                <tfoot>
                  <tr>
                    <th>Nickname</th>
                    <th>Username</th>
                    <th>Follower</th>
                    <th>Link</th>
                    <th>Total Item</th>
                    <th>Rate</th>
                    <th>Response Rate</th>
                    <th>Response Time</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </div>
  )
}
