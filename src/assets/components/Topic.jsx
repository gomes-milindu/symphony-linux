function Topic(props){
    return(
        <div className="w-fit flex flex-col items-center justify-center">
            <div className="text-[36px] md:text-[48px] lg:text-[44px] text-primary font-primary">{props.title}</div>
            <div className="text-[16px] md:text-[20px] lg:text-[16px]  text-secondary font-Inter font-secondary text-center">{props.subtitle}</div>
        </div>
    )
}

export default Topic;