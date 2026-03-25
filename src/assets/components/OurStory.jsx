import Topic from "../components/Topic";
import Button1 from "../components/Button1";

function OurStory() {
  return (
    <>
      <section className="w-full flex justify-center text-center xl:text-left items-center overflow-hidden xl:pt-9 xl:pb-9 xl:mb-8 md:p-5 p-5 xl:mt-5">
        <div className="xl:w-9/12 w-full flex flex-row xl:justify-center xl:items-center lg:ml-5  pb-20">
          <div className="w-full xl:w-6/12 xl:flex flex flex-col h-full xl:gap-[30px] justify-center items-center xl:items-start">
            <div className="w-full md:w-1/2 xl:w-6/12 flex flex-col justify-center items-center">
              <div className="flex justify-center items-center mt-5 xl:justify-start xl:items-start text-center xl:text-left w-full">
                <Topic title="Our Story" />
              </div>

              <div className="xl:hidden w-full flex justify-center items-center -mt-12 md:-mt-16 ">
                <img
                  src="https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/StorySectionImg.png"
                  alt="Our Story"
                  className="w-full object-contain max-w-[320px] md:max-w-[600px]"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-[12px] xl:block">
              <div
                className="
                    text-[0.9rem]
                    md:text-[1rem]
                    xl:text-[1rem]
                    md:px-3
                    xl:mx-0
                    xl:leading-8
                    md:leading-7
                    text-[#454545]
                    font-secondary
                    text-center
                    xl:text-left
                    xl:mb-6
                
                    
                  "
              >
                <p>
                  Founded in 2016, Symphony Music Institute was established with
                  a vision of delivering high-quality music education while
                  nurturing creativity, discipline, and artistic excellence.
                  Located in Kalutara, Sri Lanka, the institute provides
                  structured and professional training in Classical Guitar,
                  Piano, Violin, Vocal, Electronic Keyboard, Acoustic Guitar,
                  Recorder, and Theory of Music. 
                </p>
                <br />
                <div className="w-full h-4 hidden xl:flex "></div>
                <p className="hidden xl:flex">
                  Under the guidance of Dr. K. K.
                  Prasanna Sanjeewa, D. Mus. Hons. (Sri Lanka), ATCL (UK), LTCL
                  (UK), the institute has grown into a respected center for
                  musical learning, preparing students for international music
                  examinations, professional performance opportunities, and
                  advanced musical studies.
                </p>
              </div>
              <div className="">
                <Button1 buttonname="View About Us" />
              </div>
            </div>
          </div>

          <div className="w-full h-full  xl:w-6/12 hidden xl:flex object-cover ">
            <img
              src="https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/StorySectionImg.png"
              alt="Our Story"
              className="w-full object-contain max-w-full scale-125"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default OurStory;
