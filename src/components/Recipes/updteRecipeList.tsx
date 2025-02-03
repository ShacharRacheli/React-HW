import { Box, Button, Typography } from "@mui/material";
import recipeStore, { RecipeType } from "../store/recipeStore";
import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import UpdateRecipe from "./updateRecipe";
import { IdContext } from "../RouterComponents/appLayout";
const UpdateRecipeList = observer(() => {
    const [id] = useContext(IdContext);
    const [isClickedUpdate, setIsClickedUpdate] = useState(false)
    const [recipeToUpdate, setRecipeToUpdate] = useState<RecipeType>();
    const listToUpdate = recipeStore.updateRecipeList(+id)
    return (
        <>
            <Box>
                <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: "bold", textAlign: "center" }}>
                    Your Recipes
                </Typography>
                {listToUpdate.map(recipe => (
                    <Button
                        key={recipe.id}
                        variant="outlined"
                        onClick={() => { setIsClickedUpdate(true), setRecipeToUpdate(recipe) }}
                        sx={{
                            marginBottom: 1,
                            background: "linear-gradient(90deg, rgb(253, 192, 220), rgb(220, 255, 242))",
                            color: "black",
                            '&:hover': {
                                borderColor: "rgb(4, 213, 151)",
                            },
                            borderRadius: 2,
                            width: "60%",
                            padding: 1,
                        }}
                    >
                        {recipe.title}
                    </Button>
                ))}
            </Box>
            {isClickedUpdate && recipeToUpdate && <UpdateRecipe recipe={recipeToUpdate} />}
        </>
    )
})
export default UpdateRecipeList;