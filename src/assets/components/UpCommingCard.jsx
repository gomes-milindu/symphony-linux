// import basic from "../../../assets/homePage/group.png";
// import icon1 from "../../../assets/icons/Icon1.png"
// import icon2 from "../../../assets/icons/Icon2.png"

function UpComingCard(props) {
  return (
    <>
      <div className="w-8/8 xl:w-9/12 flex justify-center items-center">
        <div className="sm:w-8/8 aspect-[5.00] lg:w-8/12 xl:w-9/12 border border-[#C7C7C7] rounded flex flex-row justify-between items-center">
          <div className=" sm:w-4/8 lg:w-4/12 h-full flex items-center justify-center">
            {/* <div className="w-[95%] bg-amber-200 h-[90%] rounded-lg bg-contain bg-center">
              <img src={props.eventImage} className="w-[95%] h-[90%] bg-no-repeat" />
            </div> */}

             <img src={props.eventImage} className="w-[95%] h-[90%] bg-no-repeat rounded-sm" />
          </div>
          <div className="w-8/12 h-full ">
            <div className="w-6/9 h-full">
              <div className="w-5/6 h-full flex flex-col ml-3 justify-center gap-2">
                <div className="text-[18px] font-light">
                  {props.eventTitle || "Music Concert Extravaganza"}
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <div
                    className="w-4 h-4 bg-cover bg-no-repeat bg-center"
                    // style={{ backgroundImage: `url(${icon1})` }}
                  ></div>
                  <div className="text-[16px] text-secondary">
                    {props.eventDateTime || "Dec 15, 2023 | 7:00 PM"}
                  </div>
                </div>

                <div className="flex flex-row gap-3 items-center">
                  <div className="w-4 h-4 bg-contains bg-no-repeat bg-center"></div>
                  <div className="text-[16px] text-secondary">
                    {props.eventLocation || "Symphony Hall, Downtown"}
                  </div>
                </div>
              </div>
            </div>

            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpComingCard;

// import { Calendar, MapPin } from "lucide-react";

// export default function UpComingCard(props) {
//   return (
//     <div className="w-10/12 h-34 flex items-center justify-center p-6">

//       <div className="w-10/12 bg-red rounded-lg flex items-center gap-4 px-3 py-5 w-full max-w-2xl">

//         {/* Thumbnail */}
//         <div className="flex-shrink-0 w-32 h-24 rounded-lg overflow-hidden">
//           <img
//             src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=300&q=80"
//             alt="Annual Music Concert"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Info */}
//         <div className="flex-1 min-w-0">
//           <h3 className="text-slate-800 text-base font-bold leading-snug mb-1.5">
//             {props.eventTitle}
//           </h3>
//           <div className="flex flex-col gap-1">
//             <div className="flex items-center gap-1.5 text-amber-500">
//               <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
//               <span className="text-slate-500 text-sm">December 15, 2025 at 6:00 PM</span>
//             </div>
//             <div className="flex items-center gap-1.5 text-amber-500">
//               <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
//               <span className="text-slate-500 text-sm">Harmony Concert Hall</span>
//             </div>
//           </div>
//         </div>

//         {/* Button */}
//         <div className="flex-shrink-0">
//           <button className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:border-amber-400 hover:text-amber-500 hover:bg-amber-50 active:scale-95">
//             Read More
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }
