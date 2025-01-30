import { Outlet } from "react-router"
import AllRecipes from "../Recipes/allRecipes"

const Recipes=()=>{
    return (<>
    <AllRecipes/>
    <Outlet/>
    </>)
}
export default Recipes