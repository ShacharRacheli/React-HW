import { observer } from "mobx-react-lite";
import { Button } from "@mui/material";
import { RecipeType } from "../store/recipeStore";
import { useNavigate } from "react-router";
const Recipe = observer(({ recipe }: { recipe: RecipeType }) => {
    const navigate = useNavigate();
    const handleRecipeClick = (recipe: RecipeType) => {
        navigate(`${recipe.id}`);
    };
    return (
        <>
            <Button
                variant="outlined"
                onClick={() => handleRecipeClick(recipe)}
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
        </>
    );
});

export default Recipe;
