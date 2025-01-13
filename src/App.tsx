import { RouterProvider } from 'react-router'
import './App.css'
import HomePage from './components/homePage'
import { MyRouter } from './Router'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid2';

function App() {

  return (
    <>
      <Box>
        <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
          <Grid >
            <HomePage />
          </Grid>
          <Grid >
            <RouterProvider router={MyRouter} />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default App
