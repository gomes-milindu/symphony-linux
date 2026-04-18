import Topic from "../components/Topic";
import UpComingCard from "../components/UpCommingCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import UpComingMobile from "./UpCommingMobile";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Autoplay, Pagination } from "swiper/modules";

export default function UpComingSection() {
  const eventDetails = [
    {
      id: 1,
      image:
        "https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/pexels-audience.jpg",
      title: "Music Concert Extravaganza",
      dateTime: "Dec 15, 2023 | 7:00 PM",
      location: "Symphony Hall, Downtown",
    },

    {
      id: 2,
      image:
        "https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/j.jpg",
      title: "Jazz Night Live",
      dateTime: "Jan 10, 2024 | 8:00 PM",
      location: "Blue Note Club",
    },
    {
      id: 3,
      image:
        "https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/pexels-mobile-phone.jpg",
      title: "Classical Evening",
      dateTime: "Feb 20, 2024 | 6:30 PM",
      location: "Grand Opera House",
    },
    
  ];

  return (
    <>
      <section className="w-full h-165 md:h-250 flex flex-col justify-center items-center">
        <div className="w-10/12 h-full mt-5 flex flex-col justify-start items-center gap-5">
          <div className="flex mt-10">
            <Topic
              title="Up Coming Events"
              subtitle="Join us for exciting concerts, workshops, and recitals. Experience the joy of live music."
            />
          </div>

          {/* <div className=" lg:hidden w-14/12 flex flex-col justify-center items-center mt-15 gap-8">
            {eventDetails.map((event, index) => (
              <UpComingMobile
                key={index}
                eventImage={event.image}
                eventTitle={event.title}
                eventDateTime={event.dateTime}
                eventLocation={event.location}
              />
            ))}
          </div> */}

          <div className="hidden md:inline-flex flex flex-col justify-center items-center mt-15 gap-8">
            {eventDetails.map((event, index) => (
              <UpComingCard
                key={index}
                eventImage={event.image}
                eventTitle={event.title}
                eventDateTime={event.dateTime}
                eventLocation={event.location}
              />
            ))}
          </div>

          <div className="md:hidden w-14/12 py-5">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1.2}
              centeredSlides={true}
              spaceBetween={10}
              watchSlidesProgress={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
              }}
              className="event-swiper"
            >
              {eventDetails.map((event, index) => (
                <SwiperSlide key={index}>
                  <UpComingCard
                    eventImage={event.image}
                    eventTitle={event.title}
                    eventDateTime={event.dateTime}
                    eventLocation={event.location}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
