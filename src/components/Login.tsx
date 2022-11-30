import { Avatar, Button, FormControlLabel, FormGroup, Grid, Paper, } from '@mui/material'
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import React from 'react'
import { alignProperty } from '@mui/material/styles/cssUtils';
import { styled } from '@mui/system';

const login=()=> {
const paperStyle = {padding:45,height :'30vh',width:280,margin:'130px auto'}
const iconStyle = {backgroundColor:'lightBlue',alignSelf:'center'}
const componnetStyle = ()=>{


}
  return (
    <Grid alignItems="center" >
      
        <Paper elevation={10} style={paperStyle}>
        <Grid style ={{alignItems:'center', justifyContent:'center',display: 'flex',flexDirection:'column'}}>                
        <Avatar style={iconStyle}><LockPersonOutlinedIcon/></Avatar>
        <h2>Login</h2>
        </Grid>
        <TextField id="standard-basic" label="Username" variant="standard" placeholder='EnterUserName' />
        <TextField id="standard-basic" label="Password" variant="standard" placeholder='EnterPassword' type='password' />
        <FormGroup>
        <FormControlLabel control={<Checkbox/>} label="Remember me" /> 
        <Button variant='contained' type='submit' color='primary' fullWidth >Login</Button>
        </FormGroup>
        </Paper>
        
    </Grid>
  )
}

export default login