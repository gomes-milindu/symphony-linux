import React from "react";
import { AboutPage } from "../data/AssetsLinks.js";

export default function AboutComponents({}) {
  const stats = [
    {
      icon: AboutPage.StudentEnrolled,
      value: "2,500+",
      label: "Students Enrolled",
    },
    {
      icon: AboutPage.NumberOfClasses,
      value: "20+",
      label: "Number of Classes",
    },
  ];

  return (
    <div className="w-full h-[150px] relative -top-15 flex flex-row justify-evenly items-center">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="w-35 h-35 flex flex-col items-center justify-center"
        >
          <div className="w-12 h-12 items-center justify-center flex">
            <img
              src={stat.icon}
              alt={stat.label}
              className="w-full h-full object-contain"
            />
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

