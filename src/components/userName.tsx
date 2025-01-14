import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useContext, useState } from 'react';
import { UserContext } from './homePage';
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
    return (
        <Box sx={{ position: 'absolute', top: 10, left: 10 }}>
            <Stack direction="row" spacing={2}>
                <Avatar alt={user1.user?.firstName} src="../pictures/IMG_3691.JPG" sx={{ bgcolor: 'rgb(4, 213, 151)' }} />
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