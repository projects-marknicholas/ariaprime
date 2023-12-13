import { useState, useEffect } from 'react'
import logoImage from '../img/logo.png'
import reseller1 from '../img/reseller1.png'
import reseller2 from '../img/reseller2.png'
import reseller3 from '../img/reseller3.png'
import reseller4 from '../img/reseller4.png'
import reseller5 from '../img/reseller5.png'
import reseller6 from '../img/reseller6.jpeg'
import reseller7 from '../img/reseller7.jpeg'
import reseller8 from '../img/reseller8.jpeg'
import reseller9 from '../img/reseller9.jpeg'
import reseller10 from '../img/reseller10.jpeg'

function Resellers(){
	useEffect(() => {
	  document.title = "Resellers - ARia.co";
	}, []);
	return(
		<div className="App">
			<section id="introduction">
				<h1>Resellers</h1>
				<h3>Authorized Resellers of ARia.co products/</h3>
		        <div className="logo-lining">
		          <div className="line">--------------------------------</div>
		          <img src={logoImage} className="logo"/>
		          <div className="line">--------------------------------</div>
		        </div>
		        <div className="grid-3">
		          <div className="item">
		            <img src={reseller1}/>
		          </div>
		          <div className="item">
		            <img src={reseller2}/>
		          </div>
		          <div className="item">
		            <img src={reseller3}/>
		          </div>
		          <div className="item">
		            <img src={reseller4}/>
		          </div>
		          <div className="item">
		            <img src={reseller5}/>
		          </div>
		          <div className="item">
		            <img src={reseller6}/>
		          </div>
		          <div className="item">
		            <img src={reseller7}/>
		          </div>
		          <div className="item">
		            <img src={reseller8}/>
		          </div>
		          <div className="item">
		            <img src={reseller9}/>
		          </div>
		          <div className="item">
		            <img src={reseller10}/>
		          </div>
		        </div>
			</section>
		</div>
	);
}

export default Resellers;