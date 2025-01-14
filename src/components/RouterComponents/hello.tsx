import { Outlet } from "react-router"
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import { Box } from "@mui/material";
 

 const Hello=()=>{
    return(  
  <Box  style={{color: 'var(--primary-color)', }} >
            <Typography variant="h1" align="center">Hello</Typography>
            <Outlet />
    </Box>)
}
export default Hello;