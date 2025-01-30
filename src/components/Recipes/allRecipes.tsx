// import { observer } from "mobx-react-lite"
// import recipeStore, { RecipeType } from "./recipeStore"
// import Recipe from "./recipe"
// import Grid from '@mui/material/Grid2';
// import { useState } from "react";
// import RecipeToShow from "./recipetoShow";
// import { Typography } from "@mui/material";

// const AllRecipes= observer(()=>{
//     const[ clickedRecipe,setclickedRecipe]=useState<RecipeType|undefined>(undefined);
//        const [isShow,setIsShow]=useState(false)
//     const clickOnRecipe=(id:number)=>{
//         setIsShow(true)
//         setclickedRecipe(recipeStore.list.find(r=>r.id===id))
//     }
    
// return(
//     <>
//     <Grid container> 
// <Grid size={6}>
//     <div>Our Recipes</div>
//     {recipeStore.list.map(r=>
// <Recipe key={r.id} recipe={r} clickRecipeToShow={clickOnRecipe}/>
//     )
// }
// </Grid>
// <Grid size={6} >
//     {isShow&&clickedRecipe&&<RecipeToShow recipe={clickedRecipe}/> }
// </Grid>
// </Grid>
// </>
// )
// })
// export default AllRecipes


import { observer } from "mobx-react-lite";
import Grid from '@mui/material/Grid2';
import { useState } from "react";
import { Typography, Box } from "@mui/material";
import recipeStore, { RecipeType } from "./recipeStore";
import Recipe from "./recipe";
import RecipeToShow from "./recipetoShow";
import { Outlet } from "react-router";

const AllRecipes = observer(() => {
    // const [clickedRecipe, setClickedRecipe] = useState<RecipeType | undefined>(undefined);
    // const [isShow, setIsShow] = useState(false);

    // const clickOnRecipe = (id: number) => {
    //     setIsShow(true);
    //     setClickedRecipe(recipeStore.list.find(r => r.id === id));
    // }

    return (
        <>
            <Grid container spacing={2} sx={{ height: "100vh" }}>
                {/* Left side: Fixed to the left side of the screen, vertically centered */}
                <Grid  size={8}>
                    <Box sx={{
                        // position: 'fixed',
                        top: '60%', // Adjusted to move it more towards the center
                        left: 20,
                        transform: 'translateY(-50%)',
                        padding: 2,
                        backgroundColor: "#ffffff",
                        // borderRadius: 2,
                        // boxShadow: 3,
                        width: '220px', // Increased width for a wider box
                    }}>
                        <Typography variant="h5"  sx={{ color: 'var(--secondary-color)' }}>
                            Our Recipes
                        </Typography>
                        {recipeStore.list.map(r => (
                            <Recipe key={r.id} recipe={r}  />
                            // <Recipe key={r.id} recipe={r} clickRecipeToShow={clickOnRecipe} />
                        ))}
                    </Box>
                </Grid>

                <Grid  size={8} sx={{ marginLeft: 'auto', padding: 2 }}>
                    {/* {isShow && clickedRecipe && <RecipeToShow/>} */}
               <Outlet/>
                </Grid>
            </Grid>
        </>
    );
});

export default AllRecipes;
