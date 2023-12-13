import { useState, useEffect } from 'react'
import axios from 'axios-http-client'

function BeAPrimeFamily(){
	useEffect(() => {
	  document.title = "Be a Prime Family - ARia.co";
	}, []);
	return(
		<div className="App">
			<section id="bepart">
				<h1>Be part of our Growing Family</h1>
				<form>
					<span>Name <span>*</span></span>
					<div className="grid-3">
						<div className="item">
							<input type="text" name="first"/>
							<span>First</span>
						</div>
						<div className="item">
							<input type="text" name="middle"/>
							<span>Middle</span>
						</div>
						<div className="item">
							<input type="text" name="last"/>
							<span>Last</span>
						</div>
					</div>
					<span>Address & Contact<span> *</span></span>
					<div className="grid-1">
						<div className="item">
							<input type="text" name="streetAddress"/>
							<span>Street Address</span>
						</div>
						<div className="item">
							<input type="text" name="addressLine2"/>
							<span>Address Line 2</span>
						</div>
					</div>
					<div className="grid-2">
						<div className="item">
							<input type="text" name="city"/>
							<span>City</span>
						</div>
						<div className="item">
							<input type="text" name="province"/>
							<span>State / Province / Region</span>
						</div>
						<div className="item">
							<input type="number" name="zip"/>
							<span>ZIP / Postal Code</span>
						</div>
						<div className="item">
							<input type="number" name="phone"/>
							<span>Phone Number</span>
						</div>
					</div>
					<span>Other info<span> *</span></span>
					<div className="grid-2">
						<div className="item">
							<input type="email" name="email"/>
							<span>Email</span>
						</div>
						<div className="item">
							<input type="link" name="facebook" placeholder="https://www.facebook.com"/>
							<span>Facebook URL</span>
						</div>
						<div className="item">
							<select name="targetLocation">
								<option value="Local / Philippines">Local / Philippines</option>
								<option value="International / Abroad">International / Abroad</option>
							</select>
							<span>Target Location: Local or Abroad</span>
						</div>
						<div className="item">
							<select name="targetSellerArea">
								<option>Select Region</option>
								<option value="Region 1">Region 1</option>
								<option value="Region 2">Region 2</option>
								<option value="Region 3">Region 3</option>
								<option value="Region 4A">Region 4A</option>
								<option value="Region 4B">Region 4B</option>
								<option value="CAR">CAR</option>
								<option value="NCR">NCR</option>
								<option value="Region 5">Region 5</option>
								<option value="Region 6">Region 6</option>
								<option value="Region 7">Region 7</option>
								<option value="Region 8">Region 8</option>
								<option value="Region 9">Region 9</option>
								<option value="Region 10">Region 10</option>
								<option value="Region 11">Region 11</option>
								<option value="Region 12">Region 12</option>
								<option value="Region 13">Region 13</option>
								<option value="ARMM">ARMM</option>
							</select>
							<span>Target Selling Area: Select Region</span>
						</div>
					</div>
					<button name="submit">Submit</button>
				</form>
			</section>
		</div>
	);
}

export default BeAPrimeFamily;