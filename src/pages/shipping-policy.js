import { useState, useEffect } from 'react'
import logoImage from '../img/logo.png'


function Lotion() {

  useEffect(() => {
    document.title = "Shipping Policy - ARia.co";
  }, []);

  return (
    <div className="App">
      <section id="about">
        <h1>Shipping Policy</h1>
        <div className="logo-lining">
          <div className="line">--------------------------------</div>
          <img src={logoImage} className="logo"/>
          <div className="line">--------------------------------</div>
        </div><br/>
        <p>
          📣ARia.co SHOP POLICY📣<br/>
          TO OUR VALUED FIRST TIME AND REPEATING BUYERS, PLEASE READ CAREFULLY‼️<br/><br/>

          🧾 INVOICE:<br/>
          We send official invoice with payment details.<br/>
          So, please always check your inbox. If you haven't received it, please message us right away.<br/>
          We DO NOT ask our clients to transfer any amount to other accounts except listed in our MODE of PAYMENT. ❌DO NOT
          transfer money if it’s NOT the bank account in our MOP details.<br/>
          👉🏻ARIA PRIME is not responsible about your incident.<br/><br/>

          💸 MODE OF PAYMENT:<br/>
          🇰🇷Korea - E-transfer/Bank transfer<br/>
          🇵🇭Philippines - E-transfer/Bank transfer or GCASH<br/><br/>

          ‼️PAYMENT REMINDERS:<br/>
          We can only accept 24 hours reservation of your order. After that, all unpaid items will be automatically canceled.<br/><br/>

          📦🚚 ✈️SHIPPING:<br/>
          Allow us to ship within 2-3 business days after payment.<br/>
          INTERNATIONAL SHIPPING<br/>
          It may takes 7-10 days its depend to your country<br/><br/>

          🌎INTERNATIONAL SHIPPING RETURN/REFUND POLICY:<br/>
          💡📌REMINDER: We always check and double check your items before shipping.<br/>
          Please make sure to take a video before opening your parcels, if any damage is seen in your box, please report it to the Shipping Company / EMS / 우체국 or Your Country Post Office.<br/>
          ✨ARia.co is not responsible for any LOST, MISPLACED, DAMAGES & DELAYED SHIPMENTS by the courier after they have been shipped. We are not responsible for reporting it to the local post office or courier companies about your incident.<br/><br/>

          👉🏻NO refunds until returned item is received.<br/>
          Shipping fees is not REFUNDABLE .<br/><br/>

          All packages shipped internationally may be subject to import Taxes, Customs Duties or Fees imposed by the destination country.<br/>
          If a product is held at Customs ARia.co is not liable for the taxes it will be subjected to.<br/><br/>

          CUSTOMS DUTIES AND TAXES (IF ANY) SHALL BE PAID AND SHOULDER BY THE BUYER. IT IS ENTIRELY THE BUYER'S OBLIGATION.<br/><br/>

          🇵🇭PHILIPPINES SHIPPING RETURN/REFUND POLICY:<br/>
          💡📌REMINDER: We always check and double check your items before shipping.<br/><br/>

          NO VIDEO = No refund, No exchange<br/>
          Upon received, Please take a full video while<br/>
          opening the parcel. Show it clearly.<br/>
          You can show it as a proof if you
          received a damaged / incomplete
          items. Again, no FULL video no REFUND policy.<br/><br/>

          THANK YOU SO MUCH GOD BLESS 🙏
        </p>
      </section>
    </div>
  );
}

export default Lotion;
