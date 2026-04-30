import React, { useState, useMemo, useRef, useEffect } from "react";
import ClassCard from "./ClassCard";
import { ClassesPageData } from "../data/ClassesPageData";

export default function ClassCardSection() {
  const [selectedClass, setSelectedClass] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter classes based on dropdown selection
  const filteredClasses = useMemo(() => {
    let filtered = ClassesPageData;

    if (selectedClass) {
      filtered = filtered.filter((item) => item.title === selectedClass);
    }

    return filtered;
  }, [selectedClass]);

  // Get unique class titles for dropdown
  const classTitles = useMemo(() => {
    return [...new Set(ClassesPageData.map((item) => item.title))];
  }, []);

  return (
    <section className="relative w-full pb-12 pt-4 sm:pb-16 md:pb-20 bg-transparent z-10 -mt-[70px] sm:-mt-[80px] md:-mt-[130px] xl:-mt-[200px] 2xl:-mt-[240px]">
      <div className="w-full xl:w-8/12 mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        {/* Filter Bar */}
        <div className="flex flex-row items-center justify-between sm:justify-center gap-4 sm:gap-8 mb-8 sm:mb-14 w-full xl:px-[8%]">
          {/* All Classes Tab */}
          <button
            onClick={() => setSelectedClass("")}
            className={`whitespace-nowrap pb-1 text-[15px] sm:text-[16px] font-secondary font-semibold transition-all duration-300 cursor-pointer border-b-[1.5px] ${
              selectedClass === ""
                ? "text-[#2B2B2B] border-[#2B2B2B]"
                : "text-gray-500 border-transparent hover:text-[#2B2B2B]"
            }`}
          >
            All Classes
          </button>

          {/* Custom Dropdown Select */}
          <div className="relative flex-1 sm:flex-none sm:min-w-[260px]" ref={dropdownRef}>
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center justify-between bg-white border border-gray-300 rounded-[6px] px-3 sm:px-4 py-2 cursor-pointer transition-all duration-300 w-full ${
                isDropdownOpen ? "border-gray-400 shadow-sm" : "hover:border-gray-400"
              }`}
            >
              <span className={`text-[15px] font-secondary select-none ${
                selectedClass === "" ? "text-[#9CA3AF]" : "text-[#2B2B2B] font-medium"
              }`}>
                {selectedClass === "" ? "Select Class" : selectedClass}
              </span>
              <svg
                className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-[calc(100%+4px)] left-0 w-full bg-white border border-gray-200 rounded-[6px] shadow-lg z-50 overflow-hidden py-1">
                {classTitles.map((title) => (
                  <div
                    key={title}
                    onClick={() => {
                      setSelectedClass(title);
                      setIsDropdownOpen(false);
                    }}
                    className={`px-4 py-2.5 text-[15px] font-secondary cursor-pointer transition-colors ${
                      selectedClass === title
                        ? "bg-[#FFF4D2] text-[#2B2B2B]"
                        : "text-[#4B5563] hover:bg-[#FFF4D2] hover:text-[#2B2B2B]"
                    }`}
                  >
                    {title}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Cards Grid */}
        {/* Mobile/Tablet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:hidden gap-6 lg:gap-8">
          {filteredClasses.map((item) => (
            <ClassCard
              key={item.id}
              {...item}
            />
          ))}
        </div>

        {/* Desktop Grid (Matches EventSection exactly) */}
        <div className="hidden xl:grid xl:grid-cols-12 gap-y-15">
          {filteredClasses.reduce((rows, item, index) => {
            if (index % 2 === 0) {
              rows.push(filteredClasses.slice(index, index + 2));
            }
            return rows;
          }, []).map((row, rowIndex) => (
            <div key={rowIndex} className="col-span-12 grid grid-cols-12 gap-15">
              <div className="col-span-1" />

              {row.map((item) => (
                <div key={item.id} className="col-span-5">
                  <ClassCard {...item} />
                </div>
              ))}

              <div className="col-span-1" />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredClasses.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-slate-500 font-secondary text-base font-medium">
              No classes found for this filter.
            </p>
            <button
              onClick={() => setSelectedClass("")}
              className="mt-3 text-amber-500 font-secondary text-sm font-semibold hover:text-amber-600 transition-colors cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
