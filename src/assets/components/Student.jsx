import Topic from "../components/Topic";
import LeftTopStudent from "../components/LeftTopStudent";
import RightTopStudent from "../components/RightTopStudent";


export default function Student() {
  return (
    <>
      <section className=" lg:flex flex-col w-full justify-center mb-15">
        <div className="flex justify-center mb-15 mt-5">
          <Topic
            title="Our Top Student"
            subtitle="Meet our star performers who have achieved excellence through dedication and passion."
          />
        </div>
        <div className="md:w-[69.27%] md:aspect-[1330/1659] mt-2 relative mx-auto flex flex-col md:gap-0 gap-[32px]">
          <div className="md:absolute md:top-0 md:left-0 flex justify-center">
            <LeftTopStudent />
          </div>
          <div className="md:absolute md:top-[22.85%] md:right-0 flex justify-center">
            <RightTopStudent />
          </div>
          <div className="md:absolute md:top-[45.26%] md:left-0 flex justify-center">
            <LeftTopStudent />
          </div>
          <div className="md:absolute md:bottom-0 md:right-0 flex justify-center">
            <RightTopStudent />
          </div>
        </div>
        
      </section>
    </>
  );
}
