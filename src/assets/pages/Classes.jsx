import Footer from "../components/Footer";
import OtherHero from "../components/OtherHero";
import OtherNavbar from "../components/OtherNavbar";

function Classes() {
  return (
    <>
      <OtherNavbar />

      <OtherHero
        tabletImg="https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Classes/classesTab.png"
        mobileImg="https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Classes/classesMob.png"
        desktopImg="https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Classes/classes.png"
        title={"Our Classes"}
        subtitle={"Capturing moments of musical joy, growth, and achievement"}
      />
      {/* <OtherHero mobileImg={frame1} /> */}

      <Footer />
    </>
  );
}

export default Classes;
