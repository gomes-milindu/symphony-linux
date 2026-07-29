import React from "react";
import { Users, Music } from "lucide-react";
export default function AboutComponents({  }) {

    const stats = [
    {
      icon: "https://i.ibb.co/ymx4QC0R/Frame-41.png",
      value: "2,500+",
      label: "Students Enrolled",
    },
    {
      icon: "https://i.ibb.co/gZY2X1Cj/Frame-95.webp",
      value: "20+",
      label: "Number of Classes",
    },
  ];
  return (

    <>
    {/*}
    <div className="w-full h-[150px] relative -top-10 flex flex-row  justify-evenly items-center">
        <div className="w-35 h-35 flex flex-col items-center justify-center">
            <div className="w-15 h-15 items-center justify-center flex">
                <img src="https://i.ibb.co/ymx4QC0R/Frame-41.png" alt="Left-Curve" className="w-full h-full object-contain"/>
                </div>
            <div className="mt-3">2500+</div>
            <div className="">Student Enrolled</div>

        </div>
        <div className="w-35 h-35 flex flex-col items-center justify-center">
            <div className="w-15 h-15 items-center justify-center flex">
                <img src="https://i.ibb.co/gZY2X1Cj/Frame-95.webp" alt="Left-Curve" className="w-full h-full object-contain"/>
            </div>
            <div className="mt-3">2500+</div>
            <div className="">Student Enrolled</div>

        </div>
    </div>*/}

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
          <div className="mt-3 text-[#FFC107] text-2xl">
            {stat.value}
          </div>
          <div className="text-[#454545] -tracking-normal font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
    </>
  );

    
  
}