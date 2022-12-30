import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

function SalonAndSpa() {
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
              src="https://images.smartcapitalmind.com/woman-getting-spa-massage.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Massage spa</h5>
              <p class="card-text">
                <div>cost:₹200 Duration:40min</div>
                <div>Rating : 4.38</div>
              </p>
              <a href="#" class="btn btn-primary" onClick={()=>navigate('/form')} >
                Book
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div class="card">
            <img
              class="card-img-top"
              src="https://static.wixstatic.com/media/baccc2_3e1931bdc1724dd69e7bfe6e3d785723~mv2.jpg/v1/fill/w_640,h_402,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baccc2_3e1931bdc1724dd69e7bfe6e3d785723~mv2.jpg"
              alt="Card image cap"
            />
            <div class="card-body mt-3">
              <h5 class="card-title">HairCut Salon</h5>
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

export default SalonAndSpa