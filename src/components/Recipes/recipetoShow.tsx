// import { observer } from "mobx-react-lite";
// import { RecipeType } from "./recipeStore";

// const RecipeToShow= observer(({recipe}:{recipe:RecipeType})=>{


// return(<>
// <div>
//    <h2>{recipe.title}</h2>
//   <h4> {recipe.description}</h4> 

//   {/* {recipe.ingredients.forEach(r=>
//     <li>{r}</li>)} */}
//     <ul>
//     {recipe.ingredients.map((ingredient, index) => (
//         <li key={index}>{ingredient}</li>
//     ))}
// </ul>
//     {recipe.instructions}
// </div>
// </>)

// })
// export default RecipeToShow;
// import { Typography, Card, CardContent, List, ListItem, Divider, Box, Paper } from "@mui/material";
// import Grid from '@mui/material/Grid2';
// import { RecipeType } from "./recipeStore";

// const RecipeToShow = ({ recipe }: { recipe: RecipeType }) => {
//   return (
//     <Grid container spacing={4} justifyContent="flex-end" sx={{ marginTop: 8 }}>
//       {/* Dark background card with image */}
//       <Grid size={8} minWidth={6}>
//         <Card sx={{ 
//           borderRadius: 2, 
//           boxShadow: 15, 
//           background: "#212121", 
//           "&:hover": { 
//             transform: "scale(1.03)", 
//             transition: "transform 0.3s ease" 
//           }
//         }}>
//           <CardContent>
//             <Typography
//               variant="h4"
//               component="h1"
//               sx={{ color: "#fff", fontWeight: "bold", marginBottom: 3 }}
//             >
//               {recipe.title}
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{ color: "#b0b0b0", fontStyle: "italic", marginBottom: 3 }}
//             >
//               {recipe.description}
//             </Typography>
//           </CardContent>
//         </Card>
//       </Grid>

//       {/* Ingredients card with light background and shadow */}
//       <Grid size={8} minWidth={6}>
//         <Card sx={{ 
//           borderRadius: 2, 
//           boxShadow: 15, 
//           background: "#f5f5f5", 
//           "&:hover": { 
//             boxShadow: 20, 
//             transform: "scale(1.05)", 
//             transition: "transform 0.3s ease, box-shadow 0.3s ease" 
//           }
//         }}>
//           <CardContent>
//             <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
//               Ingredients:
//             </Typography>
//             <List>
//               {recipe.ingredients.map((ingredient, index) => (
//                 <ListItem 
//                   key={index} 
//                   sx={{ 
//                     paddingLeft: 0, 
//                     marginBottom: 1, 
//                     "&:hover": { 
//                       backgroundColor: "#e3f2fd" 
//                     } 
//                   }}
//                 >
//                   <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
//                     <span
//                       style={{
//                         fontWeight: "bold",
//                         color: "#3f51b5",
//                         textTransform: "uppercase",
//                         transition: "color 0.3s"
//                       }}
//                     >
//                       {ingredient}
//                     </span>
//                   </Typography>
//                 </ListItem>
//               ))}
//             </List>
//           </CardContent>
//         </Card>
//       </Grid>

//       {/* Preparation Instructions card with dark background and special divider */}
//       <Grid size={12}>
//         <Box sx={{ paddingTop: 2 }}>
//           <Divider sx={{ marginBottom: 3, backgroundColor: "#3f51b5", height: "2px" }} />
//           <Typography
//             variant="h6"
//             sx={{ fontWeight: "bold", marginBottom: 2, color: "#212121" }}
//           >
//             Preparation Instructions:
//           </Typography>
//           <Paper sx={{ 
//             padding: 3, 
//             backgroundColor: "#e0e0e0", 
//             borderRadius: 2, 
//             "&:hover": { 
//               backgroundColor: "#cfd8dc", 
//               transition: "background-color 0.3s ease" 
//             }
//           }}>
//             <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
//               {recipe.instructions}
//             </Typography>
//           </Paper>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default RecipeToShow;

// import { Typography, Card, CardContent, List, ListItem, Divider, Box, Paper } from "@mui/material";
// import Grid from '@mui/material/Grid2';
// import { RecipeType } from "./recipeStore";

