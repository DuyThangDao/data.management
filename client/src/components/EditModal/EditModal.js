import { Button, Modal } from '@mui/material'
import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import * as actions from '../../redux/actions';
import { editModalState$,tableRowState$} from '../../redux/selectors';
import { StyledDiv,StyledTextField,StyledFooter,StyledForm } from './styles';

export default function EditModal() {
    const [id,setId] = React.useState('');
    const [nickname,setNickname] = React.useState('');
    const [username,setUsername] = React.useState('');
    const [follower,setFollower] = React.useState('');
    const [link,setLink] = React.useState('');
    const [totalItem,setTotalItem] = React.useState('');
    const [rate,setRate] = React.useState('');
    const [responseRate,setResponseRate] = React.useState('');
    const [responseTime,setResponseTime] = React.useState('');
    const {state_data} = useSelector(tableRowState$);
    React.useEffect(()=>{
        setId(state_data._id);
        setNickname(state_data.nickname);
        setUsername(state_data.username);
        setFollower(state_data.follower);
        setLink(state_data.link);
        setTotalItem(state_data.total_item);
        setRate(state_data.rate);
        setResponseRate(state_data.response_rate);
        setResponseTime(state_data.response_time);
    },[state_data]);
    const dispatch = useDispatch();
    const {isShowEdit} = useSelector(editModalState$);

    const onClose = React.useCallback((e)=>{
      dispatch(actions.hideEditModal());
    },[dispatch]);
    const onSubmit= React.useCallback(()=>{
      const data = {
        _id : id,
        nickname: nickname,
        username: username,
        follower: follower,
        link: link,
        total_item: totalItem,
        rate: rate,
        response_rate: responseRate,
        response_time: responseTime
      }
      console.log(data);
      dispatch(actions.editData.editDataRequest(data));
      onClose();
    },[nickname,username,follower,link,totalItem,rate,responseRate,responseTime,id,dispatch,onClose]);
    const body = (
      <StyledDiv>
        <StyledForm noValidate autoComplete='off' onSubmit={onSubmit}>
          <h2>Edit Table Data</h2>
          <StyledTextField  required label='Nickname' value={nickname} onChange={(e)=>{setNickname(e.target.value)}}/>
          <StyledTextField  required label='Username' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
          <StyledTextField  required label='Follower' value={follower} onChange={(e)=>{setFollower(e.target.value)}}/>
          <StyledTextField  required label='Link' value={link} onChange={(e)=>{setLink(e.target.value)}}/>
          <StyledTextField  required label='Total Item' value={totalItem} onChange={(e)=>{setTotalItem(e.target.value)}}/>
          <StyledTextField  required label='Rate' value={rate} onChange={(e)=>{setRate(e.target.value)}}/>
          <StyledTextField  required label='Response Rate' value={responseRate} onChange={(e)=>{setResponseRate(e.target.value)}}/>
          <StyledTextField  required label='Response Time' value={responseTime} onChange={(e)=>{setResponseTime(e.target.value)}}/>
          <StyledFooter>          
            <Button  variant='contained' color='primary' fullWidth onClick={onSubmit}>Edit</Button>
          </StyledFooter>
        </StyledForm>
      </StyledDiv>
    );

  return (
    <Modal open={isShowEdit} onClose={onClose}>
        {body}
    </Modal>
  )
}
