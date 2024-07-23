import React from 'react'
import {Bar,Line,PolarArea,Pie} from "react-chartjs-2"
import {Chart} from "chart.js/auto"
import Footer from '../components/Footer'

const data={
    labels:["jan","fab","march","april"],
    datasets:[{
      label:"USA",
      data:[6,9,5,5],
     backgroundColor: '#EB1616',},
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

const Charts = () => {
  return (<div className='bg-black'> 
    <div className=' grid gap-4 lg:grid-cols-2 p-5 '>
   <div className='bg-bgcolor'>

   <Line data={data} className=' w-full '> </Line>
   </div>
   <div className='bg-bgcolor'>

   <Bar data={data} className=' w-full '> </Bar>
   </div>
   <div className='bg-bgcolor'>

<PolarArea data={data} className=' w-full '> </PolarArea>
</div>
<div className='bg-bgcolor'>

<Pie data={data} className=' w-full '> </Pie>
</div>

    </div>
    <Footer />
    </div>
  )
}

export default Charts