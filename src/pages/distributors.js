import { useState, useEffect } from 'react'
import logoImage from '../img/logo.png'
import distributor1 from '../img/distributor1.png'
import distributor2 from '../img/distributor2.png'
import distributor3 from '../img/distributor3.jpeg'

function Distributors(){
	useEffect(() => {
	  document.title = "Distributors - ARia.co";
	}, []);
	return(
		<div className="App">
			<section id="introduction">
				<h1>Distributors</h1>
				<h3>Authorized Distributors of ARia.co products/</h3>
		        <div className="logo-lining">
		          <div className="line">--------------------------------</div>
		          <img src={logoImage} className="logo"/>
		          <div className="line">--------------------------------</div>
		        </div>
		        <div className="grid-3">
		          <div className="item">
		            <img src={distributor1}/>
		          </div>
		          <div className="item">
		            <img src={distributor2}/>
		          </div>
		          <div className="item">
		            <img src={distributor3}/>
		          </div>
		        </div>
			</section>
		</div>
	);
}

export default Distributors;