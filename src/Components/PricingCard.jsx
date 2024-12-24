import { TiTickOutline } from "react-icons/ti";
import { RxCrossCircled } from "react-icons/rx";

const PricingCard = ({price,title,tarif,description,tarif1,tarif2,tarif3,tarif4,tarif5,btn}) => {
  return (
    <div className="bg-[#eceeec] p-6">
      <p className="text-[#527c58] text-4xl font-bold pb-4">{price}<sapn className="text-xl font-normal ">/month</sapn></p>
      <h1 className="font-bold text-xl pb-4 capitalize">{title}</h1>
      <p className="text-base pb-2">{description}</p>
      <p  className="text-base pb-8">{tarif}</p>
      <p  className="text-base pb-1 flex items-center gap-1" ><TiTickOutline />{tarif1}</p>
      
      <p className="text-base pb-2 flex gap-1"><TiTickOutline />{tarif2}</p>
      <p className="text-base pb-5 flex items-center gap-1"><TiTickOutline />{tarif3}</p>
      <p className="text-base pb-2 flex items-center gap-1 text-gray-400"> <RxCrossCircled /> {tarif4}</p>
      <p className="text-base pb-2 flex items-center gap-1 text-gray-400"> <RxCrossCircled />{tarif5}</p>
      <button className="my-4 border-2 rounded-xl py-2 px-8 hover:bg-[#527c58] hover:text-white border-[#527c58] font-semibold text-[#527c58]">{btn}</button>
    </div>
  )
}

export default PricingCard