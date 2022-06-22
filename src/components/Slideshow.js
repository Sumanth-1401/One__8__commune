import React from 'react'
import img1 from './Images/mac1.jpg'
import img2 from './Images/hp3.jpg'
import img4 from './Images/dell.jpg'
import img5 from './Images/dell1.jpg'
import Carousel  from 'react-bootstrap/Carousel'
function Slideshow() {
 
    return (
      < div className='' >
        <Carousel>
          <Carousel.Item>
            <img className="img-fluid w-100" src={img2} alt="..." />
          </Carousel.Item >

          <Carousel.Item >
            <img className="img-fluid  w-100" src={img4} alt="..." />
          </Carousel.Item >

          <Carousel.Item>
            <img className="img-fluid w-100" src={img1} alt="..." />
          </Carousel.Item >

          <Carousel.Item >
            <img className="img-fluid  w-100" src={img5} alt="..." />
          </Carousel.Item >
        </Carousel >
      </div >
  )
}

export default Slideshow
