// import fb from "../../assets/footer/fb.png";
// import insta from "../../assets/footer/insta.png";
// import twitter from "../../assets/footer/twitter.png";
// import youtube from "../../assets/footer/youtube.png";
import { Link } from "react-router-dom";

function FooterDesktop() {
  return (
    <>
      {/* Desktop */}
      <section className="hidden xl:inline w-full h-auto">
        <div
          className="w-full h-[800px] bg-no-repeat bg-contain bg-bottom flex flex-col justify-center items-center gap-5"
          style={{
            backgroundImage: `url('https://ncpjthyvbjmmcktafber.supabase.co/storage/v1/object/public/Landing%20Page/Group%2013.webp')`,
            backgroundSize: "100% auto",
          }}
        >
          <div className=" w-10/12 h-[270px]"></div>
          <div className="w-10/12 h-[350px] flex flex-row p-15 justify-around items-start">
            {/* Left Side */}
            <div className="w-fit h-fit flex flex-col justify-center items-center gap-4">
              <div
                className="w-40 h-40 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('https://ncpjthyvbjmmcktafber.supabase.co/storage/v1/object/public/Landing%20Page/12Asset%201%204.webp')`,
                  backgroundSize: "100% auto",
                }}
              ></div>
              <div className="text-yellow-400 text-2xl text-center">
                <div className="">Symphony</div>
                <div className="">Music Institue</div>
              </div>
              <div className="text-[16px] text-center max-w-[300px] text-[#99A1AF]">
                Inspiring musical excellence and creativity since 2010. Join us
                and unleash your musical talent.
              </div>
            </div>

            {/* center */}
            <div className="w-fit h-fit flex flex-col justify-center items-left gap-18">
              <div className="flex flex-col gap-5">
                <div className="text-2xl text-yellow-400">Contact Us</div>
                <div className="text-[#99A1AF] text-[16px] flex flex-col gap-3">
                  <div className="flex flex-row items-center gap-4">
                    <div
                      className="w-5 h-5 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url('https://ncpjthyvbjmmcktafber.supabase.co/storage/v1/object/public/Landing%20Page/mail.webp')` }}
                    ></div>
                    <div className="">info@harmonymusic.com</div>
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <div
                      className="w-5 h-5 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url('https://ncpjthyvbjmmcktafber.supabase.co/storage/v1/object/public/Landing%20Page/call.webp')` }}
                    ></div>
                    <div>+1 (555) 123-4567</div>
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <div
                      className="w-5 h-5 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url('https://ncpjthyvbjmmcktafber.supabase.co/storage/v1/object/public/Landing%20Page/location.webp')` }}
                    ></div>
                    <div className="">
                      123 Music Avenue, Harmony City, MC 12345
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="text-2xl text-yellow-400">Social Media</div>
                <div className="flex flex-row gap-5">
                  <div
                    className="w-10 h-10 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('https://ncpjthyvbjmmcktafber.supabase.co/storage/v1/object/public/Landing%20Page/fb.webp')` }}
                  ></div>
                  <div
                    className="w-10 h-10 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('https://ncpjthyvbjmmcktafber.supabase.co/storage/v1/object/public/Landing%20Page/insta.webp')` }}
                  ></div>
                  <div
                    className="w-10 h-10 bg-cover bg-center bg-no-repeat"
                   style={{ backgroundImage: `url('https://ncpjthyvbjmmcktafber.supabase.co/storage/v1/object/public/Landing%20Page/twitter.webp')` }}
                  ></div>
                  <div
                    className="w-10 h-10 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('https://ncpjthyvbjmmcktafber.supabase.co/storage/v1/object/public/Landing%20Page/insta.webp')` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* right side */}
            <div className="w-fit h-fit flex flex-col justify-center items-left gap-8">
              <div className="flex flex-col gap-9">
                <div className="text-2xl text-yellow-400">Quick Links</div>
                <div className="flex flex-col gap-5 text-[#99A1AF]">
                  <Link to="/" className="">
                    Home
                  </Link>
                  <Link to="/classes" className="">
                    Classes
                  </Link>
                  <Link to="/events" className="">
                    Events
                  </Link>
                  <Link to="/gallery" className="">
                    Gallery
                  </Link>
                  <Link to="/aboutus" className="">
                    About Us
                  </Link>
                  <Link to="/contactus" className="">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-7xl h-25 mt-10">
            <div className="border-t border-white/20 pt-4 md:pt-5">
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <p className="text-white/50 text-[12px] font-extralight  lg:text-[13px] leading-relaxed tracking-wide">
                  Copyright © 2026 Symphony Music Institute
                </p>

                <p className="text-white/50 text-[11px]  lg:text-[12px] leading-relaxed">
                  Implemented by{" "}
                  <span className="font-extralight text-white/50">
                    Threads Software Solutions
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FooterDesktop;
