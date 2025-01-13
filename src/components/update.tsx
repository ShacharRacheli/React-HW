import { FormEvent, useContext, useRef, useState } from "react";
import { IdContext, UserContext } from "./homePage";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material";
import axios from "axios";
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

export default function Update({ succeedUpdateFunc }: { succeedUpdateFunc: Function }) {
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const nameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)   
    const emailRef = useRef<HTMLInputElement>(null)
    const addressRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const user1= useContext(UserContext)
  const [id]=useContext(IdContext)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()        
        try {
            console.log(id);
        const res = await axios.put('http://localhost:3000/api/user', {
            firstName: nameRef.current?.value,
            lastName: lastNameRef.current?.value,
                        mail: emailRef.current?.value,
                        address: addressRef.current?.value,
                        phone: phoneRef.current?.value,
         }, {
                headers: { 'user-id': id+"" }
            }
         )
         user1.userDispatch({
                type: 'Update',
                data: {
                    firstName: nameRef.current?.value,
            lastName: lastNameRef.current?.value,
                    mail: emailRef.current?.value,
                    address: addressRef.current?.value,
                    phone: phoneRef.current?.value,
                }
        })
            handleClose()
            succeedUpdateFunc()
        }
        catch (e:any) {
            if((e.response&&e.response===403)||e.response ===4000)
                alert("User Not found")
            console.log(e);
        }
    }


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <form onSubmit={handleSubmit}>
                        <TextField type='text' fullWidth label="Update first name" variant="outlined" inputRef={nameRef} />
                        <TextField type='text' fullWidth label="Update last name" variant="outlined" inputRef={lastNameRef} />
                        <TextField type='email' fullWidth label="Update email" variant="outlined" inputRef={emailRef} />
                        <TextField type='text' fullWidth label="Update address" variant="outlined" inputRef={addressRef} />
                        <TextField type='text' fullWidth label="Update phone" variant="outlined" inputRef={phoneRef} />
                        <Button fullWidth type='submit'>Save</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
