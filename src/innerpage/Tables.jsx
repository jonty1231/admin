import React from 'react'

const Tables = () => {
const table1=[{num:1,fname:"John",lname:"Doe",mail:"jhon@email.com"},{num:2,fname:"Mark",lname:"Otto",mail:"mark@email.com"},{num:3,fname:"Jacob",lname:"Thornton",mail:"jhoaicojacob@email.com"}]


  return (
   <div className='bg-black ' >
  <div className='grid grid-cols-2 p-4'>
   <div className='bg-bgcolor text-scolor p-4'>
    <b className='text-white'>Basic Table</b>
   <table>
    <thead>
        <tr className='border-b-[1px] border-black '> 
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody className=''>
        {
            table1.map((info)=><tr className='border-b-[1px] border-black '  >
            <td>{info.num}</td>
            <td>{info.fname}</td>
            <td>{info.lname}</td>
            <td>{info.mail}</td>
            </tr>)
        }


    </tbody>

   </table>

   </div>



  </div>



   </div>
  )
}

export default Tables