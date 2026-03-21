import { useState, useRef } from "react";
import StaffComponent from "../components/StaffComponent";
import { StaffData  } from "../data/StaffData";

export default function StaffMobileCarousel({ onShowAll }) {





  const [active, setActive] = useState(0);
  const startX = useRef(0);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 50 && active < StaffData.length - 1) {
      setActive(active + 1);
    } else if (diff < -50 && active > 0) {
      setActive(active - 1);
    }
  };

  return (
    <div className="w-full flex flex-col items-center overflow-hidden">

      {/* SLIDER */}
      <div
        className="w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {StaffData.map((staff, index) => (
            <div key={staff.id} className="w-full flex justify-center shrink-0">
              <StaffComponent staff={staff} />
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="flex gap-2 mt-5">
        {StaffData.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300
              ${index === active ? "bg-[#919191]" : "bg-[#D9D9D9]"}
            `}
          />
        ))}
      </div>

      {/* BUTTON */}
      <button
        className="w-[161px] h-[37px] border-[0.5px] border-[#454545] text-[#454545] rounded-[4.65px] mt-8 text-[16px] font-medium"
        onClick={onShowAll}
      >
        All Staff Members
      </button>
    </div>
  );
}