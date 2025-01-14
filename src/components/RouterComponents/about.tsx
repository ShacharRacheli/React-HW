import Grid from '@mui/material/Grid2';
import { Outlet } from "react-router";
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";

const About = () => {
    return (
            <Box  style={{color: 'var(--primary-color)', }} >
            <Typography variant="h1" align="center">About</Typography>
            <Outlet />
        </Box>
    );
}

export default About;
