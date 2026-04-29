import OtherNavbar from "../components/OtherNavbar"
import OtherHero from "../components/OtherHero"
import StaffSection from "../components/StaffSection"
import AboutOurStory from "../components/AboutOurStory"
import PrinciplaMessage from "../components/PrincipleMessage"
import Footer from "../components/Footer";
import Reveal from "../animations/Reveal"
import LandingLeftCurve from "../components/LandingLeftCurve"
import AboutLeftCurve from "../components/AboutLeftCurve"
function AboutUs(){
    return(
        <>
        
        <OtherNavbar />
      
        
        <OtherHero 
        tabletImg="https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/About%20us/aboutTab.png" 
        mobileImg="https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/About%20us/aboutMob.png" 
        desktopImg="https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/About%20us/about.png"
        title={"About Harmony"} subtitle={"Capturing moments of musical joy, growth, and achievement"} />
        {/* <AchievementCartSet /> */}
        
        <Reveal direction="top">
             <AboutOurStory />
        </Reveal>

        <AboutLeftCurve />

        <Reveal direction="top">
            <PrinciplaMessage />
        </Reveal>
    
        <Reveal direction="top">
            <StaffSection />
        </Reveal>
       
        <Footer />
        </>
    )
}

export default AboutUs