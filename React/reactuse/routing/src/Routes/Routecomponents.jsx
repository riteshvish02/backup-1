import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../components/Home'
import Library from '../components/Library'
import Dets from '../components/Dets'
import Entry from "../components/Entry"
function Routecomponents() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/entry" element={<Entry/>}></Route>
      <Route path="/show" element={<Library/>}>
        <Route path="/show/:id" element={<Dets/>}></Route>
      </Route>
      {/* <Route path="/show/:id" element={<Dets/>}></Route> */}
      </Routes>
    </div>
  )
}

export default Routecomponents
