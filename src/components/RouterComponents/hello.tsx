import { Outlet } from "react-router"
 

 const Hello=()=>{
    return(<>
    <h1>Hello</h1>
    <Outlet/>
    </>)
}
export default Hello;