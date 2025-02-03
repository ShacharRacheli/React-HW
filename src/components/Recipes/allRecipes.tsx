import { observer } from "mobx-react-lite";
import Grid from '@mui/material/Grid2';
import { Box, Typography } from "@mui/material";
import recipeStore from "../store/recipeStore";
import { Outlet } from "react-router";
import Recipe from "./recipe";

const AllRecipes = observer(() => {
    return (
        <Grid container spacing={2} sx={{ padding: 2 }}>
            <Grid size={6} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRight: "2px solid #ccc", overflowY: "auto" }}>
                <Box>
                    <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: "bold", textAlign: "center" }}>
                        Our Recipes
                    </Typography>
                    {recipeStore.list.map(r => (
                        <Recipe key={r.id} recipe={r} />
                    ))}
                </Box>
            </Grid>
            <Grid size={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center", overflowY: "auto" }}>
                <Box sx={{ width: "100%" }}>
                    <Outlet />
                </Box>
            </Grid>
        </Grid>
    );
});

export default AllRecipes;
