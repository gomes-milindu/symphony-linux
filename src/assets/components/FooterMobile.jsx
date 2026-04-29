import { Link } from "react-router-dom";

function FooterMobile() {
  return (
    <>
      {/* Mobile  */}
      <section className="sm:hidden w-full h-auto">
        <div
          className="w-full aspect-[0.587/1] bg-no-repeat bg-contain bg-bottom"
          style={{
            backgroundImage: `url('https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/FooterMobedit.png')`,
            backgroundSize: "100% auto",
          }}
        >
          <div className="w-full aspect-[2.6/1]"></div>
          <div className="w-full h-fit flex flex-col justify-center items-center gap-10">
            {/* Logo */}
            <div className="flex flex-col flex justify-center items-center gap-2">
              <div
                className="w-30 h-30"
                style={{
                  backgroundImage: `url('https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/FooterLogo.png')`,
                  backgroundSize: "100% auto",
                }}
              ></div>
              <div className="text-yellow-400 text-[18px] text-center">
                <div className="">Symphony</div>
                <div className="">Music Institue</div>
              </div>
              <div className="text-[12px] text-center max-w-[300px] text-[#99A1AF]">
                Inspiring musical excellence and creativity since 2010. Join us
                and unleash your musical talent.
              </div>
            </div>

            {/* 2 rows */}
            <div className="flex flex-row gap-5">
              {/* left */}
              <div className="flex flex-col max-w-[200px] ">
                <div className="flex flex-col gap-3">
                  <div className="text-[18px] text-yellow-400">Contact Us</div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row gap-2">
                      <div
                        className="w-5 h-5 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url('https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/EmailIcons.png')` }}
                      ></div>
                      <div className="text-[12px] text-[#99A1AF]">
                        info@harmonymusic.com
                      </div>
                    </div>
                    <div className="">
                      <div className="flex flex-row gap-2">
                        <div
                          className="w-5 h-5 bg-cover bg-center bg-no-repeat"
                          style={{ backgroundImage: `url('https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/CallIcons.png')` }}
                        ></div>
                        <div className="text-[12px] text-[#99A1AF]">
                          +1 (555) 123-4567
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex flex-row gap-2">
                        <div
                          className="w-5 h-5 bg-cover bg-center bg-no-repeat"
                          style={{ backgroundImage: `url('https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/LocationIcons.png')` }}
                        ></div>
                        <div className="text-[12px] text-[#99A1AF]">
                          23 Music Avenue, Harmony City, MC 12345
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* right */}
              <div className="">
                <div className="flex flex-col gap-3">
                  <div className="text-[18px] text-yellow-400">Quick Links</div>
                  <div className="flex flex-col gap-1 text-[#99A1AF] text-[14px]">
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

          

        </div>
      </section>
    </>
  );
}

export default FooterMobile;
