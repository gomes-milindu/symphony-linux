import { Link } from "react-router-dom"
import { HiBars3 } from "react-icons/hi2";

export default function Navbar(){
    return(
        <>
        <div className="w-full h-[50px] flex flex-row justify-end items-center sm:justify-center sm:items-center text-[17px]  text-white gap-10">
            <Link to="/classes" className="hover:text-orange-300 hidden sm:inline-block">Classes</Link>
            <Link to="/events" className="hover:text-orange-300 hidden sm:inline-block">Events</Link>
            <Link to="/gallery" className="hover:text-orange-300 hidden sm:inline-block">Gallery</Link>
            <Link to="/aboutus" className="hover:text-orange-300 hidden sm:inline-block">About Us</Link>
            <Link to="/contactus" className="hover:text-orange-300 hidden sm:inline-block">Contact Us</Link>
            <button className="hover:text-orange-300 m-8 text-3xl sm:hidden"><HiBars3 /></button>
        </div>
        </>
    )
}