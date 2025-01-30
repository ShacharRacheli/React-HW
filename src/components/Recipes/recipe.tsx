// import { observer } from "mobx-react-lite";
// import { RecipeType } from "./recipeStore";
// import { Link, useNavigate } from "react-router";
// import { Button } from "@mui/material";

// const Recipe=observer(({recipe,clickRecipeToShow}:{recipe:RecipeType,clickRecipeToShow:Function})=>{
// //    const [isShow,setIsShow]=useState(false)
// //     const sendRecipeToShow=()=>{
// // }
// const navigate = useNavigate();

// // const handleRecipeClick = () => {
// //     navigate(`/recipe/${encodeURIComponent(recipe.title)}/${recipe.id}`); // Navigate to the recipe details page with title and ID
// // };
// return(<>
// <div>
//     {/* <button onClick={handleRecipeClick}>{recipe.title}</button>     */}
//     <button onClick={()=>clickRecipeToShow(recipe.id)}>{recipe.title}</button>    
//     {/* {isShow&&<RecipeToShow recipe={recipe}/> } */}
//     {/* <Link to={`/recipe/${encodeURIComponent(recipe.title)}/${recipe.id}`}>
//                     {recipe.title}
//                 </Link> */}
         
// </div>

// </>)
// })
// export default Recipe
import { observer } from "mobx-react-lite";
import { Button, Typography } from "@mui/material";
import { RecipeType } from "./recipeStore";
import { useNavigate } from "react-router";

// const Recipe = observer(() => {
    // const Recipe = observer(({ recipe, clickRecipeToShow }: { recipe: RecipeType, clickRecipeToShow: Function }) => {
    const Recipe = observer(({ recipe }: { recipe: RecipeType  }) => {
    const navigate = useNavigate();

    const handleRecipeClick = (recipe:RecipeType) => {
        
        navigate(`${recipe.id}`)
    // navigate(`/recipe/${encodeURIComponent(recipe.title)}/${recipe.id}`); // Navigate to the recipe details page with title and ID
};
    return (
        <div>
            <Button
                variant="outlined"
                
                onClick={() => handleRecipeClick(recipe)}
                // onClick={() => clickRecipeToShow(recipe.id)}
                sx={{
                    marginBottom: 1,
                    borderColor: "rgb(232, 7, 108)", // Custom border color
                    '&:hover': { 
                        borderColor: "rgb(4, 213, 151)", // Hover border color
                        // backgroundColor: "rgba(232, 7, 108, 0.1)" // Light background on hover
                    },
                    color: "black", // Change text color to black
                    borderRadius: 2,
                    width: "100%",
                    // textAlign: "left",
                    padding: 1, // Reduced padding for smaller size
                    // fontSize: '0.875rem', // Smaller font size
                    // transition: 'background-color 0.3s, border-color 0.3s', // Smooth transition
                }}
            >
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {recipe.title}
                </Typography>
            </Button>
        </div>
    );
});
export default Recipe;
