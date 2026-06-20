import { Link } from "react-router-dom";
import { Footer } from "../data/AssetsLinks.js";

function FooterTab() {
  return (
    <>
      {/* Tablet  */}
      <section className="hidden sm:inline xl:hidden w-full">
        <div
          className="w-full aspect-[1.583/1] bg-no-repeat bg-contain bg-bottom flex flex-col justify-center items-center"
          style={{
            backgroundImage: `url('${Footer.Tablet_BG}')`,
            backgroundSize: "100% auto",
          }}
        >
          <div className="w-10/12 aspect-[5.446/1]"></div>
          <div className="w-10/12 h-fit flex flex-row p-5 justify-around items-start gap-15">
            {/* Left Side */}
            <div className="w-fit h-fit flex flex-col justify-center items-center gap-4">
              <div
                className="w-25 h-25 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${Footer.Tablet_LOGO}')`,
                  backgroundSize: "100% auto",
                }}
              ></div>
              <div className="text-yellow-400 text-xl text-center">
                <div className="">Symphony</div>
                <div className="">Music Institue</div>
              </div>
              <div className="text-[12px] text-center max-w-[300px] text-[#99A1AF]">
                Inspiring musical excellence and creativity since 2010. Join us
                and unleash your musical talent.
              </div>
            </div>

            {/* center */}
            <div className="w-fit h-fit flex flex-col justify-center items-left gap-10">
              <div className="flex flex-col gap-5">
                <div className="text-xl text-yellow-400">Contact Us</div>
                <div className="text-[#99A1AF] text-[12px] flex flex-col gap-1">
                  <div className="flex flex-row items-center gap-4">
                    <div
                      className="w-5 h-5 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url('${Footer.Tablet_Email}')` }}
                    ></div>
                    <div className="">symphonymusic2022@gmail.com</div>
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <div
                      className="w-5 h-5 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url('${Footer.Tablet_Call}')` }}
                    ></div>
                    <div>+9471 900 81 81</div>
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <div
                      className="w-5 h-5 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url('${Footer.Tablet_Location}')` }}
                    ></div>
                    <div className="">
                      123 Music Avenue, Kalutara, Sri Lanka
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="text-xl text-yellow-400">Social Media</div>
                <div className="flex flex-row gap-3">
                  <div
                    className="w-8 h-8 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${Footer.Tablet_FB}')` }}
                  ></div>
                  <div
                    className="w-8 h-8 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${Footer.Tablet_Insta}')` }}
                  ></div>
                  <div
                    className="w-8 h-8 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${Footer.Tablet_Twitter}')` }}
                  ></div>
                  <div
                    className="w-8 h-8 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${Footer.Tablet_Insta}')` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* right side */}
            <div className="w-fit h-fit flex flex-col justify-center items-left gap-8">
              <div className="w-[110px] flex flex-col gap-5">
                <div className="text-xl text-yellow-400">Quick Links</div>
                <div className="flex flex-col gap-2 text-[#99A1AF]">
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
        </div>
      </section>
    </>
  );
}

export default FooterTab;
