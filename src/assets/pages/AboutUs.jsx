import OtherNavbar from "../components/OtherNavbar"
import OtherHero from "../components/OtherHero"
import StaffSection from "../components/StaffSection"
import AboutOurStory from "../components/AboutOurStory"
import PrinciplaMessage from "../components/PrincipleMessage"
import Footer from "../components/Footer";
function AboutUs(){
    return(
        <>
        <div className="hidden sm:inline-block">
        <OtherNavbar />
      </div>
        
        <OtherHero 
        tabletImg="https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/About%20us/aboutTab.png" 
        mobileImg="https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/About%20us/aboutMob.png" 
        desktopImg="https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/About%20us/about.png"
        title={"About Harmony"} subtitle={"Capturing moments of musical joy, growth, and achievement"} />
        {/* <AchievementCartSet /> */}
        <AboutOurStory />
        <PrinciplaMessage />
        <StaffSection />
        <Footer />
        </>
    )
}

export default AboutUs