import OtherNavbar from "../components/OtherNavbar"
import OtherHero from "../components/OtherHero"
import StaffSection from "../components/StaffSection"
import AboutOurStory from "../components/AboutOurStory"
import PrinciplaMessage from "../components/PrincipleMessage"
import Footer from "../components/Footer";
import Reveal from "../animations/Reveal"
import LandingLeftCurve from "../components/LandingLeftCurve"
import AboutLeftCurve from "../components/AboutLeftCurve"
import { AboutPage } from "../data/AssetsLinks.js";
function AboutUs(){
    return(
        <>
        
        <OtherNavbar />
      
        
        <OtherHero 
        tabletImg={AboutPage.Tablet_BG} 
        mobileImg={AboutPage.Mobile_BG} 
        desktopImg={AboutPage.Desktop_BG}
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