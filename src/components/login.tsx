
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FormEvent, useContext, useRef, useState } from 'react';
import { IdContext, UserContext } from './homePage';
import UserName from './userName';
import { Paper, styled, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { initialUser } from './user';
import axios from 'axios';

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
  const [id, setId] = useContext(IdContext)
  let status=''
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if(logIn)
     {  status="login";}
    else {
status="register"
    }
    // if (logIn) {
      try {
        const res = await axios.post(`http://localhost:3000/api/user/${status}`, {
          firstName: nameRef.current?.value,
          lastName: lastNameRef.current?.value,
          password: passwordRef.current?.value,
        })
        console.log(res);
        setId(res.data.user?.id||res.data.userId)
        user1.userDispatch({
          type: 'Create',
          data: {
            firstName: nameRef.current?.value,
            lastName: lastNameRef.current?.value,
            password: passwordRef.current?.value,
          }
        })
      }
      catch (e: any) {
        console.log(e);
        if (e.response && e.response === 401 || e.response === 400) { alert('name or password are not correct') }
      }
    // }

    // else {
    //   try { 
    //     const res = await axios.post('http://localhost:3000/api/user/register', {
    //       firstName: nameRef.current?.value,
    //       lastName: lastNameRef.current?.value,
    //       password: passwordRef.current?.value,
    //     })
    //     console.log(res);
    //     user1.userDispatch({
    //       type: 'Create',
    //       data: {
    //         firstName: nameRef.current?.value,
    //         lastName: lastNameRef.current?.value,
    //         password: passwordRef.current?.value,
    //       }
    //     })
    //     setId(res.data.userId)
    //   }
    //   catch (e: any) {
    //     console.log(e);
    //     if ((e.response && e.response === 401) || e.response === 400)
    //        { alert('name or password already exist') }
    //   // }
    // }


    handleClose()
    succeedFunc()
    setLogIn(false)
  }

  return (
    <div>
      <Box sx={{ position: 'absolute', top: 10, left: 10 }}>
      {/* <Grid size={4}> */}
        <Button onClick={() => { setLogIn(true); setOpen(true); }} >Login</Button>
        <Button onClick={handleOpen}>Register</Button>
        {/* </Grid> */}
      </Box>
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

