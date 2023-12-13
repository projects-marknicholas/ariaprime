import { useState, useEffect } from 'react'
import Awards1 from '../img/awards/awards1.png'
import Awards2 from '../img/awards/awards2.png'
import Awards3 from '../img/awards/awards3.png'
import Awards4 from '../img/awards/awards4.png'
import Awards5 from '../img/awards/awards5.png'
import Awards6 from '../img/awards/awards6.png'
import Awards7 from '../img/awards/awards7.png'
import Awards8 from '../img/awards/awards8.mp4'
import Awards9 from '../img/awards/awards9.png'
import Awards11 from '../img/awards/awards11.png'
import Awards12 from '../img/awards/awards12.png'
import logoImage from '../img/logo.png'


function Awards() {
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    document.title = "Awards & Achievements - ARia.co";
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
        <h1>Awards & Achievements</h1>
        <h3>Awards and achievements highlight notable accomplishments or recognitions received by an individual or organization.</h3>   
        <div className="logo-lining">
          <div className="line">--------------------------------</div>
          <img src={logoImage} className="logo"/>
          <div className="line">--------------------------------</div>
        </div>
        <div className="awards-grid">
          <div className="item">
            <div className="v-img">
              <img src={Awards1} onClick={() => openModal(Awards1)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={Awards2} onClick={() => openModal(Awards2)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={Awards3} onClick={() => openModal(Awards3)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={Awards4} onClick={() => openModal(Awards4)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <video controls src={Awards8} onClick={() => openModal(Awards8)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={Awards5} onClick={() => openModal(Awards5)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={Awards6} onClick={() => openModal(Awards6)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={Awards11} onClick={() => openModal(Awards11)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={Awards12} onClick={() => openModal(Awards12)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={Awards7} onClick={() => openModal(Awards7)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={Awards9} onClick={() => openModal(Awards9)} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Awards;
