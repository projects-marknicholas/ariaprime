import product1 from '../img/product-1.png'
import product2 from '../img/product-2.png'
import product3 from '../img/product-3.png'
import product4 from '../img/product-4.png'
import product5 from '../img/product-5.png'
import logoImage from '../img/logo.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Products(){
	useEffect(() => {
	  document.title = "Products - ARia.co";
	}, []);
	return(
		<div className="App">
			<section id="products" className="rem">
        <h1>Our Products</h1>
        <h3>Your one-stop destination for all your beauty, cosmetics, and personal care needs!</h3>   
        <div className="logo-lining">
          <div className="line">--------------------------------</div>
          <img src={logoImage} className="logo"/>
          <div className="line">--------------------------------</div>
        </div>
        <div className="product-list">
          <Link to="/products/prime-glutathione-goddess-melasma-whitening-tone-up-cream" onClick={() => window.scrollTo(0, 0)}>
            <div className="item">
              <img src={product1}/>
              <h1>Prime Glutathione Goddess Melasma Whitening Tone Up Cream</h1>
              <p>Brighten and even skin's tone...</p>
            </div>
          </Link>
          <Link to="/products/prime-matte-tint" onClick={() => window.scrollTo(0, 0)}>
            <div className="item">
              <img src={product2}/>
              <h1>Prime Matte Tint</h1>
              <p>You probably already know how ...</p>
            </div>
          </Link>
          <Link to="/products/prime-glutalemon-soap" onClick={() => window.scrollTo(0, 0)}>
            <div className="item">
              <img src={product3}/>
              <h1>Prime Glutalemon Soap</h1>
              <p>Experience the magic of GLUTALEM...</p>
            </div>
          </Link>
          <Link to="/products/prime-glutathione-hyaluronic-acid-body-lotion" onClick={() => window.scrollTo(0, 0)}>
            <div className="item">
              <img src={product4}/>
              <h1>Prime Glutathione Hyaluronic Acid Body Lotion</h1>
              <p>Glutathione Body Lotion Gives ...</p>
            </div>
          </Link>
          <Link to="/products/prime-glutathione-with-collagen" onClick={() => window.scrollTo(0, 0)}>
            <div className="item">
              <img src={product5}/>
              <h1>Prime Glutathione with Collagen</h1>
              <p>Powder beverage type which hel...</p>
            </div>
          </Link>
        </div>
      </section>
		</div>
	);
}

export default Products;