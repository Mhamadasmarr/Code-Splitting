import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './style.css';
import './pricing.css';

import work1 from './assets/work1.jpg';
import work2 from './assets/work2.jpg';
import work3 from './assets/work3.jpg';
import work4 from './assets/work4.jpg';
import work5 from './assets/work5.jpg';
import work6 from './assets/work6.jpg';
import work7 from './assets/work7.jpg';
import work8 from './assets/work8.jpg';
import work9 from './assets/work9.jpg';

import Header from './header';
import Footer from './footer';

function Work() {
  return (
    <div>
        <Header />
        <div className="container"> 
  <div className="row flex-items-xs-middle flex-items-xs-center">

  <div className="col-xs-12 col-lg-4">

        <div className="card text-center">
  <img className="card-img-top" src={work5} alt="Card image" />
  <div className="card-body">
    <h4 className="card-title">Dream Building</h4>
    <p className="card-text">One of the most famouse buildings in the town, April,2020.</p>
    
  </div>
</div>
</div>

<div className="col-xs-12 col-lg-4">

        <div className="card text-center">
  <img className="card-img-top" src={work2} alt="Card image" />
  <div className="card-body">
    <h4 className="card-title">Dream Building</h4>
    <p className="card-text">One of the most famouse buildings in the town, April,2020.</p>
    
  </div>
</div>
</div>

<div className="col-xs-12 col-lg-4">

        <div className="card text-center">
  <img className="card-img-top" src={work3} alt="Card image" />
  <div className="card-body">
    <h4 className="card-title">Dream Building</h4>
    <p className="card-text">One of the most famouse buildings in the town, April,2020.</p>
    
  </div>
</div>
</div>

</div>

<div className="row flex-items-xs-middle flex-items-xs-center"><br/></div>
<div className="row flex-items-xs-middle flex-items-xs-center">

  <div className="col-xs-12 col-lg-4">

        <div className="card text-center">
  <img className="card-img-top" src={work1} alt="Card image" />
  <div className="card-body">
    <h4 className="card-title"><br/><br/>Dream Building</h4>
    <p className="card-text">One of the most famouse buildings in the town, April,2020.</p>
    
  </div>
</div>
</div>

<div className="col-xs-12 col-lg-4">

        <div className="card text-center">
  <img className="card-img-top" src={work6} alt="Card image" />
  <div className="card-body">
    <h4 className="card-title"><br/>Dream Building</h4>
    <p className="card-text">One of the most famouse buildings in the town, April,2020.</p>
    
  </div>
</div>
</div>

<div className="col-xs-12 col-lg-4">

        <div className="card text-center">
  <img className="card-img-top" src={work9} alt="Card image" />
  <div className="card-body">
    <h4 className="card-title">Dream Building</h4>
    <p className="card-text">One of the most famouse buildings in the town, April,2020.</p>
    
  </div>
</div>
</div>

</div>

<div className="row flex-items-xs-middle flex-items-xs-center"><br/></div>
<div className="row flex-items-xs-middle flex-items-xs-center">

  <div className="col-xs-12 col-lg-4">

        <div className="card text-center">
  <img className="card-img-top" src={work7} alt="Card image" />
  <div className="card-body">
    <h4 className="card-title"><br/><br/>Dream Building</h4>
    <p className="card-text">One of the most famouse buildings in the town, April,2020.</p>
    
  </div>
</div>
</div>

<div className="col-xs-12 col-lg-4">

        <div className="card text-center">
  <img className="card-img-top" src={work8} alt="Card image" />
  <div className="card-body">
    <h4 className="card-title"><br/><br/>Dream Building</h4>
    <p className="card-text">One of the most famouse buildings in the town, April,2020.</p>
    
  </div>
</div>
</div>

<div className="col-xs-12 col-lg-4">

        <div className="card text-center">
  <img className="card-img-top" src={work4} alt="Card image" />
  <div className="card-body">
    <h4 className="card-title">Dream Building</h4>
    <p className="card-text">One of the most famouse buildings in the town, April,2020.</p>
    
  </div>
</div>
</div>

</div>




    </div>
    <Footer />
    </div>
  )
}

export default Work