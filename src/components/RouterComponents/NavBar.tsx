// import { Link } from "@mui/material"
import { Link } from "react-router"

const NavBar=()=>{

     return(<>
    <nav>
     {/* <Link to='/'>Home</Link> |  */}
     <Link to='/welcome'>Welcome</Link> |
     <Link to='/hello'>Hello</Link> |
     <Link to='/About'>About</Link>
     </nav>
     </>)
}
export default NavBar