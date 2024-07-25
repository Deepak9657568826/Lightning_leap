

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Homepage from './pages/Homepage'
import Blog from './pages/Blog'
import Addpost from './pages/Addpost'
import WholeComponent from './pages/WholeComponent'
import Userdetail from './pages/Userdetail'
import Logout from './pages/Logout'

function Allroutes() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/homepage' element={<Homepage/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/addblog' element={<Addpost/>}/>
      <Route path='/user' element={<Userdetail/>}/>
      <Route path='/logout' element={<Logout/>}/>
    </Routes>
  )
}

export default Allroutes
