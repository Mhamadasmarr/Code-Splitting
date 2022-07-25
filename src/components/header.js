import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './style.css';
import img1 from './assets/arch1.png';
import brand from './assets/brand.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import { Link } from "react-router-dom";

function header() {
    
  return (
    <>

    <section className="ftco-section">
		
		
		<div className="container-fluid px-md-5">
			<div className="row justify-content-between">
				<div className="col-md-8 order-md-last">
					<div className="row">
						<div className="col-md-6 text-center">
							<img src={img1} className="size" />
						<br/>Construction Agency</div>
						<div className="col-md-6 d-md-flex justify-content-end mb-md-0 mb-3">
							<form action="#" className="searchform order-lg-last">
			          <div className="form-group d-flex">
			            <input type="text" className="form-control pl-3" placeholder="Search" />
			            <button type="submit" placeholder="" className="form-control search"><span className="fa fa-search"></span></button>
			          </div>
			        </form>
						</div>
					</div>
				</div>
				<div className="col-md-4 d-flex">
					<div className="social-media">
		    		<p className="mb-0 d-flex">
		    			<a href="http://www.facebook.com" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
		    			<a href="http://www.twitter.com" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a>
		    			<a href="http://www.instagram.com" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
		    		</p>
	        </div>
				</div>
			</div>
			
		</div>



		<Navbar  expand="lg" className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light">
	    <Container className="container-fluid">
		<Navbar.Brand href="#home"><br/><img src={brand} className="size1" /></Navbar.Brand>
		<Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav" 
		data-toggle="collapse" data-target="#ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
		<span class="fa fa-bars"></span> Menu </Navbar.Toggle>

	      
	        
		<Navbar.Collapse className="collapse navbar-collapse" id="basic-navbar-nav">
		<Nav className="me-auto navbar-nav m-auto">
	
	        	<li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
	        	<li className="nav-item"><Link to="/work" className="nav-link">Work</Link></li>
	        	<li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
	          <li className="nav-item"><Link to="/Contact" className="nav-link">Contact</Link></li>
			  </Nav>
			</Navbar.Collapse>
		  </Container>
		</Navbar>  

	</section>    
	
    </>
  )
}

export default header