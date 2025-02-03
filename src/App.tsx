import { RouterProvider } from 'react-router'
import './App.css'
import { MyRouter } from './Router'

function App() {

  return (
    <>
    <RouterProvider router={MyRouter} />
    </>
  )
}

export default App
