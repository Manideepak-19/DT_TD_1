import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

function PaintingNext() {
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
              src="https://static.asianpaints.com/content/dam/asian_paints/services/services-safe-painting-offerings-wood-finishes-asian-paints.jpg.transform/cc-width-335/image.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">House Painting</h5>
              <p class="card-text">
                <div>cost:₹600 Duration:1day</div>
                <div>Rating : 4.38</div>
                <div>Interior and exterior painting</div>
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
              //style={{height:"21rem"}}
              src="https://static.asianpaints.com/content/dam/asian_paints/services/services-safe-painting-offerings-texture-asian-paints.jpg.transform/cc-width-335/image.jpg"
              alt="Card image cap"
            />
            <div class="card-body ">
              <h5 class="card-title">Wallpaper Painting</h5>
              <p class="card-text">
                <div>cost:₹700 Duration:60min</div>
                <div>Rating : 4.98</div>
                <div>All styles available</div>
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

export default PaintingNext