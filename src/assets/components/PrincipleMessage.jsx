import Topic from "../components/Topic";
import { AboutPage } from "../data/AssetsLinks.js";

export default function PrinciplaMessage() {
  return (
    <> 
    <div className="w-full mt-15">
            <div className="flex justify-center items-start xl:mb-10">
                <Topic
                    title="Principle’s Message"
                    subtitle=""
                />
            </div>
            <div className="w-full flex justify-center mt-10">
                <div className="lg:w-[70vw] flex lg:flex-row flex-col gap-6 xl:gap-9">
                    <div className="w-full lg:w-[20vw] lg:block flex justify-center  ">
                    
                        <img  
                        src= {AboutPage.PrincipleMessage_Image}
                        className=" md:w-[38vw] sm:w-[40vw] w-[50vw] object-cover"/>
                        
                    </div>
                    <div className="lg:w-[50vw] w-[92vw] lg:text-[16px] xl:text-[17px] lg:block flex flex-col text-center lg:text-start gap-3">
                        <div className="flex flex-col gap-3 text-gray-600 xl:max-w-11/12 xl:text-justify">
                            <div>
                                <p>Music is a universal language, and it is created through universal principles. Therefore, by learning music correctly, people can gain practical experiences related to science and mathematics.</p>
                            </div>
                            <div>
                                <p>Music should be studied both practically and theoretically to gain complete knowledge. Through its history, it is also possible to develop a deep understanding of the world’s economic, political, social, cultural, and major historical periods.</p>
                            </div>
                            <div>
                                <p>Step by step, we use music as a tool to help build well-disciplined and noble individuals who can later make a great contribution to the field of music. With this goal in mind, our academic staff, including myself, work with strong dedication and commitment.</p>
                            </div>
                            <div>
                                <p>With this goal in mind, our academic staff, including myself, work with strong dedication and commitment.</p>

                            </div>
                            

                        </div>
                        <div>
                            <p className="font-bold xl:mt-5">
                               Deshamanya Dr. K K Prasanna Sanjeewa
                            </p>

                        </div>
                    </div>
                </div>
            </div>
    </div>
    </>
    )   
}