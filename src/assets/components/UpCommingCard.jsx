
// import basic from "../../../assets/homePage/group.png";
// import icon1 from "../../../assets/icons/Icon1.png"
// import icon2 from "../../../assets/icons/Icon2.png"

function UpComingCard(props) {
  return (
    <>
        <div className="w-8/8 xl:w-9/12 flex justify-center items-center">
          <div className="sm:w-8/8 aspect-[5.00] lg:w-8/12 xl:w-9/12 border border-[#C7C7C7] rounded flex flex-row justify-between items-center">
            <div className="sm:w-3/8 lg:w-3/12 h-full  flex items-center justify-center">
              <div
                className="w-11/12 bg-amber-200 h-[90%] rounded-lg bg-cover bg-center "
                //style={{ backgroundImage: `url(${basic})` }}
              ></div>
            </div>
            <div className="w-9/12 h-full">
              <div className="w-6/9 h-full">
                <div className="w-5/6 h-full ml-3 flex flex-col justify-center gap-2">
                  <div className="text-[18px] font-light">
                    {props.eventTitle || "Music Concert Extravaganza"}
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <div className="w-4 h-4 bg-cover bg-no-repeat bg-center" 
                    //style={{ backgroundImage: `url(${icon1})` }}
                    ></div>
                    <div className="text-[16px] text-secondary">
                      {props.eventDateTime || "Dec 15, 2023 | 7:00 PM"}
                    </div>
                  </div>

                  <div className="flex flex-row gap-3 items-center">
                    <div className="w-4 h-4 bg-contains bg-no-repeat bg-center" 
                    //style={{ backgroundImage: `url(${icon2})` }}
                    >

                    </div>
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
