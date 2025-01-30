// import { Link } from "@mui/material"
import { Link } from "react-router"
import Grid from '@mui/material/Grid2';
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const NavBar=()=>{

     return(<>
    <AppBar
        position="fixed"
        sx={{
          top: 5,
          right: 5,
          width: "auto",
          background: "linear-gradient(90deg,rgb(88, 242, 183),rgb(243, 96, 196))", // מעבר צבעים
          borderRadius: 2,
        }}
      >
        <Toolbar sx={{ padding: "0 10px" }}>
     <Box sx={{ display: "flex", gap: 2 }}>
     {/* <Link to='/'style={{color:'rgb(0, 0, 0)',  margin: '0 10px' }}>Home</Link> | */}
     <Link to='/welcome'style={{color:'rgb(0, 0, 0)',  margin: '0 10px' }}>Welcome</Link> |
     {/* <Link to='/hello' style={{color:'rgb(0, 0, 0)', margin: '0 10px' }}>Hello</Link> | */}
     <Link to='/About'style={{color:'rgb(0, 0, 0)', margin: '0 10px' }}>About</Link> |
     <Link to='/allRecipes'style={{color:'rgb(0, 0, 0)', margin: '0 10px' }}>Recipes</Link>
     </Box>
     </Toolbar>
     </AppBar>
     </>)
}
export default NavBar