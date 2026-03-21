import Reveal from "../animations/Reveal";
import ClassCartSet from "../components/ClassCartSet";
import ExpertSection from "../components/ExpertSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OurStory from "../components/OurStory";
import Student from "../components/Student";
import UpComingSection from "../components/UpCommingSection";
import UpComingSlide from "../components/UpCommingSlide";


export default function Landing() {
  return (
    <div className="landing">
      <Header />
      {/* <OurStory /> */}
      <Reveal direction="top">
        <OurStory />
      </Reveal>

      <Reveal direction="right">
           <ExpertSection />
          {/* <Story /> */}
        </Reveal>

        <Reveal>
          <Student />
        </Reveal>

        <ClassCartSet />
        

        <Footer />
    </div>
  );
}
