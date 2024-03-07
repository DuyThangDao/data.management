import React from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../../redux/actions';
import {Menu,MenuItem,IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import EditModal from '../EditModal/EditModal';

export default function HandleTableMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();
    const openEditModal = React.useCallback(()=>{
        dispatch(actions.showEditModal());
        dispatch(actions.showTableRowState({...props.table_row}));
        setAnchorEl(null)
        console.log('[table_row]',props.table_row);
      },[dispatch,props])
    const open = Boolean(anchorEl);
    const handleTable = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const onDelete = React.useCallback(()=>{
        dispatch(actions.deleteData.deleteDataRequest({...props.table_row}));
        setAnchorEl(null)
    },[dispatch,props.table_row]);
  return (
    <div>
        <IconButton aria-label="settings" onClick={handleTable}>
            <MoreVertIcon />
        </IconButton>
        <Menu
            MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
        >
            <MenuItem onClick={onDelete} disableRipple>
                <DeleteIcon />
                Delete
            </MenuItem>
            <MenuItem onClick={openEditModal} disableRipple>
                <EditIcon />
                Edit
            </MenuItem>
        </Menu>  
        <EditModal table_row = {props.table_row}/>            
    </div>
  )
}
