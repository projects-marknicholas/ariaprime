import { useState, useEffect } from 'react'
import product1 from '../product/pghabl1.png'
import product2 from '../product/pghabl2.jpg'
import product3 from '../product/pghabl3.jpg'
import product4 from '../product/pghabl4.jpeg'
import product5 from '../product/pghabl5.jpeg'
import p1 from '../img/product-1.png'
import p2 from '../img/product-2.png'
import p3 from '../img/product-3.png'
import p4 from '../img/product-4.png'
import p5 from '../img/product-5.png'
import { Link } from 'react-router-dom'
import logoImage from '../img/logo.png'

export default function PGLS(){
	useEffect(() => {
	  document.title = "Prime Glutathione Hyaluronic Acid Body Lotion - ARia.co";
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
						<h1>Prime Glutathione Hyaluronic Acid Body Lotion</h1><br/><br/>
						<h3>PRODUCT DETAILS</h3>
						<p>
							Made in Korea<br/>
							Size: 200ml<br/>
							Skin Type: All Type of Skin<br/>
						</p><br/>
						<h3>BENEFITS</h3>
						<p>
							🧴Glutathione Body Lotion Gives you 10X Brighter Skin.<br/>
							🧴Tripeptide ( Glycine , Cysteine , Glutamic Acid ).<br/>
							🧴Glycine – Improves the skin’s elasticity.<br/>
							🧴Cysteine - Very high skin whitening abilities<br/>
							🧴Glutamic Acid- Skin Lightening & Dark Spot Reducer is a concentrated and advanced acne-spot treatment.<br/>
							🧴 Niacinamide: help to treat certain skin conditions, like acne and eczema. Effective skin lightening .<br/>
							🧴Hyaluronic Acid: Helps maintain healthy hydration levels in skin.<br/>
							🧴Hydrolyzed Collagen: Skin anti- aging, Wound healing, Reduces the effect of skin aging (dryness,laxity, and wrinkles).<br/>
							🧴Moisturizing skin.<br/>
							🧴Anti-Cellulite<br/>
							🧴Improved Uneven Skintone<br/>
							🧴Soothing fragrance smell of lemon extract 🍋<br/>
						</p><br/>
						<h3>HOW TO USE?</h3>
						<p>
							1. After shower, Apply a sufficient amount of lotion onto neck and body. Gently massage into skin until fully absorbed. Use daily.<br/>
							2. Please apply to the darker areas frequently.<br/>
						</p><br/>
						<h3>INGREDIENTS</h3>
						<p>
							Glycine , Cysteine ​​, Glutamic Acid , Glutathione ,AQUA , Cyclohexasiloxane & Cyclopentasiloxane , Glycerin , Methylpropanediol , Niacinamide , Ethylhexyl Methoxycinnamate , Titanium Dioxide , Cetyl Ethylhexanoate , Dimethicone , Sodium Acrylate / Sodium Acryloyldimethyl Taurate Copolymer & Isohexadecane & Polysorbate 80 , Sodium Hyaluronate , Hydrolyzed Collagen , Betaine , Trehalose , Adenosine , Allantoin , Xanthan Gum , Broussonetia Extract , Morus Alba Root Extract , Camellia Japonica Leaf Extract , Citrus Junos Fruit Extract , Anthemis Nobilis Flower Extract , Hamamelis Virginiana Extract , Aloe Barbadensis Leaf Extract , Centella Asiatica Extract , Rosa Centifolia Flower Water , Camellia Sinensis Leaf Extract , Chlorphenesin , Phenoxyethanol , Disodium EDTA , Acetyl Hexapeptide , Fragrance of Lemon
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
          <Link to="/products/prime-glutalemon-soap" onClick={() => window.scrollTo(0, 0)}>
            <div className="item">
              <img src={p3}/>
              <h1>Prime Glutalemon Soap</h1>
              <p>Experience the magic of GLUTALEM...</p>
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

