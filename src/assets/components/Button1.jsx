function Button1(props) {
  return (
    <div>
      <button className='w-[150px] h-[35px] xl:w-4/12 xl:h-[45px] rounded-lg border gap-3 border-[#454545]'>
        <span className='gap-3 text-[1rem] md:text-[1rem] xl:text-[1rem] text-[#454545] font-medium '>{props.buttonname}</span>
      </button>
    </div>
  )
}

export default Button1