'use client'
import React from 'react';
import Lottie from 'lottie-react';
import * as animationData from '../public/lotties/animation_lmnww75b.json'; // Import your Lottie JSON file


export default function Svg() {
	// const defaultOptions = {
	//   loop: true, // Set to true if you want the animation to loop
	//   autoplay: true, // Set to true to start the animation when the component mounts
	//   animationData: animationData, // The JSON data for your Lottie animation
	// };

  
	return (
	  <div className=' ' >
		<Lottie animationData={animationData} loop={true} autoPlay={true}  height={'470px'} />
	  </div>
	);
  }
  