
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export default class NextJsCarousel extends Component {
	render() {
		return (
			<div>
			
			<Carousel>
				<div>
					<Image src="/entrepreneur.jPg" alt="image1" width={1380} height={720}/>
					<p className="legend">Devenez entrepreneur du Web</p>

				</div>
				<div>
					<Image src="/taxe 1.jpg" alt="image2" width={1380} height={720}/>
					<p className="legend">Optimiser votre impots sur les sociétés 2</p>

				</div>
				<div>
					<Image src="/stratégie digitale.jpg" alt="image3" width={1380} height={720}/>
					<p className="legend">Votre stratégie digitale 3</p>

				</div>
				<div>
					<Image src="/taxe 2.jpg" alt="image4" width={1380} height={720}/>
					<p className="legend">Image 4</p>

				</div>
				<div>
					<Image src="/website.jpg" alt="image5" width={1380} height={720}/>
					<p className="legend">Image 5</p>

				</div>
			</Carousel>
			</div>
		);
	}
};
