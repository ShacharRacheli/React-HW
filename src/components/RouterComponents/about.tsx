import Grid from '@mui/material/Grid2';
import { Outlet } from "react-router";
import Typography from '@mui/material/Typography';

const About = () => {
    return (
        <Grid 
        container 
        justifyContent="center" 
        alignItems="center" 
        style={{ minHeight: '100vh' }} // Full viewport height
    >
        <Grid >
            <Typography variant="h1" align="center">About</Typography>
            <Outlet />
        </Grid>
    </Grid>
    );
}

export default About;
