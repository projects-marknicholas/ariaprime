import { useState, useEffect } from 'react'
import product1 from '../product/pgc1.jpg'
import product2 from '../product/pgc2.jpg'
import product3 from '../product/pgc3.jpg'
import product4 from '../product/pgc4.jpg'
import product5 from '../product/pgc5.jpg'
import p1 from '../img/product-1.png'
import p2 from '../img/product-2.png'
import p3 from '../img/product-3.png'
import p4 from '../img/product-4.png'
import p5 from '../img/product-5.png'
import { Link } from 'react-router-dom'
import logoImage from '../img/logo.png'

export default function PGGMWTUC(){
	useEffect(() => {
	  document.title = "Prime Glutathione Goddess Melasma Whitening Tone Up Cream - ARia.co";
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
						<h1>Prime Glutathione Goddess Melasma Whitening Tone Up Cream</h1><br/><br/>
						<h3>PRODUCT DETAILS</h3>
						<p>
							Prime Glutathione Goddess Melasma Whitening Tone Up Cream 55ml<br/>
							Made in Korea<br/><br/>

							Good for 2-3 months<br/><br/>

							Skin Type: For all Skintone<br/>
						</p><br/>
						<h3>KEY FEATURES</h3>
						<p>
							- Brighten and even skin's tone<br/>
							- Reduce the look of even the most stubborn dark spots and diminish the discoloration of skin or blotchiness.<br/>
							- Fade the look of even deep wrinkles, including crow's feet, forehead & cheek wrinkles.<br/>
							- Helps to adjust the skin color evenly.<br/>
							- Acne, acne vulgaris, pimples dryness faster.<br/>
							- People with sensitive face can also be used.<br/>
						</p><br/>
						<h3>HOW TO USE?</h3>
						<p>
							- Wash your face with lukewarm water and a face cleaner suitable for your skin type. Splash your face with cold water and gently pat it dry with a soft towel.<br/><br/>
							- Consider applying some toner with a cotton ball or cotton pad. The toner will help restore your skin ph. It will also help tighten the pores. This is especially important if you plan on wearing makeup later.<br/><br/>
							- Wash and dry the spatula before each use. Apply cream from jar with spatula (do not use fingers!).Remove cream from spatula with fingers and Dab the cream onto your face in small dots. Before exposing in sun, apply sun cream for better results.<br/><br/>
						</p>
						<h3>INGREDIENTS</h3>
						<p>
							👑It contains Centella Asiatica Extract, Sodium Hyaluronate, Zinc Oxide, Naicinamide, Glutathione, Glycerin, Hydrolyzed Collagen<br/><br/>
						</p>
						<h3>DESCRIPTION</h3>
						<p>
							👑Get in on the ultimate beauty secret with the Prime Glutathione Goddess, Melasma Whitening Tone Up Cream.<br/><br/>
							👑With an amazing formula that instantly whitens while moisturizing with anti-aging effects and a natural glowing finish, the Prime Glutathione Goddess Whitening Cream is all you need for that one-step solution to becoming Snow White !<br/><br/>
						</p>
						<h3>FEATURES</h3>
						<p>
							👑Get in on the ultimate beauty secret with the Prime Glutathione Goddess, Melasma Whitening Tone Up Cream.<br/><br/>
							👑The Prime Glutathione Goddess Melasma Whitening Cream is formulated with a unique Ingredients to help improve skin tone and reduce skin damages.<br/><br/>
							👑Tone up with the Prime Glutathione Goddess Melasma Whitening Cream and let your inner flower power shine, beautiful !<br/><br/>
							👑Don’t panic over last minute make up anymore, the Goddess Melasma Whitening Cream is here to save you 🤗<br/><br/>
						</p>
						<h3>What is Zinc Oxide?</h3>
						<p>
							One of the safest ingredients, zinc oxide can give your skin the protection it needs from harmful UV rays. It helps protect cells from being damaged, halts the ageing process, and prevents skin dryness by filtering out the harmful UV rays.
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
          <Link to="/products/prime-matte-tint" onClick={() => window.scrollTo(0, 0)}>
            <div className="item">
              <img src={p2}/>
              <h1>Prime Matte Tint</h1>
              <p>You probably already know how ...</p>
            </div>
          </Link>
          <Link to="/products/prime-glutalemon-soap" onClick={() => window.scrollTo(0, 0)}>
            <div className="item">
              <img src={p3}/>
              <h1>Prime Glutalemon Soap</h1>
              <p>Experience the magic of GLUTALEM...</p>
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

