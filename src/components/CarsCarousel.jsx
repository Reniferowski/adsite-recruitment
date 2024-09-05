import { CarAlfa, CarAudi, CarMaserati, CarNight, CarPorsche } from "../assets";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
const CarsCarousel = () => {
  const cars = [CarAlfa, CarMaserati, CarAudi, CarNight, CarPorsche];
  return (
    <>
      <Swiper
        className="mt-20"
        spaceBetween={64}
        slidesPerView={"auto"}
        loop={true}
        pagination={{
          el: "#bullets",
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {cars.map((car, idx) => (
          <SwiperSlide key={idx} className="w-[600px]">
            <img src={car} alt="Gallery Car" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarsCarousel;
