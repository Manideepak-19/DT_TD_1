import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

function PackingNext() {
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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Umzugslift.jpg/330px-Umzugslift.jpg"
              alt="Card image cap"
            />
            <div class="card-body mt-4">
              <h5 class="card-title">Intrastate Moving</h5>
              <p class="card-text">
                <div>cost:₹1000 Duration:6 hrs</div>
                <div>Rating : 4.38</div>
                <div>Packes and moves all items including vechicles</div>
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
              style={{height:"26rem"}}
              src="https://www.globalcargopackers.com/images/packers-movers.jpg"
              alt="Card image cap"
            />
            <div class="card-body mt-3">
              <h5 class="card-title">Interstate Moving</h5>
              <p class="card-text">
                <div>cost:₹2000 Duration:1day+</div>
                <div>Rating : 4.98</div>
                <div>Packes and moves all items including vechicles</div>
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

export default PackingNext