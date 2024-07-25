import React from 'react'
import Sidebar from '../component/Sidebar'
import Allroutes from '../Allroutes'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Blog from './Blog'
import Addpost from './Addpost'

function WholeComponent() {
  return (
    <div>
      <Sidebar />
      <Routes>
     <Route path='/homepage' element={<Homepage/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/addblog' element={<Addpost/>}/>
      </Routes>
    </div>
  )
}

export default WholeComponent
