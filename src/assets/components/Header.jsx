import Navbar from "../components/Navbar";
import HomePageBtn from "./HomePageBtn";



function Header() {
  return (
    <>
      {/* Mobile  */}
      <section className="sm:hidden w-full aspect-[0.643] justify-center items-center">
        <div
          className="w-full h-full  bg-no-repeat bg-contain overflow-hidden flex flex-col justify-start items-center"
          style={{
            backgroundImage: `url(https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/Maskgroup2.png)`,
            backgroundSize: "100% auto",
          }}
        >
          <Navbar />
          <div
            className="w-30 h-30 bg-cover bg-center bg-no-repeat m-10"
            style={{
              backgroundImage: `url(https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/logo.png)`,
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
            backgroundImage: `url(https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/maskTab.png)`,
            backgroundSize: "100% auto",
          }}
        >
          <Navbar />
          <div
            className="w-30 h-30 bg-cover bg-center bg-no-repeat m-5"
             
            
            style={{
              backgroundImage: `url(https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/logo.png)`,
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
            backgroundImage: `url(https://xqrjcvdiomoxnutbvuha.supabase.co/storage/v1/object/public/Header-Symphony/Group%2012.webp)`,
            backgroundSize: "100% auto",
          }}
        >
          <Navbar />
          <div
            className="w-40 h-40 bg-cover bg-center bg-no-repeat m-10"
            style={{
              backgroundImage: `url(https://ncpjthyvbjmmcktafber.supabase.co/storage/v1/object/public/Landing%20Page/12Asset%201%204.webp)`,
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
