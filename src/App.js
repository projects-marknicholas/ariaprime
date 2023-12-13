import logo from './favicon32.png'
import Navbar from './tool/navbar'
import Footer from './tool/footer.js'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/home.js'
import SellerCenter from './pages/seller-center.js'
import Resellers from './pages/resellers.js'
import Distributors from './pages/distributors.js'
import Franchisee from './pages/franchisee.js'
import Products from './pages/products.js'
import BeAPrimeFamily from './pages/be-a-prime-family.js'
import AboutUs from './pages/about-us.js'
import Collagen from './pages/collagen-reviews.js'
import Lotion from './pages/lotion-reviews.js'
import Soap from './pages/soap-reviews.js'
import Shipping from './pages/shipping.js'
import ShippingPolicy from './pages/shipping-policy.js'
import Factory from './pages/factory.js'
import Office from './pages/office.js'
import Awards from './pages/awards.js'
import Ambassadress from './pages/ambassadress'
import Careers from './pages/careers.js'
import PMT from './tool/PMT.js'
import PGGMWTUC from './tool/PGGMWTUC.js'
import PGLS from './tool/PGLS.js'
import PGHABL from './tool/PGHABL.js'
import PGWC from './tool/PGWC.js'
import phone from './svg/phone.svg'
import gmail from './svg/email.svg'
import './App.css'
import { useParams } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/seller-center" element={<SellerCenter/>} />
          <Route path="/resellers" element={<Resellers/>} />
          <Route path="/distributors" element={<Distributors/>} />
          <Route path="/franchisee" element={<Franchisee/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/be-a-prime-family" element={<BeAPrimeFamily/>} />
          <Route path="/awards" element={<Awards/>} />
          <Route path="/ambassadress" element={<Ambassadress/>} />
          <Route path="/shipping" element={<Shipping/>} />
          <Route path="/shipping-policy" element={<ShippingPolicy/>} />
          <Route path="/factory" element={<Factory/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/collagen-reviews" element={<Collagen/>} />
          <Route path="/lotion-reviews" element={<Lotion/>} />
          <Route path="/soap-reviews" element={<Soap/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/office" element={<Office/>} />
          <Route path="/products/prime-matte-tint" element={<PMT/>} />
          <Route path="/products/prime-glutathione-goddess-melasma-whitening-tone-up-cream" element={<PGGMWTUC/>} />
          <Route path="/products/prime-glutalemon-soap" element={<PGLS/>} />
          <Route path="/products/prime-glutathione-hyaluronic-acid-body-lotion" element={<PGHABL/>} />
          <Route path="/products/prime-glutathione-with-collagen" element={<PGWC/>} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}


export default App;
