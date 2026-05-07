import Navbar from "../components/Navbar";
import HomePageBtn from "./HomePageBtn";
import { LandingPage } from "../data/AssetsLinks.js";



function Header() {
  return (
    <>
      {/* Mobile  */}
      <section className="sm:hidden w-full aspect-[0.643] justify-center items-center">
        <div
          className="w-full h-full  bg-no-repeat bg-contain overflow-hidden flex flex-col justify-start items-center"
          style={{
            backgroundImage: `url(${LandingPage.Header_Mobile})`,
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

      {/* Web */}
      <section className="hidden xl:inline-flex w-full aspect-[1.9692] justify-center items-center">
        <div
          className="w-full aspect-[1.9692] absolute z-1 top-0 bg-no-repeat bg-contain overflow-hidden flex flex-col justify-start items-center"
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
      </section>
    </>
  );
}

export default Header;
