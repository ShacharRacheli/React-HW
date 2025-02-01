import { RouterProvider } from 'react-router'
import './App.css'
import HomePage from './components/homePage'
import { MyRouter } from './Router'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid2';

function App() {

  return (
    <>
               <RouterProvider router={MyRouter} />
    </>
  )
}

export default App
