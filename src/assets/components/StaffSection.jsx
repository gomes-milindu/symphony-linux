import React from 'react'
import { useState} from "react";
import StaffComponent from '../components/StaffComponent'
import Topic from "../components/Topic";
import StaffMobileCarousel from '../components/StaffMobileCarousel';
import { StaffData } from "../data/StaffData";

export default function StaffSection() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="w-full mt-30 xl:mb-20">
      {/* TITLE */}
      <div className="flex justify-center">
        <Topic
          title="Meet Our Staff"
          subtitle="Our faculty consists of professional musicians"
        />
      </div>

      {/* MOBILE CAROUSEL */}
      {!showAll && (
        <div className="md:hidden mt-10">
          <StaffMobileCarousel onShowAll={() => setShowAll(true)} />
        </div>
      )}

      {/* STAFF GRID */}
      <div
        className={`
          ${showAll ? "grid" : "hidden md:grid"}
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          lg:gap-5
          md:gap-0
          gap-0
          md:pt-[64px]
          pt-[24px]
          mx-auto
          xl:max-w-9/12
          lg:max-w-[1327.94px]
          md:max-w-[800px]
          justify-items-center
          md:px-6
          lg:px-6
          xl:px-2
        `}
      >
        {StaffData.map((staff) => (
          <StaffComponent key={staff.id} staff={staff} />
        ))}
      </div>
    </div>
  );
}