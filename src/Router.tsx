import { createBrowserRouter } from 'react-router';
import About from "./components/RouterComponents/about"
import AppLayout from "./components/RouterComponents/appLayout"
import Welcome from './components/RouterComponents/Welcome';
import Hello from './components/RouterComponents/hello';
import AllRecipes from './components/Recipes/allRecipes';
import RecipeToShow from './components/Recipes/recipetoShow';
import HomePage from './components/homePage';
export const MyRouter=createBrowserRouter([
    {

         path:'/',
         element:<AppLayout/>,
         errorElement:<>error!!!!</>,
         children:[
            {
                path:'/',element:<HomePage/>
            },
             {
                path:'about',element:<About/>
            },
            {
                path:'welcome',element:<Welcome/>
            },
            {
                path:'hello',element:<Hello/>
            }
            ,
            {
                path:'allRecipes',element:<AllRecipes/>
            },
            {
                path: 'allRecipes',
                element:<AllRecipes/>,
                children: [
                    {
                        path: ':id', 
                        element: <RecipeToShow /> // This will be rendered in the Outlet
                    }         
                ]
            }
        ]}
])

