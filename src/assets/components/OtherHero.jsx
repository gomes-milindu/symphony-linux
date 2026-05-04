import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";

import { IoClose } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";


function OtherHero(props) {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { name: "Home", path: "/" },
    { name: "Classes", path: "/classes" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/aboutus" },
    { name: "Contact Us", path: "/contactus" },
  ];
  return (
    <>
      {/* ===== Mobile hero ===== */}
      <div
        className="block sm:hidden w-full h-[55vh] bg-cover bg-bottom bg-no-repeat relative"
        style={{ backgroundImage: `url(${props.mobileImg})` }}
      >
        {/* top bar */}
        <div className="flex justify-end items-center h-12 text-3xl p-5">
          <button className="text-white" onClick={() => setOpen(true)}>
            <HiBars3 />
          </button>
        </div>

        {/* title */}
        <div className="flex flex-col justify-center items-center">
          <p className="text-[54px] font-primary text-white mt-5">
            {props.title}
          </p>
          <p className="text-[16px] text-white text-center p-5">
            {props.subtitle}
          </p>
        </div>
      </div>

      {/* ===== Overlay Menu ===== */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* dark overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* menu card */}
          <div
            className="
              relative w-[88%] max-w-sm
              bg-[#f3efe6]
              rounded-2xl
              shadow-xl
              p-6
            "
          >
            {/* header */}
            <div className="text-center mb-4">
              <p className="text-xl font-semibold text-orange-600">Symphony</p>
              <p className="text-sm text-gray-600">Music Institute</p>
            </div>

            {/* close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-2xl text-gray-700 hover:scale-110 transition"
            >
              <IoClose />
            </button>

            {/* menu list */}
            <div className="divide-y">
              {menu.map((item, i) => {
                const active = location.pathname === item.path;

                return (
                  <button
                    key={i}
                    onClick={() => {
                      navigate(item.path);
                      setOpen(false);
                    }}
                    className={`
                        w-full py-4 text-lg rounded-md transition
                        hover:bg-orange-50 hover:text-orange-600 hover:scale-[1.02]
                        active:scale-[0.98]
                        ${
                          active
                            ? "text-orange-600 font-semibold"
                            : "text-gray-900"
                        }
                      `}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Tablet hero */}
      <div
        className="hidden sm:inline-flex xl:hidden w-full aspect-[1.706] bg-contain bg-no-repeat justify-center items-start"
        style={{
          backgroundImage: `url(${props.tabletImg})`,
          backgroundSize: "100% auto",
        }}
      >
        <div className="flex flex-col gap-5 justify-center items-center">
          <p className=" text-[7vw] font-primary text-white pt-20">
            {props.title}
          </p>
          <p className="text-[2vw] text-white">{props.subtitle}</p>
        </div>
      </div>

      {/* Desktop hero */}
      <div
        className="hidden xl:inline-flex w-full aspect-[1440/850] bg-contain bg-no-repeat justify-center items-start"
        style={{
          backgroundImage: `url(${props.desktopImg})`,
          backgroundSize: "100% auto",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <p className="text-[80px] font-primary text-white mt-20">
            {props.title}
          </p>
          <p className="text-[16px] text-white">{props.subtitle}</p>
        </div>
      </div>
    </>
  );
}

export default OtherHero;
