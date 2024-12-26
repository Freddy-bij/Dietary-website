import { useState } from "react"
import { Link } from "react-router"
import { IoIosMenu } from "react-icons/io";


const NavBar = () => {
  const [isHiden , setIsHiden]=useState(false)

  return (
   <>
    <nav className="flex bg-white text-black justify-between  2xl:justify-around py-4 xl:justify-between lg:justify-between md:justify-between sm:justify-between">
        <h1 className="text-3xl font-bold text-[#aca4a48f] lg:px-10 ">logo</h1>
        <ul className="  gap-10 text-lg uppercase 2xl:flex xl:flex lg:hidden md:hidden sm:hidden hidden">
            <li className="hover:bg-[#79ad7f] hover:text-white py-1 px-3"><Link to="/">About</Link></li>
            <li className="hover:bg-[#79ad7f] hover:text-white py-1 px-3"> <Link to="/contact">Contact</Link></li>
            <li className="hover:bg-[#79ad7f] hover:text-white py-1 px-3"><Link to="/home">Home</Link></li>
        </ul>
          <div className="flex 2xl:hidden xl:hidden lg:flex text-3xl lg:items-center lg:text-3xl md:text-3xl sm:text-3xl px-10" >
          <IoIosMenu onClick={()=>setIsHiden(prev =>!prev)} /> 
          </div>
         
          <div className={isHiden ?'flex justify-center 2xl:hidden xl:hidden  lg:flex absolute top-0 h-full lg:items-start lg:text-3xl px-10 w-1/2 bg-black text-white':'hidden'}>
    <ul className=''>
           <li className="hover:bg-[#79ad7f] hover:text-white py-1 px-3"><Link to="/">About</Link></li>
           <li className="hover:bg-[#79ad7f] hover:text-white py-1 px-3"> <Link to="/contact">Contact</Link></li>
           <li className="hover:bg-[#79ad7f] hover:text-white py-1 px-3"><Link to="/home">Home</Link></li>
       </ul>
    </div>
    </nav>

        

   
    
   </>
  
  )
}

export default NavBar