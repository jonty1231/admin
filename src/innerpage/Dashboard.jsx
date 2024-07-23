import React, { useState } from 'react'

import {Bar,Line} from "react-chartjs-2"
import {Chart} from "chart.js/auto"
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import CalenderSection from '../components/CalenderSection'


const Dashboard= () => {

const data={
  labels:["jan","fab","march","april"],
  datasets:[{
    label:"USA",
    data:[6,9,5,5],
    
    backgroundColor: '#EB1616',
  
  },
  {
    label:"UK",
    data:[9,8,8,7],
    
    backgroundColor: '#eb1616b7',
  
  }
  ,
  {
    label:"AU",
    data:[6,6,4,2],
   
    backgroundColor: '#eb161677',

  
  }
]
}
   
  
const [tableData,setTableData]=useState([{date:"01 Jan 2045",invoice:"INV-0123",Customer:"jhon Doe",Amount:"$123",Status:"paid"},{date:"01 Jan 2045",invoice:"INV-0123",Customer:"jhon Doe",Amount:"$123",Status:"paid"},{date:"01 Jan 2045",invoice:"INV-0123",Customer:"jhon Doe",Amount:"$123",Status:"paid"},{date:"01 Jan 2045",invoice:"INV-0123",Customer:"jhon Doe",Amount:"$123",Status:"paid"},{date:"01 Jan 2045",invoice:"INV-0123",Customer:"jhon Doe",Amount:"$123",Status:"paid"}])







  return (
   <div className='bg-black'>
      <section className=' w-full '>
           <div className=' grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4      gap-6 px-6 py-6'>
             <div className='bg-bgcolor flex items-center justify-between p-4 rounded-lg'>
             <i class="fa fa-chart-line text-pcolor text-5xl"></i>
             <div>
              <p className='text-scolor text-xl'>Total Sale</p>
              <h3 className='text-white' >$1234</h3>
             </div>
             </div>
             <div className='bg-bgcolor flex items-center justify-between p-4 rounded-lg'>
             <i class="fa fa-chart-column text-pcolor text-5xl"></i>
             <div>
              <p className='text-scolor text-xl'>Total Sale</p>
              <h3 className='text-white' >$1234</h3>
             </div>
             </div>
             
             <div className='bg-bgcolor flex items-center justify-between p-4 rounded-lg'>
             <i class="fa fa-chart-area text-pcolor text-5xl"></i>
             <div>
              <p className='text-scolor text-xl'>Today Revenue</p>
              <h3 className='text-white' >$1234</h3>
             </div>
             </div>
             <div className='bg-bgcolor flex items-center justify-between p-4 rounded-lg'>
             <i class="fa fa-chart-pie text-pcolor text-5xl"></i>
             <div>
              <p className='text-scolor text-xl'>Today Revenue</p>
              <h3 className='text-white' >$1234</h3>
             </div>
             </div>
            
           

           </div>


      </section>
<section className='w-full flex justify-around gap-5 px-5 flex-col lg:flex-row' >
<div className=' bg-bgcolor w-full rounded-md' >

<Bar data={data} className=' w-full '> </Bar>
</div>
<div className=' bg-bgcolor w-full rounded-md'>

<Line data={data} className='' />   
</div>

</section>

<section className='p-5 '>
  <div className='w-100 bg-bgcolor p-2 rounded-md overflow-x-scroll lg:overflow-auto'>
     <div className='flex justify-between p-3'> <p className='text-white'> Recent Salse</p> <Link className='text-pcolor'> Show Sale</Link></div>
   <table  width="100%" className='text-center  my-3'> 
    <tr className='text-white w-100'><th className='border-2 border-black'> <input type="checkbox" name="" id="" /> </th> <th className='border-2 border-black'>Date</th><th className='border-2 border-black'>Invoice</th><th className='border-2 border-black'>Customer</th>
    <th className='border-2 border-black'> 	Amount</th> <th className='border-2 border-black'>Status</th> <th className='border-2 border-black py-3'>Action</th></tr>

{tableData.map((info,index)=>{return <tr className='text-scolor'><td className='border-2 border-black'><input type="checkbox" name="" id="" /></td><td className='border-2 border-black'>{info.date}</td><td className='border-2 border-black'>{info.invoice}</td><td className='border-2 border-black'>{info.Customer}</td> <td className='border-2 border-black'>{info.Amount}</td><td className='border-2 border-black'>{info.Status}</td>  <td className='border-2 border-black py-3' ><button className='bg-pcolor text-white p-1 rounded-lg'>Details</button></td></tr>})}




   </table>


  </div>



</section>

<CalenderSection />


<Footer />



   </div>
  )
}




export default Dashboard