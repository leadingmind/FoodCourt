import  { Navbar, Container  } from 'react-bootstrap';
import './css/menuscroll.css'

export default function Menuscroll(){
  return(
    <>
      <div class="container-fluid">
		    <h3 class="subtitle">Our improvised <span>Menus</span></h3>
        <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4">
			    <div class="col-5">
				    <div class="card card-block card-1"></div>
			    </div>	
          <div class="col-5">
				    <div class="card card-block card-1"></div>
			    </div>	
          <div class="col-5">
				    <div class="card card-block card-1"></div>
			    </div>	
          <div class="col-5">
				    <div class="card card-block card-1"></div>
			    </div>	
        </div>
      </div>
    </>
    );
}