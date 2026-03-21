
export default function RightTopStudent() {
        return(
          <>
               <div className="md:w-[41vw] w-[92vw] aspect-[1.46] relative bg-amber-10 scale-90 sm:scale-90 md:scale-110 lg:scale-90">
                      <div className="md:w-[38vw] w-[85vw]  aspect-[2.64] bg-[#FFE999CC] absolute bottom-0 left-0 rounded-[24px] flex flex-col justify-center items-start border-primary border-2">
                         <div className=" md:w-[20vw] w-[41vw] flex justify-center items-center">
                            <div className="flex flex-col  text-[#454545]  xl:gap-[1rem] ">
                                <p className="font-semibold xl:text-[26px] lg:text-[20px] md:text-[18px] sm:text-[26px] text-[18px] ">Emily Johnson</p>
                                <div className="xl:text-[16px] lg:text-[12px] md:text-[10px] sm:text-[16px] text-[12px]  flex flex-col xl:gap-1">
                                  <p>Student ID : ST002/2020</p>
                                 <p >Instrument : Piano</p>
                                <p>Class / Level : Grade 12</p>
                                <p>Results : AAA+</p>
                                </div>
                            </div>
                          </div>  
                      </div>
                      <div  className="overflow-hidden">
                        <img 
                        src="https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/girl.png" 
                        className="md:w-[21vw] w-[48vw]  aspect-[0.74] absolute bottom-0 right-0 object-cover object-top"/>
                      </div>
                </div> 
          
          </>
        )
}