import React from 'react'
import Footer from '../components/Footer'

const Forms = () => {
  return (
   <div className='bg-black'>
<div className='grid grid-cols-1 lg:grid-cols-2  p-8 gap-8'>
<div className='p-4 bg-bgcolor text-scolor rounded-md'>
    <b className='text-white'>  Basic form</b>
    <div className='flex flex-col gap-3 my-4'>
    <label htmlFor="email">Email address</label>
    <input type="email" name="" id="email" className='bg-black rounded-md'/>
    </div>
    <div className='flex flex-col gap-3 my-4'>
    <label htmlFor="password">Password</label>
    <input type="password" name="" id="password"  className='bg-black rounded-md'/>
    </div>
    <div className='text-scolor'>
      <input type="checkbox" name="" id="check" className='' /> <label htmlFor='check'>Check me out</label>
    </div>
    <button className='bg-pcolor text-white px-4 py-2 rounded-lg my-4'>Sign in</button>
</div>

<div className='p-4 bg-bgcolor text-scolor rounded-md'>
    <b className='text-white'> Horizontal Form</b>
    <div className=' my-4'>
    <label htmlFor="email1">Email address</label>
    <input type="email" name="" id="email1" className='bg-black rounded-md w-4/6 mx-3'/>
    </div>
    <div className=' my-4'>
    <label htmlFor="password1">Password</label>
    <input type="password" name="" id="password1"  className='bg-black rounded-md w-4/6 mx-10' />
    </div>

<div className='flex'>
  <div>
    Radios
  </div>
  <div className='mx-16'> 
  <div>
    <input type="radio" name="name" id="radio1"  checked/> <label htmlFor="radio1"> first radio</label>

  </div>
  <div>
  <input type="radio" name="name" id="radio2" /> <label htmlFor="radio2"> second radio </label>

  </div></div>
</div>

    <div className='text-scolor my-2'> 
    <span className=''>CheckBox</span>
      <input type="checkbox" name="" id="check1" className=' ms-10' /> <label htmlFor='check1'>Check me out</label>
    </div>
    <button className='bg-pcolor text-white px-4 py-2 rounded-lg my-4'>Sign in</button>
</div>

<div className='p-4 bg-bgcolor text-scolor rounded-md flex flex-col gap-5'>
<b className='text-white'>Floating Label</b>
<input type="text" name="" id=""  className=' bg-black w-full p-3 rounded-md' placeholder='Email address '/>
<input type="password" name="" id=""  className=' bg-black w-full p-3  rounded-md' placeholder='Password'/>
 <select name="" id="" className='bg-black p-2 rounded-md'>
  <option value="Open this select menu" >Open this select menu</option>
  <option value="one">one</option>
  <option value="two">two</option>
  <option value="three">three</option>
 </select>
 <textarea name="" id="" placeholder='Comments' className='bg-black p-4 h-32 rounded-md'></textarea>
</div>

<div className='p-4 bg-bgcolor text-scolor rounded-md '>
<b className='text-white'> File Input</b>
<div className='flex flex-col gap-2 mt-4'> 
  <div>
    <label htmlFor="file1">Default file input example</label>
    <input type="file" name="" id="file1"  className='bg-black w-full rounded-md text-xl my-2' />
  </div>
  <div>
    <label htmlFor="file2">Multiple files input example</label>
    <input type="file" name="" id="file2"  className='bg-black w-full rounded-md text-xl my-2'/>
  </div>
  <div>
    <label htmlFor="file3">Small file input example</label>
    <input type="file" name="" id="file3"  className='bg-black w-full rounded-md my-2' />
  </div>
  <div>
    <label htmlFor="file4">Large file input example</label>
    <input type="file" name="" id="file4"  className='bg-black w-full rounded-md text-2xl my-2'/>
  </div>
</div>
</div>

<div className='p-4 bg-bgcolor text-scolor rounded-md '>
  <b className='text-white'> Select</b>
  <div className='flex flex-col gap-4 my-3'>
 <select name="" id="" className='bg-black w-full rounded-md'>
<option value="Open this select menu">Open this select menu</option>
<option value="one">one</option>
<option value="two">two</option>
<option value="three">three</option>

 </select>

 <select name="" id="" className='bg-black w-full text-xl rounded-md'>
<option value="Open this select menu">Open this select menu</option>
<option value="one">one</option>
<option value="two">two</option>
<option value="three">three</option>

 </select>
 <select name="" id="" className='bg-black w-full text-2xl rounded-md'>
<option value="Open this select menu">Open this select menu</option>
<option value="one">one</option>
<option value="two">two</option>
<option value="three">three</option>

 </select>
 <div name="" id="" className='bg-black w-full text-xl rounded-md overflow-y-scroll'  >
<option value="Open this select menu">Open this select menu</option>
<option value="one">one</option>
<option value="two">two</option>
<option value="three">three</option>

 </div>
 </div>
</div>

<div className='p-4 bg-bgcolor text-scolor rounded-md '>
<b className='text-white'>Check, Radio & Switch</b>
<div className='border-b-2 flex flex-col gap-2 py-2'>
<div><input type="checkbox" name="" id="checka1" /><label htmlFor="checka1" className='ms-2'>Default checkbox</label></div>
<div><input type="checkbox" name="" id="checka2" checked/><label htmlFor="checka2" className='ms-2'>Checked checkbox</label></div>
<div className='flex gap-2'><input type="checkbox" name="" id="1" /> <label htmlFor="1">1</label> <input type="checkbox" name="" id="2" /> <label htmlFor="2">2</label> <input type="checkbox" name="" id="3" disabled /> <label htmlFor="3" disabled>3 (disabled)</label> </div>
</div>
<div className='border-b-2 flex flex-col gap-2 py-2'>
<div><input type="radio" name="33" id="radio22" /><label htmlFor="radio22" className='ms-2'>Default checkbox</label></div>
<div><input type="radio" name="33" id="radio12" checked /><label htmlFor="radio12" className='ms-2'>Checked checkbox</label></div>
<div className='flex gap-2'><input type="radio" name="" id="1" /> <label htmlFor="1">1</label> <input type="checkbox" name="" id="2" /> <label htmlFor="2">2</label> <input type="checkbox" name="" id="3" disabled /> <label htmlFor="3" disabled>3 (disabled)</label> </div>
</div>
<div>

</div>
</div>



<div className='p-4 bg-bgcolor text-scolor rounded-md '>
<b className='text-white'> Input Group</b>
<div className=' mt-5 flex flex-col gap-3'>

  <div className='flex'><span className='p-[0.6rem]  bg-white rounded-l-md' >@</span> <input type="text" name="" id=""  className='w-full bg-black  p-2 rounded-r-md' placeholder='User name  '/> </div>

 <div className='flex flex-row-reverse'><span className='p-[0.6rem]  bg-white rounded-r-md' >@Example.com</span> <input type="text" name="" id=""  className='w-full bg-black  p-2 rounded-l-md' placeholder="Recipient's username"/> </div>
 <p>Your vanity URL</p>
 <div className='flex'><span className='p-[0.6rem]  bg-white rounded-l-md' >https://example.com/users/</span> <input type="text" name="" id=""  className='w-full bg-black  p-2 rounded-r-md' placeholder='  '/> </div>

 <div className='flex'><span className='p-[0.6rem]  bg-white rounded-l-md' >$</span> <input type="text" name="" id=""  className='w-full bg-black  p-2 rounded-r-md' placeholder='  '/> <span className='p-[0.6rem]  bg-white rounded-r-md' >.00</span> </div>
 <div className='flex'><input type="text" name="" id=""  className='w-full bg-black  p-2 rounded-l-md' placeholder='Username'/> <span className='p-[0.6rem]  bg-white ' >$</span> <input type="text" name="" id=""  className='w-full bg-black  p-2 rounded-r-md' placeholder='Server'/> </div>
 <div className='flex'><span className='p-[0.6rem] pt-5  bg-white rounded-l-md' >textarea</span> <textarea type="text" name="" id=""  className='w-full bg-black  p-2 rounded-r-md' placeholder='  '/> </div>


</div>
</div>

<div className='p-4 bg-bgcolor text-scolor rounded-md '>
<b className='text-white'> Sizing</b>
<div className='flex flex-col gap-4 h-full my-4'>
<input type="text" placeholder='.form-control-lg' className='w-full  text-2xl bg-black rounded-md p-2'  />
<input type="text" placeholder='Default input' className='w-full  text-xl bg-black rounded-md p-2'  />
<input type="text" placeholder='.form-control-sm' className='w-full   bg-black rounded-md p-2'  />
</div>
</div>

</div>


  <Footer />
   </div>
  )
}

export default Forms  