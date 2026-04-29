import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Autoplay } from "swiper/modules";
import {ClassesData as classes} from "../data/ClassesData.jsx";

import "swiper/css";
import "swiper/css/navigation";

// import Guitar from "../../../assets/joinOurClass/Guitar.jpg";
// import Violine from "../../../assets/joinOurClass/Violine.jpg";
// import Keyboard from "../../../assets/joinOurClass/Keyboard.png";

import ClassCart from "../components/ClassCart";

export default function ClassCartSet() {
  

  return (
    <section className="relative w-full py-12 bg-[#002B42] flex justify-center items-center flex-col gap-5">
      <h2 className="text-center text-white font-primary font-normal text-[36px] sm:text-[42px] md:text-[40px] xl:text-[40px] 2xl:text-[50px] mb-4 sm:mb-5">
        Join With Our Classes
      </h2>

      <div className="w-full px-6 sm:px-10 flex justify-center items-center">
        <div className="w-full max-w-7xl">
          <Swiper
            modules={[Navigation, Mousewheel, Autoplay]}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={900}
            breakpoints={{
              // mobile: 1 card
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
                centeredSlides: true,
              },
              // tablet: 2 cards
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
              },
              // desktop: 3 cards
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
                centeredSlides: false,
              },
            }}
          >
            {classes.map((item) => (
              <SwiperSlide key={item.id} className="flex justify-center">
             
                <div className="w-full">
                  <ClassCart
                    image={item.image}
                    grade={item.grade}
                    date={item.date}
                    time={item.time}
                    location={item.location}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}