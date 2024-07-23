import { list } from 'postcss'
import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'



const Sidebar = () => {
const [data,setdata]=useState([{ele:"Dashboard",icon:"fa-tachometer-alt",link:"/"},{ele:"Elements",icon:"fa-laptop",link:"/Elements"},{ele:"Widgets",icon:"fa-th",link:"/Widgets"},{ele:"Forms",icon:"fa-keyboard",link:"/Forms"},{ele:"Tables",icon:"fa-table",link:"/Tables"},{ele:"Charts",icon:"fa-chart-bar",link:"/Charts"},{ele:"Pages",icon:"fa-file-alt",link:"/Pages"}])


  return (
    <section className='bg-bgcolor   h-screen flex flex-col justify-start  pr-4'>
     <div className='text-[28px] mb-5 mx-4 text-pcolor hidden lg:block'>
     <i className="fa-solid fa-user-pen "> </i> <b className='font-mono text-3xl'>Darkpen</b>
     </div>
       <div className='flex gap-3 items-center  ml-6 mb-6' >
        <div className='   '>
        <img src="/user.jpg" alt=""  className=" w-100 rounded-full"/>
        </div>
        <div>
         <h2 className='text-white'>Jhon Doe</h2>
         <p className=' text-scolor '>Admin</p>
        </div>
       </div>

    <nav className='flex flex-col w-100'>

        {data.map((info,index)=> <List ele={info.ele} icon={info.icon} link={info.link} key={index} /> )}
        
      
    </nav>


    </section>
  
  )
}


const List=({ele,icon,link})=>{
    return(
        <NavLink to={link}  className={ ` group text-scolor text-xl py-2 pr-5 w-100 hover:text-pcolor hover:bg-black rounded-r-3xl border-l-4 border-tra hover:border-pcolor pl-2 duration-300  `} > <i className={` fa ${icon} p-3 rounded-full bg-black mr-2 group-hover:bg-bgcolor `}></i>{ele}</NavLink>
    )
}

export default Sidebar