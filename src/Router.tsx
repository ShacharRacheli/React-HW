import { createBrowserRouter } from 'react-router';
import AppLayout from "./components/RouterComponents/appLayout"
import AllRecipes from './components/Recipes/allRecipes';
import RecipeToShow from './components/Recipes/recipetoShow';
import UpdateRecipeList from './components/Recipes/updteRecipeList';
export const MyRouter=createBrowserRouter([
    {
         path:'/',
         element:<AppLayout/>,
         errorElement:<>error!!!!</>,
         children:[  
            {
                path:'allRecipes',element:<AllRecipes/>
            },{
                path:'updateRecipes',element:<UpdateRecipeList/>
            },
            {
                path: 'allRecipes',
                element:<AllRecipes/>,
                children: [
                    {
                        path: ':id', 
                        element: <RecipeToShow /> 
                    }         
                ]
            }
        ]}
])

