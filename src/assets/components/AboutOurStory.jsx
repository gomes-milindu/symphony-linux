import React from "react";
import Topic from "../components/Topic";

function AboutOurStory() {
  return (
    <section className="w-full flex flex-col items-center gap-24 xl:mb-20">
      {/* ================= ABOUT OUR STORY ================= */}
      <div className="max-w-4xl flex flex-col items-center text-center gap-8 px-4">
        <Topic
          title="Our Story"
          
        />

        <p className="text-gray-600 text-[16px] md:text-[17px] leading-relaxed text-justify p-2">
          Founded in 2016, Symphony Music Institute was established with a vision of delivering high-quality music education while nurturing creativity, discipline, and artistic excellence. Located in Kalutara, Sri Lanka, the institute provides structured and professional training in Classical Guitar, Piano, Violin, Vocal, Electronic Keyboard, Acoustic Guitar, Recorder, and Theory of Music. Under the guidance of Dr. K. K. Prasanna Sanjeewa, D. Mus. Hons. (Sri Lanka), ATCL (UK), LTCL (UK), the institute has grown into a respected center for musical learning, preparing students for international music examinations, professional performance opportunities, and advanced musical studies.
        </p>

        <p className="text-gray-600 text-[16px] md:text-[17px] leading-relaxed text-justify p-2">
          Over the past ten years of excellence, Symphony Music Institute has successfully trained over 500 students, ranging from young beginners to music professionals including teachers and university lecturers. The institute has also gained international recognition through prize-winning students, best teacher awards from the United Kingdom, and highest student achievement awards in competitions held in Australia. With a strong commitment to artistic development and educational excellence, the institute continues to inspire the next generation of musicians while fostering a lifelong passion for music.
        </p>

        <p className="text-gray-600 text-[16px] md:text-[17px] leading-relaxed text-justify p-2">
          {/* We believe music is a universal language that transcends boundaries
          and enriches lives. Our dedicated team of professional musicians and
          educators work tirelessly to guide students not only to master their
          instruments, but also to discover their unique musical voice. */}
        </p>
      </div>

      {/* ================= MISSION & VISION ================= */}
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 px-4 text-center">
        {/* Mission */}
        <div className="flex flex-col items-center gap-4">
          <Topic
            title="Mission"
            
          />

          <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed text-center p-2">
           To provide high-quality music education that inspires creativity, discipline, and lifelong learning. We are committed to nurturing every student's musical potential while promoting cultural appreciation, artistic excellence, and a universal understanding through the language of music
          </p>
        </div>

        {/* Vision */}
        <div className="flex flex-col items-center gap-4">
          <Topic
            title="Vision"
            
          />

          <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed text-center  p-2">
            To become a leading music institution that empowers individuals through excellence in music education. We envision a world where the study of music transforms lives, builds character, and guides people from joy toward wisdom, creativity, and meaningful artistic expression.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutOurStory;
