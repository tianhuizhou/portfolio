import React from 'react';
import {Button} from './Button';
import './HeroSection.css';
import '../App.css'
import {Link} from 'react-router-dom';
import {Link as Link2} from 'react-scroll';

function HeroSection() {
    return (
        <>
        <div className='hero-container'>
            <video src={'/videos/video-2.mp4'} autoPlay loop muted></video>
            <h1>WELCOME</h1>
            <p>What are you waiting for?</p>
            <div className={'hero-btns'}>
                <Link2 activeClass="active" to='cardgroups' spy={true} smooth={true} className='btn-mobile'>
                <Button className={'btns'} buttonStyle={'btn--outline'} buttonSize={'btn--large'}>
                    GET STARTED
                </Button>
                </Link2>
                <Link to='/products' className='btn-mobile'>
                <Button className={'btns'} buttonStyle={'btn--primary'} buttonSize={'btn--large'}>
                    WATCH VIDEO <i className={'far fa-play-circle'}></i>
                </Button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default HeroSection;