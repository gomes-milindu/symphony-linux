import Footer from "../components/Footer";
import OtherHero from "../components/OtherHero";
import OtherNavbar from "../components/OtherNavbar";
import ClassCardSection from "../components/ClassCardSection";
import { ClassPage } from "../data/AssetsLinks";

function Classes() {
  return (
    <>
      <OtherNavbar />

      <OtherHero
        tabletImg={ClassPage.Tablet_BG}
        mobileImg={ClassPage.Mobile_BG}
        desktopImg={ClassPage.Desktop_BG}
        title={"Our Classes"}
        subtitle={"Capturing moments of musical joy, growth, and achievement"}
      />
      {/* <OtherHero mobileImg={frame1} /> */}

      <ClassCardSection />

      <Footer />
    </>
  );
}

export default Classes;
