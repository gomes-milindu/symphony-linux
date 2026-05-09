import OtherNavbar from "../components/OtherNavbar";
import OtherHero from "../components/OtherHero";
import Footer from "../components/Footer";
import MusicGallery from "../components/MusicGallery";
import CurveBackground from "../components/LandingLeftCurve";
import LandingLeftCurve from "../components/LandingLeftCurve";
import { GalleryPage } from "../data/AssetsLinks.js";
function Gallery() {
  return (
    <>
    
      <OtherNavbar />

      
      <OtherHero
        desktopImg={GalleryPage.Desktop_BG}
        mobileImg={GalleryPage.Mobile_BG}
        tabletImg={GalleryPage.Tablet_BG}
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
