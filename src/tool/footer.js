import { Link } from 'react-router-dom'
import facebook from '../svg/facebook-aria.svg'
import instagram from '../svg/instagram-aria.svg'
import tiktok from '../svg/tiktok-aria.svg'
import shopee from '../svg/shopee-aria.svg'
import coupang from '../svg/coupang-aria.png'
import youtube from '../svg/yt.png'
import payment1 from '../img/pay1.jpg'
import payment2 from '../img/pay2.jpg'
import payment3 from '../img/pay3.jpeg'
import certificate1 from '../img/certificates/certificate1.png'
import certificate2 from '../img/certificates/certificate2.png'
import certificate3 from '../img/certificates/certificate3.png'
import certificate4 from '../img/certificates/certificate4.png'
import certificate5 from '../img/certificates/certificate5.png'
import certificate6 from '../img/certificates/certificate6.png'
import certificate7 from '../img/certificates/certificate7.png'
import certificate8 from '../img/certificates/certificate8.png'
import certificate9 from '../img/certificates/certificate9.png'
import certificate10 from '../img/certificates/certificate10.png'

function Footer(argument) {
  let ph = "tel: +63 930 877 0605";
  let kr = "tel: +82 70-7350-3044";
  let fbk = "https://web.facebook.com/ariaprime.co";
  let ins = "https://www.instagram.com/aria.co_official/";
  let tik = "https://www.tiktok.com/@gluta.queen";
  let sho = "https://shopee.ph/ariacoofficialph";
  let cou = "https://store.coupang.com/vp/vendors/A00507497/products?vendorName=%EC%95%84%EB%A6%AC%EC%95%84.%EC%BD%94%28ARia.co%29&productId=6067321202&outboundShippingPlaceId=6735521";
  let yt = "https://www.youtube.com/@AriaGlutaQueenVlog";
	return(
		<div className="App">
			<footer>
        <div className="grid-4">
          <div className="item">
            <h2>ARia.co</h2>
            <p>Beauty, cosmetics, and personal care.</p>
          </div>
          <div className="item">
            <h1>Main Menu</h1>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
            <Link to="/seller-center" onClick={() => window.scrollTo(0, 0)}>Seller Center</Link>
            <Link to="/products" onClick={() => window.scrollTo(0, 0)}>Products</Link>
            <Link to="/be-a-prime-family" onClick={() => window.scrollTo(0, 0)}>Be a Prime Family</Link>
            <Link to="/awards" onClick={() => window.scrollTo(0, 0)}>Awards & Achievements</Link>
            <Link to="/ambassadress" onClick={() => window.scrollTo(0, 0)}>Brand Ambassadress</Link>
            <Link to="/about-us" onClick={() => window.scrollTo(0, 0)}>About Us</Link>
            <Link to="/careers" onClick={() => window.scrollTo(0, 0)}>Careers</Link>
          </div>
          <div className="item">
            <h1>Legalities</h1>
            <Link to="/shipping-policy" onClick={() => window.scrollTo(0, 0)}>Shipping Policy</Link>
            <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)}>Privacy Policy</Link>
          </div>
          <div className="item">
            <h1>Follow Us</h1>
            <div>
              <a href={fbk}>
                <img src={facebook}/>
              </a>
              <a href={ins}>
                <img src={instagram}/>
              </a>
              <a href={tik}>
                <img src={tiktok}/>
              </a>
              <a href={sho}>
                <img src={shopee}/>
              </a>
              <a href={cou}>
                <img src={coupang}/>
              </a>
              <a href={yt}>
                <img src={youtube}/>
              </a>
            </div>
          </div>
          <div className="item">
            <h1>Mode of Payment</h1>
            <div>
              <img src={payment1}/>
              <img src={payment2}/>
              <img src={payment3}/>
            </div>
          </div>
          <div className="item">
            <h1>Certifications</h1>
            <div>
              <img src={certificate1}/>
              <img src={certificate2}/>
              <img src={certificate3}/>
              <img src={certificate4}/>
              <img src={certificate5}/>
              <img src={certificate6}/>
              <img src={certificate7}/>
              <img src={certificate8}/>
              <img src={certificate9}/>
              <img src={certificate10}/>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        Copyright 2023 © ARia.co All Rights Reserved.
      </div>
		</div>
	);
}

export default Footer;