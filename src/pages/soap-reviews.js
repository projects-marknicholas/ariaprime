import { useState, useEffect } from 'react'
import logoImage from '../img/logo.png'
import review1 from '../img/reviews/review12.png'
import review2 from '../img/reviews/review13.png'
import review3 from '../img/reviews/review14.png'
import review4 from '../img/reviews/review15.png'
import review5 from '../img/reviews/review16.png'


function Soap() {
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    document.title = "Prime Glutalemon Soap Reviews - ARia.co";
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
        <h1>Prime Glutalemon Soap Reviews</h1>
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
        </div>
      </section>
    </div>
  );
}

export default Soap;
