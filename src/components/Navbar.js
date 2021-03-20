import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {Button} from './Button';
import './Navbar.css';
import { Dropdown } from "semantic-ui-react";
function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    },[])
    window.addEventListener('resize', showButton)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Little Five 567<i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times':'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active':'nav-menu'}>
                        <li className={'nav-item'}>
                            <Link to='/' className={'nav-links'} onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link to='/products' className={'nav-links'} onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        {/*<li className={'nav-item'}>*/}
                        {/*    <Link to='/services' className={'nav-links'} onClick={closeMobileMenu}>*/}
                        {/*        Services*/}
                        {/*    </Link>*/}
                        {/*</li>*/}

                            <Dropdown className={'nav-item'} text={'Test'}>
                                <Dropdown.Menu>
                                    <Dropdown.Item>s1</Dropdown.Item>
                                    <Dropdown.Item>s1</Dropdown.Item>
                                    <Dropdown.Item>s1</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>


                        <li className={'nav-item'}>
                            <Link to='/projects' className={'nav-links-mobile'} onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'> SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;