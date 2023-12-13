import product1 from '../img/product-1.png'
import facebook from '../svg/facebook-aria.svg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logoImage from '../img/logo.png'
import resellers from '../img/resellers.png'
import distributors from '../img/distributors.png'
import franchisee from '../img/franchisee.png'
import advisory from '../img/advisory.png'

function SellerCenter(){
	useEffect(() => {
	  document.title = "Seller Center - ARia.co";
	}, []);
	return(
		<div className="App">
			<section id="seller-center">
		      <section id="introduction">
		        <h1>ARia.co</h1>
		        <h3>Beauty, cosmetics, and personal care</h3>
		        <div className="logo-lining">
		          <div className="line">--------------------------------</div>
		          <img src={logoImage} className="logo"/>
		          <div className="line">--------------------------------</div>
		        </div>
		        <div className="grid-3">
		          <Link to="/resellers" className="item">
		            <img src={resellers}/>
		          </Link>
		          <Link to="/distributors" className="item">
		            <img src={distributors}/>
		          </Link>
		          <Link to="/franchisee" className="item">
		            <img src={franchisee}/>
		          </Link>
		        </div>
		        <div className="advisory">
		          <div className="left">
		            <img src={advisory}/>
		          </div>
		          <div className="right">
		            <h1>All Authorized Franchisees, Distributors, Sellers and End Users</h1>
		            <p>Public Warning Against the Purchase and Use of ARia.co products from Unauthorized Sellers</p>
		          </div>
		        </div>
		      </section>
			</section>
		</div>
	);
}

export default SellerCenter;