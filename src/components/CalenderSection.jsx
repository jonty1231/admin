import React from 'react'
import { Link } from 'react-router-dom'
const CalenderSection = () => {
  return (
    <section className='flex p-5 justify-around flex-col lg:flex-row gap-y-5 lg:gap-6 ' >
    <div className='lg:w-2/6 bg-bgcolor p-5 rounded-md  '    > 
    <div className='flex justify-between'> <p className='text-white'>Messages</p> <Link className='text-pcolor'>Show All</Link></div>
    <ImgSectiojn />
    <ImgSectiojn />
    <ImgSectiojn />
    <ImgSectiojn />
    </div>
    <div className='bg-bgcolor p-5 rounded-md lg:w-2/6 ' >
    <div className='flex justify-between'> <p className='text-white'>Calender</p> <Link className='text-pcolor'>Show All</Link></div>
    
    <ul class=" text-white flex gap-7 my-3 ">
      <li>Mo</li>
      <li>Tu</li>
      <li>We</li>
      <li>Th</li>
      <li>Fr</li>
      <li>Sa</li>
      <li>Su</li>
    </ul> 
    
    <ul class="text-white grid grid-cols-7 gap-3 text-center" >  
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li><span class="bg-pcolor text-white p-1 rounded-md">10</span></li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
    </ul>
    
    
    
    
    
    </div>
    <div className='bg-bgcolor  rounded-md lg:w-2/6 p-5'>
    <div className='flex justify-between mb-5 '> <p className='text-white'>To Do List</p> <Link className='text-pcolor'>Show All</Link></div>
    <div className='flex gap-2 flex-col lg:flex-row'>
      <input type="text" placeholder='Enter task'  className='bg-black rounded-md    text-xl p-1' />
      <button className='bg-pcolor text-white rounded-md p-2'> Add</button>
    </div>
    <TodoList />
    <TodoList />
    <TodoList />
    <TodoList />
    </div>
    </section>
  )
}



const ImgSectiojn=()=>{
    return(<div className='flex items-center gap-6 text-scolor border-b-2 py-2 border-black'>
      <img src="/user.jpg" alt="" className='rounded-full'/>
      <div>
        <p className='flex justify-between'> <b className='text-white'> Jhon Doe</b><span>15 minutes ago</span></p>
        <p>Short message goes here...</p>
      </div>
    </div>)
    }
    
    const TodoList=()=>{
      return(
        <div className='text-scolor flex items-center justify-around border-b-[1px] border-black py-2 mt-2'>
    <input type="checkbox" />
    <p>Short task goes here...</p>
    <i className="fa-solid fa-xmark"></i>
    
        </div>
      )
    }

    export default CalenderSection