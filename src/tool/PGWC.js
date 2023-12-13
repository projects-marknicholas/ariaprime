import { useState, useEffect } from 'react'
import product1 from '../product/pgwc1.jpg'
import product2 from '../product/pgwc2.jpg'
import product3 from '../product/pgwc3.jpg'
import product4 from '../product/pgwc4.jpg'
import product5 from '../product/pgwc5.jpg'
import p1 from '../img/product-1.png'
import p2 from '../img/product-2.png'
import p3 from '../img/product-3.png'
import p4 from '../img/product-4.png'
import p5 from '../img/product-5.png'
import { Link } from 'react-router-dom'
import logoImage from '../img/logo.png'

export default function PGLS(){
	useEffect(() => {
	  document.title = "Prime Glutathione with Collagen - ARia.co";
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
						<h1>Prime Glutathione with Collagen</h1><br/><br/>
						<h3>PRODUCT DETAILS</h3>
						<p>
							Prime Glutathione with Collagen ( LH Nutri ) Made in Korea Is a powder beverage type which help to produce tripeptides consisting more amino acids that produce glutathione in the body. It has a Comprehensive combination of 47 ingredients for your better health and Skin.
						</p><br/>
						<h3>BENEFITS</h3>
						<p>
							* 10x na mas mabilis ang effect keysa capsule. 💯<br/>
							* Effective to many people who are using or used this product.<br/>
							* Lightens & even skin tone<br/>
							* Contains 13 Vitamins to make the skin healthy & glow. ( Vitamin A, B1, B2, B3, B5, B6, B7, B8, B9, B12, C, D3, E )<br/>
							* Contains 12 Amino Acids to produce more Glutathione in the body.<br/>
							* May help fight against autoimmune disease.<br/>
							* Reduces Oxidative stress.<br/>
							* Improves Quality of Skin & Hair<br/>
							* Slowing premature aging and sagging of the skin<br/>
							* Promotes Better Sleep<br/>
							* Supports the Detoxification system<br/>
							* Improve psoriasis, eczema, vitiligo, and heal wounds.<br/><br/>

							The first thing Prime Glutathione with Collagen does is to " clean " all the toxic content in your body that your liver can no longer produce. The " cleansing period " depends on how dirty your body is inside. After Prime Glutathione with Collagen cleans your body the effect of " whitening " and " healthy " of your skin will appear.<br/><br/>

							Because of this, the period of whitening and healthy of a person's skin is different. It's been a few weeks that the good effect is visible. They are the ones who have less toxic content and have high levels of amino acids in the body. Some people spend months because they are already dirty inside or there is a lot of toxic content in their bodies. 📣Note: The dirtier the skin outside, the higher the body toxic content.<br/>
						</p><br/>
						<h3>SIDE EFFECTS</h3>
						<p>
							Prime Glutathione with Collagen does not pose any risks. However, taking supplements may not be advisable for everyone. Talk to your doctor about glutathione to determine if it’s right for you. Possible side effects may include:<br/><br/>

							👉🏻Lahat ng ito ay normal lang mararanasan after 30-40mins mawawala rin ito:<br/>
							* Pagsakit ng tiyan/ abdominal cramps.<br/>
							* mejo mainit or yong parang singaw sa bandang likod ng tainga at buong katawan.<br/>
							* namumula /allergic reactions, such as rashes.<br/><br/>

							🤔Bakit namumula at nagiinit ang katawan?<br/>
							Answer: Dahil nilalabas ang toxin sa katawan.<br/><br/>

							✅ Pwede sa BreastFeeding Mom ( after magtake, wait 1 hour bago padedehin si baby )<br/>
							✅ Any Gender pwedeng pwede<br/>
							✅ 16 years old & up pwede uminom<br/>
							✅ Teenager pwede po, bsta halfscoop ( 25ml water )<br/>
							❌ bawal sa buntis..<br/>
							❌ bawal sa may Liver cancer<br/>
							❌ bawal sa may Kidney cancer<br/>
						</p><br/>
						<h3>MAJOR INGREDIENTS</h3>
						<p>
							Pure GLUTATHIONE<br/>
							Pure COLLAGEN<br/><br/>

							💮 AMINO ACIDS 💮<br/>
							Glycine<br/>
							L-cysteine<br/>
							L-glutamic acid<br/>
							L-methionine<br/>
							L-lysine<br/>
							L-tryptophan<br/>
							L-phenylalanine<br/>
							L-histidine<br/>
							L-threonine<br/>
							L-leucine<br/>
							L-valine<br/>
							L-isoleucine<br/><br/>

							💮 VITAMINS 🍋<br/>
							Vitamin A<br/>
							Vitamin B1<br/>
							Vitamin B2<br/>
							Vitamin B3<br/>
							Vitamin B6<br/>
							Vitamin B12<br/>
							Vitamin C<br/>
							Vitamin D3<br/>
							Vitamin E<br/>
							Inositol (Vitamin B8 )<br/>
							Folic acid (Vitamin B9 )<br/>
							Biotin (Vitamin B7 )<br/>
							Calcium pantothenate (Vitamin B5 )<br/>
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
          <Link to="/products/prime-glutathione-hyaluronic-acid-body-lotion" onClick={() => window.scrollTo(0, 0)}>
            <div className="item">
              <img src={p4}/>
              <h1>Prime Glutathione Hyaluronic Acid Body Lotion</h1>
              <p>Glutathione Body Lotion Gives ...</p>
            </div>
          </Link>
        </div>
      </section>
		</div>
	);
}

