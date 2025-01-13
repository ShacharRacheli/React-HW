import { createContext, Dispatch, SetStateAction, useReducer, useState } from "react"
// import BasicModal from "./login"
import { initialUser, User, userReducer } from "./user"
import UserName from "./userName";
import Login from "./login";
import Grid from '@mui/material/Grid2';


// let defaultUser=User 
export const UserContext=createContext<{user:User|null;userDispatch:Dispatch<any>}>({user:null,userDispatch:()=>{}})
export const IdContext=createContext<[Number,Dispatch<SetStateAction<Number>>]>([0,() => {},]);
const HomePage=()=>{

    const [succeed,setSucceed]=useState(false)
    const [id,setId]=useState<Number>(0)
     
    const [user,userDispatch]=useReducer(userReducer,initialUser)
    const LoginSucceed=()=>setSucceed(true)

return(
  <Grid container >
  {/* <Grid  size={4}> */}
<UserContext.Provider value={{user,userDispatch}}>
  <IdContext.Provider value={[id,setId]}>
  { !succeed&& <Login succeedFunc={LoginSucceed} />}
   {succeed&& <UserName/>}
   </IdContext.Provider>
</UserContext.Provider>
</Grid>
// </Grid>
);   

};
export default HomePage