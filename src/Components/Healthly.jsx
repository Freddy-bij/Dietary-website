import women from"../image/women.png"
const Healthly = () => {
  return (
    <div className="grid grid-cols-2">
     <div className="bg-[#527c58] flex justify-end px-20 ">
     <div className="w-4/6 mt-36 text-white  ">
        <h1 className="text-7xl font-extrabold">Be healthy, </h1>
        <h1 className="text-7xl font-extrabold mb-6">enjoy life!</h1>
      <p className="mb-8 text-lg ">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
      <p className="mb-5 ">Image from Freepik</p>
      <button className="border-2 border-white px-10 py-2 rounded-lg font-bold hover:bg-white hover:text-[#527c58]">JOIN NOW</button>
     </div>
      
     </div>
     <div>
    <img src={women} alt={women} className="w-full h-full" />
     </div>
    </div>
  )
}

export default Healthly