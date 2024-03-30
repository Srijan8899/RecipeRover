import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function cards() {
  return (
    <>
    <h1 class="text-center">Our Features</h1>
    <div class="container text-center h-40 w-50">
  <div class="row">
    <div class="col">
      <div class="card" >
  <img src="https://picsum.photos/200/300" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Healthy Food</h5>
    <p class="card-text">Enjoy healthy food & taste, creating delicious dishes that nourish the body and support optimal health. .</p>
    <a href="#" class="btn btn-primary">Try Now</a>
  </div>
</div>
    </div>
    <div class="col">
     <div class="card " >
  <img src="https://picsum.photos/203/300" class="card-img-top " alt="..." />
  <div class="card-body">
    <h5 class="card-title">Festive Special</h5>
    <p class="card-text">Savory dishes infused with unique flavors, festive food adds joy and flavor to memorable gatherings.</p>
    <a href="#" class="btn btn-primary">Try Now</a>
  </div>
</div>
    </div>
    <div class="col">
      <div class="card" >
  <img src="https://picsum.photos/202/300" class="card-img-top" alt="..." height="200px" />
  <div class="card-body">
    <h5 class="card-title">Instant Recipe</h5>
    <p class="card-text">Just a few ingredients and minimal cooking time, these recipes provide delicious meals or snacks on demand.</p>
    <a href="#" class="btn btn-primary">Try Now</a>
  </div>
</div>
    </div>
  </div>
</div>
    </>
  )
}

export default cards