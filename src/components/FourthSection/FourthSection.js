import React, { useEffect, useState } from "react";
import carouselFirstImg from "../../images/carouselFirstImg.jpg";
import carouselSecondImg from "../../images/carouselSecondImg.jpg";

import "./styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import
// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

// install Swiper modules
SwiperCore.use([Navigation]);

function FourthSection() {
  const [carouselActiveCount, setCarouselActiveCount] = useState(1);
  const [carouselCount, setCarouselCount] = useState(0);

  return (
    <div className="fourth-section">
      <Swiper
        onSlideChange={(e) => setCarouselActiveCount(e.activeIndex + 1)}
        navigation={true}
        slidesPerView={1.15}
        className="mySwiper"
        onSwiper={(swiper) => {
          setCarouselCount(swiper.slides.length);
        }}
      >
        <SwiperSlide
          style={{ backgroundImage: `url(${carouselFirstImg})` }}
        ></SwiperSlide>

        <SwiperSlide
          style={{ backgroundImage: `url(${carouselSecondImg})` }}
        ></SwiperSlide>

        <SwiperSlide
          style={{ backgroundImage: `url(${carouselFirstImg})` }}
        ></SwiperSlide>

        <SwiperSlide
          style={{ backgroundImage: `url(${carouselSecondImg})` }}
        ></SwiperSlide>

        <SwiperSlide
          style={{ backgroundImage: `url(${carouselFirstImg})` }}
        ></SwiperSlide>

        <SwiperSlide
          style={{ backgroundImage: `url(${carouselSecondImg})` }}
        ></SwiperSlide>

        <SwiperSlide
          style={{ backgroundImage: `url(${carouselFirstImg})` }}
        ></SwiperSlide>
      </Swiper>

      <div className="container">
        <div className="fourth-text-container">
          <h1 className="fourth-text-count">
            <span className="fourth-text-current-count">
              0{carouselActiveCount}
            </span>
            /0{carouselCount}
          </h1>

          <p className="fourth-text-directions">
            Use the arrows or drag to navigate
          </p>
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
