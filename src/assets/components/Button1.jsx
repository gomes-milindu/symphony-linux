// function Button1(props) {
//   return (
//     <div>
//       <button className='w-[150px] h-[35px] xl:w-4/12 xl:h-[45px] rounded-lg border gap-3 border-[#454545]'>
//         <span className='gap-3 text-[1rem] md:text-[1rem] xl:text-[1rem] text-[#454545] font-medium '>{props.buttonname}</span>
//       </button>
//     </div>
//   )
// }

// export default Button1


function Button1(props) {
  return (
    <div>
      <button className="relative overflow-hidden group w-[150px] h-[35px] xl:w-4/12 xl:h-[45px] rounded-lg border border-[#454545]">
        
        {/* Shine effect layer */}
        <span className="absolute inset-0 overflow-hidden rounded-lg">
          <span className="shine"></span>
        </span>

        {/* Button text */}
        <span className="relative z-10 text-[1rem] text-[#454545] font-medium">
          {props.buttonname}
        </span>

      </button>
    </div>
  );
}

export default Button1;