import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function CookingNext() {
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
              src="https://www.coveredca.com/marketing-blog/uploads/coveredcalifornia-infographic-smartfoodwaps-rf-original.jpg"
              alt="Card image cap"
            />
            <div class="card-body mt-5">
              <h5 class="card-title">Vegetarian</h5>
              <p class="card-text">
                <div>cost:₹200 Duration:40min</div>
                <div>Rating : 4.38</div>
                <div>Includes all types of vegetarian dishes</div>
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
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTA8bidt6KP-3wPxXvztKpi0bMIHDlVxlzc6vBkeE7xUgfo91Nm"
              alt="Card image cap"
            />
            <div class="card-body mt-3">
              <h5 class="card-title">Non-Vegetarian</h5>
              <p class="card-text">
                <div>cost:₹300 Duration:60min</div>
                <div>Rating : 4.98</div>
                <div>Includes all types of non vegetarian dishes</div>
              </p>
              <a href="#" class="btn btn-primary" onClick={()=>navigate('/form')} >
                Book
              </a>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
      <div className="row mt-5">
        <div className="col-2"></div>
        <div className="col-4">
          <div class="card">
            <img
              class="card-img-top"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/La_Zi_Ji_%28Chicken_with_Chiles%29_%282269517013%29.jpg/330px-La_Zi_Ji_%28Chicken_with_Chiles%29_%282269517013%29.jpg"
              alt="Card image cap"
            />
            <div class="card-body mt-5">
              <h5 class="card-title">Chinese</h5>
              <p class="card-text">
                <div>cost:₹200 Duration:20min</div>
                <div>Rating : 4.68</div>
                <div>Includes all types of Chinese dishes</div>
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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Traditional_pizza_from_Napoli.jpg/330px-Traditional_pizza_from_Napoli.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Italian</h5>
              <p class="card-text">
                <div>cost:₹700 Duration:80min</div>
                <div>Rating : 4.98</div>
                <div>Includes all types of Italian dishes</div>
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
  );
}

export default CookingNext;
