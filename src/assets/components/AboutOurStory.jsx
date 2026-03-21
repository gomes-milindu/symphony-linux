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
          Founded in 2010, Harmony Music School began with a simple mission: to
          make quality music education accessible to everyone. What started as a
          small studio with just three teachers has grown into one of the
          region's premier music institutions. We believe that music is a
          universal language that transcends boundaries and enriches lives. Our
          dedicated team of professional musicians and educators work tirelessly
          to nurture talent, build confidence, and inspire a lifelong love of
          music.
        </p>

        <p className="text-gray-600 text-[16px] md:text-[17px] leading-relaxed text-justify p-2">
          Founded in 2010, Harmony Music School began with a simple mission: to
          make quality music education accessible to everyone. What started as a
          small studio with just three teachers has grown into one of the
          region's premier musi Founded in 2010, Harmony Music School began with
          a simple mission: to make quality music education accessible to
          everyone. What started as a small studio with just three teachers has
          grown into one of the region's premier music institutions.
        </p>

        <p className="text-gray-600 text-[16px] md:text-[17px] leading-relaxed text-justify p-2">
          We believe music is a universal language that transcends boundaries
          and enriches lives. Our dedicated team of professional musicians and
          educators work tirelessly to guide students not only to master their
          instruments, but also to discover their unique musical voice.
        </p>
      </div>

      {/* ================= MISSION & VISION ================= */}
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 px-4 text-center">
        {/* Mission */}
        <div className="flex flex-col items-center gap-4">
          <Topic
            title="Mission"
            
          />

          <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed text-justify p-2">
            Founded in 2010, Harmony Music School began with a simple mission: to
          make quality music education accessible to everyone. What started as a
          small studio with just three teachers has grown into one of the
          region's premier musi Founded in 2010, Harmony Music School began with
          a simple mission: to make quality music education accessible to
          everyone. What started as a small studio with just three teachers has
          grown into one of the region's premier music institutions.
          </p>
        </div>

        {/* Vision */}
        <div className="flex flex-col items-center gap-4">
          <Topic
            title="Vision"
            
          />

          <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed text-center text-justify p-2">
            Founded in 2010, Harmony Music School began with a simple mission: to
          make quality music education accessible to everyone. What started as a
          small studio with just three teachers has grown into one of the
          region's premier musi Founded in 2010, Harmony Music School began with
          a simple mission: to make quality music education accessible to
          everyone. What started as a small studio with just three teachers has
          grown into one of the region's premier music institutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutOurStory;
