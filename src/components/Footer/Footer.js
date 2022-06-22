import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGoogle} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faPhone, faPrint, faTrain} from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <MDBFooter bgColor='dark' className='text-center text-lg-start text-white'>
            <section className='d-flex justify-content-center justify-content-lg-between p-3 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on:</span>
                </div>
                <div className='d-flex gap-4'>
                    <FontAwesomeIcon icon={faFacebook} ></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTwitter} ></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faGoogle} ></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faInstagram} ></FontAwesomeIcon>
                </div>
            </section>
            <section className=''>
                <div className='container text-center text-md-start mt-5'>
                    <div className='row mt-3'>
                        <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <FontAwesomeIcon icon={faTrain}></FontAwesomeIcon>ONE_8_COMMUNE
                            </h6>
                            <p>
                                Over the last few years, we feel proud to say that One_8_Commune has
                                taken never seen before initiatives to promote technology and contribute for
                                the overall development of society.
                            </p>
                        </div>

                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Our Services</h6>
                            <p>WishList</p>
                            <p>Offers</p>
                            <p>Sales</p>
                            <p>Reviews</p>
                        </div>

                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>one_8_commune.com</p>
                            <p>one8lappy.com</p>
                            <p>one_8_buy.com</p>
                            <p>one_8_offer.com</p>
                        </div>

                        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact us</h6>
                            <p><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Hyderabad, Telangana, India</p>
                            <p><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> commune@one_8.com</p>
                            <p><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> +91-9963637831</p>
                            <p><FontAwesomeIcon icon={faPrint}></FontAwesomeIcon> + 01-234-567-89</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='text-center p-2 text-muted' style={{ backgroundColor: 'white' }}>
                © 2022 Copyright: ONE_8_COOMUNE
            </div>
        </MDBFooter>
    );
}

export default Footer;