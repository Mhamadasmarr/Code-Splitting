import React from 'react'
import './pricing.css';
import ar from './assets/article.jpg';
import ar2 from './assets/article1.jpg';

function article() {
  return (
    <div>
        <h1 className='bg-dark'>NEW PROJECT</h1>
        <br/>
        <h2>Vitra Fire Station in Germany </h2>
   
        <div className="container"> 
  <div className="row flex-items-xs-middle flex-items-xs-center">

  <div className="col-xs-12 col-lg-6">
        
        <div className="card img-fluid text-white rounded text-xs-center bgc ">
          
        <img src={ar} className='rounded size2' />
          
        </div>
        </div>

        <div className="col-xs-12 col-lg-6">
        
        <div className="card img-fluid text-white rounded text-xs-center bgc ">
          
        <img src={ar2} className='rounded size2' />
          

        </div>
        </div>

    <p className='black bold'>
    <br/>
Zaha Hadid’s first completed building is perhaps the most famous fire station in the world (apart from the one in Ghostbusters), with a gestural, pointy porch that yells ‘emergency!’<br />
 The rest of the building is a complex collection of expressionist planes, and while this formal extravagance is not entirely necessary for an emergency response unit, the structure is a clear demonstration of the rhetorical power of architecture – and the possibility of achieving impressive effects with modest means. <br />
 The building was commissioned after a disastrous fire at the Vitra plant in 1981; the local fire department has since extended its jurisdiction to cover the campus, and the building is now a gallery. 
    </p>
     
    </div>
        </div>
 
  
    </div>
  )
}

export default article