import { FormEvent, useContext, useRef, useState } from "react";
import { UserContext } from "./homePage";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material";

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


export default function Update({succeedUpdateFunc}:{succeedUpdateFunc:Function}){
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const emailRef = useRef<HTMLInputElement>(null)
    const addressRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const user1 = useContext(UserContext)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        user1.userDispatch({
            type: 'Update',
            data: {
                mail: emailRef.current?.value,
                address: addressRef.current?.value,
                phone: phoneRef.current?.value
            }
        })
        handleClose()
        succeedUpdateFunc()
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <form onSubmit={handleSubmit}>
                         <TextField fullWidth label="Update email" variant="outlined" inputRef={emailRef} />
                         <TextField fullWidth label="Update address" variant="outlined" inputRef={addressRef} />
                         <TextField fullWidth label="Update phone" variant="outlined" inputRef={phoneRef} />
                        <Button fullWidth type='submit'>Save</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
