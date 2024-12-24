import PricingCard from "./PricingCard"

const Pricing = () => {
    
  return (
    <div className="pb-10">
        <div className="w-2/5 mx-auto text-center">
            <h1 className="pt-20 pb-8 text-5xl">Pricing</h1>
            <p className="text-base ">Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Cras semper auctor neque vitae tempus quam.</p>
        </div>
        <div className="grid grid-cols-1 w-2/3 gap-4 mx-auto my-8 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
        <PricingCard price="$39" title="Jumpstart Plan"  description="Perfect for get started on their " tarif="nutrition journey" tarif1="Online Consultation" tarif2="  Daily meal tracking" tarif3="Weekly meal tracking" tarif4="Strategy to more healthy" tarif5="Weight Assessment " btn="SELECT PLAN"/>
        <PricingCard price="$59" title="Transform Plan"  description="Perfect for get started on their " tarif="nutrition journey" tarif1="Online Consultation" tarif2="  Daily meal tracking" tarif3="Weekly meal tracking" tarif4="Strategy to more healthy" tarif5="Weight Assessment " btn="SELECT PLAN"/>
        <PricingCard price="$14" title="Daily Plan"  description="Perfect for get started on their " tarif="nutrition journey" tarif1="Online Consultation" tarif2="  Daily meal tracking" tarif3="Weekly meal tracking" tarif4="Strategy to more healthy" tarif5="Weight Assessment " btn="SELECT PLAN"/>
        </div>
    </div>
  )
}

export default Pricing