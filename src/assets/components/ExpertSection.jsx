import Card from "../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
 //para: "Learn from professional musicians with years of teaching experience ",
function ExpertSection() {
  const cards = [
    {
      icon: "https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/Frame%2041.png",
      topic: "Expert Instructors",
      para: "Highly qualified instructors focused on proffessional music training",
    },
    {
      icon: "https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/Frame%2041.png",
      topic: "International Curriculum",
      para: "Globally recognized curriculum aligned with International standards.",
    },
    {
      icon: "https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/Frame%2041.png",
      topic: "Certified Courses",
      para: "Promoting structured, disciplined, and accessible music education within society",
    },
    {
      icon: "https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/Frame%2041.png",
      topic: "Modern Studios",
      para: "Earn globally respected certifications from graded exams to diplomas.",
    },
    {
      icon: "https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/Landing%20Page/Frame%2041.png",
      topic: "Performance Events",
      para: "Qualifications offer UCAS points for overseas higher education opportunities.",
    },
  ];

  return (
    <section className="w-12/12 xl:h-[550px]  flex justify-center xl:items-center  md:p-3 xl:p-0 mb-15 xl:mb-20">
      <div className="xl:h-fit flex flex-col w-10/12 xl:justify-center xl:items-center ">
        {/* MOBILE */}
        <div className="md:hidden w-full p-5">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop
            autoplay={{ delay: 4500, disableOnInteraction: false }}
          >
            {cards.map((card, i) => (
              <SwiperSlide key={i}>
                <Card {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* TABLET */}
        <div className="hidden md:grid xl:hidden grid-cols-8 gap-10 ">
          <div className="col-span-4">
            <Card {...cards[0]} />
          </div>
          <div className="col-span-4">
            <Card {...cards[1]} />
          </div>
          <div className="col-span-4">
            <Card {...cards[2]} />
          </div>
          <div className="col-span-4">
            <Card {...cards[3]} />
          </div>
          <div className="col-span-2" />
          <div className="col-span-4">
            <Card {...cards[4]} />
          </div>
          <div className="col-span-2" />
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="w-full h-fit  hidden xl:flex flex-col justify-center  items-center gap-5">
          {/* ================= TOP ROW ================= */}

          <div className="w-6/8 h-fit flex felx-row gap-5 justify-center">
            <div className=" h-[220px] ">
              <Card {...cards[0]} />
            </div>

            <div className=" h-[220px] ">
              <Card {...cards[1]} />
            </div>
          </div>

          {/* ================= BOTTOM ROW ================= */}
          <div className="w-11/12 h-fit flex felx-row gap-5">
            <div className="h-[220px]">
              <Card {...cards[2]} />
            </div>

            <div className="h-[220px] ">
              <Card {...cards[3]} />
            </div>

            <div className=" h-[220px] ">
              <Card {...cards[4]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertSection;