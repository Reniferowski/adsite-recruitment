import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarAlfa, CarAudi, CarMaserati, CarNight, CarPorsche } from "../assets";
import Slider from "react-slick";
const CarsCarousel = () => {
  const cars = [CarAlfa, CarMaserati, CarAudi, CarNight, CarPorsche];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    rows: 1,
    className: "mt-20",
    centerMode: true,
    centerPadding: "4rem 0",
  };
  return (
    <div className="slider-container -ml-16">
      <Slider {...settings}>
        {cars.map((car, idx) => (
          <img key={idx} className="pr-16" src={car} alt="Gallery Car" />
        ))}
      </Slider>
    </div>
  );
};

export default CarsCarousel;
