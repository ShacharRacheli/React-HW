import { observer } from "mobx-react-lite";
import recipeStore from "./recipeStore";
import { Card, CardContent, Typography, List, ListItem, Divider, Box } from "@mui/material";
import { useParams } from "react-router";

const RecipeToShow = observer(() => {
  const { id } = useParams();
  const recipe = recipeStore.getRecipeById(Number(id));

  return (
    <Box sx={{ margin: 4 ,minWidth:550}}>
      <Card sx={{ borderRadius: 2, boxShadow: 3, background: "#f5f5f5" }}>
        <CardContent>
          <Typography variant="h4" component="h2" sx={{ fontWeight: "bold", color: "rgb(4, 213, 151)", marginBottom: 2 }}>
            {recipe?.title}
          </Typography>
          <Typography variant="h6" sx={{ color: "#757575", marginBottom: 2 }}>
            {recipe?.description}
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 1 }}>
            Ingredients:
          </Typography>
          <List>
            {recipe?.ingredients.map((ingredient, index) => (
              <ListItem key={index} sx={{ paddingLeft: 0 }}>
                <Typography variant="body1" sx={{ color: "black" }}>
                 - {ingredient}
                </Typography>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ margin: "16px 0" }} />
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 1 }}>
            Preparation Instructions:
          </Typography>
          <Typography variant="body2" sx={{ color: "#757575" }}>
            {recipe?.instructions}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
});

export default RecipeToShow;
