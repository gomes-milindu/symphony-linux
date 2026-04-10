
import Topic from "../components/Topic";
import UpComingCard from "../components/UpCommingCard";

import UpComingMobile from "./UpCommingMobile";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Autoplay } from "swiper/modules";

export default function UpComingSection() {
  const eventDetails = [
    {
      id:1,
      image: "https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/pexels-audience.jpg",
      title: "Music Concert Extravaganza",
      dateTime: "Dec 15, 2023 | 7:00 PM",
      location: "Symphony Hall, Downtown",
    },

    {
      id:2,
      image: "https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/j.jpg",
      title: "Jazz Night Live",
      dateTime: "Jan 10, 2024 | 8:00 PM",
      location: "Blue Note Club",
    },
    {
      id:3,
      image:"https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/pexels-mobile-phone.jpg",
      title: "Classical Evening",
      dateTime: "Feb 20, 2024 | 6:30 PM",
      location: "Grand Opera House",
    },
  ];

  return (
    <>
      <section className="w-full h-225 flex flex-col justify-center items-center">
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


          <div className="hidden lg:inline-flex w-14/12 flex flex-col justify-center items-center mt-15 gap-8">
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
        </div>
      </section>
    </>
  );
}
