import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'
import { Card, Row, Col } from 'react-bootstrap';

function HP() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onFormSubmit = (userData) => {
        console.log(userData)
    }
    return (
        <div className='container'>
            <br />
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card className='bg-light shadow p-1'>
                        <Card.Img variant="top" className="rounded w-100 shadow" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtSFr-cAZNG3CJt2hE9enR9XQ7w6qlpm_j-w&usqp=CAU" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>HP LAPTOP 15s-fq5010TU</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Price :</b><em style={{ fontSize: "15px" }}> ₹62989.99</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Memory :</b><em style={{ fontSize: "15px" }}> 8 GB, 1 x 8 GB, DDR4, 3200 MHz </em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Processor:</b><em style={{ fontSize: "15px" }}> 11th Gen Intel® Core™ i5-1135G7</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStarHalfStroke} size="1x"></FontAwesomeIcon>
                                <br />
                                <b style={{ fontSize: "15px" }}>Feature :</b><em style={{ fontSize: "15px" }}> 39.6-cm. display Full HD (1920X1080) </em>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                <div className='row'>
                                    <div className="col-sm-7 mt-2">
                                        <button type="submit" className="btn btn-warning w-100">Add to Wishlist  <FontAwesomeIcon icon={faHeart} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                    <div className="col-sm-5 mt-2">
                                        <button type="submit" className="btn btn-success w-100">Book   <FontAwesomeIcon style={{ color: "white" }} icon={faPaperPlane} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='p-1 shadow bg-light'>
                        <Card.Img variant="top" className="shadow rounded w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIUzWO5_1svj5ObdlXw84sOdAtiSfJDUbcg&usqp=CAU" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>HP Pavilion LAPTOP 15-eg2</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Prize :</b><em style={{ fontSize: "15px" }}> ₹74,999</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Memory :</b><em style={{ fontSize: "15px" }}> 16 GB DDR4-3200 MHz RAM(2x8GB) </em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Processor :</b><em style={{ fontSize: "15px" }}> 12th Generation Intel® Core™ i5</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <br />
                                <b style={{ fontSize: "15px" }}>Features :</b><em style={{ fontSize: "15px" }}>Intel® Iris® Xᵉ Graphics </em>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                <div className='row'>
                                    <div className="col-sm-7 mt-2">
                                        <button type="submit" className="btn btn-warning w-100">Add to Wishlist  <FontAwesomeIcon icon={faHeart} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                    <div className="col-sm-5 mt-2">
                                        <button type="submit" className="btn btn-success w-100">Book   <FontAwesomeIcon style={{ color: "white" }} icon={faPaperPlane} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='p-1 shadow bg-light'>
                        <Card.Img variant="top" className="shadow w-100 rounded" src="https://www.cnet.com/a/img/resize/72f23b86b17a2220fca5191360883782a9a3a6d2/2021/12/06/2bfb6b9a-694d-4ed3-8d19-574fbeed30a6/20211122-2021-16-inch-apple-macbook-pro-02.jpg?auto=webp&fit=crop&height=528&width=940" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>HP Pavilion Laptop 15-eg2019TX</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Price :</b><em style={{ fontSize: "15px" }}> ₹74,999</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Memory :</b><em style={{ fontSize: "15px" }}>Intel® Iris® Xᵉ Graphics </em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Processor :</b><em style={{ fontSize: "15px" }}>12th Generation Intel® Core™ i5 </em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <br />
                                <b style={{ fontSize: "15px" }}>Features :</b><em style={{ fontSize: "15px" }}> Intel® Iris® Xᵉ Graphics</em>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                <div className='row'>
                                    <div className="col-sm-7 mt-2">
                                        <button type="submit" className="btn btn-warning w-100">Add to Wishlist  <FontAwesomeIcon icon={faHeart} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                    <div className="col-sm-5 mt-2">
                                        <button type="submit" className="btn btn-success w-100">Book   <FontAwesomeIcon style={{ color: "white" }} icon={faPaperPlane} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="p-1 shadow bg-light">
                        <Card.Img variant="top" className="shadow rounded w-100" src="https://images.pexels.com/photos/249538/pexels-photo-249538.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>HP PAVILION LAPTOP 15-eh3</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Price :</b><em style={{ fontSize: "15px" }}> ₹77,999</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Memory :</b><em style={{ fontSize: "15px" }}>16 GB DDR4-3200 MHz RAM(2x8 GB)</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Processor :</b><em style={{ fontSize: "15px" }}> 12th Generation Intel® Core™ i5</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStarHalfStroke} size="1x"></FontAwesomeIcon>
                                <br />
                                <b style={{ fontSize: "15px" }}>Features :</b><em style={{ fontSize: "15px" }}>Intel® Iris® Xᵉ Graphics </em>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                <div className='row'>
                                    <div className="col-sm-7 mt-2">
                                        <button type="submit" className="btn btn-warning w-100">Add to Wishlist  <FontAwesomeIcon icon={faHeart} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                    <div className="col-sm-5 mt-2">
                                        <button type="submit" className="btn btn-success w-100">Book   <FontAwesomeIcon style={{ color: "white" }} icon={faPaperPlane} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='shadow p-1 bg-light'>
                        <Card.Img variant="top" className="rounded shadow w-100" src="https://www.gizbot.com/images/2020-03/apple-macbook-air-2020_158467389660.jpg" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>HP LAPTOP 15s-fq5010TU</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Price :</b><em style={{ fontSize: "15px" }}> ₹62,999</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Memory :</b><em style={{ fontSize: "15px" }}>8GB DDR4-3200 MHz RAM(2x4GB) </em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Processor :</b><em style={{ fontSize: "15px" }}> 12th Generation Intel® Core™ i5</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStarHalfStroke} size="1x"></FontAwesomeIcon>
                                <br />
                                <b style={{ fontSize: "15px" }}>Features :</b><em style={{ fontSize: "15px" }}>Intel® Iris® Xᵉ Graphics </em>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                <div className='row'>
                                    <div className="col-sm-7 mt-2">
                                        <button type="submit" className="btn btn-warning w-100">Add to Wishlist  <FontAwesomeIcon icon={faHeart} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                    <div className="col-sm-5 mt-2">
                                        <button type="submit" className="btn btn-success w-100">Book   <FontAwesomeIcon style={{ color: "white" }} icon={faPaperPlane} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className='p-1 shadow bg-light'>
                        <Card.Img variant="top" className="shadow rounded w-100" src="https://cdn.vox-cdn.com/thumbor/7eSxMOdl3Watd577YoDmi1w51VM=/0x0:1534x862/1200x800/filters:focal(645x309:889x553)/cdn.vox-cdn.com/uploads/chorus_image/image/70012701/1Rm4aV2YiD.0.png" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>HP PAVILION LAPTOP 14-dv23</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Price :</b><em style={{ fontSize: "15px" }}> ₹62,999</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Memory :</b><em style={{ fontSize: "15px" }}> 8GB DDR4-3200 MHz RAM(2x4GB)</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Processor :</b><em style={{ fontSize: "15px" }}> 13th Generation Intel® Core™ i5</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStarHalfStroke} size="1x">Intel® Iris® Xᵉ Graphics</FontAwesomeIcon>
                                <br />
                                <b style={{ fontSize: "15px" }}>Features :</b><em style={{ fontSize: "15px" }}> </em>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                <div className='row'>
                                    <div className="col-sm-7 mt-2">
                                        <button type="submit" className="btn btn-warning w-100">Add to Wishlist  <FontAwesomeIcon icon={faHeart} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                    <div className="col-sm-5 mt-2">
                                        <button type="submit" className="btn btn-success w-100">Book   <FontAwesomeIcon style={{ color: "white" }} icon={faPaperPlane} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>  
            <br />
            <br />
        </div >
    );
}

export default HP;