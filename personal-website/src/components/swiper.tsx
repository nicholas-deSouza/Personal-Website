// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./index.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="https://www.groovegenerator.xyz/">Groove</a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://focus-4-you.surge.sh/">Focus</a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
