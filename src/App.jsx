

import {BrowserRouter,Routes ,Route } from "react-router-dom"
import Topheader from "./globle/Topheader"
import Sidebar from "./globle/Sidebar"
// import Dashboard from "./innerpage/Dashboard"
import { useState } from "react"
import Dashboard from "./innerpage/Dashboard"
import Widgets from "./innerpage/Widgets"
import Forms from "./innerpage/Forms"
import Charts from "./innerpage/Charts"
import Tables from "./innerpage/Tables"



function App() {
  const [slidebar,setslidebar ]=useState(false)

  const handelSlide=()=>{
    setslidebar(!slidebar)
    console.log(slidebar)
  }
  return (
   <>
   
    <BrowserRouter>
    <div className="flex h-screen ">
      <div className={`  absolute top-[3.5rem] lg:top-0 lg:relative    ${slidebar?"  lg:w-0 left-[-100%] lg:left-0":" lg:w-1/5 left-0 "} duration-500 overflow-hidden`}>
    <Sidebar  />
    </div>
    <div className={`w-full duration-500`}>
    <Routes>
     <Route path="/" element={<Topheader  handelSlide={handelSlide}/>} >
     <Route path="/"  element={<Dashboard />} />
     <Route path="/Widgets" element={<Widgets />} />
     <Route path="/forms" element={<Forms />} />
     <Route path="/charts"  element={<Charts />}/>
     <Route path="/tables"  element={<Tables />}/>
     </Route>
   
  
   </Routes>
   </div>
  </div>
   
  </BrowserRouter> </>
  )
}

export default App