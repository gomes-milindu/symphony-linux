function EventDetailItem({ img, text }) {
  return (
    <div className="flex items-center  text-gray-700 gap-[7.37px]">
      <img src={img} className="w-4 h-4 "></img>
      <span className=" font-secondary font-normal text-[0.9rem] tracking-normal leading-6 text-secondary">
        {text}
      </span>
    </div>
  );
}

export default EventDetailItem;
