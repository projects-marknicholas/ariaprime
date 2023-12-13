import logoImage from '../img/logo.png'
import office1 from '../img/office/office1.png'
import office2 from '../img/office/office2.png'
import office3 from '../img/office/office3.png'
import office4 from '../img/office/office4.png'
import office5 from '../img/office/office5.png'
import office6 from '../img/office/office6.png'
import office7 from '../img/office/office7.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Office(){
  useEffect(() => {
    document.title = "Philippines Office Store - ARia.co";
  }, []);

  const [selectedFile, setSelectedFile] = useState(null);

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
        <h1>Philippines Office Store</h1>
        <h3>A place where work is done efficiently and effectively.</h3>   
        <div className="logo-lining">
          <div className="line">--------------------------------</div>
          <img src={logoImage} className="logo"/>
          <div className="line">--------------------------------</div>
        </div>
        <div className="awards-grid">
          <div className="item">
            <div className="v-img">
              <img src={office1} onClick={() => openModal(office1)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={office2} onClick={() => openModal(office2)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={office3} onClick={() => openModal(office3)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={office4} onClick={() => openModal(office4)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={office5} onClick={() => openModal(office5)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={office6} onClick={() => openModal(office6)} />
            </div>
          </div>
          <div className="item">
            <div className="v-img">
              <img src={office7} onClick={() => openModal(office7)} />
            </div>
          </div>
        </div>
      </section>
		</div>
	);
}

export default Office;