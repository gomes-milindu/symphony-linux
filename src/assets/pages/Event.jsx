
import AboutLeftCurve from "../components/AboutLeftCurve";
import EventsLeftCurve from "../components/EventLeftCurve";
import EventsSection from "../components/EventSection";
import Footer from "../components/Footer";
import LandingLeftCurve from "../components/LandingLeftCurve";
import OtherHero from "../components/OtherHero";
import OtherNavbar from "../components/OtherNavbar";
import { EventPage } from "../data/AssetsLinks.js";


function Event() {
  return (
    <>
     
        <OtherNavbar />
      
      

      <OtherHero 
      tabletImg={Event.Tablet_BG} 
      mobileImg={EventPage.Mobile_BG} 
      desktopImg={EventPage.Desktop_BG}
      title={"Events"} 
      subtitle={"Capturing moments of musical joy, growth, and achievement"}/>
      
      {/* <AboutLeftCurve /> */}
    {/* <EventsLeftCurve /> */}
      {/* <EventsSection/> */}
      <EventsSection />
      
      <Footer />
    </>
  );
}

export default Event;
