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
        return "bg-amber-50 text-amber-600 border-amber-300";
      case "Intermediate":
        return "bg-blue-50 text-blue-600 border-blue-300";
      case "Advanced":
        return "bg-purple-50 text-purple-600 border-purple-300";
      default:
        return "bg-amber-50 text-amber-600 border-amber-300";
    }
  };

  return (
    <div className="class-card group bg-white rounded-2xl border-2 border-dashed border-amber-400 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-100/60 hover:-translate-y-1 cursor-pointer">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-semibold font-secondary px-3 py-1.5 rounded-full shadow-sm border border-white/50">
          {category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Title + Level Row */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-secondary text-lg font-bold text-slate-800 leading-tight">
            {title}
          </h3>
          <span
            className={`text-xs font-semibold font-secondary px-3 py-1 rounded-full border ${levelColor()}`}
          >
            {level}
          </span>
        </div>

        {/* Meta Info Row */}
        <div className="flex items-center gap-4 mb-4 flex-wrap">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1.5 text-amber-500 mb-0.5">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-[11px] font-secondary text-slate-400 font-medium">
                Duration
              </span>
            </div>
            <span className="text-xs font-secondary font-semibold text-slate-600">
              {duration}
            </span>
          </div>

          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1.5 text-amber-500 mb-0.5">
              <Users className="w-3.5 h-3.5" />
              <span className="text-[11px] font-secondary text-slate-400 font-medium">
                Levels
              </span>
            </div>
            <span className="text-xs font-secondary font-semibold text-slate-600">
              {levels}
            </span>
          </div>

          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1.5 text-amber-500 mb-0.5">
              <Star className="w-3.5 h-3.5" />
              <span className="text-[11px] font-secondary text-slate-400 font-medium">
                Type
              </span>
            </div>
            <span className="text-xs font-secondary font-semibold text-slate-600">
              {type}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm font-secondary text-slate-500 leading-relaxed mb-4">
          {description}
        </p>

        {/* Features List */}
        <div className="space-y-2.5">
          {features &&
            features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2.5">
                <CheckSquare className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-sm font-secondary text-slate-600 font-medium">
                  {feature}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
