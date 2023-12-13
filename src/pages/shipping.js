import { useState, useEffect } from 'react'
import logoImage from '../img/logo.png'
import proof1 from '../img/proof/proof1.png'
import proof2 from '../img/proof/proof2.png'
import proof3 from '../img/proof/proof3.png'
import proof4 from '../img/proof/proof4.png'
import proof5 from '../img/proof/proof5.png'
import proof6 from '../img/proof/proof6.png'
import proof7 from '../img/proof/proof7.png'
import proof8 from '../img/proof/proof8.png'
import proof9 from '../img/proof/proof9.png'
import proof10 from '../img/proof/proof10.png'
import proof11 from '../img/proof/proof11.png'
import proof12 from '../img/proof/proof12.png'
import proof13 from '../img/proof/proof13.png'
import proof14 from '../img/proof/proof14.png'
import proof15 from '../img/proof/proof15.png'
import proof16 from '../img/proof/proof16.png'
import proof17 from '../img/proof/proof17.png'
import proof18 from '../img/proof/proof18.png'

function Shipping(){
	const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    document.title = "Proof of Shipping - ARia.co";
  }, []);

  const openModal = (src) => {
    setSelectedFile(src);
  };

  const closeModal = () => {
    setSelectedFile(null);
  };
	return(
		<div className="App">
			<section id="careers">
				{selectedFile && (
          <div className="modal-awards" onClick={closeModal}>
            {selectedFile.endsWith('.mp4') ? (
              <video src={selectedFile} controls onClick={(e) => e.stopPropagation()} />
            ) : (
              <img src={selectedFile} onClick={(e) => e.stopPropagation()} />
            )}
          </div>
        )}
				<h1>Proof of Shipping</h1>
				<h3>Proof of Shipping and Order Tracking Information</h3>   
        <div className="logo-lining">
          <div className="line">--------------------------------</div>
          <img src={logoImage} className="logo"/>
          <div className="line">--------------------------------</div>
        </div>
        <div className="awards-grid">
          <div className="item">
            <div className="v-img">
              <img src={proof1} onClick={() => openModal(proof1)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={proof2} onClick={() => openModal(proof2)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={proof3} onClick={() => openModal(proof3)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={proof4} onClick={() => openModal(proof4)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={proof5} onClick={() => openModal(proof5)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={proof6} onClick={() => openModal(proof6)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={proof7} onClick={() => openModal(proof7)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={proof8} onClick={() => openModal(proof8)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={proof9} onClick={() => openModal(proof9)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={proof10} onClick={() => openModal(proof10)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={proof11} onClick={() => openModal(proof11)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={proof12} onClick={() => openModal(proof12)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={proof13} onClick={() => openModal(proof13)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={proof14} onClick={() => openModal(proof14)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={proof15} onClick={() => openModal(proof15)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={proof16} onClick={() => openModal(proof16)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={proof17} onClick={() => openModal(proof17)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={proof18} onClick={() => openModal(proof18)} />
            </div>
          </div>
        </div>
			</section>
		</div>
	);
}

export default Shipping;