import { useState, useEffect } from 'react'

function Careers(){
	useEffect(() => {
	  document.title = "Careers - ARia.co";
	}, []);
	return(
		<div className="App">
			<section id="careers">
				<h1>No Careers Yet</h1>
			</section>
		</div>
	);
}

export default Careers;