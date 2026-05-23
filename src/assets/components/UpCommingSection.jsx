import Topic from "../components/Topic";
import UpComingCard from "../components/UpCommingCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LandingPage } from "../data/AssetsLinks.js";

import UpComingMobile from "./UpCommingMobile";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Autoplay, Pagination } from "swiper/modules";


export default function UpComingSection() {
  const eventDetails = [
    {
      id: 1,
      image:
        LandingPage.BathiGee,
      title: "Cultural Event - Bodu Bathi Gee",
      dateTime: "May 2026",
      location: "Symphony Hall",
    },

    {
      id: 2,
      image:
        LandingPage.Event2,
      title: "Annual Western Music Concert",
      dateTime: "May 10, 2026 | 8:00 PM",
      location: "Symphony Hall",
    },
    
    
  ];

  const eventDetailsMobile = [
    {
      id: 1,
      image:
        LandingPage.BathiGee,
      title: "Cultural Event - Bodu Bathi Gee",
      dateTime: "May 2026",
      location: "Symphony Hall",
    },

    {
      id: 2,
      image:
        LandingPage.Event2,
      title: "Annual Western Music Concert",
      dateTime: "May 10, 2026 | 8:00 PM",
      location: "Symphony Hall",
    },
    {
      id: 3,
      image:
        LandingPage.BathiGee,
      title: "Cultural Event - Bodu Bathi Gee",
      dateTime: "May 2026",
      location: "Symphony Hall",
    },

    {
      id: 4,
      image:
        LandingPage.Event2,
      title: "Annual Western Music Concert",
      dateTime: "May 10, 2026 | 8:00 PM",
      location: "Symphony Hall",
    },

    {
      id: 5,
      image:
        LandingPage.BathiGee,
      title: "Cultural Event - Bodu Bathi Gee",
      dateTime: "May 2026",
      location: "Symphony Hall",
    },
    {
      id: 6,
      image:
        LandingPage.Event2,
      title: "Annual Western Music Concert",
      dateTime: "May 10, 2026 | 8:00 PM",
      location: "Symphony Hall",
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
              {eventDetailsMobile.map((event, index) => (
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
