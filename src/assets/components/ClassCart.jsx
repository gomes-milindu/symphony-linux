import React from "react";
import { Calendar, Clock, MapPin, Music2 } from "lucide-react";

export default function ClassCart({ image, grade, date, time, location }) {
  return (
  
    <div className="w-full bg-white rounded-2xl shadow-md overflow-hidden">
      
      {/* Image area */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={grade}
          className="w-full h-full object-cover"
        />
        {/* Music icon badge */}
        <div className="absolute bottom-3 right-3 bg-yellow-400 rounded-full p-2 shadow-md">
          <Music2 className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col gap-3">
        
        {/* Grade title */}
        <h3 className="text-base font-semibold text-gray-900">{grade}</h3>

        {/* Details */}
        <div className="flex flex-col gap-1 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-yellow-500 shrink-0" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-yellow-500 shrink-0" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-yellow-500 shrink-0" />
            <span>{location}</span>
          </div>
        </div>

        {/* Button */}
        <button className="mt-2 w-full py-2 bg-yellow-400 hover:bg-yellow-500 transition-colors text-white font-medium rounded-lg text-sm">
          View Details
        </button>
      </div>
    </div>
  );
}