import PricingCard from "./PricingCard"

const Pricing = () => {
    
  return (
    <div>
        <div className="w-2/5 mx-auto text-center">
            <h1 className="pt-20 pb-8 text-5xl">Pricing</h1>
            <p className="text-base pb-6">Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Cras semper auctor neque vitae tempus quam.</p>
        </div>
        <div className="grid grid-cols-3 w-2/3 gap-4 mx-auto">
        <PricingCard price="$39/mois" title="Jumpstart Plan"  description="Perfect for get started on their nutrition journey" tarif1="Online Consultation" tarif2="  Daily meal tracking" tarif3="Weekly meal tracking" tarif4="Strategy to more healthy" tarif5="Weight Assessment " btn="SELECT PLAN"/>
        <PricingCard price="$59/mois" title="Transform Plan"  description="Perfect for get started on their nutrition journey" tarif1="Online Consultation" tarif2="  Daily meal tracking" tarif3="Weekly meal tracking" tarif4="Strategy to more healthy" tarif5="Weight Assessment " btn="SELECT PLAN"/>
        <PricingCard price="$149/mois" title="Daily Plan"  description="Perfect for get started on their nutrition journey" tarif1="Online Consultation" tarif2="  Daily meal tracking" tarif3="Weekly meal tracking" tarif4="Strategy to more healthy" tarif5="Weight Assessment " btn="SELECT PLAN"/>
        </div>
    </div>
  )
}

export default Pricing