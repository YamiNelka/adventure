import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Button from './Button'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const showButton = () => { window.innerWidth <= 960 ? setButton(false) : setButton(true) }

    window.addEventListener('resize', showButton)
    
    useEffect(() => {
        showButton()
    }, [])

    return (
        <>
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Travel Junkie  <i className="fab fa-typo3" />{/*<i class="far fa-smile-beam" />*/}
                    </Link>
                    <div className='menu-icon' onClick={handleClick}> {/*hena lw 3aiz t3ml ay event 3ala icon .. ama tdos 3aleha yt8yr shklha msln */}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/singup' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outilne'>SIGN UP</Button>}
                </div>
            </nav>
        </div>
        </>
    )
}

export default Navbar
