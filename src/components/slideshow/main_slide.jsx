import Carousel from "react-bootstrap/Carousel";

function MainSlide() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="assets/1.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="assets/2.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="assets/3.jpg" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="assets/4.jpg" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="assets/5.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default MainSlide;
