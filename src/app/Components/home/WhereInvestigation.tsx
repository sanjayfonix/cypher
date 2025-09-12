export default function WhereInvestigation() {
  return (
    <div className="bg-black text-white px-7 py-4 flex flex-col items-center">
      {/* Header */}
      <div className="text-center max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Where Investigation Meets Innovation
        </h1>
        <p className="text-gray-400 mb-12">
          Comprehensive expertise to solve critical challenges and drive confident decisions.
        </p>
      </div>

      {/* Two-column flex layout */}
      <div className="flex flex-col md:flex-row gap-6  w-full">

        {/* Left Column */}
        <div className="flex flex-col justify-between flex-1 gap-6">
          {/* Consulting & Advisory */}
          <div className="relative bg-gradient-to-b from-[#030A1400] to-[#167BFFB2] border border-[#6D6D6D99] p-6 rounded-3xl shadow-lg flex flex-col justify-between h-full">
            <div className="absolute bottom-0 right-0 bg-cover bg-no-repeat bg-[url('/Union.png')] w-[16.16rem] h-[15.203rem] z-10"/>
            <div className="flex flex-col gap-3 relative z-20">
              <h2 className="text-4xl font-bold font-sans">Consulting & Advisory</h2>
              <p className="text-[#F1F1F1] text-lg font-medium font-sans">
                Transform complex data into your strategic advantage
              </p>
              <p className="text-[#E3E3E3] text-[1rem] font-normal font-inter">
                Leverage intelligence techniques to make informed decisions, enhance security, and mitigate risks.
              </p>
            </div>
            <button className="font-medium text-[1rem] w-fit border border-[#D5D5D5] gap-2 bg-transparent text-[#E5E5E5] rounded-full pl-4 pr-2 py-3 flex items-center mt-4">
              See How It works{" "}
              <span>
                <img src={"/arrow-down-right.svg"} className="w-6 h-6 object-cover"/>
              </span>
            </button>
          </div>

         
          {/* Social Media Intelligence */}
          <div className=" relative bg-[linear-gradient(110.77deg,rgba(3,10,20,0)_0%,rgba(22,123,255,0.12)_91.47%)] border border-[#6D6D6D] rounded-3xl shadow-lg flex flex-col justify-between h-full">
            <div className="absolute -bottom-30 left-35 -z-1 w-[420px] h-[220px] opacity-100 bg-[radial-gradient(50%_50%_at_50%_50%,#1470E8_0%,#020812_100%)] blur-[31.3px]" />
              {/* Bottom radial glow */}
            <div className="p-6 flex flex-col gap-2 z-20">
              <h2 className="text-4xl font-bold text-white font-sans">Social Media Intelligence</h2>
              <p className="text-[#E3E3E3] text-lg font-medium font-sans">
                Turn online data into actionable intelligence.
              </p>
              <p className="text-[#E3E3E3] text-sm font-normal font-inter">
                We extract critical insights from social media, offering real-time fraud detection and litigation support.
              </p>
            </div>
            <button className="font-medium text-[1rem] w-fit border border-[#D5D5D5] gap-2 bg-transparent text-[#E5E5E5] rounded-full pl-4 pr-2 py-3 flex items-center m-6">
              See How It works{" "}
              <span>
                <img src={"/arrow-down-right.svg"} className="w-6 h-6 object-cover"/>
              </span>
            </button>

            {/* Floating divs / glows inside Social Media Intelligence */}
            <div className="relative  flex items-end justify-center mx-auto w-[367px] h-[367px]">
              {/* Small floating circles */}
              <div className="absolute top-[20%] left-[0px] w-[60px] h-[60px] flex flex-col gap-1 p-2 rounded-[42px] opacity-100 bg-[linear-gradient(180deg,rgba(3,10,20,0.2)_28.22%,rgba(21,122,255,0.2)_185.84%)] shadow-[0_0_50px_0_#157AFF99]"/>
              <div className="absolute top-[0%] left-[25%] w-[60px] h-[60px] flex flex-col gap-1 p-2 rounded-[42px] opacity-100 bg-[linear-gradient(180deg,rgba(3,10,20,0.2)_28.22%,rgba(21,122,255,0.2)_185.84%)] shadow-[0_0_50px_0_#157AFF99]"/>
              <div className="absolute top-[0%] left-[59%] w-[60px] h-[60px] flex flex-col gap-1 p-2 rounded-[42px] opacity-100 bg-[linear-gradient(180deg,rgba(3,10,20,0.2)_28.22%,rgba(21,122,255,0.2)_185.84%)] shadow-[0_0_50px_0_#157AFF99]"/>
              <div className="absolute top-[20%] left-[82%] w-[60px] h-[60px] flex flex-col gap-1 p-2 rounded-[42px] opacity-100 bg-[linear-gradient(180deg,rgba(3,10,20,0.2)_28.22%,rgba(21,122,255,0.2)_185.84%)] shadow-[0_0_50px_0_#157AFF99]"/>

              {/* Vertical rectangle */}
              <div className="relative overflow-y-hidden overflow-x-visible w-[153px] h-[259px] flex flex-col gap-1 p-2 rounded-[5px] opacity-100 bg-[linear-gradient(180deg,rgba(3,10,20,0.2)_28.22%,rgba(21,122,255,0.2)_185.84%)] shadow-[0_0_110px_0_#157AFF66]">
                <div className="w-4 h-1 rounded-sm mt-2 bg-[#D9D9D9] self-center"></div>

              </div>
                                            

            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between flex-1 gap-6">
          
 {/* Brand Defense */}
          <div className="relative bg-[linear-gradient(110.77deg,rgba(3,10,20,0)_0%,rgba(22,123,255,0.12)_91.47%)] border border-[#6D6D6D] rounded-3xl shadow-lg flex flex-col justify-between h-full">
            {/* Text Content */}
            <div className="p-6 flex flex-col gap-2 z-20">
              <h2 className="text-4xl font-bold text-white font-sans">Brand Defense</h2>
              <p className="text-[#E3E3E3] text-lg font-medium font-sans">
                Protect your brand from digital threats
              </p>
              <p className="text-[#E3E3E3] text-sm font-normal font-inter">
                Detect counterfeit operations, cyber threats, and reputation damage early to take proactive action.
              </p>
            </div>

            {/* Button */}
            <button className="font-medium text-[1rem] w-fit border border-[#D5D5D5] gap-2 bg-transparent text-[#E5E5E5] rounded-full pl-4 pr-2 py-3 flex items-center m-6">
              See How It works{" "}
              <span>
                <img src={"/arrow-down-right.svg"} className="w-6 h-6 object-cover"/>
              </span>
            </button>

            {/* Concentric circles */}
            <div className="flex justify-center items-center relative left-[20%] -top-[1.25rem] opacity-50 w-[24.75rem] h-[24.75rem] rounded-full border-solid border-[1px] border-[#09336B]">
              <div className="flex justify-center items-center opacity-80 w-[21.25rem] h-[21.25rem] rounded-full border-solid border-[1px] border-[#09336B]">
                <div className="flex justify-center items-center opacity-90 w-[17.625rem] h-[17.625rem] rounded-full border-solid border-[1px] border-[#09336B]">
                  {/* Inner radial glow */}
                  <div className="absolute w-[160px] h-[160px] rounded-full opacity-100 
                    bg-[#167BFF99] 
                    blur-[1.1px]" 
                  />
                  <div
                    style={{
                      width: '205.607px',
                      height: '210.795px',
                      top: '72px',
                      left: '180px',
                      transform: 'rotate(-0.47deg)',
                      padding: '8px',
                      borderRadius: '500px',
                      opacity: 1,
                      background: 'linear-gradient(180deg, #030A14 44.67%, #157AFF 185.84%)',
                      boxShadow: '0px 0px 150px #157AFF80',
                    }}
                  />
                </div>  
              </div>  
            </div>

          </div>
          {/* Geospatial Cellular Forensics */}
          <div className="relative bg-gradient-to-b from-[#030A1400] to-[#167BFFB2] border border-[#6D6D6D99] p-6 rounded-3xl shadow-lg flex flex-col justify-between h-full">
            <div className="flex flex-col gap-3 z-20">
              <h2 className="text-4xl font-bold font-sans">Geospatial Cellular Forensics</h2>
              <p className="text-[#F1F1F1] text-lg font-medium font-sans">
                Unlock the power of location-based intelligence.
              </p>
              <p className="text-[#E3E3E3] text-[1rem] font-normal font-inter">
                Analyze mobile device data to track movement, verify alibis, and uncover hidden connections.
              </p>
            </div>
            <button className="font-medium text-[1rem] w-fit border border-[#D5D5D5] gap-2 bg-transparent text-[#E5E5E5] rounded-full pl-4 pr-2 py-3 flex items-center mt-4">
              See How It works{" "}
              <span>
                <img src={"/arrow-down-right.svg"} className="w-6 h-6 object-cover"/>
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}





