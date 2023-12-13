import { useState, useEffect } from 'react'
import logoImage from '../img/logo.png'
import franchisee2 from '../img/franchisee2.png'

function Franchisee(){
	useEffect(() => {
	  document.title = "Franchisee - ARia.co";
	}, []);
	return(
		<div className="App">
			<section id="introduction">
				<h1>Franchisee</h1>
				<h3>Authorized Franchisee of ARia.co products/</h3>
		        <div className="logo-lining">
		          <div className="line">--------------------------------</div>
		          <img src={logoImage} className="logo"/>
		          <div className="line">--------------------------------</div>
		        </div>
		        <div className="grid-3">
		          <div className="item">
		            <img src={franchisee2}/>
		          </div>
		        </div>
			</section>
		</div>
	);
}

export default Franchisee;