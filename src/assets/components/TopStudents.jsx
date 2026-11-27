export default function TopStudents({
  image = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  name = "Alex Jordon",
  academy = "Harmony Music Academy",
}) {
  return (
    <div className="w-full max-w-[300px] bg-white rounded-[40px] border-[3.5px] border-[#DFD7C8] p-[14px] shadow-[0_14px_34px_-6px_rgba(35,28,18,0.14)] font-secondary">
      {/* Image Frame */}
      <div className="w-full aspect-[1/1.03] rounded-[28px] bg-[#EFE0C3] overflow-hidden shadow-[0_8px_18px_-4px_rgba(0,0,0,0.18)]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Student Info */}
      <div className="pt-6 pb-7 px-3 text-center">
        <h3 className="text-[28px] sm:text-[30px] font-light text-[#1F1F1F] leading-tight tracking-[-0.01em]">
          {name}
        </h3>
        <p className="mt-1.5 text-[13px] sm:text-[13.5px] font-normal text-[#4A4A4A] tracking-[0.03em] leading-snug">
          {academy}
        </p>
      </div>
    </div>
  );
}

