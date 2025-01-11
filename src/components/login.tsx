
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FormEvent, useContext, useRef, useState } from 'react';
import { UserContext } from './homePage';
import UserName from './userName';
import {  TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Login({ succeedFunc }: { succeedFunc: Function }) {
  const [open, setOpen] = useState(false);
  const [logIn, setLogIn] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const nameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const user1 = useContext(UserContext)

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault()
if(logIn)
  {  try{
      const res = await fetch('http://localhost:3000/api/user/login',
      {
        method: 'POST',
        body:JSON.stringify({
          firstName: nameRef.current?.value,
          lastName: lastNameRef.current?.value,
          password: passwordRef.current?.value
  }),
  headers: { 'Content-Type': 'application/json' }
      }
      )
      if(res.status===401){alert('name or password are not correct')}
   else if (!res.ok){ throw new Error(`fetch error ${res.status}`)}
    // const data=await res.json()
    user1.userDispatch({
      type:'Create',
      data:{firstName: nameRef.current?.value,
      lastName: lastNameRef.current?.value,
      password: passwordRef.current?.value,}
    })
    // handleClose()
    // succeedFunc()
  }
  catch(e){
    console.log(e);
  }}
  else{
    try{
      const res = await fetch('http://localhost:3000/api/user/register',
      {
        method: 'POST',
        body:JSON.stringify({
          firstName: nameRef.current?.value,
          lastName: lastNameRef.current?.value,
          password: passwordRef.current?.value
  }),
  headers: { 'Content-Type': 'application/json' }
      }
      )
  //     if(res.status===401){alert('name or password are not correct')}
   if (!res.ok){ throw new Error(`fetch error ${res.status}`)}
    // const data=await res.json()
    user1.userDispatch({
      type:'Create',
      data:{
        firstName: nameRef.current?.value,
        lastName: lastNameRef.current?.value,
        password: passwordRef.current?.value
}
    })
  }
  catch(e){
    console.log(e);
  }
}
handleClose()
succeedFunc()
setLogIn(false)
    // if(user1.user?.firstName===nameRef.current?.value)
    // {user1.userDispatch({
    //   type: 'Create',
    //   data: {
    //     firstName: nameRef.current?.value,
    //     lastName: lastNameRef.current?.value,
    //     password: passwordRef.current?.value
    //   }
    // })
  }
  
  return (
    <div>
        <Box sx={{position: 'absolute', top: 10, left: 10 }}>
     
      {/* <Grid size={{xs:4}} top={0}left={0}> */}
      <Button onClick={()=>{setLogIn(true);setOpen(true);}} >Login</Button>
      <Button onClick={handleOpen}>Register</Button>
     </Box>
      {/* </Grid> */}
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <TextField type='text' fullWidth label="First Name" variant="outlined" inputRef={nameRef} />
            <TextField type='text' fullWidth label='Last name' variant="outlined" inputRef={lastNameRef} />
            <TextField type='password' fullWidth label='Password' variant="outlined" inputRef={passwordRef} />
            <Button fullWidth type='submit' >send</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
 }

