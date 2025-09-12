export default function IntegrityAtCore() {
  return (
    <div className="shadow-[0px_4px_4px_0px_#00000040] p-10">

      <div className="relative w-full rounded-[32px] border border-[#6D6D6D] overflow-hidden">
        
        <div className="absolute inset-0 bg-[url('/integrity.png')] bg-cover bg-center opacity-30 z-0" />

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col gap-16 pt-[76px] pr-[68px] pb-[76px] pl-[68px]">
          <div className="absolute top-1/3 left-[45%] w-[160px] h-[160px] rounded-full opacity-100 
  bg-[radial-gradient(circle,rgba(22,123,255,0.6)_0%,rgba(22,123,255,0.2)_100%)] 
  blur-[50.1px]" />
          {/* Top Cards */}
          <div className="flex flex-row justify-between items-start">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="flex flex-row gap-4 items-center rounded-[8px] bg-[#09346B80] pt-2 pr-4 pb-2 pl-4"
                style={{marginTop:item===1?16:0}}
              >
                <div className="w-[60px] h-[60px] flex flex-col gap-1 bg-[linear-gradient(180deg,rgba(47,47,47,0.17)_28.22%,rgba(1,72,165,0.2)_185.84%)] shadow-[0px_0px_10px_0px_#157AFF66] p-4 rounded-[42px]"></div>
                <span className="font-sans font-bold text-[20px] text-white tracking-normal">
                  Some Text {item}
                </span>
              </div>
            ))}
          </div>

          {/* Center Text */}
          <div className="flex flex-col gap-4 opacity-100 items-center">
            <h2 className="font-sans font-bold text-[48px] text-center text-white">
              Intelligence That Works For You.
            </h2>
            <p className="font-inter font-normal text-[16px] leading-6 text-center text-[#F1F1F1] max-w-2xl">
              Whether you’re an insurer, employer, law firm, or investigator, Cyphr delivers reliable intelligence that saves costs, strengthens cases, and safeguards reputation.
            </p>
          </div>

          {/* Bottom Cards */}
          <div className="flex flex-row justify-between items-start">
            {[1, 2].map((item) => (
              <div
                key={`bottom-${item}`}
                className="flex flex-row items-center gap-4 rounded-[8px] bg-[#09346B80] pt-2 pr-4 pb-2 pl-4"
                style={{ marginRight: item === 2 ? 60 : 0, marginLeft: item === 1 ? 16 : 0,marginTop:item===1?16:0 }}
              >
                <div className="w-[60px] h-[60px] flex flex-col gap-1 bg-[linear-gradient(180deg,rgba(47,47,47,0.17)_28.22%,rgba(1,72,165,0.2)_185.84%)] shadow-[0px_0px_10px_0px_#157AFF66] p-4 rounded-[42px]"></div>
                <span className="font-sans font-bold text-[20px] text-white tracking-normal">
                  Some Text {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


// {/* Center Glow */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[348px]  bg-[#167BFF] opacity-60 blur-[230.1px]"></div>

//         <div className="flex flex-col gap-8 rounded-[8px]  opacity-100 p-4">
//           {/* First Div */}
//           <div className="flex flex-row justify-between items-start">
//              {[1, 2].map((item) => (
//               <div
//                 key={item}
//                 className="flex flex-row gap-4 rounded-[8px] bg-[#09346B80] pt-2 pr-4 pb-2 pl-4 relative top-[98px] left-[150px]"
//               >
//                 {/* <div className="w-[60px] h-[60px] flex flex-col gap-1 bg-[linear-gradient(180deg,rgba(47,47,47,0.17)_28.22%,rgba(1,72,165,0.2)_185.84%)] shadow-[0px_0px_10px_0px_#157AFF66] p-4 rounded-[42px]"></div>
//                 <span className="font-sans font-bold text-[20px] text-white tracking-normal">
//                   Some Text {item}
//                 </span> */}
//               </div>
//             ))} 
//           </div>
//           </div>

//           {/* Second Div */}
//           <div className="flex flex-col gap-4 opacity-100">
//             <h2 className="font-sans font-bold text-[48px] text-center text-white">
//               Intelligence That Works For You.
//             </h2>
//             <p className="font-inter font-normal text-[16px] leading-6 text-center text-[#F1F1F1]">
//               Whether you’re an insurer, employer, law firm, or investigator, Cyphr
//               delivers reliable intelligence that saves costs, strengthens cases,
//               and safeguards reputation.
//             </p>
//           </div>

//           {/* Third Div (same as First Div) */}
//           <div className="flex flex-row justify-between items-start">
//             {/* {[1, 2].map((item) => (
//               <div
//                 key={`bottom-${item}`}
//                 className="flex flex-row gap-4 rounded-[8px] bg-[#09346B80] pt-2 pr-4 pb-2 pl-4 relative top-[98px] left-[150px]"
//               >
//                 <div className="w-[60px] h-[60px] flex flex-col gap-1 bg-[linear-gradient(180deg,rgba(47,47,47,0.17)_28.22%,rgba(1,72,165,0.2)_185.84%)] shadow-[0px_0px_10px_0px_#157AFF66] p-4 rounded-[42px]"></div>
//                 <span className="font-sans font-bold text-[20px] text-white tracking-normal">
//                   Some Text {item}
//                 </span>
//               </div>
//             ))} */}
//           </div>