import React, { useState} from 'react'
import product1 from '../img/product-1.png'
import product2 from '../img/product-2.png'
import product3 from '../img/product-3.png'
import product4 from '../img/product-4.png'
import product5 from '../img/product-5.png'
import { Link } from 'react-router-dom'
import logoImage from '../img/logo.png'

export default function PMT(){
	const [previewImage, setPreviewImage] = useState(product1);
	const handleImageClick = (src) => {
	  setPreviewImage(src);
	};
	return(
		<div className="App">
			<section id="main-product">
				<div className="main-p-t">
					<div className="left">
						<div id="preview">
							<img src={previewImage} alt="Preview" />
						</div>
						<div className="grid-5">
							<img src={product1} onClick={() => handleImageClick(product1)} />
							<img src={product2} onClick={() => handleImageClick(product2)} />
							<img src={product3} onClick={() => handleImageClick(product3)} />
							<img src={product4} onClick={() => handleImageClick(product4)} />
							<img src={product5} onClick={() => handleImageClick(product5)} />
						</div>
					</div>
					<div className="right">
						<h1>Prime Matte Tint</h1>
						<h3>PRODUCT DETAILS</h3>
						<p>
							You probably already know how to apply lipcream on your lips, but did you know that you can wear it on the rest of your face, too? Yep, you can dab some on your eyelids, cheeks, and lips — it's a triple beauty threat 👌🏻👑<br/><br/>
							👉🏻Lips<br/>
							👉🏻Cheeks<br/>
							👉🏻Eyelids<br/>
						</p><br/>
						<h3>PRODUCT DETAILS</h3>
						<p>
							Dimethicone, beeswax isododecane, cyclomenthicone , iron oxide, flavour oil, vit e, pehnoxyethanol, chocolate scent.
						</p><br/>
						<h3>DESCRIPTION</h3>
						<p>
							Look at these alluring shades of our Organic Prime<br/><br/>

							Powdery matte finished, easy to apply, blendable, lightweight, Fast drying, Highly pigmented, Longlasting, Smudgeproof. Safe for kids, pregnant and lactating moms.<br/><br/>

							Good for 12-18months<br/><br/>
						</p>
					</div>
				</div>
			</section>
			<section id="products" className="rem">
        <h1>Related Products</h1>
        <div className="logo-lining">
          <div className="line">--------------------------------</div>
          <img src={logoImage} className="logo"/>
          <div className="line">--------------------------------</div>
        </div>
        <div className="product-list">
          <Link to="/products/prime-glutathione-goddess-melasma-whitening-tone-up-cream">
            <div className="item">
              <img src={product1}/>
              <h1>Prime Glutathione Goddess Melasma Whitening Tone Up Cream</h1>
              <p>Brighten and even skin's tone...</p>
            </div>
          </Link>
          <Link to="/products/prime-glutalemon-soap">
            <div className="item">
              <img src={product3}/>
              <h1>Prime Glutalemon Soap</h1>
              <p>Experience the magic of GLUTALEM...</p>
            </div>
          </Link>
          <Link to="/products/prime-glutathione-hyaluronic-acid-body-lotion">
            <div className="item">
              <img src={product4}/>
              <h1>Prime Glutathione Hyaluronic Acid Body Lotion</h1>
              <p>Glutathione Body Lotion Gives ...</p>
            </div>
          </Link>
          <Link to="/products/prime-glutathione-with-collagen">
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

