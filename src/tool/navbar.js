import facebook from '../svg/facebook-aria.svg'
import instagram from '../svg/instagram-aria.svg'
import tiktok from '../svg/tiktok-aria.svg'
import shopee from '../svg/shopee-aria.svg'
import coupang from '../svg/coupang-aria.png'
import youtube from '../svg/yt.png'
import menu from '../svg/menu-aria.svg'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const menuOn = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        menuOn();
      } else {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fixScroll = () => {
      if (window.pageYOffset > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener('scroll', fixScroll);
    fixScroll();
    return () => window.removeEventListener('scroll', fixScroll);
  }, []);
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
	  	<div className="top">
	      <div className="item">
	        <a href={ph}>PH - +63 930 877 0605</a>
	        <a href={kr}>KR - +82 70-7350-3044</a>
	      </div>
	      <div className="item">
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
     	<nav className={`nav ${isFixed ? "fixed" : ""}`}>
     		<img src={menu} className="menu" onClick={menuOn}/>
     		<div className="nav-list" style={{ padding: menuOpen ? "0" : "20px" }}>
          <Link
            to="/"
            style={{ display: menuOpen ? "none" : "block" }}
            onClick={() => {
              window.scrollTo(0, 0);
              if (window.innerWidth <= 768) {
                menuOn();
              }
            }}
          >
          Home
            <div className="dropLink">
              <Link
                to="/factory"
                style={{ display: menuOpen ? "none" : "block" }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  if (window.innerWidth <= 768) {
                    menuOn();
                  }
                }}
              >
              Factory/Company in South Korea
              </Link>
              <Link
                to="/products"
                style={{ display: menuOpen ? "none" : "block" }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  if (window.innerWidth <= 768) {
                    menuOn();
                  }
                }}
              >
              Our Products
              </Link>
              <Link
                to="/office"
                style={{ display: menuOpen ? "none" : "block" }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  if (window.innerWidth <= 768) {
                    menuOn();
                  }
                }}
              >
              Philippines Office Store
              </Link>
            </div>
          </Link>
          <Link
            style={{ display: menuOpen ? "none" : "block" }}
            onClick={() => {
              window.scrollTo(0, 0);
              if (window.innerWidth <= 768) {
                menuOn();
              }
            }}
          >
          Brand
            <div className="dropLink">
              <Link
                to="/collagen-reviews"
                style={{ display: menuOpen ? "none" : "block" }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  if (window.innerWidth <= 768) {
                    menuOn();
                  }
                }}
              >
              Prime Glutathione with Collagen
              </Link>
              <Link
                to="/lotion-reviews"
                style={{ display: menuOpen ? "none" : "block" }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  if (window.innerWidth <= 768) {
                    menuOn();
                  }
                }}
              >
              Prime Glutathione Lotion
              </Link>
               <Link
                to="/soap-reviews"
                style={{ display: menuOpen ? "none" : "block" }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  if (window.innerWidth <= 768) {
                    menuOn();
                  }
                }}
              >
              Prime Glutalemon Soap
              </Link>
            </div>
          </Link>
          <Link
            to="/about-us"
            style={{ display: menuOpen ? "none" : "block" }}
            onClick={() => {
              window.scrollTo(0, 0);
              if (window.innerWidth <= 768) {
                menuOn();
              }
            }}
          >
          About Us
            <div className="dropLink">
              <Link
                to="/awards"
                style={{ display: menuOpen ? "none" : "block" }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  if (window.innerWidth <= 768) {
                    menuOn();
                  }
                }}
              >
              Awards & Achievements
              </Link>
              <Link
                to="/ambassadress"
                style={{ display: menuOpen ? "none" : "block" }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  if (window.innerWidth <= 768) {
                    menuOn();
                  }
                }}
              >
              Brand Ambassadress
              </Link>
            </div>
          </Link>
          <Link
            to="/shipping"
            style={{ display: menuOpen ? "none" : "block" }}
            onClick={() => {
              window.scrollTo(0, 0);
              if (window.innerWidth <= 768) {
                menuOn();
              }
            }}
          >
          Proof of Shipping
          </Link>
          <Link
            to="/seller-center"
            style={{ display: menuOpen ? "none" : "block" }}
            onClick={() => {
              window.scrollTo(0, 0);
              if (window.innerWidth <= 768) {
                menuOn();
              }
            }}
          >
          Seller Center
            <div className="dropLink">
              <Link
                to="/be-a-prime-family"
                style={{ display: menuOpen ? "none" : "block" }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  if (window.innerWidth <= 768) {
                    menuOn();
                  }
                }}
              >
              Be a Prime Family
              </Link>
            </div>
          </Link>
     		</div>
     	</nav>
	  </div>
	)
}

export default Navbar;