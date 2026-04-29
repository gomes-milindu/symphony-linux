import React from "react";
import { Calendar, Clock, MapPin, Music2 } from "lucide-react";

export default function ClassCart({ image, grade, date, time, location }) {
  return (
    <div className="flex items-center justify-center">
      

      <div
        className="card-font card-shadow bg-white rounded-2xl overflow-hidden w-72 cursor-pointer"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt="Guitar class"
            className="w-full h-full object-cover"
          />
          <div className="image-overlay absolute inset-0" />

          {/* Badge */}
          <div className="absolute bottom-3 right-3">
     
            <img
            src="https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/guitar.png"
            alt="Guitar class"
            className="w-10 h-10  object-contain"
          />
          </div>
          
        </div>

        {/* Content */}
        <div className="px-5 pt-5 pb-4">
          {/* Title */}
          <h2 className="title-font text-slate-800 text-xl font-bold leading-tight mb-4">
            {grade}
          </h2>

          {/* Meta */}
          <div className="space-y-2.5 mb-5">
            <div className="flex items-center gap-2.5 text-amber-500">
              <Calendar className="w-4 h-4" />
              <span className="text-slate-600 text-sm font-medium">{date}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="text-amber-500"><Clock className="w-4 h-4" /></span>
              <span className="text-slate-600 text-sm font-medium">{time}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="text-amber-500"><MapPin className="w-4 h-4" /></span>
              <span className="text-slate-600 text-sm font-medium">{location}</span>
            </div>
          </div>

          {/* <hr className="divider mb-4" /> */}

          {/* Button */}
          <button className="w-full py-2.5 rounded-lg border border-slate-400 text-slate-700 text-sm font-semibold tracking-wide hover:border-amber-400 hover:text-amber-500 hover:bg-amber-50 active:scale-95">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}