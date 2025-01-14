import { Outlet } from "react-router"
import NavBar from "./NavBar"
import Grid from '@mui/material/Grid2';
const AppLayout=()=>{

    return(<>   
    <NavBar/>
        <Outlet/>
    </>)
}
export default AppLayout