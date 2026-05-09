
import OtherNavbar from "../components/OtherNavbar"
import OtherHero from "../components/OtherHero"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm"
import { Contact } from "lucide-react";
import { ContactPage } from "../data/AssetsLinks.js";
function ContactUs(){
    return(
        <>
        {/* <div className="hidden sm:inline-block"> */}
        <OtherNavbar />
      {/* </div> */}
        
        <OtherHero tabletImg={ContactPage.Tablet_BG} 
        mobileImg={ContactPage.Mobile_BG} 
        desktopImg={ContactPage.Desktop_BG}
        title={"Contact Us"} 
        subtitle={"Capturing moments of musical joy, growth, and achievement"} />
        
        <ContactForm />
        <Footer />
        </>
    )
}

export default ContactUs