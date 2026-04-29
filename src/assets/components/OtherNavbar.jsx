import { Link } from "react-router-dom"

function OtherNavbar(){
    return(
        <>
        <div className="hidden sm:inline-flex w-full h-[50px] bg-white flex flex-row justify-around items-center">
            <Link to="/" className="text-[16px] hidden sm:inline-block">Symphony Music Institute</Link>
            <div className="w-4/10 h-[60px] flex flex-row text-[14px] gap-6 items-center justify-evenly font-medium">
                <Link to="/classes" className="text-black hidden sm:inline-block">Classes</Link>
                <Link to="/events"  className="hidden sm:inline-block">Event</Link>
                <Link to="/gallery" className="hidden sm:inline-block">Gallery</Link>
                <Link to="/aboutus"  className="hidden sm:inline-block">About</Link>
                <Link to="/contactus"className="hidden sm:inline-block">Contact</Link>
                <Link className="sm:hidden">Button</Link>
            </div>
            
        </div>

        
        
        </>
    )
}

export default OtherNavbar