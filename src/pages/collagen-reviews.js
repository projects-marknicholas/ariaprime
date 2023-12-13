import { useState, useEffect } from 'react'
import logoImage from '../img/logo.png'
import review1 from '../img/reviews/review1.png'
import review2 from '../img/reviews/review2.png'
import review3 from '../img/reviews/review3.png'
import review4 from '../img/reviews/review4.png'
import review5 from '../img/reviews/review5.png'
import review17 from '../img/reviews/review17.png'
import review18 from '../img/reviews/review18.png'
import review19 from '../img/reviews/review19.png'
import review20 from '../img/reviews/review20.png'
import review21 from '../img/reviews/review21.png'
import review22 from '../img/reviews/review22.png'
import review23 from '../img/reviews/review23.png'


function Collagen() {
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    document.title = "Prime Glutathione with Collagen Reviews - ARia.co";
  }, []);

  const openModal = (src) => {
    setSelectedFile(src);
  };

  const closeModal = () => {
    setSelectedFile(null);
  };

  return (
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
        <h1>Prime Glutathione with Collagen Reviews</h1>
        <h3>Customer Reviews</h3>   
        <div className="logo-lining">
          <div className="line">--------------------------------</div>
          <img src={logoImage} className="logo"/>
          <div className="line">--------------------------------</div>
        </div>
        <div className="awards-grid">
          <div className="item">
            <div className="v-img">
              <img src={review1} onClick={() => openModal(review1)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={review2} onClick={() => openModal(review2)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={review3} onClick={() => openModal(review3)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={review4} onClick={() => openModal(review4)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={review5} onClick={() => openModal(review5)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={review17} onClick={() => openModal(review17)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={review18} onClick={() => openModal(review18)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={review19} onClick={() => openModal(review19)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={review20} onClick={() => openModal(review20)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={review21} onClick={() => openModal(review21)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={review22} onClick={() => openModal(review22)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={review23} onClick={() => openModal(review23)} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Collagen;
