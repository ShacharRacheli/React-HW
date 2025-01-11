import { Outlet } from "react-router"
import NavBar from "./NavBar"
const AppLayout=()=>{

    return(<>
    <div>
        <NavBar/>
        <Outlet/>
    </div>
    </>)
}
export default AppLayout