import women from"../image/women.png"
const Healthly = () => {
  return (
    <div className=" bg-[#527c58] grid grid-cols-1  xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
     <div className=" flex  px-20 2xl:justify-end xl:justify-start xl:px-10 lg:justify-start md:justify-start sm:justify-center ">
     <div className="w-4/6 mt-36 text-white xl:mt-24 lg:mt-10 md:mt-10 sm:mt-8">
        <h1 className="text-7xl font-extrabold mb-6 xl:text-6xl lg:text-6xl sm:text-5xl">Be healthy, enjoy life! </h1>
      <p className="mb-8 text-lg ">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
      <p className="mb-5 ">Image from <span className="underline underline-offset-4 hover:text-gray-600">Freepik</span> </p>
      <button className="border-2 border-white px-10 py-2 rounded-lg font-bold hover:bg-white hover:text-[#527c58] lg:mb-14 md:mb-12 sm:mb-12 ">JOIN NOW</button>
     </div>
      
     </div>
     <div>
    <img src={women} alt={women} className="w-full h-full pl-10 2xl:py-0 xl:py-10 lg:pl-10" />
     </div>
    </div>
  )
}

export default Healthly