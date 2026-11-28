export default function TopStudents({
  image = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  name = "Alex Jordon",
  academy = "Harmony Music Academy",
}) {
  return (
    <div className="w-full max-w-[300px] bg-[#FFFCF3] rounded-[40px] border-[3.5px] border-yellow-400 p-[14px] shadow-[0_14px_34px_-6px_rgba(224,138,0,0.16)] transition-all duration-300 hover:border-[#FFC107] hover:shadow-[0_16px_38px_-6px_rgba(255,193,7,0.32)] font-secondary">
      {/* Image Frame */}
      <div className="w-full aspect-[1/1.03] rounded-[28px] bg-[#FFF4D2] overflow-hidden shadow-[0_8px_18px_-4px_rgba(200,124,3,0.22)]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Student Info */}
      <div className="pt-6 pb-7 px-3 text-center">
        <h3 className="text-[28px] sm:text-[30px] font-light text-[#2B2B2B] leading-tight tracking-[-0.01em]">
          {name}
        </h3>
        <p className="mt-1.5 text-[13px] sm:text-[13.5px] font-medium text-[#C87C03] tracking-[0.03em] leading-snug">
          {academy}
        </p>
      </div>
    </div>
  );
}
