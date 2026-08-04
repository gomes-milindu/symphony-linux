import { Link } from "react-router-dom";
import { Footer } from "../data/AssetsLinks.js";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

function FooterMobile() {
  return (
    // 1. Added relative and z-0 to establish a stacking context for the background layers
    <footer className="sm:hidden w-full relative z-0 flex flex-col min-h-[100dvh]">
      
      {/* --- LAYER 1: BACKGROUND IMAGE --- */}
      {/* Removed the solid background color from this layer so the top remains fully transparent */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-top -z-10"
        style={{
          backgroundImage: `url('${Footer.Mobile_BG}')`,
          backgroundSize: "100% auto",
        }}
      ></div>

      {/* --- LAYER 2: SOLID COLOR FILLER --- */}
      {/* This fills the bottom white space on tall screens. 
          top-[35vw] ensures the color block starts strictly *below* the transparent wave area, 
          tucking safely behind the dark part of your image. */}
      <div className="absolute inset-x-0 bottom-0 top-[35vw] bg-[#171c26] -z-20"></div>

      {/* Spacer to push content down below the golden curve. */}
      <div className="w-full aspect-[2.6/1] shrink-0"></div>
      
      {/* --- MAIN CONTENT WRAPPER --- */}
      <div className="w-full flex flex-col items-center px-4 grow">
        
        {/* 1. LOGO & DESCRIPTION */}
        <div className="flex flex-col justify-center items-center gap-2">
          <div
            className="w-30 h-30"
            style={{
              backgroundImage: `url('${Footer.Mobile_LOGO}')`,
              backgroundSize: "100% auto",
            }}
          ></div>
          <div className="text-yellow-400 text-[18px] text-center">
            <div>Symphony</div>
            <div>Music Institue</div>
          </div>
          <div className="text-[12px] text-center max-w-[300px] text-[#99A1AF]">
            Inspiring musical excellence and creativity since 2016. Join us
            and unleash your musical talent.
          </div>
        </div>

        {/* 2. TWO-COLUMN LAYOUT (CONTACT & LINKS) */}
        <div className="flex flex-row gap-5 mt-10">
          
          {/* --- LEFT COLUMN: CONTACT & SOCIAL --- */}
          <div className="flex flex-col max-w-[200px]">
            
            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <div className="text-[18px] text-yellow-400">Contact Us</div>
              <div className="flex flex-col gap-3">
                
                {/* Email */}
                <div className="flex flex-row gap-2">
                  <div
                    className="w-5 h-5 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${Footer.Mobile_Email}')` }}
                  ></div>
                  <div className="text-[11px] text-[#99A1AF] flex flex-col justify-center">
                    <div>symphonymusic2022@gmail.com</div>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex flex-row gap-2">
                  <div
                    className="w-5 h-5 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${Footer.Mobile_Call}')` }}
                  ></div>
                  <div className="text-[12px] text-[#99A1AF] flex flex-col justify-center">
                    +9471 900 81 81
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex flex-row gap-2">
                  <div
                    className="w-5 h-5 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${Footer.Mobile_Location}')` }}
                  ></div>
                  <div className="text-[12px] text-[#99A1AF] flex flex-col justify-center">
                    Kalutara, Sri Lanka
                  </div>
                </div>

              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-3 mt-10">
              <div className="text-[18px] text-yellow-400">Social Media</div>
              <div className="flex flex-row gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-[#2f2d24] flex items-center justify-center hover:bg-[#2a303c] transition-colors">
                  <Facebook className="w-4 h-4 text-yellow-500" strokeWidth={2} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#2f2d24] flex items-center justify-center hover:bg-[#2a303c] transition-colors">
                  <Instagram className="w-4 h-4 text-yellow-500" strokeWidth={2} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#2f2d24] flex items-center justify-center hover:bg-[#2a303c] transition-colors">
                  <Twitter className="w-4 h-4 text-yellow-500" strokeWidth={2} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#2f2d24] flex items-center justify-center hover:bg-[#2a303c] transition-colors">
                  <Youtube className="w-4 h-4 text-yellow-500" strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: QUICK LINKS --- */}
          <div>
            <div className="flex flex-col gap-3">
              <div className="text-[18px] text-yellow-400">Quick Links</div>
              <nav className="flex flex-col gap-1 text-[#99A1AF] text-[14px]">
                <Link to="/">Home</Link>
                <Link to="/classes">Classes</Link>
                <Link to="/events">Events</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/aboutus">About Us</Link>
                <Link to="/contactus">Contact Us</Link>
              </nav>
            </div>
          </div>
          
        </div>
      </div>

      {/* 3. COPYRIGHT BANNER */}
      <div className="w-full px-6 mt-auto pb-8 pt-10">
        <div className="border-t border-white/20 pt-4">
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="text-[11px] text-white/50 text-center">
              Copyright © 2026 Symphony Music Institute
            </p>
            <p className="text-[11px] text-white/50 text-center">
              Implemented by <a href="https://www.facebook.com/share/1EoHRj1dXy/" className="hover:underline hover:font-bold">Threads Software Solutions</a>
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default FooterMobile;