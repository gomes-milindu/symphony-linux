import Navbar from "../components/Navbar";
import HomePageBtn from "./HomePageBtn";
import { LandingPage } from "../data/AssetsLinks.js";
import { getCloudinaryUrl } from "../utils/cloudinary";


function Header() {
  return (
    <>
      {/* Mobile  */}
      <section className="sm:hidden w-full aspect-[0.643] justify-center items-center">
        <div
          className="w-full h-full  bg-no-repeat bg-contain overflow-hidden flex flex-col justify-start items-center"
          style={{
            backgroundImage: `url(${getCloudinaryUrl(LandingPage.Header_Mobile, 800)})`,
            backgroundSize: "100% auto",
          }}
        >
          <Navbar />
          <div
            className="w-30 h-30 bg-cover bg-center bg-no-repeat m-10"
            style={{
              backgroundImage: `url(${LandingPage.Header_Mobile_LOGO})`,
              backgroundSize: "100% auto",
            }}
          ></div>

          <div className="font-primary text-4xl  text-white m-5">Start Your Musical</div>
          <div className="font-primary text-4xl  text-white">Journey Today</div>
          <HomePageBtn />
        </div>
      </section>

      {/* Tablet  */}
      <section className="hidden sm:inline-flex xl:hidden w-full aspect-[1.94/1.4] justify-center items-center">
        <div
          className="w-full h-full  bg-no-repeat bg-contain overflow-hidden flex flex-col justify-start items-center"
          style={{
            backgroundImage: `url(${LandingPage.Header_Tablet})`,
            backgroundSize: "100% auto",
          }}
        >
          <Navbar />
          <div
            className="w-30 h-30 bg-cover bg-center bg-no-repeat m-5"
             
            
            style={{
              backgroundImage: `url(${LandingPage.Header_Tablet_LOGO})`,
              backgroundSize: "100% auto",
            }}
          ></div>

          <div className="font-primary text-5xl text-white m-5">Start Your Musical</div>
          <div className="font-primary text-5xl text-white">Journey Today</div>
          <HomePageBtn />
        </div>
      </section>

      {/* Web aspect-[1.9692]*/}
      {/*}
      <section className="hidden xl:inline-flex w-full aspect-[1.9692] justify-center items-center">
        <div
          className="w-full aspect-[1.9692]  absolute z-1 top-0 bg-no-repeat bg-contain bg-red-400 overflow-hidden flex flex-col justify-start items-center"
          style={{
            backgroundImage: `url(${LandingPage.Header_Desktop})`,
            backgroundSize: "100% auto",
          }}
        >
          <Navbar />
          <div
            className="w-40 h-40 bg-cover bg-center bg-no-repeat m-10"
            style={{
              backgroundImage: `url(${LandingPage.Header_Desktop_LOGO})`,
              backgroundSize: "100% auto",
            }}
          ></div>

          <div className="font-primary text-7xl text-white m-5">Start Your Musical</div>
          <div className="font-primary text-7xl text-white">Journey Today</div>
          <HomePageBtn />
        </div>
      </section>*/}

      <section className="hidden xl:flex w-full h-[95vh] relative justify-center items-center">
        {/* Background image - let it size naturally, don't force a fixed aspect ratio */}
        <img
          src={LandingPage.Header_Desktop}
          alt=""
          className="w-full h-auto block"
        />

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-start items-center">
          <Navbar />
          <img
            src={LandingPage.Header_Desktop_LOGO}
            alt="Logo"
            className="w-40 h-40 object-contain m-10"
          />

          <div className="font-primary text-6xl text-white m-7 tracking-wider">Start Your Musical</div>
          <div className="font-primary text-6xl text-white tracking-wider">Journey Today</div>
          <HomePageBtn />
        </div>
      </section>


      
    </>
  );
}

export default Header;
