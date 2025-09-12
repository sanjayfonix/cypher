export const WhyConsulting=()=>{
    return<div className={'py-4 px-2 flex flex-col'}>
    <h2 className="text-white text-4xl font-bold font-sans text-center">Why Consulting & Advisory?</h2>
    <div className="flex flex-col">
    <div className="flex px-16 justify-between w-[100%] items-center">
    <div className="flex gap-1 text-white font-normal text-2xl max-w-[32%]">
    <span>1.</span> 
    <span>Leverage advanced intelligence techniques and unique data sources to enhance security, prevent fraud, and inform critical decisions</span>    
    </div>
    <img src={'/services1.png'} className="w-1/3 h-1/3 object-cover"/>
    </div> 
    <div className="flex px-16 justify-between w-[100%] items-center">
    <img src={'/services2.png'} className="w-1/3 h-1/3 object-cover"/>
    <div className="flex gap-1 text-[#FFFFFF4D] font-normal text-2xl max-w-[35%]">
    <span>2.</span> 
    <span>Take command of your own destiny – build robust risk management frameworks, optimize investigative processes, and achieve a decisive competitive edge in today's dynamic landscape</span>    
    </div>
    </div>
    <div className="flex px-16 justify-between w-[100%] items-center">
    <div className="flex gap-1 text-[#FFFFFF4D] font-normal text-2xl max-w-[32%]">
    <span>1.</span> 
    <span>Unlock actionable insights and secure your future </span>    
    </div>
    <img src={'/services3.png'} className="w-1/3 h-1/3 object-cover"/>
    </div>    
    </div>
    </div>
}