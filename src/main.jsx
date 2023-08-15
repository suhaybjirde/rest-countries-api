import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  Route 
} from 'react-router-dom'
import Home, { loader as homeLoader } from './pages/Home'
import CountryDetails, {loader as CountryDetailsLoader} from './pages/CoutryDetails'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import Error from './pages/Error'
import './scss/main.scss'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} loader={homeLoader} />
      <Route path='/country-details' element={<CountryDetails />} loader={CountryDetailsLoader} errorElement={<Error />}/>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
