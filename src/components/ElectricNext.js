import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

function ElectricNext() {
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
              src="https://delightifm.com/wp-content/uploads/Appliance-Installation.jpg"
              alt="Card image cap"
            />
            <div class="card-body mt-3">
              <h5 class="card-title">Appliance Instalation</h5>
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
              src="https://www.pollexsolutions.com.pk/wp-content/uploads/2018/05/One-Stop-Solution-for-All-Electrical-Services.jpg"
              alt="Card image cap"
            />
            <div class="card-body mt-3">
              <h5 class="card-title">Emergency Repairs</h5>
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

export default ElectricNext