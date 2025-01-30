import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useContext, useState } from 'react';
import { UserContext } from '../homePage';
import { Box, Button, Typography } from '@mui/material';
import Update from './update';
import { deepPurple } from '@mui/material/colors';


const UserName = () => {

    const [showUpdate, setShowUpdate] = useState(false)
    const user1 = useContext(UserContext)
    const handleShowUpdate = () => {
        setShowUpdate(true)
    }
    const handleCloseUpdate = () => {
        setShowUpdate(false);
    }
    function stringAvatar(name: string) {
        return {
            sx: {
                bgcolor: 'rgb(4, 213, 151)',
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }


    return (
        <Box sx={{ position: 'absolute', top: 10, left: 10 }}>
            <Stack direction="row" spacing={2}>
                <Avatar {...stringAvatar(user1.user?.firstName + " " + user1.user?.lastName)} />
                <Typography variant="h4">
                    Hi {user1.user?.firstName}!
                </Typography>
                <Button onClick={handleShowUpdate} sx={{ color: 'var(--secondary-color)' }} >Update details</Button>
                {showUpdate && <Update succeedUpdateFunc={handleCloseUpdate} />}
            </Stack>
        </Box>
    )

}

export default UserName

