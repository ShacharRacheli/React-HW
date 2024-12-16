import { createContext, Dispatch, useReducer, useState } from "react"
import BasicModal from "./login"
import { initialUser, User, userReducer } from "./user"
import UserName from "./userName";


// let defaultUser=User 
export const UserContext=createContext<{user:User|null;userDispatch:Dispatch<any>}>({user:null,userDispatch:()=>{}})
const HomePage=()=>{

    const [succeed,setSucceed]=useState(false)
    const [user,userDispatch]=useReducer(userReducer,initialUser)
    const LoginSucceed=()=>setSucceed(true)

return(
<UserContext.Provider value={{user,userDispatch}}>
  { !succeed&& <BasicModal succeedFunc={LoginSucceed}/>}
   {succeed&& <UserName/>}
</UserContext.Provider>
);   

};
export default HomePage