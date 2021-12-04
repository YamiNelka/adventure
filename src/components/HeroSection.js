import React from 'react'
import './HeroSection.css'
import '../App.css'
import { Button } from './Button'
import power from '../videos/video-2.mp4'

function HeroSection() {
    return (
        <div className="hero-container">
            <video autoPlay loop muted>
                <source src={power} type='video/mp4' />
            </video>
            <h1>Adventure Awaits</h1>
            <p>What are you waiting for ?</p>
            <div className="hero-btns">
                <Button className='btns' buttonstyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonstyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
