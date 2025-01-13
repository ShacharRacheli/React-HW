import { Outlet } from "react-router"
import NavBar from "./NavBar"
import Grid from '@mui/material/Grid2';
const AppLayout=()=>{

    return(<>
    
    <NavBar/>
    <Grid container size={8}
    
    justifyContent="center"
    alignItems= "center"
    // style={{ top:0 }}    
>
        </Grid>
        <Outlet/>
    </>)
}
export default AppLayout