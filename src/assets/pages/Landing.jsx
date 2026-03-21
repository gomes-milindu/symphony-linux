import Reveal from "../animations/Reveal";
import ExpertSection from "../components/ExpertSection";
import Header from "../components/Header";
import OurStory from "../components/OurStory";
import Student from "../components/Student";

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
    </div>
  );
}
