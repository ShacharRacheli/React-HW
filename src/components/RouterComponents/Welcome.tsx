import { Outlet } from "react-router"
 

 const welcome=()=>{
    return(<>
    <h1>Welcome</h1>
    <Outlet/>
    </>)
}
export default welcome;