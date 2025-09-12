import Button from "../common/Button"

export const IndustryBanner=()=>{
    return(
        <div className="w-[930px] h-[449px] flex flex-col gap-[32px] opacity-100 pt-[80px] pr-[64px] pb-[80px] pl-[78px]">
  {/* Inner div */}
  <div className="w-[788px] h-[208px] flex flex-col gap-4 opacity-100">
    {/* First text */}
    <h1 className="font-sans font-bold text-[60px] text-white">
      Stop Fraud. Protect Profits. Strengthen Trust.
    </h1>

    {/* Second text */}
    <p className="font-inter font-normal text-[16px] text-[#F1F1F1]">
      Cyphr delivers investigator-led intelligence that helps insurance carriers detect fraud, deny false claims, recover funds, and safeguard long-term profitability.
    </p>
    <div className="flex gap-4 mt-6">
    <Button color="bg-[#1057B5]" text="Book a Consultation" isIcon={false} />
              <Button color="bg-transparent" text="Explore Our Services" isIcon={true} isBorder={true} />    
    </div>
  </div>
</div>
    )
}
