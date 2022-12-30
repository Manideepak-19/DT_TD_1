import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

function CarpentoryNext() {
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
              src="https://damroindia.com/media/catalog/product/cache/1/image/700x600/4ff92d135b1a0a45dc0f2d5e87077bf5/b/k/bkbp_019_m42_1_.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Beds and Tables</h5>
              <p class="card-text">
                <div>cost:₹1000 Duration:1 day</div>
                <div>Rating : 4.38</div>
                <div>Pick from 1000+ styles</div>
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
              style={{height:"36rem"}}
              src="https://hometriangle.com/v2/images/lg/imagecache/media/136680/WhatsApp%20Image%202022-08-24%20at%207.12.47%20PM%20(1).jpeg"
              alt="Card image cap"
            />
            <div class="card-body mt-3">
              <h5 class="card-title">Shelves and Cupboards</h5>
              <p class="card-text">
                <div>cost:₹1200 Duration:2 days</div>
                <div>Rating : 4.98</div>
                <div>Smoothly finished interior</div>
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

export default CarpentoryNext