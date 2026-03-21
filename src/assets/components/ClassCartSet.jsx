import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// import Guitar from "../../../assets/joinOurClass/Guitar.jpg";
// import Violine from "../../../assets/joinOurClass/Violine.jpg";
// import Keyboard from "../../../assets/joinOurClass/Keyboard.png";

import ClassCart from "../components/ClassCart";

export default function ClassCartSet() {
  const classes = [
    {
      id: 1,
     image: "https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/Guitar.jpg",
      grade: "Guitar Class - Grade 6",
      date: "December 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Harmony Concert Hall",
    },
    {
      id: 2,
       image: "https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/Violine.jpg",
      grade: "Guitar Class - Grade 6",
      date: "December 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Harmony Concert Hall",
    },
    {
      id: 3,
      image: "https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/Keyboard.png",
      grade: "Guitar Class - Grade 6",
      date: "December 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Harmony Concert Hall",
    },
    {
      id: 4,
    image: "https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/Guitar.jpg",
      grade: "Guitar Class - Grade 6",
      date: "December 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Harmony Concert Hall",
    },
    {
      id: 5,
       image: "https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/Keyboard.png",
      grade: "Guitar Class - Grade 6",
      date: "December 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Harmony Concert Hall",
    },
    {
      id: 6,
      image: "https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/Keyboard.png",
      grade: "Guitar Class - Grade 6",
      date: "December 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Harmony Concert Hall",
    },
    {
      id: 7,
      image: "https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/Keyboard.png",
      grade: "Guitar Class - Grade 6",
      date: "December 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Harmony Concert Hall",
    },
  ];

  return (
    <section className="relative w-full py-12 bg-[#002B42] flex justify-center items-center flex-col gap-5">
      <h2 className="text-center text-white font-primary font-normal text-[36px] sm:text-[42px] md:text-[64px] xl:text-[44px] 2xl:text-[50px] mb-4 sm:mb-5">
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
            speed={800}
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
                slidesPerView: 3,
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