import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate=useNavigate()
  return (
    <div>
        <div className="container" style={{marginTop:"50px"}} >
        <div className="row">
        <div className="col">
            <h1 className='font-weight-bold fs-2'>My Home Services</h1>
        </div>
        <div className="col-6">

        </div>
        <div className="col">
            <button className="btn border border-dark w-75 h-100 rounded rounded-pill" onClick={()=>navigate('/')} >
                <span className='h5 text-secondary' >
                    Home 
                </span>
            </button>
        </div>
     </div>
        </div>
    </div>
  )
}

export default Header