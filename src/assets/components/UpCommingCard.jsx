// import basic from "../../../assets/homePage/group.png";
// import icon1 from "../../../assets/icons/Icon1.png"
// import icon2 from "../../../assets/icons/Icon2.png"

import { Calendar, MapPin } from "lucide-react";

// function UpComingCard(props) {
//   return (
//     <>
//       <div className="w-8/8 xl:w-9/12 flex justify-center items-center">
//         <div className="sm:w-8/8 aspect-[5.00] lg:w-8/12 xl:w-9/12 border border-[#C7C7C7] rounded flex flex-row justify-between items-center">
//           <div className=" sm:w-4/8 lg:w-4/12 h-full flex items-center justify-center">
//             {/* <div className="w-[95%] bg-amber-200 h-[90%] rounded-lg bg-contain bg-center">
//               <img src={props.eventImage} className="w-[95%] h-[90%] bg-no-repeat" />
//             </div> */}

//              <img src={props.eventImage} className="w-[95%] h-[90%] bg-no-repeat rounded-sm" />
//           </div>
//           <div className="w-8/12 h-full ">
//             <div className="w-6/9 h-full">
//               <div className="w-5/6 h-full flex flex-col ml-3 justify-center gap-2">
//                 <div className="text-[18px] font-light">
//                   {props.eventTitle || "Music Concert Extravaganza"}
//                 </div>
//                 <div className="flex flex-row gap-3 items-center">
//                   <div
//                     className="w-4 h-4 bg-cover bg-no-repeat bg-center"
//                     // style={{ backgroundImage: `url(${icon1})` }}
//                   ></div>
//                   <div className="text-[16px] text-secondary">
//                     {props.eventDateTime || "Dec 15, 2023 | 7:00 PM"}
//                   </div>
//                 </div>

//                 <div className="flex flex-row gap-3 items-center">
//                   <div className="w-4 h-4 bg-contains bg-no-repeat bg-center"></div>
//                   <div className="text-[16px] text-secondary">
//                     {props.eventLocation || "Symphony Hall, Downtown"}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className=""></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default UpComingCard;


function UpComingCard(props) {
  return (
    <div className="w-full flex justify-center items-center py-4 px-4 sm:px-6 lg:px-8">
      {/* Main Card Container */}
      <div className="w-full max-w-4xl bg-white border border-[#C7C7C7] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Mobile Layout (< 640px) - Stacked Vertical */}
        <div className="sm:hidden flex flex-col">
          {/* Image Section - Mobile */}
          <div className="w-full h-48 bg-gray-200 overflow-hidden">
            <img
              src={props.eventImage}
              alt={props.eventTitle}
              className="w-full h-full object-cover"
            />
          </div>
 
          {/* Content Section - Mobile */}
          <div className="p-4 flex flex-col gap-3">
            <h3 className="text-base font-light text-gray-900 line-clamp-2">
              {props.eventTitle}
            </h3>
 
            {/* DateTime - Mobile */}
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <p className="text-sm text-gray-600">{props.eventDateTime}</p>
            </div>
 
            {/* Location - Mobile */}
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <p className="text-sm text-gray-600">{props.eventLocation}</p>
            </div>
 
            {/* Button - Mobile */}
            <button className="mt-2 w-full bg-white border border-gray-300 py-2 px-4 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Read More
            </button>
          </div>
        </div>
 
        {/* Tablet Layout (640px - 1024px) - Side by Side with Adjusted Spacing */}
        <div className="hidden sm:flex md:hidden flex-row h-auto">
          {/* Image Section - Tablet */}
          <div className="w-5/12 h-64 bg-gray-200 overflow-hidden flex-shrink-0">
            <img
              src={props.eventImage}
              alt={props.eventTitle}
              className="w-full h-full object-cover"
            />
          </div>
 
          {/* Content Section - Tablet */}
          <div className="w-7/12 p-6 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-light text-gray-900 line-clamp-2">
                {props.eventTitle}
              </h3>
 
              {/* DateTime - Tablet */}
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <p className="text-sm text-gray-600">{props.eventDateTime}</p>
              </div>
 
              {/* Location - Tablet */}
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <p className="text-sm text-gray-600">{props.eventLocation}</p>
              </div>
            </div>
 
            {/* Button - Tablet */}
            <button className="w-fit bg-white border border-gray-300 py-2 px-6 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Read More
            </button>
          </div>
        </div>
 
        {/* Desktop Layout (>= 1024px) - Side by Side with Optimal Spacing */}
        <div className="hidden md:flex flex-row h-auto relative">
          {/* Image Section - Desktop */}
          <div className="w-1/3 h-48 bg-gray-200 overflow-hidden flex-shrink-0">
            <img
              src={props.eventImage}
              alt={props.eventTitle}
              className="w-full h-full object-cover"
            />
          </div>
 
          {/* Content Section - Desktop */}
          <div className="w-2/3 p-5 flex flex-col justify-center gap-4">
            <div className="flex flex-col gap-3 pr-32">
              <h3 className="text-lg font-light text-gray-900 line-clamp-2">
                {props.eventTitle}
              </h3>
 
              {/* DateTime - Desktop */}
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <p className="text-base text-gray-600">{props.eventDateTime}</p>
              </div>
 
              {/* Location - Desktop */}
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <p className="text-base text-gray-600">{props.eventLocation}</p>
              </div>
            </div>
          </div>
 
          {/* Button - Desktop (Center Right Corner) */}
          <button className="absolute right-6 top-1/2 -translate-y-1/2 bg-white border border-gray-300 py-2 px-6 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-amber-400 transition-all duration-200">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
 
export default UpComingCard;
