import { Outlet } from "react-router"
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
 

 const Hello=()=>{
    return(  <Grid 
        container 
        justifyContent="center" 
        alignItems="center" 
        style={{ minHeight: '100vh' }} // Full viewport height
    >
        <Grid >
            <Typography variant="h1" align="center">Hello</Typography>
            <Outlet />
        </Grid>
    </Grid>)
}
export default Hello;