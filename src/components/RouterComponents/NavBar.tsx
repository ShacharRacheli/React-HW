// import { Link } from "@mui/material"
import { Link } from "react-router"
import Grid from '@mui/material/Grid2';

const NavBar=()=>{

     return(<>
    <nav>
    <Grid  container  sx={{ padding: '10px' ,justifyContent: "flex-end",
    alignItems: "flex-start", }}>
     {/* <Link to='/'>Home</Link> |  */}
     <Grid >
     <Link to='/welcome'style={{ margin: '0 10px' }}>Welcome</Link> |
     </Grid>
     <Grid >
     <Link to='/hello' style={{ margin: '0 10px' }}>Hello</Link> |
     </Grid>
     <Grid >
     <Link to='/About'style={{ margin: '0 10px' }}>About</Link>
     </Grid>
     </Grid>
     </nav>
     </>)
}
export default NavBar