import { Button, Modal } from '@mui/material'
import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import * as actions from '../../redux/actions';
import { modalState$ } from '../../redux/selectors';
import { StyledDiv,StyledTextField,StyledFooter,StyledForm } from './styles';

export default function CreateModal() {
    const [nickname,setNickname] = React.useState('');
    const [username,setUsername] = React.useState('');
    const [follower,setFollower] = React.useState('');
    const [link,setLink] = React.useState('');
    const [totalItem,setTotalItem] = React.useState('');
    const [rate,setRate] = React.useState('');
    const [responseRate,setResponseRate] = React.useState('');
    const [responseTime,setResponseTime] = React.useState('');
    const dispatch = useDispatch();
    const {isShow} = useSelector(modalState$);
    console.log('is modal showed',isShow);
    const onClose = React.useCallback(()=>{
      dispatch(actions.hideModal());
      setNickname('');
      setUsername('');
      setFollower('');
      setLink('');
      setTotalItem('');
      setRate('');
      setResponseRate('');
      setResponseTime('');
    },[dispatch]);
    const onSubmit= React.useCallback(()=>{
      const data = {
        nickname: nickname,
        username: username,
        follower: follower,
        link: link,
        total_item: totalItem,
        rate: rate,
        response_rate: responseRate,
        response_time: responseTime
      }
      dispatch(actions.createData.createDataRequest(data));
      onClose();
    },[nickname,username,follower,link,totalItem,rate,responseRate,responseTime,dispatch,onClose]);
    const body = (
      <StyledDiv>
        <StyledForm noValidate autoComplete='off' onSubmit={onSubmit}>
          <h2>Import New Table Data</h2>
          <StyledTextField  required label='Nickname' value={nickname} onChange={(e)=>{setNickname(e.target.value)}}/>
          <StyledTextField  required label='Username' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
          <StyledTextField  required label='Follower' value={follower} onChange={(e)=>{setFollower(e.target.value)}}/>
          <StyledTextField  required label='Link' value={link} onChange={(e)=>{setLink(e.target.value)}}/>
          <StyledTextField  required label='Total Item' value={totalItem} onChange={(e)=>{setTotalItem(e.target.value)}}/>
          <StyledTextField  required label='Rate' value={rate} onChange={(e)=>{setRate(e.target.value)}}/>
          <StyledTextField  required label='Response Rate' value={responseRate} onChange={(e)=>{setResponseRate(e.target.value)}}/>
          <StyledTextField  required label='Response Time' value={responseTime} onChange={(e)=>{setResponseTime(e.target.value)}}/>
          <StyledFooter>          
            <Button  variant='contained' color='primary' fullWidth onClick={onSubmit}>Import</Button>
          </StyledFooter>
        </StyledForm>
      </StyledDiv>
    );

  return (
    <Modal open={isShow} onClose={onClose}>
        {body}
    </Modal>
  )
}
