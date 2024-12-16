
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FormEvent, useContext, useRef, useState } from 'react';
import { UserContext } from './homePage';
import UserName from './userName';
import { TextField } from '@mui/material';

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

export default function BasicModal({ succeedFunc }: { succeedFunc: Function }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const nameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const user1 = useContext(UserContext)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    user1.userDispatch({
      type: 'Create',
      data: {
        firstName: nameRef.current?.value,
        lastName: lastNameRef.current?.value,
        password: passwordRef.current?.value
      }
    })
    handleClose()
    succeedFunc()
  }
  return (
    <div>
      <Button onClick={handleOpen}>Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <TextField fullWidth label="First Name" variant="outlined" inputRef={nameRef} />
            <TextField fullWidth label='Last name' variant="outlined" inputRef={lastNameRef} />
            <TextField fullWidth label='Password' variant="outlined" inputRef={passwordRef} />
            <Button fullWidth type='submit' >send</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

