import { useState, useEffect } from 'react'
import logoImage from '../img/logo.png'
import factory2 from '../img/factory/factory2.png'
import factory11 from '../img/factory/factory11.png'
import factory12 from '../img/factory/factory12.png'
import factory13 from '../img/factory/factory13.png'
import factory14 from '../img/factory/factory14.png'
import factory15 from '../img/factory/factory15.png'
import factory16 from '../img/factory/factory16.png'


function Factory() {
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    document.title = "Factory/Company - ARia.co";
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
        <h1>Factory/Company</h1>
        <h3>Our Mission, Values, and Manufacturing Processs</h3>   
        <div className="logo-lining">
          <div className="line">--------------------------------</div>
          <img src={logoImage} className="logo"/>
          <div className="line">--------------------------------</div>
        </div>
        <div className="awards-grid">
          <div className="item">
            <div className="v-img">
              <img src={factory2} onClick={() => openModal(factory2)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={factory11} onClick={() => openModal(factory11)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={factory12} onClick={() => openModal(factory11)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={factory13} onClick={() => openModal(factory11)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={factory14} onClick={() => openModal(factory14)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={factory15} onClick={() => openModal(factory15)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={factory16} onClick={() => openModal(factory16)} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Factory;
