import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/videos/tech.mp4" autoPlay loop muted />
        <h1> TECHNOLOGY FOR YOUR BUSINESS </h1>
    </div>
  )
}

export default HeroSection
