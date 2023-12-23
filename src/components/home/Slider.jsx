import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { appleImage, appleProduct, appleProduct2 } from "../../assets";

const Slider = () => {
  return (
    <section className="w-full h-[40vh] md:h-[50vj] lg:h-[70vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="h-full w-full "
            style={{
              backgroundImage: `url(${appleProduct})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-black bg-opacity-50 w-full h-full">
              <div className="max-w-7xl h-full mx-auto flex items-center text-white">
                <h1 className="text-[30px] md:text-[40px] lg:text-[70px] lg:font-bold">
                  Shop smart, live large. Discover premium you deserve.
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full w-full "
            style={{
              backgroundImage: `url(${appleProduct2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-black bg-opacity-50 w-full h-full">
              <div className="max-w-7xl h-full mx-auto flex items-center text-white">
                <h1 className="text-[30px] md:text-[40px] lg:text-[70px] lg:font-bold">
                  unleash your style. Shop the latest trends before they break.
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full w-full "
            style={{
              backgroundImage: `url(${appleImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-black bg-opacity-50 w-full h-full">
              <div className="max-w-7xl h-full mx-auto flex items-center text-white">
                <h1 className="text-[30px] md:text-[40px] lg:text-[70px] lg:font-bold">
                  Elevate your everyday with exquisite
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
