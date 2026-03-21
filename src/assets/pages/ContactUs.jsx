
import OtherNavbar from "../components/OtherNavbar"
import OtherHero from "../components/OtherHero"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm"
function ContactUs(){
    return(
        <>
        {/* <div className="hidden sm:inline-block"> */}
        <OtherNavbar />
      {/* </div> */}
        
        <OtherHero tabletImg="https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/contactTab.png" 
        mobileImg="https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/Frame300mob.png" 
        desktopImg="https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/Frame300.png" 
        title={"Contact Us"} 
        subtitle={"Capturing moments of musical joy, growth, and achievement"} />
        
        <ContactForm />
        <Footer />
        </>
    )
}

export default ContactUs