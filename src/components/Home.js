import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faLocationDot, faRibbon } from '@fortawesome/free-solid-svg-icons'
import Slideshow from './Slideshow';

function Home() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Slideshow />}></Route>
            </Routes>
            <div className='container' id="jaanu">
                <br></br>
                <div className='container'>
                    <h2 className='text-center font-link display-4'><b>Why Choose us?</b></h2>
                    <br></br>
                    <div className='row'>
                        <div className='col-sm-12 col-md-9 col-lg-6 mx-md-auto mx-lg-auto'>
                            <p className="border border-dark border-2 p-1">
                                <h3 className='font-link'><b>Special offers for students:</b></h3>
                                <ul><em>
                                    <li>Discounts for students on their ID proofs.</li>
                                    <li>Free Home Delivery</li>
                                    <li>2 year warranty for all kinds of repairs</li>
                                    <li>Full refund in case of cancellation before 24 hours</li>
                                    <li>0% refund in case of cancellation less than 24 hours before the delivery</li>
                                </em>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <br />
                <div className='container bg-light'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='text-center mt-3'>
                                <FontAwesomeIcon icon={faRibbon} size="3x"></FontAwesomeIcon>
                            </div>
                            <br />
                            <div>
                                <h3 className='font-link text-center'><b>#1first in India!</b></h3>
                                <p className='container'>
                                    <em>For more than 10 years, our team of commune sale products with efficient cost, specially
                                        designed to quality, under optimal conditions, Hyderabad and most parts of India:
                                        Delhi, Mumbai, Chennai, Bangaluru etc...</em>
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='text-center mt-3'>
                                <FontAwesomeIcon icon={faAward} size="3x"></FontAwesomeIcon>
                            </div>
                            <br />
                            <div>
                                <h3 className='font-link text-center'><b>Best prices guaranteed!</b></h3>
                                <p className='container'>
                                    <em>We guarantee the best prices in India and always adjust our rates to the lowest for our products
                                        from other companies. Our prices are unbeatable today in the financial market in India and we are proud of
                                        our offers and our products reviews!</em>
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='text-center mt-3'>
                                <FontAwesomeIcon icon={faLocationDot} size="3x"></FontAwesomeIcon>
                            </div>
                            <br />
                            <div>
                                <h3 className='font-link text-center'><b>Easy booking!</b></h3>
                                <p className='container'>
                                    <em>Book your products in a few clicks, 24/7 via our website on your computer, mobile or tablet.
                                        Our booking is simple, fast and 100% secure.You will receive your confirmation by email and your receipt
                                        to print. If you cannot print it, go to our service care and we will do it for you!</em>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;