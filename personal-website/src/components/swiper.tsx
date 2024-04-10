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
          <img src="/src/assets/groove-generator.png"></img>
          <a href="https://www.groovegenerator.xyz/"></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/focus4u.png"></img>
          <a href="https://focus-4-you.surge.sh/"></a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
