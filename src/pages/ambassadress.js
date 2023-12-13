import { useState, useEffect } from 'react'
import Brand1 from '../img/brand/brand1.png'
import Brand2 from '../img/brand/brand2.png'
import Brand3 from '../img/brand/brand3.png'
import Brand4 from '../img/brand/brand4.png'
import Brand5 from '../img/brand/brand5.png'
import Brand6 from '../img/brand/brand6.png'
import Brand7 from '../img/brand/brand7.png'
import Brand8 from '../img/brand/brand8.png'
import Brand9 from '../img/brand/brand9.png'
import Brand10 from '../img/brand/brand-video.mp4'
import logoImage from '../img/logo.png'

function Ambassadress(){
	const [selectedFile, setSelectedFile] = useState(null);

	useEffect(() => {
	    document.title = "Brand Ambassadress - ARia.co";
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
		        <h1>Brand Ambassadress</h1>
		        <h3>Representing ARia.co with Passion and Dedication</h3>   
		        <div className="logo-lining">
		          <div className="line">--------------------------------</div>
		          <img src={logoImage} className="logo"/>
		          <div className="line">--------------------------------</div>
		        </div>
		        <div className="awards-grid">
		          <div className="item">
		            <div className="v-img">
		              <img src={Brand1} onClick={() => openModal(Brand1)} />
		            </div>
		          </div>
		          <div className="item">
		            <div className="v-img">
		              <img src={Brand2} onClick={() => openModal(Brand2)} />
		            </div>
		          </div>
		          <div className="item">
		            <div className="v-img">
		              <img src={Brand3} onClick={() => openModal(Brand3)} />
		            </div>
		          </div>
		          <div className="item">
		            <div className="v-img">
		              <img src={Brand4} onClick={() => openModal(Brand4)} />
		            </div>
		          </div>
		          <div className="item">
		            <div className="v-img">
		              <img src={Brand5} onClick={() => openModal(Brand5)} />
		            </div>
		          </div>
		          <div className="item">
		            <div className="v-img">
		              <img src={Brand6} onClick={() => openModal(Brand6)} />
		            </div>
		          </div>
		          <div className="item">
		            <div className="v-img">
		              <img src={Brand7} onClick={() => openModal(Brand7)} />
		            </div>
		          </div>
		          <div className="item">
		            <div className="v-img">
		              <img src={Brand8} onClick={() => openModal(Brand8)} />
		            </div>
		          </div>
		          <div className="item">
		            <div className="v-img">
		              <img src={Brand9} onClick={() => openModal(Brand9)} />
		            </div>
		          </div>
		          <div className="item">
		            <div className="v-img">
		            <video controls src={Brand10} onClick={() => openModal(Brand10)}></video>
		            </div>
		          </div>
		        </div>
			</section>
		</div>
	);
}

export default Ambassadress;