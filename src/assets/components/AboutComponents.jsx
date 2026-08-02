import React from "react";
import { AboutPage } from "../data/AssetsLinks.js";
import { Users, Award } from "lucide-react";

export default function AboutComponents({}) {
  const stats = [
    {
      icon: <Users size={22} color="#241C15" strokeWidth={1.75} />,
      value: "2,500+",
      label: "Students Enrolled",
    },
    {
      icon: <Award size={22} color="#241C15" strokeWidth={1.75} />,
      value: "20+",
      label: "Number of Classes",
    },
  ];

  return (
    <div className="w-full h-[150px] relative -top-15 flex flex-row justify-evenly items-center md:hidden">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="w-35 h-35 flex flex-col items-center justify-center"
        >
          <div className="w-12 h-12 items-center justify-center flex rounded-full bg-[#FFC107]">
             {stat.icon}
            
          </div>
          <div className="mt-3 text-[#FFC107] text-2xl">{stat.value}</div>
          <div className="text-gray-600 text-[16px] -tracking-normal">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

