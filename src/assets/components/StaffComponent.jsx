export default function StaffComponent({ staff }) {
  return (

    <div className="w-[429.34px] h-[366.71px]   relative xl:scale-85 lg:scale-75 md:scale-80 scale-85 ">

      <img
        src={staff.image}
        className="w-[282.07px] h-[318.28px]   absolute top-0 left-0"
      />

      <img
        src="https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/About%20us/staffGray.png"
        className="w-[298.19px] h-[139.93px]  absolute bottom-0 right-0"
      />

      <div className="absolute bottom-2 right-2 w-[298.19px] h-[139.93px] flex items-center justify-center">
        <img 
        src= "https://sweqrtjrbwtsxosficzx.supabase.co/storage/v1/object/public/About%20us/staffBlue.png"
        className="absolute inset-0 w-full h-full" />

        <div className="relative flex flex-col gap-1  text-white">
          <p className="font-semibold text-[23px] leading-tight">
            {staff.name}
          </p>

          <div className="text-[14.5px] leading-snug">
            <p>{staff.qualification}</p>
            <p>{staff.email}</p>
            <p>{staff.phone}</p>

          </div>
        </div>
      </div>

    </div>

    

  );
}