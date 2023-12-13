import { useState, useEffect } from 'react'
import aboutVideo from '../img/about-video.mp4'
import about from '../img/about.png'

function AboutUs(){
	useEffect(() => {
	  document.title = "About Us - ARia.co";
	}, []);
	return(
		<div className="App">
			<section id="about">
				<h1>About ARia.co</h1>
				<img src={about}/>
				<p>
					ARia.co was established in South Korea in 2020. Because of my determination to improve my health and achieve beautiful white skin, ARia.co exists.
					<br/><br/>
					Every concept begins with a challenge. Like I mentioned, I'm making a conscious effort to lighten my complexion because I've been the target of bullying due of my dark skin. I will always remember that the word "Agta" implies maitim in Tagalog.
					<br/><br/>
					Since then, I've been looking for the ideal solution to improve the health and brightness of my skin, but I'm always let down and on the verge of giving up.
					<br/><br/>	
					However, one day while browsing the internet, I discovered a firm that produces glutathione for health and skin, so we asked them to create a mixture that would work for someone with Asian skin like me. Short version: This is the beginning of our first product, "Prime Glutathione with Collagen."
					<br/><br/>
					A brand called Prime Glutathione uses a thorough blend of 47 components for your skin and better health.
					<br/><br/>
					We keep up the distinct quality of our brand. We now distribute ARia.co products in Japan, South Korea, Canada, the United States, the Philippines, and Israel. However, we are constantly working to expand our market and international presence.
				</p><br/><br/>
				<video controls src={aboutVideo}></video>
			</section>
		</div>
	);
}

export default AboutUs;