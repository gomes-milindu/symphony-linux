import { FaRegCalendar } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

function UpComingMobile(props) {
    return (
        <>
            {/* <section className="w-4/4 h-[600px] flex flex-col justify-center items-center"> */}

            {/* <Topic title="Up Coming Events" subtitle="Join us for exciting concerts, workshops, and recitals. Experience the joy of live music." /> */}

            <div className="w-[300px] h-fit bg-white border border-[#C87C03] rounded-xl p-4 flex flex-col justify-center items-center gap-4 shadow-sm">
                {/* Image Placeholder - Reusing Guitar image for now as placeholder or dynamic if passed */}
                <div className="w-full h-[200px] bg-gray-200 rounded-lg overflow-hidden">
                    <img
                        src="src/assets/joinOurClass/Guitar.jpg"
                        alt="Event"
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.onerror = null; e.target.parentNode.style.backgroundColor = '#d1d5db' }}
                    />
                </div>

                <div className="w-full flex flex-col gap-3">
                    <div className="flex flex-col gap-3">
                        <h3 className="w-full text-lg font-bold text-black leading-tight">{props.title}</h3>
                        <div className="w-full flex flex-col gap-1.5">
                            <div className="flex flex-row items-center gap-2">
                                <FaRegCalendar className="text-[#FDC700] w-4 h-4" />
                                <span className="text-sm text-[#454545]">{props.date || "December 15, 2025 at 6:00 PM"}</span>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <GrLocation className="text-[#FDC700] w-4 h-4" />
                                <span className="text-sm text-[#454545]">{props.venue}</span>
                            </div>
                        </div>
                    </div>

                    <button className="w-full py-2 bg-[#FDC700] text-black font-medium text-base rounded-lg hover:bg-yellow-500 transition-colors">
                        Read More
                    </button>
                </div>
            </div>
            {/* </section> */}
        </>
    )
}

export default UpComingMobile