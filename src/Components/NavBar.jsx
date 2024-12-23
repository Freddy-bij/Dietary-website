import { Link } from "react-router"


const NavBar = () => {
  return (
    <nav className="flex bg-white text-black w-2/3 mx-auto justify-between py-4">
        <h1 className="text-3xl font-bold text-[#aca4a48f]">logo</h1>
        <ul className="flex gap-10 text-lg uppercase ">
            <li className="hover:bg-[#79ad7f] hover:text-white py-1 px-3"><Link to="/">About</Link></li>
            <li className="hover:bg-[#79ad7f] hover:text-white py-1 px-3"> <Link to="/contact">Contact</Link></li>
            <li className="hover:bg-[#79ad7f] hover:text-white py-1 px-3"><Link to="/home">Home</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar