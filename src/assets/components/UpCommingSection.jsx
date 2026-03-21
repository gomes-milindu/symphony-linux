import Swiper from "swiper";
import Topic from "../components/Topic";
import UpComingCard from "../components/UpCommingCard";
import { SwiperSlide } from "swiper/react";



export default function UpComingSection() {
  const eventDetails = [
    {
      title: "Music Concert Extravaganza",
      dateTime: "Dec 15, 2023 | 7:00 PM",
      location: "Symphony Hall, Downtown",
    },

    {
      title: "Jazz Night Live",
      dateTime: "Jan 10, 2024 | 8:00 PM",
      location: "Blue Note Club",
    },
    {
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

          
            <div className="w-14/12 flex flex-col justify-center items-center mt-15 gap-8">
              {eventDetails.map((event, index) => (
                <UpComingCard
                  key={index}
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