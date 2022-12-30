import React from 'react'
import { useNavigate } from 'react-router-dom'

function Filters() {
  const navigate=useNavigate()
  return (
    <div>
    <div className="container w-50 p-5">
    <h2>Choose Your Filters</h2>
     <select class="mdb-select form-control w-50 mt-5" id="selectList" onchange="change_handler();">
    <option value="" disabled selected>Time Slot</option>
    <option value="op1">11:00AM-12PM</option>
    <option value="op1">12:00PM-1:00PM</option>
    <option value="op2">7:00PM-8:00PM</option>
    <option value="op3">8:00PM-9:00PM</option>
</select>
  <select class="mdb-select form-control w-50 mt-3" id="selectList" onchange="change_handler();">
    <option value=""  selected disabled>Experince</option>
    <option value="op1">1-4 years</option>
    <option value="op2">5-6 years</option>
    <option value="op3">6+ years</option>
</select>
  <select class="mdb-select form-control w-50 mt-3" id="selectList" onchange="change_handler();">
    <option value=""  selected>Rating</option>
    <option value="op1">1-2 star</option>
    <option value="op2">3 star</option>
    <option value="op3">4 star+</option>
</select>
<div className='w-50'>
<button className="btn btn-primary mt-3 d-block mx-auto " onClick={()=>navigate('/form')} >Submit</button>
</div>
</div>
    </div>
  )
}

export default Filters