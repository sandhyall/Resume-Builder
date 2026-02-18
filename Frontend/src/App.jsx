import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router'
import Layout from './Component/UserLayout/Layout'
import Home from './Pages/Home'
import Footer from './Component/Common/Footer'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Adminlogin from './Pages/Adminlogin'
import ProtectRoute from './Component/ProtectRoute/ProtectRoute'
import Admindashboard from './Component/Dashboard/Admindashboard'
import Templetedashboard from './Component/Dashboard/Templetedashboard'

const App=()=> {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element ={<Home/>}/>
        <Route path='' element={<Footer/>}/>
        <Route path='/register' element={<Register/>}/>
         <Route path='/login' element={<Login/>}/>
         

        </Route>
        <Route path='/adminlogin' element={<Adminlogin/>}/>
        <Route path='/admin' element={
          <ProtectRoute>
            <Admindashboard/>
          </ProtectRoute>
        }>
          <Route path='/admin/templete' element={<Templetedashboard/>}/>

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App