// const RecipeToShow = ({ recipe }: { recipe: RecipeType }) => {
//   return (
//     <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 4 }}>
//       {/* Dark background card with image */}
//       <Grid item xs={12} sm={6}>
//         <Card sx={{ 
//           borderRadius: 2, 
//           boxShadow: 10, 
//           background: "#4caf50", // Green background
//           "&:hover": { 
//             transform: "scale(1.02)", 
//             transition: "transform 0.3s ease" 
//           }
//         }}>
//           <CardContent>
//             <Typography
//               variant="h5"
//               component="h1"
//               sx={{ color: "#fff", fontWeight: "bold", marginBottom: 2 }}
//             >
//               {recipe.title}
//             </Typography>
//             <Typography
//               variant="body2"
//               sx={{ color: "#b0b0b0", fontStyle: "italic", marginBottom: 2 }}
//             >
//               {recipe.description}
//             </Typography>
//           </CardContent>
//         </Card>
//       </Grid>

//       {/* Ingredients card with light background and shadow */}
//       <Grid item xs={12} sm={6}>
//         <Card sx={{ 
//           borderRadius: 2, 
//           boxShadow: 10, 
//           background: "#f5f5f5", 
//           "&:hover": { 
//             boxShadow: 15, 
//             transform: "scale(1.03)", 
//             transition: "transform 0.3s ease, box-shadow 0.3s ease" 
//           }
//         }}>
//           <CardContent>
//             <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 1 }}>
//               Ingredients:
//             </Typography>
//             <List>
//               {recipe.ingredients.map((ingredient, index) => (
//                 <ListItem 
//                   key={index} 
//                   sx={{ 
//                     paddingLeft: 0, 
//                     marginBottom: 0.5,
//                     "&:hover": { 
//                       backgroundColor: "#e3f2fd" 
//                     } 
//                   }}
//                 >
//                   <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
//                     <span
//                       style={{
//                         fontWeight: "bold",
//                         color: "#3f51b5",
//                         textTransform: "uppercase",
//                         transition: "color 0.3s"
//                       }}
//                     >
//                       {ingredient}
//                     </span>
//                   </Typography>
//                 </ListItem>
//               ))}
//             </List>
//           </CardContent>
//         </Card>
//       </Grid>

//       {/* Preparation Instructions card with dark background and special divider */}
//       <Grid item xs={12}>
//         <Box sx={{ paddingTop: 1 }}>
//           <Divider sx={{ marginBottom: 2, backgroundColor: "#3f51b5", height: "2px" }} />
//           <Typography
//             variant="subtitle1"
//             sx={{ fontWeight: "bold", marginBottom: 1, color: "#212121" }}
//           >
//             Preparation Instructions:
//           </Typography>
//           <Paper sx={{ 
//             padding: 2,
//             backgroundColor: "#e0e0e0", 
//             borderRadius: 2, 
//             "&:hover": { 
//               backgroundColor: "#cfd8dc", 
//               transition: "background-color 0.3s ease" 
//             }
//           }}>
//             <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
//               {recipe.instructions}
//             </Typography>
//           </Paper>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default RecipeToShow;
// import { observer } from "mobx-react-lite";
// import recipeStore, { RecipeType } from "./recipeStore";
// import { Card, CardContent, Typography, List, ListItem, Divider, Box } from "@mui/material";
// import { useParams } from "react-router";
// // { recipe }: { recipe: RecipeType }
// const RecipeToShow = observer(() => {
//    const {id}=useParams();
//     const recipe=recipeStore.getRecipeById(Number(id))
  
  
//     return (
//     <Box sx={{ margin: 4 }}>
//       <Card sx={{ borderRadius: 2, boxShadow: 3, background: "#f5f5f5" }}>
//         <CardContent>
//           <Typography variant="h4" component="h2" sx={{ fontWeight: "bold", color: "#4caf50", marginBottom: 2 }}>
//             {recipe?.title}
//           </Typography>
//           <Typography variant="h6" sx={{ color: "#757575", marginBottom: 2 }}>
//             {recipe?.description}
//           </Typography>
//           <Divider sx={{ marginBottom: 2 }} />
//           <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 1 }}>
//             Ingredients:
//           </Typography>
//           <List>
//             {recipe?.ingredients.map((ingredient, index) => (
//               <ListItem key={index} sx={{ paddingLeft: 0 }}>
//                 <Typography variant="body1" sx={{ color: "#3f51b5" }}>
//                   {ingredient}
//                 </Typography>
//               </ListItem>
//             ))}
//           </List>
//           <Divider sx={{ margin: "16px 0" }} />
//           <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 1 }}>
//             Preparation Instructions:
//           </Typography>
//           <Typography variant="body2" sx={{ color: "#424242" }}>
//             {recipe?.instructions}
//           </Typography>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// });

// export default RecipeToShow;
import { observer } from "mobx-react-lite";
import recipeStore, { RecipeType } from "./recipeStore";
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
                  {ingredient}
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

