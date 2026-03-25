
import EventsSection from "../components/EventSection";
import Footer from "../components/Footer";
import OtherHero from "../components/OtherHero";
import OtherNavbar from "../components/OtherNavbar";


function Event() {
  return (
    <>
     
        <OtherNavbar />
      
      

      <OtherHero 
      tabletImg="https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Event/eventTab.png" 
      mobileImg="https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Event/eventMob.png" 
      desktopImg="https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Event/event.png" 
      title={"Events"} 
      subtitle={"Capturing moments of musical joy, growth, and achievement"}/>
      
      
      {/* <EventsSection/> */}
      <EventsSection />
      
      <Footer />
    </>
  );
}

export default Event;
