import Reveal from "../animations/Reveal";
import ClassCartSet from "../components/ClassCartSet";

import ExpertSection from "../components/ExpertSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OurStory from "../components/OurStory";
import Student from "../components/Student";
import UpComingSection from "../components/UpCommingSection";
import UpComingSlide from "../components/UpCommingSlide";
import LandingLeftCurve from "../components/LandingLeftCurve";
import LandingRightCurve from "../components/LandingRightCurve";
import { useEffect } from "react";
import { ClassPage, EventPage } from "../data/AssetsLinks.js";

export default function Landing() {

  useEffect(() => {
    // AssetsLinks.js හි ඇති සියලුම URL කැචේ කිරීමට
    const imagesToCache = [...Object.values(ClassPage), ...Object.values(EventPage)];
    
    imagesToCache.forEach(url => {
      if (url && typeof url === 'string' && url.startsWith('http')) {
        const img = new Image();
        img.src = url;
      }
    });
  }, []);
  return (
    <div className="landing">
      <Header />
      {/* <OurStory /> */}
      <Reveal direction="top">
        <OurStory />
      </Reveal>
    
      <Reveal direction="right">
        <ExpertSection />
        {/* <Story /> */}
      </Reveal>
      <LandingLeftCurve />
      
      <Reveal>
        <Student />
      </Reveal>
      {/* <LandingRightCurve />  */}
      <ClassCartSet />

       <Reveal>
        <UpComingSection />
      </Reveal>
      
      <Footer />
    </div>
  );
}
