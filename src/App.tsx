import { RouterProvider } from 'react-router'
import './App.css'
import HomePage from './components/homePage'
import { MyRouter } from './Router'
import { Box } from '@mui/material'

function App() {

  return (
    <>
      <HomePage/>
     <Box sx={{position: 'absolute', top: 150, left: 10}}>
      <RouterProvider router={MyRouter}/>
      </Box>
    </>
  )
}

export default App
