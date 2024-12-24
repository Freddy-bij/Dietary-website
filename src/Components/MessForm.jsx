import womenSalade from"../image/salade.png"

const MessForm = () => {
  return (
    <div className="grid grid-cols-1 w-2/3 mx-auto my-16 gap-10 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
        <div className="px-6 py-16 bg-[#bcdac0] rounded-lg ">
            <div className="pb-8">
               
               <div className="w-40 h-40 pb-6 "> <img src={womenSalade} alt={womenSalade} className="rounded-full w-full h-full"/></div>
                <h1 className="text-6xl"> Say hello</h1>
            </div>

            <p className="leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
       <div className="pt-8">
        <div className="grid grid-cols-1  gap-5 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2"> 
            <div className="flex flex-col">
            <label className=" pb-4">FirstName</label>
            <input type="text" placeholder="Enter your First Name" className="outline-none  border-b-2 border-b-[#527c58]  pb-3"/>
            </div>
           <div className="flex flex-col">
           <label className=" pb-4">LastName</label>
           <input type="text" placeholder="enter your Last Name" className="outline-none  border-b-2 border-b-[#527c58] pb-3" />
           </div>
            <div className="flex flex-col">
                <label className="pb-4" >Email</label>
                <input type="text" placeholder="Enter a valid Email Adress" className="outline-none  border-b-2 border-b-[#527c58] pb-3" />
            </div>

            <div className="flex flex-col">
                <label className="pb-4">Phone</label>
                <input type="" placeholder="enter your phone number " className="outline-none  border-b-2 border-b-[#527c58] pb-3" />
            </div>
           <div className="flex flex-col">
           <label className="pb-4">Message</label>
           <textarea placeholder="Enter your Message" className="outline-none  border-b-2 border-b-[#527c58] pb-3 "></textarea>
           </div>
           </div>
           <button className="bg-[#527c58] w-full mt-7 py-4 text-white rounded-lg hover:bg-[#bcdac0] hover:text-black">SUBMIT</button>
        </div>
        
    </div>
  )
}

export default MessForm