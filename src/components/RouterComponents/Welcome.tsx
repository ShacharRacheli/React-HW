import { Outlet } from "react-router"
import Grid from '@mui/material/Grid2';
 

//  const welcome=()=>{
//     return(<>
//     <h1>Welcome</h1>
//     <Outlet/>
//     </>)
// }
// export default welcome;
// import { Outlet } from "react-router-dom";
// import Grid from '@mui/material/Unstable_Grid2'; // Ensure you are importing Grid2 correctly
import Typography from '@mui/material/Typography';

const Welcome = () => {
    return (
        <Grid 
            container 
            justifyContent="center" 
            alignItems="center" 
            style={{ minHeight: '100vh' }} // Full viewport height
        >
            <Grid >
                <Typography variant="h1" align="center">Welcome</Typography>
                <Outlet />
            </Grid>
        </Grid>
    );
}

export default Welcome;
