import { useState } from "react"
import { Link } from "react-router"
import { IoIosMenu } from "react-icons/io";


const NavBar = () => {
  const [isHiden , setIsHiden]=useState(false)
  return (
   <>
    <nav className="flex bg-white text-black  2xl:justify-around py-4 xl:justify-between lg:justify-between md:justify-between sm:justify-between">
        <h1 className="text-3xl font-bold text-[#aca4a48f] lg:px-10 ">logo</h1>
        <ul className="  gap-10 text-lg uppercase 2xl:flex xl:flex lg:hidden md:hidden sm:hidden hidden">
            <li className="hover:bg-[#79ad7f] hover:text-white py-1 px-3"><Link to="/">About</Link></li>
            <li className="hover:bg-[#79ad7f] hover:text-white py-1 px-3"> <Link to="/contact">Contact</Link></li>
            <li className="hover:bg-[#79ad7f] hover:text-white py-1 px-3"><Link to="/home">Home</Link></li>
        </ul>
        <div className=" 2xl:hidden xl:hidden lg:flex  lg:items-center lg:text-3xl px-10 ">
        <IoIosMenu onClick={()=> setIsHiden(e => true)}/>
        </div>
    </nav>
  
   </>
  
  )
}

export default NavBar