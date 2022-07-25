import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import './pricing.css';
import car1 from './assets/car1.jpg';
import car2 from './assets/car2.jpg';
import car3 from './assets/car3.jpg';
import car4 from './assets/card4.jpg';
import car5 from './assets/card5.jpg';
import car6 from './assets/card6.jpg';



function Carouselcomp() {
  return (
    <div>
        
        <Carousel fade>
      
      <Carousel.Item>
      <br/>
      <div className="container"> 
  <div className="row flex-items-xs-middle flex-items-xs-center">

  <div className="col-xs-12 col-lg-4">
        
        <div className="card img-fluid text-white rounded text-xs-center bgc h-75 ">
          
          <img className="card-img-top h-100" src={car5} />
          
          <div className="card-img-overlay text-center">        
           
            <h5 className="card-title text-center inside">Culture
              
              <br/>
              
              <span className="fw-bold">&nbsp; on the walls.</span> 
              
            </h5>
           
          </div>
        </div>
        </div>

        <div className="col-xs-12 col-lg-4">
        
        <div className="card img-fluid text-white rounded text-xs-center bgc h-75 ">
          
          <img className="card-img-top h-100" src={car4} />
          
          
        </div>
        </div>

        <div className="col-xs-12 col-lg-4">
        
        <div className="card img-fluid text-white rounded text-xs-center bgc h-75 ">
          
          <img className="card-img-top h-100" src={car6} />
          
        </div>
        </div>


        </div>
        </div>

        
      </Carousel.Item>
      <Carousel.Item>
      <br/>

      <div className="container"> 
  <div className="row flex-items-xs-middle flex-items-xs-center">

  <div className="col-xs-12 col-lg-4">
        
        <div className="card img-fluid text-white rounded text-xs-center bgc h-75 ">
          
          <img className="card-img-top h-100" src={car2} />
          
        </div>
        </div>

        <div className="col-xs-12 col-lg-4">
        
        <div className="card img-fluid text-white rounded text-xs-center bgc h-75 ">
          
          <img className="card-img-top h-100" src={car3} />
          

        </div>
        </div>

        <div className="col-xs-12 col-lg-4">
        
        <div className="card img-fluid text-white rounded text-xs-center bgc h-75 ">
          
          <img className="card-img-top h-100" src={car1} />
          
        </div>
        </div>


        </div>
        </div>
        </Carousel.Item>
 
    </Carousel>
</div>
  
  )
}

export default Carouselcomp