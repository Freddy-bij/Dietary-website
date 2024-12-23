

const PricingCard = ({price,title,description,tarif1,tarif2,tarif3,tarif4,tarif5,btn}) => {
  return (
    <div className="bg-[#bbbdbb] p-4">
      <p>{price}</p>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{tarif1}</p>
      <p>{tarif2}</p>
      <p>{tarif3}</p>
      <p>{tarif4}</p>
      <p>{tarif5}</p>
      <button>{btn}</button>
    </div>
  )
}

export default PricingCard