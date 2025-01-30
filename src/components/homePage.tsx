import { createContext, Dispatch, SetStateAction, useReducer, useState } from "react"
// import BasicModal from "./login"
import { initialUser, User, userReducer } from "./User/user"
import UserName from "./User/userName";
import Grid from '@mui/material/Grid2';
import Login from "./User/login";
import AllRecipes from "./Recipes/allRecipes";
import AddRecipe from "./Recipes/addRecipe";


// let defaultUser=User 
export const UserContext=createContext<{user:User|null;userDispatch:Dispatch<any>}>({user:null,userDispatch:()=>{}})
export const IdContext=createContext<[Number,Dispatch<SetStateAction<Number>>]>([0,() => {}]);
const HomePage=()=>{

    const [succeed,setSucceed]=useState(false)
    const [id,setId]=useState<Number>(0)
     
    const [user,userDispatch]=useReducer(userReducer,initialUser)
    const LoginSucceed=()=>setSucceed(true)

return(
  <Grid container >
  {/* <Grid  size={4}> */}
<UserContext value={{user,userDispatch}}>
  <IdContext value={[id,setId]}>
  { !succeed&& <Login succeedFunc={LoginSucceed} />}
   {succeed&& <UserName/>}

{succeed&&<AddRecipe/>}
   </IdContext>
</UserContext>
{/* <Grid size={6}> */}
{/* <AllRecipes/> */}
{/* </Grid> */}
{/* <AddRecipe/> */}
</Grid>

);   

};
export default HomePage