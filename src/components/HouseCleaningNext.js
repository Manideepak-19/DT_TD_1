import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

function HouseCleaningNext() {
  const navigate=useNavigate()
  return (
    <div>
        <div className="m-5">
        <Header />
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-4">
          <div class="card">
            <img
              class="card-img-top"
              src="https://myhomey.in/blog/wp-content/uploads/2022/03/house-cleaners-850x459.jpg"
              alt="Card image cap"
            />
            <div class="card-body mt-5">
              <h5 class="card-title">House cleaning</h5>
              <p class="card-text">
                <div>cost:₹200 Duration:40min</div>
                <div>Rating : 4.38</div>
              </p>
              <a href="#" class="btn btn-primary" onClick={()=>navigate('/form')}>
                Book
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div class="card">
            <img
              class="card-img-top"
              style={{height:"21rem"}}
              src="https://www.jacksonvillemag.com/wp-content/uploads/2020/01/organized-clothes-closet.jpg"
              alt="Card image cap"
            />
            <div class="card-body mt-5">
              <h5 class="card-title">Wardrobe cleaning</h5>
              <p class="card-text">
                <div>cost:₹300 Duration:60min</div>
                <div>Rating : 4.98</div>
              </p>
              <a href="#" class="btn btn-primary" onClick={()=>navigate('/form')} >
                Book
              </a>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  )
}

export default HouseCleaningNext