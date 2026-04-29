import React from "react";

export default function EventCardSmall({
  pic,
  eventname,
  discription,
  details,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white border border-[#454545]/50 rounded-[12px] p-3"
    >
      <img
        src={pic}
        className="w-full h-[200px] object-cover rounded-xl"
        alt=""
      />

      <div className="mt-4 flex flex-col gap-3">
        <h3 className="text-[1.125rem] font-semibold text-[#454545]">
          {eventname}
        </h3>

        <p className="text-[0.875rem] text-[#454545]">
          {discription}
        </p>
      </div>
    </div>
  );
}
