import React from "react";
import EventDetailItem from "./EventDetailItem";

export default function EventMobileCard({
  pic,
  category = "Event",
  eventname,
  discription,
  details,
}) {
  return (
    <div
      className="
        group
        bg-white
        rounded-[12px]
        border border-[#454545]/30
        p-3
        overflow-hidden
        transition-all
        duration-300
        hover:border-[#FFC107]
        hover:shadow-lg
      "
    >
      {/* Image */}
      <div className="relative overflow-hidden w-full h-[200px] rounded-[10px]">
        <img
          src={pic}
          alt={eventname}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white text-[12px] font-secondary px-3 py-1 rounded-full border border-white/40">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="mt-4 px-1">

        {/* Title */}
        <h3 className="font-secondary text-[1.125rem] font-bold text-[#454545]">
          {eventname}
        </h3>

        {/* Description */}
        <p className="mt-4 text-[0.9rem] leading-7 font-secondary text-[#454545]">
          {discription}
        </p>

        {/* Details */}
        <div className="mt-5 flex flex-col gap-3">
          {details?.map((item, index) => (
            <EventDetailItem key={index} {...item} />
          ))}
        </div>

        {/* Button */}
        <button
          className="
            w-full
            mt-6
            h-[40px]
            bg-[#FFF4D2]
            text-[#2B2B2B]
            text-[0.875rem]
            font-medium
            rounded-lg
            hover:bg-[#FDC700]
            transition-colors
          "
        >
          Register Now
        </button>

      </div>
    </div>
  );
}