import { Outlet } from "react-router"
import Grid from '@mui/material/Grid2';
 import Typography from '@mui/material/Typography';
 import { Box } from "@mui/material";

const Welcome = () => {
    return (
            <Box  style={{color: 'var(--primary-color)', }} >
                <Typography variant="h1" align="center">Welcome</Typography>
                <Outlet />
            </Box>
    );
}

export default Welcome;
