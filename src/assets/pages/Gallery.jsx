import OtherNavbar from "../components/OtherNavbar";
import OtherHero from "../components/OtherHero";
import Footer from "../components/Footer";
import MusicGallery from "../components/MusicGallery";
import CurveBackground from "../components/LandingLeftCurve";
function Gallery() {
  return (
    <>
    
      <OtherNavbar />

      
      <OtherHero
        desktopImg="https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Gallery/FrameGal00.png"
        mobileImg="https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Gallery/Framegal.png"
        tabletImg="https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Gallery/galleryTab.png"
        title={"Gallery"}
        subtitle={"Capturing moments of musical joy, growth, and achievement"}
      />
      {/* <OtherHero mobileImg={frame1} /> */}
      
      <MusicGallery />

      <Footer />
    </>
  );
}

export default Gallery;
