import React from "react";
import { Clock, Users, Star, CheckSquare } from "lucide-react";

export default function ClassCard({
  image,
  category,
  title,
  level,
  duration,
  levels,
  type,
  description,
  features,
}) {
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
    <div className="class-card group bg-white rounded-[16px] border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
      {/* Image Section */}
      <div className="relative overflow-hidden h-[240px] p-2 pb-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-[12px] transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category Badge */}
        <div className="absolute top-6 right-6 bg-black/20 backdrop-blur-sm text-white text-[13px] font-secondary px-4 py-1 rounded-full border border-white/50">
          {category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title + Level Row */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-secondary text-[22px] font-bold text-[#2B2B2B] leading-tight">
            {title}
          </h3>
          <span
            className={`text-[16px] font-medium font-secondary px-4 py-1 rounded-full border bg-white ${levelColor()}`}
          >
            {level}
          </span>
        </div>

        {/* Meta Info Row */}
        <div className="flex justify-between items-start gap-2 mb-6 flex-wrap w-full pr-2">
          <div className="flex items-start gap-2.5">
            <Clock className="w-[18px] h-[18px] text-[#F6C000] mt-[1px]" />
            <div className="flex flex-col">
              <span className="text-[12px] font-secondary text-[#6B7280] font-normal mb-0.5">
                Duration
              </span>
              <span className="text-[14px] font-secondary font-medium text-[#374151]">
                {duration}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Users className="w-[18px] h-[18px] text-[#F6C000] mt-[1px]" />
            <div className="flex flex-col">
              <span className="text-[12px] font-secondary text-[#6B7280] font-normal mb-0.5">
                Levels
              </span>
              <span className="text-[14px] font-secondary font-medium text-[#374151]">
                {levels}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Star className="w-[18px] h-[18px] text-[#F6C000] mt-[1px]" />
            <div className="flex flex-col">
              <span className="text-[12px] font-secondary text-[#6B7280] font-normal mb-0.5">
                Type
              </span>
              <span className="text-[14px] font-secondary font-medium text-[#374151]">
                {type}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-[16px] font-secondary text-[#4B5563] leading-relaxed mb-6">
          {description}
        </p>

        {/* Features List */}
        <div className="space-y-3.5">
          {features &&
            features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckSquare className="w-5 h-5 text-[#F6C000] shrink-0" />
                <span className="text-[16px] font-secondary text-[#374151]">
                  {feature}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
