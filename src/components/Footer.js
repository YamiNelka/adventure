import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './Footer.css'


function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at anytime
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/signup'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/signup'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/signup'>Facebook</Link>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Twitter</Link>
                        <Link to='/'>Youtube</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            Travel Junkie <i className="fab fa-typo3" />
                        </Link>
                    </div>
                    <small className="website-rights">Travel Junkie © 2021</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to='' target='_blank' aria-label='Facebook'> 
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link className="social-icon-link instagram" to='/' target='_blank' aria-label='Instagram'> 
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link className="social-icon-link twitter" to='/' target='_blank' aria-label='Twitter'> 
                            <i className='fab fa-twitter' />
                        </Link>
                        <Link className="social-icon-link youtube" to='/' target='_blank' aria-label='Youtube'> 
                            <i className='fab fa-youtube' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
