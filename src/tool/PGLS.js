import { useState, useEffect } from 'react'
import product1 from '../product/apgs1.jpg'
import product2 from '../product/apgs2.jpg'
import product3 from '../product/apgs3.jpg'
import product4 from '../product/apgs4.jpg'
import product5 from '../product/apgs5.jpg'
import p1 from '../img/product-1.png'
import p2 from '../img/product-2.png'
import p3 from '../img/product-3.png'
import p4 from '../img/product-4.png'
import p5 from '../img/product-5.png'
import { Link } from 'react-router-dom'
import logoImage from '../img/logo.png'

export default function PGLS(){
	useEffect(() => {
	  document.title = "Prime Glutalemon Soap - ARia.co";
	}, []);
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
						<h1>Prime Glutalemon Soap</h1><br/><br/>
						<h3>PRODUCT DETAILS</h3>
						<p>
							✨ARIA PRIME GLUTALEMON SOAP ✨ Experience the magic of GLUTALEMON SOAP that is formulated to give your skin intense whitening and exfoliating effect.<br/>
						</p><br/>
						<h3>BENEFITS</h3>
						<p>
							👉🏻x10 Whitening 🍋<br/>
							👉🏻 helps remove, dark spots and blackheads.<br/>
							👉🏻makes skin soft, moisture, smooth and cleanse deeply<br/>
							👉🏻glowing, even, and pinkish white skin<br/>
							👉🏻 lighten skin pigmentation such as acne scars, age spots and other skin blemishes.<br/>
						</p><br/>
						<h3>INGREDIENTS</h3>
						<p>
							Saponified Coconut Oil, Almond Oil, Lemon Extract, Sunflower Oil, AHA Serum, Castor Oil, Alpha Hydrolic Acid, L-Glutathione, Collagen, Beta Arbutin, Milk Protein, Papaya Extract Activated Charcoal Powder, De-Ionized Water, Lemon Scent
						</p><br/>
						<h3>DIRECTION FOR USE</h3>
						<p>
							Use daily on face and body. For body, let it stay for 3 minutes on your skin before rinsing. For facial use, use only for 10-15 seconds then rinse. Pat dry with a soft, clean face towel.
						</p><br/>
						<h3>MORE INFO</h3>
						<p>
							👉🏻5 years old above pwede po and sa mga pregnant and lactating moms din po😊 Pangyayamanin ang packaging diba? Imported pa ang mga Ingredients 😍 Bsta " Korea Formula Effective yan!"<br/><br/>

							Be Part of #ARiaPrimeFamily now! ✨ 💡For only P1,500.00 pesos pwede kang mag-negosyo! Hurry!
						</p><br/>
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
          <Link to="/products/prime-glutathione-goddess-melasma-whitening-tone-up-cream" onClick={() => window.scrollTo(0, 0)}>
            <div className="item">
              <img src={p1}/>
              <h1>Prime Glutathione Goddess Melasma Whitening Tone Up Cream</h1>
              <p>Brighten and even skin's tone...</p>
            </div>
          </Link>
       		<Link to="/products/prime-matte-tint" onClick={() => window.scrollTo(0, 0)}>
            <div className="item">
              <img src={p2}/>
              <h1>Prime Matte Tint</h1>
              <p>You probably already know how ...</p>
            </div>
          </Link>
          <Link to="/products/prime-glutathione-hyaluronic-acid-body-lotion" onClick={() => window.scrollTo(0, 0)}>
            <div className="item">
              <img src={p4}/>
              <h1>Prime Glutathione Hyaluronic Acid Body Lotion</h1>
              <p>Glutathione Body Lotion Gives ...</p>
            </div>
          </Link>
          <Link to="/products/prime-glutathione-with-collagen" onClick={() => window.scrollTo(0, 0)}>
            <div className="item">
              <img src={p5}/>
              <h1>Prime Glutathione with Collagen</h1>
              <p>Powder beverage type which hel...</p>
            </div>
          </Link>
        </div>
      </section>
		</div>
	);
}

