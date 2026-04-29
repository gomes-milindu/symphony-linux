import React, { useState } from "react";
import { EventsData as eventsData } from "../data/EventsData.jsx";



import EventMobileCard from "./EventMobileCard.jsx";
import EventCardSmall from "./EventCardSmall.jsx";
import EventCardBig from "./EventCardBig.jsx";

export default function EventsSection() {
  const [filter, setFilter] = useState("All Event");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [mobileBigCard, setMobileBigCard] = useState(null);

  const today = new Date();

  const filteredEvents = eventsData.filter((event) => {
    const eventDate = new Date(event.date);
    if (filter === "All Event") return true;
    if (filter === "Up coming") return eventDate >= today;
    if (filter === "Past Event") return eventDate < today;
    return true;
  });

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="w-full md:w-full xl:w-8/12 flex flex-col p-5 items-center justify-center md:p-4 xl:p-0">
        
        {/* FILTER */}
        <div className="flex justify-center items-center w-full md:w-2/6 xl:w-4/12 gap-5 md:gap-1 mb-14">
          {["All Event", "Up coming", "Past Event"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`w-5/12 text-[1rem] ${
                filter === type
                  ? "border-b border-[#454545]"
                  : "text-[#454545]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* ================= MOBILE ================= */}
        <div className="w-[95%] flex flex-col gap-10 md:hidden">
          {mobileBigCard ? (
            <>
              <button
                onClick={() => setMobileBigCard(null)}
                className="text-sm text-[#454545]"
              >
             
              </button>

              <EventMobileCard {...mobileBigCard} />
            </>
          ) : (
            filteredEvents.map((e, i) => (
              <EventCardSmall
                key={i}
                {...e}
                onClick={() => setMobileBigCard(e)}
              />
            ))
          )}
        </div>

        {/* ================= TABLET ================= */}
        <div className="hidden md:grid md:grid-cols-2 md:w-full xl:hidden gap-16">
          {filteredEvents.map((e, i) => (
            <EventCardSmall
              key={i}
              {...e}
              onClick={() => setSelectedEvent(e)}
            />
          ))}
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden xl:grid xl:grid-cols-12 gap-y-15">
          {filteredEvents.reduce((rows, event, index) => {
            if (index % 2 === 0) {
              rows.push(filteredEvents.slice(index, index + 2));
            }
            return rows;
          }, []).map((row, rowIndex) => (
            <div key={rowIndex} className="col-span-12 grid grid-cols-12 gap-15">
              <div className="col-span-1" />

              {row.map((event, i) => (
                <div key={i} className="col-span-5">
                  <EventCardBig event={event} />
                </div>
              ))}

              <div className="col-span-1" />
            </div>
          ))}
        </div>

        {/* ================= TABLET POPUP ================= */}
        {selectedEvent && (
          <div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            onClick={() => setSelectedEvent(null)}
          >
            <div
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute -top-4 -right-4 bg-white rounded-full px-3 py-1 text-lg"
              >
                ✕
              </button>

              <EventCardBig event={selectedEvent} />
            </div>
          </div>
        )}
      </div>
      
    </section>
  );
}
