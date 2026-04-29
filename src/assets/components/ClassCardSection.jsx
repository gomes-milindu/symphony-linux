import React, { useState, useMemo } from "react";
import ClassCard from "./ClassCard";
import { ClassesPageData } from "../data/ClassesPageData";

export default function ClassCardSection() {
  const [activeFilter, setActiveFilter] = useState("All Classes");
  const [selectedClass, setSelectedClass] = useState("");

  // Get unique categories for filter
  const categories = useMemo(() => {
    const cats = [...new Set(ClassesPageData.map((item) => item.category))];
    return ["All Classes", ...cats];
  }, []);

  // Filter classes based on active filter and dropdown selection
  const filteredClasses = useMemo(() => {
    let filtered = ClassesPageData;

    if (activeFilter !== "All Classes") {
      filtered = filtered.filter((item) => item.category === activeFilter);
    }

    if (selectedClass) {
      filtered = filtered.filter((item) => item.title === selectedClass);
    }

    return filtered;
  }, [activeFilter, selectedClass]);

  // Get unique class titles for dropdown
  const classTitles = useMemo(() => {
    const currentData =
      activeFilter !== "All Classes"
        ? ClassesPageData.filter((item) => item.category === activeFilter)
        : ClassesPageData;
    return [...new Set(currentData.map((item) => item.title))];
  }, [activeFilter]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setSelectedClass("");
  };

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-14">
          {/* Category Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterClick(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-secondary font-semibold transition-all duration-300 cursor-pointer border ${
                  activeFilter === cat
                    ? "bg-slate-800 text-white border-slate-800 shadow-md"
                    : "bg-white text-slate-600 border-slate-300 hover:border-amber-400 hover:text-amber-600 hover:bg-amber-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Dropdown Select */}
          <div className="relative">
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="appearance-none bg-white border border-slate-300 text-slate-600 text-sm font-secondary font-medium rounded-full px-5 py-2.5 pr-10 cursor-pointer transition-all duration-300 hover:border-amber-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 min-w-[180px]"
            >
              <option value="">Select Class</option>
              {classTitles.map((title) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
            {/* Dropdown Arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <svg
                className="w-4 h-4 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredClasses.map((item) => (
            <ClassCard
              key={item.id}
              image={item.image}
              category={item.category}
              title={item.title}
              level={item.level}
              duration={item.duration}
              levels={item.levels}
              type={item.type}
              description={item.description}
              features={item.features}
            />
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
              onClick={() => {
                setActiveFilter("All Classes");
                setSelectedClass("");
              }}
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
