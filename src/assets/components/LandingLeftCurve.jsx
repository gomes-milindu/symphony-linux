import { LandingPage } from "../data/AssetsLinks.js";
const LandingLeftCurve = () => {
  return (
    <div className="hidden md:inline-flex h-fit bg-red-500 center w-full  absolute -z-10">
      <img
        src={LandingPage.LandingLeftCurve}
        alt="curve"
        className="absolute -z-10  -left-20 w-2/3 object-cover"
      />
    </div>
  );
};

export default LandingLeftCurve;