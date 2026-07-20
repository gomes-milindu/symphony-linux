import React, { useState } from "react";
import { Clock, Users, Star, CheckSquare } from "lucide-react";

export default function ClassCard({
  image,
  category,
  title,
  level,
  duration,
  time,
  type,
  description,
  features,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Level badge color
  const levelColor = () => {
    switch (level) {
      case "Beginner":
        return "text-[#D99A29] border-[#E8C37D]"; // Yellow/gold text with a slightly lighter gold border
      case "Intermediate":
        return "text-blue-600 border-blue-300";
      case "Advanced":
        return "text-purple-600 border-purple-300";
      default:
        return "text-[#D99A29] border-[#E8C37D]";
    }
  };

  return (
    <div 
      className="class-card group bg-white rounded-[12px] border border-[#454545]/30 p-3 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#FFC107] cursor-pointer md:w-7/8 xl:w-12/11"
      onClick={() => window.innerWidth < 768 && setIsExpanded(!isExpanded)}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden w-full h-[200px] md:h-[275px] xl:h-[200px] rounded-[10px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white text-[12px] font-secondary px-3 py-1 rounded-full border border-white/40 shadow-sm">
          {category}
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-4 px-1">
        {/* Title + Level Row */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-secondary text-[1.125rem] md:text-[1.25rem] xl:text-[1.15rem] font-bold text-[#454545] leading-tight">
            {title}
          </h3>
          <span
            className={`text-[13px] font-medium font-secondary px-3 py-0.5 rounded-full border bg-white ${levelColor()}`}
          >
            {level}
          </span>
        </div>

        {/* Meta Info Row */}
        <div className="flex justify-between items-start gap-2 mb-4 flex-wrap w-full">
          <div className="flex items-start gap-2">
            <Clock className="w-[16px] h-[16px] text-[#F6C000] mt-[1px]" />
            <div className="flex flex-col">
              <span className="text-[11px] font-secondary text-[#6B7280] font-normal mb-0.5">
                Duration
              </span>
              <span className="text-[13px] font-secondary font-medium text-[#454545]">
                {duration}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Users className="w-[16px] h-[16px] text-[#F6C000] mt-[1px]" />
            <div className="flex flex-col">
              <span className="text-[11px] font-secondary text-[#6B7280] font-normal mb-0.5">
                Time
              </span>
              <span className="text-[13px] font-secondary font-medium text-[#454545]">
                {time}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Star className="w-[16px] h-[16px] text-[#F6C000] mt-[1px]" />
            <div className="flex flex-col">
              <span className="text-[11px] font-secondary text-[#6B7280] font-normal mb-0.5">
                Type
              </span>
              <span className="text-[13px] font-secondary font-medium text-[#454545]">
                {type}
              </span>
            </div>
          </div>
        </div>

        {/* Expandable Content (Mobile Accordion) / Always visible (Desktop) */}
        <div className={`${isExpanded ? "block" : "hidden"} md:block transition-all duration-300`}>
          {/* Description */}
          <p className="text-[0.9rem] font-secondary text-[#454545] leading-relaxed mb-5 mt-2 md:mt-0">
            {description}
          </p>

          {/* Features List */}
          <div className="space-y-2 pb-1">
            {features &&
              features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckSquare className="w-4 h-4 text-[#F6C000] shrink-0 mt-[3px]" />
                  <span className="text-[0.9rem] font-secondary text-[#454545]">
                    {feature}
                  </span>
                </div>
              ))}
          </div>

          {/* Enroll Now Button (Mobile Only) */}
          <button className="w-full mt-5 h-[40px] bg-[#FFF4D2] text-[#2B2B2B] text-[0.875rem] font-medium rounded-lg md:hidden hover:bg-[#FDC700] transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
