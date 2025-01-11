import { createBrowserRouter } from 'react-router';
import About from "./components/RouterComponents/about"
import AppLayout from "./components/RouterComponents/appLayout"
import Welcome from './components/RouterComponents/Welcome';
import Hello from './components/RouterComponents/hello';
export const MyRouter=createBrowserRouter([
    {

         path:'/',
         element:<AppLayout/>,
         errorElement:<>error!!!!</>,
         children:[
            {
                path:'about',element:<About/>
            },
            {
                path:'welcome',element:<Welcome/>
            },
            {
                path:'hello',element:<Hello/>
            }
                 ]
    }
])

