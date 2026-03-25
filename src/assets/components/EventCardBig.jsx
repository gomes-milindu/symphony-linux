import React from "react";
import EventDetailItem from "./EventDetailItem";


export default function EventCardBig({ event }) {
  return (
    <div
      className="
        group
        md:w-7/8 xl:w-12/11
        bg-white
        border border-[#454545]/50
        rounded-[12px]
        p-3
        transition-all duration-300 ease-in-out
        hover:border-[#FFC107]
        hover:shadow-lg
      "
    >
      {/* IMAGE */}
      <img
        src={event.pic}
        alt=""
        className="
          w-full
          md:h-[275px]
          xl:max-h-[200px]
          object-cover
          rounded-[10px]
        "
      />

      {/* TITLE */}
      <h2 className="mt-4 md:text-[1.25rem] xl:text-[1.15rem] text-[#454545] font-semibold font-secondary">
        {event.eventname}
      </h2>

      {/* DESCRIPTION (DESKTOP ONLY) */}
      <p className="mt-3 text-[0.9rem] text-[#454545] hidden xl:flex font-secondary">
        {event.discription}
      </p>

      {/* DETAILS */}
      <div className="mt-6 hidden xl:flex flex-col gap-1 font-secondary">
        {event.details.map((item, i) => (
          <EventDetailItem key={i} {...item} />
        ))}
      </div>

      {/* BUTTON */}
      <button
        className="
          w-full h-[40px]
          hidden xl:flex
          items-center justify-center
          mt-5
          rounded-md
          font-medium
          border border-[#454545]
          text-[#454545]
          transition-all duration-300 ease-in-out
        
          
          group-hover:bg-[#FDC700]
          group-hover:text-[#000000]
          group-hover:border-transparent
        "
      >
        <span className="font-medium text-[0.9rem]">Read More</span>
      </button>

      {/* MOBILE DESCRIPTION */}
      <p className="md:flex xl:hidden text-[1.125rem] text-[#454545] mt-4">
        Master both acoustic and electric guitar with our comprehensive
        curriculum covering everything from basic chords to advanced techniques.
      </p>
    </div>
  );
}
