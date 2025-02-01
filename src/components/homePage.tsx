import { useState } from "react"
import UserName from "./User/userName";
import Grid from '@mui/material/Grid2';
import Login from "./User/login";
import AddRecipe from "./Recipes/addRecipe";
const HomePage = () => {

  const [succeed, setSucceed] = useState(false)
  const LoginSucceed = () => setSucceed(true)

  return (
    <Grid container >
      {!succeed && <Login succeedFunc={LoginSucceed} />}
      {succeed && <UserName />}
      {succeed && <AddRecipe />}
    </Grid>

  );

};
export default HomePage