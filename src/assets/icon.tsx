import React from 'react';

interface CategoryIconProps {
    className?: string;
    style?: React.CSSProperties;
}

const CategoryIcon: React.FC<CategoryIconProps> = ({ className, style }) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
        >
            <path
                opacity="0.4"
                d="M14.0756 0H17.4616C18.8639 0 20.0001 1.14585 20.0001 2.55996V5.97452C20.0001 7.38864 18.8639 8.53449 17.4616 8.53449H14.0756C12.6734 8.53449 11.5371 7.38864 11.5371 5.97452V2.55996C11.5371 1.14585 12.6734 0 14.0756 0Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.53852 0H5.92449C7.32676 0 8.46301 1.14585 8.46301 2.55996V5.97452C8.46301 7.38864 7.32676 8.53449 5.92449 8.53449H2.53852C1.13626 8.53449 0 7.38864 0 5.97452V2.55996C0 1.14585 1.13626 0 2.53852 0ZM2.53852 11.4655H5.92449C7.32676 11.4655 8.46301 12.6114 8.46301 14.0255V17.44C8.46301 18.8532 7.32676 20 5.92449 20H2.53852C1.13626 20 0 18.8532 0 17.44V14.0255C0 12.6114 1.13626 11.4655 2.53852 11.4655ZM17.4615 11.4655H14.0755C12.6732 11.4655 11.537 12.6114 11.537 14.0255V17.44C11.537 18.8532 12.6732 20 14.0755 20H17.4615C18.8637 20 20 18.8532 20 17.44V14.0255C20 12.6114 18.8637 11.4655 17.4615 11.4655Z"
                fill="currentColor"
            />
        </svg>
    );
};

export default CategoryIcon;

export const Email = () => (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="46" height="46" rx="23" fill="white" fill-opacity="0.06" />
        <path d="M15.4737 14H30.5263C31.4476 14 32.3311 14.3793 32.9826 15.0544C33.634 15.7295 34 16.6452 34 17.6V28.4C34 29.3548 33.634 30.2705 32.9826 30.9456C32.3311 31.6207 31.4476 32 30.5263 32H15.4737C14.5524 32 13.6689 31.6207 13.0174 30.9456C12.366 30.2705 12 29.3548 12 28.4V17.6C12 16.6452 12.366 15.7295 13.0174 15.0544C13.6689 14.3793 14.5524 14 15.4737 14ZM15.4737 15.2C14.8947 15.2 14.3853 15.404 13.9916 15.764L23 21.8L32.0084 15.764C31.6147 15.404 31.1053 15.2 30.5263 15.2H15.4737ZM23 23.252L13.3084 16.736C13.2158 17 13.1579 17.3 13.1579 17.6V28.4C13.1579 29.0365 13.4019 29.647 13.8362 30.0971C14.2705 30.5471 14.8595 30.8 15.4737 30.8H30.5263C31.1405 30.8 31.7295 30.5471 32.1638 30.0971C32.5981 29.647 32.8421 29.0365 32.8421 28.4V17.6C32.8421 17.3 32.7842 17 32.6916 16.736L23 23.252Z" fill="#157AFF" />
    </svg>


);

export const Headquators = () => (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="46" height="46" rx="23" fill="white" fill-opacity="0.06" />
        <path d="M15.309 20.6108L28.7062 14.2322C30.6595 13.3015 32.6978 15.3408 31.7682 17.2951L25.3891 30.6901C24.517 32.5203 21.8743 32.4077 21.1619 30.5086L19.9831 27.3617C19.8679 27.0547 19.6883 26.776 19.4564 26.5441C19.2246 26.3123 18.9458 26.1327 18.6388 26.0175L15.4905 24.8376C13.5924 24.1253 13.4787 21.4828 15.309 20.6108Z" stroke="#157AFF" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);
export const Bell = () => (
    <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.65625 17.24H19.6562V10.28C19.6562 9.01334 19.3362 7.83334 18.6962 6.74001C18.0829 5.67334 17.2496 4.82668 16.1962 4.20001C15.1029 3.57334 13.9229 3.26001 12.6562 3.26001C11.3896 3.26001 10.2096 3.57334 9.11625 4.20001C8.06292 4.82668 7.22958 5.67334 6.61625 6.74001C5.97625 7.83334 5.65625 9.01334 5.65625 10.28V17.24ZM12.6562 1.24001C14.2829 1.24001 15.7962 1.65334 17.1962 2.48001C18.5562 3.28001 19.6362 4.36001 20.4362 5.72001C21.2496 7.12001 21.6562 8.64001 21.6562 10.28V19.24H3.65625V10.28C3.65625 8.64001 4.06292 7.12001 4.87625 5.72001C5.67625 4.36001 6.75625 3.28001 8.11625 2.48001C9.51625 1.66668 11.0296 1.26001 12.6562 1.26001V1.24001ZM10.1562 20.24H15.1562C15.1562 20.6933 15.0429 21.1133 14.8162 21.5C14.5896 21.8867 14.2863 22.1933 13.9062 22.42C13.5262 22.6467 13.1096 22.76 12.6562 22.76C12.2029 22.76 11.7863 22.6467 11.4062 22.42C11.0262 22.1933 10.7229 21.8867 10.4962 21.5C10.2696 21.1133 10.1562 20.7 10.1562 20.26V20.24Z" fill="white" />
    </svg>
);
export const Toparrow = () => (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 17.375L17 7.375M17 7.375H7M17 7.375V17.375" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

);

export const Shield = () => (
   <svg width={44} height={45} viewBox="0 0 44 45" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M22 41.75L13.508 37.2221C11.0869 35.9344 9.06222 34.0116 7.65137 31.6601C6.24053 29.3086 5.49678 26.6173 5.5 23.875V6C5.5 5.27065 5.78973 4.57118 6.30546 4.05546C6.82118 3.53973 7.52065 3.25 8.25 3.25H35.75C36.4793 3.25 37.1788 3.53973 37.6945 4.05546C38.2103 4.57118 38.5 5.27065 38.5 6V23.875C38.5032 26.6173 37.7595 29.3086 36.3486 31.6601C34.9378 34.0116 32.9131 35.9344 30.492 37.2221L22 41.75ZM8.25 6V23.875C8.24847 26.1186 8.85758 28.3203 10.012 30.244C11.1665 32.1678 12.8227 33.7411 14.8032 34.7952L22 38.6329L29.1968 34.7966C31.1775 33.7424 32.8339 32.1688 33.9883 30.2448C35.1428 28.3208 35.7518 26.1188 35.75 23.875V6H8.25Z" fill="#167BFF"/>
<path d="M22 35.2559V8.75H33V23.6069C32.9999 25.3497 32.5266 27.0598 31.6306 28.5547C30.7346 30.0496 29.4495 31.2731 27.9125 32.0948L22 35.2559Z" fill="#167BFF"/>
</svg>
);

export const Find = () => (
  
<svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34.7444 37L24.5944 26.85C23.7889 27.4944 22.8625 28.0046 21.8153 28.3806C20.7681 28.7565 19.6537 28.9444 18.4722 28.9444C15.5454 28.9444 13.0686 27.9305 11.0418 25.9027C9.015 23.8748 8.00107 21.398 8 18.4722C7.99893 15.5464 9.01285 13.0696 11.0418 11.0418C13.0707 9.01393 15.5475 8 18.4722 8C21.3969 8 23.8743 9.01393 25.9043 11.0418C27.9343 13.0696 28.9477 15.5464 28.9444 18.4722C28.9444 19.6537 28.7565 20.7681 28.3806 21.8153C28.0046 22.8625 27.4944 23.7889 26.85 24.5944L37 34.7444L34.7444 37ZM18.4722 25.7222C20.4861 25.7222 22.1982 25.0176 23.6084 23.6084C25.0187 22.1993 25.7233 20.4872 25.7222 18.4722C25.7211 16.4573 25.0166 14.7457 23.6084 13.3376C22.2003 11.9295 20.4883 11.2244 18.4722 11.2222C16.4562 11.2201 14.7446 11.9252 13.3376 13.3376C11.9306 14.75 11.2254 16.4616 11.2222 18.4722C11.219 20.4829 11.9241 22.195 13.3376 23.6084C14.7511 25.0219 16.4626 25.7265 18.4722 25.7222Z" fill="white"/>
</svg>
);

export const Graph = () => (
  
<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.7387 31.6855V33.7383H5.02638L4 32.7119V4.99951H6.05277V31.6855H32.7387Z" fill="white"/>
<path d="M28.6331 11.5835L18.0696 22.1491H16.6162L13.2374 18.7682L5.75298 26.2546L4.29962 24.8013L12.5107 16.5902H13.9641L17.3429 19.9711L27.9065 9.40552H29.3578L33.4633 13.5111L32.012 14.9644L28.6331 11.5835Z" fill="white"/>
</svg>
);

export const DropDown = () => (
  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7.5L8 0.5L15 7.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

export const DropUp = () => (
  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.5L8 7.5L15 0.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

export const Tick = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM6.5 11.75L2.75 8L3.8075 6.9425L6.5 9.6275L12.1925 3.935L13.25 5L6.5 11.75Z" fill="#157AFF"/>
</svg>
);

export const ServicesIcon = () => (
  <svg
    className="w-10 h-10 sm:w-12 sm:h-12 md:w-[102px] md:h-[102px]"
    viewBox="0 0 102 102"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g filter="url(#filter0_dddi_1_1657)">
      <rect x="24" y="24" width="54" height="54" rx="27" fill="#1057B5"/>
      <rect x="35.8799" y="35.8799" width="30.9622" height="30.4263" fill="url(#pattern0_1_1657)"/>
    </g>
    <defs>
      <filter id="filter0_dddi_1_1657" x="0" y="0" width="102" height="102" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.149167 0 0 0 0 0.54055 0 0 0 0 1 0 0 0 0.5 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1657"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="4"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.0784314 0 0 0 0 0.439216 0 0 0 0 0.909804 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_1_1657" result="effect2_dropShadow_1_1657"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="12"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.172115 0 0 0 0 0.531386 0 0 0 0 1 0 0 0 0.6 0"/>
        <feBlend mode="normal" in2="effect2_dropShadow_1_1657" result="effect3_dropShadow_1_1657"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_1_1657" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.535577 0 0 0 0 0.749211 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect4_innerShadow_1_1657"/>
      </filter>
      <pattern id="pattern0_1_1657" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_1_1657" transform="scale(0.00934579)" />
      </pattern>
      <image id="image0_1_1657" width="107" height="107" preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAABrCAYAAABwv3wMAAAACXBIWXMAABM5AAATOQGPwlYBAAADHklEQVR4nO3bPagcVRjG8Zm9k3CJNn5UinbGL6yCio2FIaKiWBhUsLMwCIqNpDEIFnZamBCQVFpcrALBBESwU1DbQBBSBLS5Ri3uYnZzdt73mdfibjEczpUoumcD/199Yf7wcPayM7NNAwAAAAAAAAAAAAAAAAAAAAAAAPxnIuIBdz9uZs/VbsHfSCndL+laLEn6oHYT9uDu78aIpMHd36rdhQIzeyYykuTur9ZuQ4GkjwuDLczs6dptyETERNLnhcH+7Pv+8dp9yETEPkkXCoP9nlJ6sHYfMhFxQNJ3hcF+ns/n99TuQ2ZnZ+d2SRcLg12aTqd31O5DZjab3S3pSmGw77e3t2+p3YdMSumgpKuFwb6KiP21+5CJiEOSpoXBtiJiUrsPGTM7LOl6YbBParehwMyOSvJ8MHd/r3YbCtz9mKQhO11DRLxRuw0F7n6i8HHoZvZS7TYUSDpZGOy6mT1Vuw2Z2L2PuFUYbBoRh2r3IRMR+5fft/LBfk0p3Ve7D5mIuFXSD4XBLkfEvtp9yCxvS6V8sMVi8UjtNoxERCfpbOFk/cb9wzUSEa2kM4Wh5n3fP1m7DyOSPiwMZWb2Yu02jLj7O4WhBnd/vXYbRtz9NUnKx3L347XbMGJmz0paFE7VR7XbMNL3/RPjt3ZHPguea62PxWLxsKQ/CifqfPDld31ExL2SfikM9W1EHKjdh6WIuFPST4WhLkbEbbX7sBS79/1+LAx1ZTab3VW7D0uxe0f968JQV1NKB2v3YSl2n1V9URiKZ1XrRtKpwlA8BV437v5+YSg3s6O12zDi7m+W3lxy92O12zDS9/1je7wTeKJ2GzL5b4qXp+pk7S4U9H3/6Phk8R77v9Ou6kJmdmQymbwcEZc2NjZOt21re/2tu7/dtu0rTdOs+y9JFhGx1XXdp6u42MrGulFm9nzXdedrd/xDR9q2/eb/vsjafRS1bXvTvbUkaSXNazeWpC+HYZjX7rhRwzBcc/cLq7jW2n0MNk3TpJQe6rruheYm+J/l7uc2Nzcv1w4BAAAAAAAAAAAAAAAAAAAAAAAAAOztL8qrbBCyblGBAAAAAElFTkSuQmCC"/>
    </defs>
  </svg>
);


export const MagIcon = () => (
 <svg className='overflow-hidden animate-spin-slow' width="120"  height="150" rotate="150" viewBox="0 0 123 119" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M116.926 118.708C114.676 120.464 70.6114 73.4932 70.6114 73.4932C66.9134 76.5692 62.6606 78.9495 57.8531 80.6343C53.0457 82.3191 48.2136 83.1615 43.3568 83.1615C31.5131 83.1615 21.4889 79.1589 13.2842 71.1538C5.07943 63.1486 0.977051 53.3648 0.977051 41.8024C0.977051 30.2399 5.07449 20.4513 13.2694 12.4365C21.4643 4.42175 31.4835 0.409547 43.3272 0.39992C55.1708 0.390292 65.2 4.39527 73.4146 12.4149C81.6292 20.4345 85.7365 30.2231 85.7365 41.7807C85.7365 46.7966 84.8268 51.6512 83.0073 56.3445C81.1879 61.0378 78.7965 65.0524 75.8331 68.3883C75.8331 68.3883 123.949 111.383 122.148 113.596C120.346 115.809 119.176 116.952 116.926 118.708ZM43.3642 75.9338C53.1763 75.9338 61.46 72.6364 68.2151 66.0416C74.9702 59.4469 78.3478 51.3575 78.3478 41.7735C78.3478 32.1894 74.9702 24.1025 68.2151 17.5125C61.46 10.9226 53.1763 7.62525 43.3642 7.62044C33.552 7.61562 25.2659 10.913 18.5058 17.5125C11.7458 24.1121 8.36823 32.1991 8.37316 41.7735C8.37809 51.3479 11.7556 59.4349 18.5058 66.0344C25.256 72.634 33.5397 75.9314 43.3568 75.9265" fill="#E8F2FF"/>
   {/* foreignObject for blur area */}
    <foreignObject x="7.655762" y="7.124512" width="70.5574" height="70.6033">
      <div
        style={{
          width: "100%",
          height: "100%",
          backdropFilter: "blur(8px)",
          borderRadius: "35.3016px",
        }}
      />
    </foreignObject>
</svg>
);

export const Grid = () => (
 <svg width="195" height="256" viewBox="0 0 195 256" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.6">
<path d="M114.264 106.186H85.5601V0H84.5601V106.186H55.8569V0H54.8569V106.186H26.1528V0H25.1528V106.186H-0.590332V107.186H25.1528V145.084H-0.885254V146.084H25.1528V183.982H-1.18018V184.982H25.1528V222.879H-1.47607V223.879H25.1528V255H26.1528V223.879H54.8569V255H55.8569V223.879H84.5601V255H85.5601V223.879H114.264V255H115.264V223.879H193.25V222.879H115.264V184.982H193.545V183.982H115.264V146.084H193.84V145.084H115.264V107.186H194.135V106.186H115.264V0H114.264V106.186ZM114.264 222.879H85.5601V184.982H114.264V222.879ZM84.5601 222.879H55.8569V184.982H84.5601V222.879ZM54.8569 222.879H26.1528V184.982H54.8569V222.879ZM114.264 183.982H85.5601V146.084H114.264V183.982ZM84.5601 183.982H55.8569V146.084H84.5601V183.982ZM54.8569 183.982H26.1528V146.084H54.8569V183.982ZM114.264 107.186V145.084H85.5601V107.186H114.264ZM84.5601 107.186V145.084H55.8569V107.186H84.5601ZM54.8569 107.186V145.084H26.1528V107.186H54.8569Z" fill="url(#paint0_linear_222_2167)"/>
<g filter="url(#filter0_dd_222_2167)">
<path d="M55.575 202.711L56.4055 221.871C56.4055 221.871 55.8993 222.688 55.575 222.688C55.2507 222.688 54.7446 221.871 54.7446 221.871L55.575 202.711Z" fill="url(#paint1_linear_222_2167)"/>
</g>
<g filter="url(#filter1_dd_222_2167)">
<path d="M77.7046 145.019L97.0755 145.84C97.0755 145.84 97.901 145.339 97.901 145.019C97.901 144.698 97.0755 144.197 97.0755 144.197L77.7046 145.019Z" fill="url(#paint2_linear_222_2167)"/>
</g>
<g filter="url(#filter2_dd_222_2167)">
<path d="M54.692 72.4824L53.8616 53.3221C53.8616 53.3221 54.3678 52.5055 54.692 52.5055C55.0163 52.5055 55.5225 53.3221 55.5225 53.3221L54.692 72.4824Z" fill="url(#paint3_linear_222_2167)"/>
</g>
</g>
<defs>
<filter id="filter0_dd_222_2167" x="52.7446" y="200.711" width="5.66064" height="23.9771" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_222_2167"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_222_2167" result="effect2_dropShadow_222_2167"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_222_2167" result="shape"/>
</filter>
<filter id="filter1_dd_222_2167" x="75.7046" y="142.197" width="24.1963" height="5.64258" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_222_2167"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_222_2167" result="effect2_dropShadow_222_2167"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_222_2167" result="shape"/>
</filter>
<filter id="filter2_dd_222_2167" x="51.8618" y="50.5054" width="5.66064" height="23.9771" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_222_2167"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_222_2167" result="effect2_dropShadow_222_2167"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_222_2167" result="shape"/>
</filter>
<linearGradient id="paint0_linear_222_2167" x1="-9.50135" y1="242.466" x2="220.586" y2="106.208" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.1"/>
<stop offset="1" stop-color="#999999" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_222_2167" x1="55.575" y1="222.688" x2="55.5751" y2="202.711" gradientUnits="userSpaceOnUse">
<stop offset="0.0240385" stop-color="#C4DEFF"/>
<stop offset="0.630248" stop-color="#006EFF"/>
<stop offset="1" stop-color="#093C80"/>
</linearGradient>
<linearGradient id="paint2_linear_222_2167" x1="97.901" y1="145.019" x2="77.7046" y2="145.019" gradientUnits="userSpaceOnUse">
<stop offset="0.0240385" stop-color="#C4DEFF"/>
<stop offset="0.630248" stop-color="#006EFF"/>
<stop offset="1" stop-color="#093C80"/>
</linearGradient>
<linearGradient id="paint3_linear_222_2167" x1="54.692" y1="52.5055" x2="54.692" y2="72.4824" gradientUnits="userSpaceOnUse">
<stop offset="0.0240385" stop-color="#A2CAFF"/>
<stop offset="0.442308" stop-color="#006EFF"/>
<stop offset="1" stop-color="#093C80"/>
</linearGradient>
</defs>
</svg>

);

export const WeighScaleIcon = () => (
<svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.498047 26.5V23.7632H13.098V8.47105C12.4914 8.26579 11.9664 7.94649 11.523 7.51316C11.0797 7.07983 10.753 6.56667 10.543 5.97369H6.09805L10.298 15.5526C10.298 16.693 9.81971 17.6623 8.86305 18.4605C7.90638 19.2588 6.75138 19.6579 5.39805 19.6579C4.04471 19.6579 2.88971 19.2588 1.93305 18.4605C0.97638 17.6623 0.498047 16.693 0.498047 15.5526L4.69805 5.97369H1.89805V3.23684H10.543C10.823 2.4386 11.3247 1.78313 12.048 1.27042C12.7714 0.757722 13.588 0.500915 14.498 0.500002C15.408 0.49909 16.2247 0.755897 16.948 1.27042C17.6714 1.78495 18.173 2.44042 18.453 3.23684H27.098V5.97369H24.298L28.498 15.5526C28.498 16.693 28.0197 17.6623 27.063 18.4605C26.1064 19.2588 24.9514 19.6579 23.598 19.6579C22.2447 19.6579 21.0897 19.2588 20.133 18.4605C19.1764 17.6623 18.698 16.693 18.698 15.5526L22.898 5.97369H18.453C18.243 6.56667 17.9164 7.07983 17.473 7.51316C17.0297 7.94649 16.5047 8.26579 15.898 8.47105V23.7632H28.498V26.5H0.498047ZM20.973 15.5526H26.223L23.598 9.6L20.973 15.5526ZM2.77305 15.5526H8.02305L5.39805 9.6L2.77305 15.5526ZM14.498 5.97369C14.8947 5.97369 15.2274 5.84232 15.4962 5.57958C15.765 5.31684 15.899 4.99207 15.898 4.60527C15.8971 4.21846 15.7627 3.89369 15.4948 3.63095C15.227 3.36821 14.8947 3.23684 14.498 3.23684C14.1014 3.23684 13.7691 3.36821 13.5012 3.63095C13.2334 3.89369 13.099 4.21846 13.098 4.60527C13.0971 4.99207 13.2315 5.3173 13.5012 5.58095C13.771 5.8446 14.1032 5.97551 14.498 5.97369Z" fill="white"/>
</svg>

);

export const FindIcon = () => (
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_222_2357)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 0.5C9.76544 0.50015 8.05547 0.910512 6.50972 1.69758C4.96398 2.48465 3.62628 3.62612 2.60584 5.0288C1.58539 6.43148 0.91113 8.05559 0.6381 9.76856C0.365069 11.4815 0.501009 13.2348 1.03482 14.8852C1.56863 16.5356 2.48518 18.0364 3.70965 19.265C4.93411 20.4936 6.43177 21.4152 8.08037 21.9546C9.72896 22.494 11.4817 22.6359 13.1956 22.3687C14.9095 22.1014 16.5359 21.4327 17.942 20.417L22.025 24.5L24.5 22.025L20.417 17.942C21.6037 16.2996 22.3136 14.3613 22.4685 12.3411C22.6234 10.3208 22.2173 8.29693 21.295 6.4928C20.3727 4.68867 18.9699 3.17435 17.2415 2.11688C15.5131 1.05941 13.5263 0.499873 11.5 0.5ZM5.49003 5.49C6.2759 4.6856 7.21358 4.04515 8.24875 3.60574C9.28391 3.16633 10.396 2.93669 11.5205 2.93014C12.6451 2.9236 13.7597 3.14026 14.8 3.56759C15.8402 3.99491 16.7852 4.6244 17.5804 5.41959C18.3756 6.21478 19.0051 7.15986 19.4324 8.20007C19.8598 9.24028 20.0764 10.355 20.0699 11.4795C20.0633 12.604 19.8337 13.7161 19.3943 14.7513C18.9549 15.7864 18.3144 16.7241 17.51 17.51C15.9098 19.0734 13.7577 19.9429 11.5205 19.9299C9.28337 19.9168 7.14155 19.0223 5.55962 17.4404C3.97768 15.8585 3.0832 13.7167 3.07017 11.4795C3.05714 9.24234 3.92662 7.09025 5.49003 5.49Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_222_2357">
<rect width="24" height="24" fill="white" transform="translate(0.5 0.5)"/>
</clipPath>
</defs>
</svg>
);

export const GuassMeterIcon = () => (
<svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.6497 13.0919C30.0786 9.31051 28.0954 5.88611 25.0997 3.50895C22.3566 1.37846 18.971 0.243402 15.4982 0.289951C12.2808 0.35515 9.14884 1.33709 6.47016 3.12045C4.5704 4.43737 3.00873 6.18458 1.91243 8.21964C0.81613 10.2547 0.216241 12.52 0.161659 14.831C-0.0679228 17.9715 0.730798 21.1014 2.43716 23.7479C2.69468 24.0806 3.02586 24.3489 3.40465 24.5319C3.78344 24.7149 4.19952 24.8075 4.62016 24.8024C5.02701 24.803 5.42976 24.7212 5.80416 24.562C6.3752 24.3021 6.8325 23.8437 7.09109 23.2721C7.34969 22.7005 7.39199 22.0544 7.21016 21.454C7.22051 21.3927 7.22051 21.3302 7.21016 21.2689C7.21016 21.2689 4.25016 15.719 7.00666 10.9645L6.98816 10.798C7.80416 9.26099 9.03319 7.98247 10.5368 7.10648C12.0403 6.23048 13.7587 5.79183 15.4982 5.83995C17.2243 5.87184 18.9136 6.34399 20.4061 7.21166C21.8986 8.07932 23.1449 9.31375 24.0267 10.798C25.1672 12.7784 25.5486 15.1061 25.0997 17.347L15.8497 13.8689C15.7617 13.8176 15.6637 13.786 15.5624 13.7763C15.461 13.7666 15.3588 13.779 15.2627 13.8127C15.1666 13.8463 15.079 13.9005 15.0059 13.9714C14.9328 14.0422 14.876 14.1281 14.8394 14.2231C14.8027 14.3181 14.7872 14.4199 14.7937 14.5215C14.8003 14.6231 14.8289 14.722 14.8774 14.8115C14.926 14.901 14.9935 14.9788 15.0751 15.0397C15.1567 15.1005 15.2505 15.1429 15.3502 15.1639L24.7482 18.6604C24.5761 19.2965 24.347 19.9156 24.0637 20.5105C23.8409 20.8861 23.7023 21.3056 23.6576 21.74C23.6129 22.1744 23.6631 22.6133 23.8047 23.0264C23.9225 23.3549 24.1065 23.6556 24.3451 23.9102C24.5837 24.1647 24.872 24.3677 25.1922 24.5064C26.3947 25.0059 28.0597 25.0615 29.2622 22.4715C30.729 19.5779 31.2159 16.2862 30.6497 13.0919ZM5.87816 21.75C5.9671 22.028 5.9502 22.3291 5.83069 22.5954C5.71118 22.8618 5.49749 23.0746 5.23066 23.1929C4.95221 23.3288 4.63593 23.3661 4.3335 23.2989C4.03107 23.2317 3.76037 23.0639 3.56566 22.823C2.06441 20.4807 1.35735 17.7174 1.54916 14.9419C1.69578 12.9572 2.19704 11.0148 3.02916 9.20695L5.48966 10.65C4.71799 12.4109 4.35224 14.3228 4.41948 16.2442C4.48673 18.1656 4.98526 20.0473 5.87816 21.75ZM6.24816 9.44745L3.69516 8.00445C4.67287 6.53955 5.93026 5.28216 7.39516 4.30445C9.63515 2.7972 12.2314 1.90413 14.9247 1.71445V4.47095C13.1799 4.51905 11.4742 4.99876 9.96007 5.86718C8.44597 6.73561 7.17067 7.96569 6.24816 9.44745ZM16.3122 4.47095V1.69595C19.1698 1.7989 21.9217 2.80255 24.1747 4.56345C25.3946 5.54976 26.4499 6.72375 27.3012 8.04145L24.7482 9.46595C23.788 8.05939 22.5289 6.8823 21.061 6.01882C19.5931 5.15534 17.9526 4.62679 16.2567 4.47095H16.3122ZM28.0412 21.8979C27.1532 23.7479 26.1912 23.4704 25.7657 23.2484C25.4786 23.1149 25.2536 22.8766 25.1367 22.5824C25.071 22.3447 25.0535 22.0961 25.0853 21.8515C25.117 21.6069 25.1974 21.3711 25.3217 21.158C25.6328 20.5668 25.8868 19.9474 26.0802 19.308L26.6167 19.5114C26.7021 19.5289 26.7902 19.5289 26.8757 19.5114C27.017 19.5063 27.1538 19.4598 27.2689 19.3775C27.3841 19.2953 27.4725 19.181 27.5232 19.049C27.5836 18.877 27.575 18.6884 27.4991 18.5227C27.4232 18.3571 27.2859 18.2273 27.1162 18.1609L26.4132 17.902C26.9241 15.4911 26.6182 12.9788 25.5437 10.7609L27.9857 9.37345C28.6286 10.6471 29.0657 12.0145 29.2807 13.425C29.7881 16.3091 29.3535 19.28 28.0412 21.8979Z" fill="#E8F2FF"/>
</svg>
);

export const ProtectIcon = () => (
<svg width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 28.5C12.325 28.5 12.1625 28.4882 12.0125 28.4646C11.8625 28.4409 11.7125 28.4055 11.5625 28.3582C8.1875 27.2949 5.5 25.3281 3.5 22.4577C1.5 19.5873 0.5 16.4976 0.5 13.1886V6.48987C0.5 5.89916 0.6815 5.36751 1.0445 4.89494C1.4075 4.42236 1.876 4.07975 2.45 3.86709L11.45 0.677215C11.8 0.559072 12.15 0.5 12.5 0.5C12.85 0.5 13.2 0.559072 13.55 0.677215L22.55 3.86709C23.125 4.07975 23.594 4.42236 23.957 4.89494C24.32 5.36751 24.501 5.89916 24.5 6.48987V13.1886C24.5 16.4966 23.5 19.5863 21.5 22.4577C19.5 25.329 16.8125 27.2959 13.4375 28.3582C13.2875 28.4055 13.1375 28.4409 12.9875 28.4646C12.8375 28.4882 12.675 28.5 12.5 28.5ZM12.5 25.6646C15.1 24.8848 17.25 23.3253 18.95 20.9861C20.65 18.6468 21.5 16.0477 21.5 13.1886V6.48987L12.5 3.3L3.5 6.48987V13.1886C3.5 16.0477 4.35 18.6468 6.05 20.9861C7.75 23.3253 9.9 24.8848 12.5 25.6646Z" fill="white"/>
</svg>
);

export const PointerGlow=()=>(
<svg width="66" height="10" viewBox="0 0 66 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dd_222_2331)">
<path d="M3 5.00037L60.5474 3.00037C60.5474 3.00037 63 4.21932 63 5.00037C63 5.78141 60.5474 7.00036 60.5474 7.00036L3 5.00037Z" fill="url(#paint0_linear_222_2331)"/>
</g>
<defs>
<filter id="filter0_dd_222_2331" x="0" y="0.000366211" width="66" height="10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_222_2331"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_222_2331" result="effect2_dropShadow_222_2331"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_222_2331" result="shape"/>
</filter>
<linearGradient id="paint0_linear_222_2331" x1="63" y1="5.00036" x2="3.00001" y2="5.00017" gradientUnits="userSpaceOnUse">
<stop stop-color="#016FFF"/>
<stop offset="1" stop-color="#093C80"/>
</linearGradient>
</defs>
</svg>
)

export const ProtectGlowIcon=()=>{
<svg width="284" height="284" viewBox="0 0 284 284" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_222_2342)">
<rect x="100" y="100" width="84" height="84" rx="42" fill="url(#paint0_linear_222_2342)" fill-opacity="0.2" shape-rendering="crispEdges"/>
<path d="M142 163L132.736 158.061C130.095 156.656 127.886 154.558 126.347 151.993C124.808 149.428 123.997 146.492 124 143.5V124C124 123.204 124.316 122.441 124.879 121.879C125.441 121.316 126.204 121 127 121H157C157.796 121 158.559 121.316 159.121 121.879C159.684 122.441 160 123.204 160 124V143.5C160.004 146.492 159.192 149.428 157.653 151.993C156.114 154.558 153.905 156.656 151.264 158.061L142 163ZM127 124V143.5C126.998 145.948 127.663 148.349 128.922 150.448C130.182 152.547 131.988 154.263 134.149 155.413L142 159.599L149.851 155.415C152.012 154.264 153.819 152.548 155.078 150.449C156.338 148.35 157.002 145.948 157 143.5V124H127Z" fill="#E8F2FF"/>
<path d="M142 155.916V127H154V143.208C154 145.109 153.484 146.974 152.506 148.605C151.529 150.236 150.127 151.571 148.45 152.467L142 155.916Z" fill="#E8F2FF"/>
</g>
<defs>
<filter id="filter0_d_222_2342" x="0" y="0" width="284" height="284" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="50"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 0.6 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_222_2342"/>
<feBlend mode="normal" in="BackgroundImageFix" in2="effect1_dropShadow_222_2342" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
</filter>
<linearGradient id="paint0_linear_222_2342" x1="142" y1="100" x2="142" y2="258.059" gradientUnits="userSpaceOnUse">
<stop offset="0.15" stop-color="#1B1B1B" stop-opacity="0.85"/>
<stop offset="0.987663" stop-color="#0148A5"/>
</linearGradient>
</defs>
</svg>
}

export const BorderTravel = () => (

  <svg width="66" height="10" viewBox="0 0 66 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_dd_222_2331)">
      <path d="M3 5.00037L60.5474 3.00037C60.5474 3.00037 63 4.21932 63 5.00037C63 5.78141 60.5474 7.00036 60.5474 7.00036L3 5.00037Z" fill="url(#paint0_linear_222_2331)"/>
    </g>
    <defs>
      <filter id="filter0_dd_222_2331" x="0" y="0.000366211" width="66" height="10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_222_2331"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_222_2331" result="effect2_dropShadow_222_2331"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_222_2331" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear_222_2331" x1="63" y1="5.00036" x2="3.00001" y2="5.00017" gradientUnits="userSpaceOnUse">
        <stop stop-color="#016FFF"/>
        <stop offset="1" stop-color="#093C80"/>
      </linearGradient>
    </defs>
  </svg>
);


export const Health = () => (
  
<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3333 11.9185L6.17374 33.0019H30.4929L27.5568 27.9098C28.3699 28.3328 29.2485 28.6157 30.1556 28.7467L32.8744 33.4602C32.9549 33.5996 32.9973 33.7578 32.9972 33.9188C32.9972 34.0797 32.9547 34.2379 32.8742 34.3773C32.7936 34.5166 32.6778 34.6323 32.5383 34.7127C32.3988 34.7931 32.2406 34.8354 32.0797 34.8352H4.58608C4.42517 34.8352 4.2671 34.7928 4.12775 34.7124C3.9884 34.6319 3.87269 34.5162 3.79224 34.3769C3.71179 34.2375 3.66943 34.0794 3.66943 33.9185C3.66943 33.7576 3.71179 33.5996 3.79224 33.4602L17.5395 9.62504C17.62 9.4857 17.7357 9.36999 17.875 9.28955C18.0144 9.2091 18.1724 9.16675 18.3333 9.16675C18.4942 9.16675 18.6523 9.2091 18.7916 9.28955C18.931 9.36999 19.0467 9.4857 19.1272 9.62504L23.7288 17.6028C23.3882 18.4551 23.1939 19.3588 23.1541 20.2758L18.3333 11.9185Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.8585 26.4981C29.6418 26.8294 30.4839 26.9994 31.3344 26.9977C32.8021 27.0004 34.2251 26.4926 35.3595 25.5613L38.9547 29.1556L40.337 27.7732L36.6667 24.1029C37.3764 23.0085 37.7321 21.7222 37.6857 20.4187C37.6392 19.1151 37.1928 17.8574 36.4069 16.8163C35.6211 15.7752 34.534 15.0011 33.2931 14.5991C32.0522 14.1971 30.7177 14.1867 29.4706 14.5692C28.2236 14.9518 27.1245 15.7088 26.3225 16.7375C25.5205 17.7661 25.0544 19.0167 24.9876 20.3194C24.9207 21.622 25.2563 22.9137 25.9488 24.0191C26.6413 25.1245 27.6572 25.99 28.8585 26.4981ZM26.9344 20.6425C26.9344 21.8094 27.398 22.9286 28.2231 23.7538C29.0483 24.5789 30.1675 25.0425 31.3344 25.0425C32.5014 25.0425 33.6205 24.5789 34.4457 23.7538C35.2708 22.9286 35.7344 21.8094 35.7344 20.6425C35.7344 19.4755 35.2708 18.3564 34.4457 17.5312C33.6205 16.7061 32.5014 16.2425 31.3344 16.2425C30.1675 16.2425 29.0483 16.7061 28.2231 17.5312C27.398 18.3564 26.9344 19.4755 26.9344 20.6425Z" fill="white"/>
<path d="M17.1875 27.5458H19.4792V29.8374H17.1875V27.5458ZM18.3333 18.3745C17.7008 18.3745 17.1875 18.8878 17.1875 19.5203V24.562C17.1875 24.8659 17.3082 25.1574 17.5231 25.3722C17.738 25.5871 18.0294 25.7078 18.3333 25.7078C18.6372 25.7078 18.9287 25.5871 19.1436 25.3722C19.3584 25.1574 19.4792 24.8659 19.4792 24.562V19.5203C19.4792 18.8878 18.9658 18.3745 18.3333 18.3745Z" fill="white"/>
</svg>
 );

 export const FbIcon = () => (
<svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4167 16.3126H20.4375L21.6458 11.4792H17.4167V9.06258C17.4167 7.818 17.4167 6.64592 19.8333 6.64592H21.6458V2.58591C21.2519 2.53396 19.7645 2.41675 18.1936 2.41675C14.913 2.41675 12.5833 4.41896 12.5833 8.09591V11.4792H8.95833V16.3126H12.5833V26.5834H17.4167V16.3126Z" fill="#FFFAFA"/>
</svg>

 );

  export const WhatsappIcon = () => (
<svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.5187 5.93282C22.4108 4.81403 21.0912 3.92694 19.637 3.32326C18.1827 2.71957 16.6229 2.41135 15.0483 2.41657C8.45083 2.41657 3.07375 7.79365 3.07375 14.3912C3.07375 16.5057 3.62958 18.5599 4.66875 20.3724L2.97708 26.5832L9.32083 24.9157C11.0729 25.8703 13.0425 26.3778 15.0483 26.3778C21.6458 26.3778 27.0229 21.0007 27.0229 14.4032C27.0229 11.2012 25.7783 8.1924 23.5187 5.93282ZM15.0483 24.3478C13.26 24.3478 11.5079 23.8645 9.97333 22.9582L9.61083 22.7407L5.84083 23.7316L6.84375 20.0582L6.60208 19.6837C5.60828 18.0972 5.0807 16.2632 5.07958 14.3912C5.07958 8.90532 9.55041 4.43449 15.0362 4.43449C17.6946 4.43449 20.1958 5.47365 22.0687 7.35865C22.9963 8.28165 23.7313 9.37964 24.2312 10.5889C24.7311 11.7982 24.9859 13.0947 24.9808 14.4032C25.005 19.8891 20.5342 24.3478 15.0483 24.3478ZM20.51 16.9045C20.2079 16.7595 18.7337 16.0345 18.4679 15.9257C18.19 15.8291 17.9967 15.7807 17.7912 16.0707C17.5858 16.3728 17.0179 17.0495 16.8487 17.2428C16.6796 17.4482 16.4983 17.4724 16.1962 17.3153C15.8942 17.1703 14.9275 16.8441 13.7917 15.8291C12.8975 15.0316 12.3054 14.0528 12.1242 13.7507C11.955 13.4487 12.1 13.2916 12.2571 13.1345C12.39 13.0016 12.5592 12.7841 12.7042 12.6149C12.8492 12.4457 12.9096 12.3128 13.0062 12.1195C13.1029 11.9141 13.0546 11.7449 12.9821 11.5999C12.9096 11.4549 12.3054 9.98074 12.0637 9.37657C11.8221 8.79657 11.5683 8.86907 11.3871 8.85699H10.8071C10.6017 8.85699 10.2875 8.92949 10.0096 9.23157C9.74375 9.53365 8.97041 10.2587 8.97041 11.7328C8.97041 13.207 10.0458 14.6328 10.1908 14.8262C10.3358 15.0316 12.3054 18.0524 15.3021 19.3453C16.015 19.6595 16.5708 19.8407 17.0058 19.9737C17.7187 20.2032 18.3712 20.167 18.8908 20.0945C19.4708 20.0099 20.6671 19.3695 20.9087 18.6687C21.1625 17.9678 21.1625 17.3757 21.0779 17.2428C20.9933 17.1099 20.8121 17.0495 20.51 16.9045Z" fill="#FFFAFA"/>
</svg>
 );

 export const InstaIcon = () => (
<svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.0417 10.2708C22.0427 10.2708 22.8542 9.45927 22.8542 8.45825C22.8542 7.45724 22.0427 6.64575 21.0417 6.64575C20.0406 6.64575 19.2292 7.45724 19.2292 8.45825C19.2292 9.45927 20.0406 10.2708 21.0417 10.2708Z" fill="#FFFAFA"/>
<path d="M19.8333 3.625C23.1683 3.625 25.875 6.33167 25.875 9.66667V19.3333C25.875 22.6683 23.1683 25.375 19.8333 25.375H10.1667C6.83167 25.375 4.125 22.6683 4.125 19.3333V9.66667C4.125 6.33167 6.83167 3.625 10.1667 3.625H15H19.8333Z" stroke="#FFFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 9.66675C17.6704 9.66675 19.8333 11.8297 19.8333 14.5001C19.8333 17.1705 17.6704 19.3334 15 19.3334C12.3296 19.3334 10.1667 17.1705 10.1667 14.5001C10.1667 11.8297 12.3296 9.66675 15 9.66675Z" stroke="#FFFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 );

  export const XIcon = () => (
<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.621125 0H6.21425L11.1934 7.12144L17.1725 0H18.9597L11.8763 8.09875L19.5 19H13.9069L8.70681 11.5639L2.286 19H0.5L8.02519 10.5889L0.621125 0Z" fill="#FFFAFA"/>
</svg>
 );

  export const BigProtectIc = () => (
<svg width="84" height="102" viewBox="0 0 84 102" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.2535 101.134C29.4462 97.6744 19.6723 90.7353 11.9317 80.3171C4.19123 69.8989 0.374481 58.1999 0.481509 45.2203L0.732799 14.7452L42.0845 0.349253L83.1933 15.4252L82.942 45.9002C82.835 58.8761 78.8259 70.5087 70.9146 80.7978C63.0033 91.087 53.1163 97.862 41.2535 101.134ZM41.3028 95.1554C51.5377 92.1402 60.0312 86.0111 66.7833 76.7681C73.5353 67.5251 76.9582 57.2215 77.0519 45.8573L77.2715 19.2255L42.0349 6.36762L6.5911 18.6426L6.37154 45.2688C6.27784 56.6331 9.53033 66.9918 16.129 76.3448C22.7277 85.6979 31.119 91.9718 41.3028 95.1554Z" fill="white"/>
</svg>
 );

  export const TargetIcon = () => (
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 16C26.1217 16 28.1566 16.8429 29.6569 18.3431C31.1571 19.8434 32 21.8783 32 24C32 26.1217 31.1571 28.1566 29.6569 29.6569C28.1566 31.1571 26.1217 32 24 32C21.8783 32 19.8434 31.1571 18.3431 29.6569C16.8429 28.1566 16 26.1217 16 24C16 21.8783 16.8429 19.8434 18.3431 18.3431C19.8434 16.8429 21.8783 16 24 16ZM6.1 26H2V22H6.1C7 13.66 13.66 7 22 6.1V2H26V6.1C34.34 7 41 13.66 41.9 22H46V26H41.9C41 34.34 34.34 41 26 41.9V46H22V41.9C13.66 41 7 34.34 6.1 26ZM24 10C20.287 10 16.726 11.475 14.1005 14.1005C11.475 16.726 10 20.287 10 24C10 27.713 11.475 31.274 14.1005 33.8995C16.726 36.525 20.287 38 24 38C27.713 38 31.274 36.525 33.8995 33.8995C36.525 31.274 38 27.713 38 24C38 20.287 36.525 16.726 33.8995 14.1005C31.274 11.475 27.713 10 24 10Z" fill="#167BFF"/>
</svg>
 );

  export const HammerIcon = () => (
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 42V38H32V42H8ZM19.3 32.3L8 21L12.2 16.7L23.6 28L19.3 32.3ZM32 19.6L20.7 8.2L25 4L36.3 15.3L32 19.6ZM41.2 40L15.1 13.9L17.9 11.1L44 37.2L41.2 40Z" fill="#167BFF"/>
</svg>
 );

  export const HistoryIcon = () => (
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 24H33V32.5L38.72 35.88L37.22 38.32L30 34V24ZM32 18C33.38 18 34.74 18.2 36 18.58V9.4L30 11.72V18.14C30.66 18 31.32 18 32 18ZM46 32C46 35.713 44.525 39.274 41.8995 41.8995C39.274 44.525 35.713 46 32 46C26 46 20.8 42.16 18.84 36.8L16 35.8L5.32 39.94L5 40C4.73478 40 4.48043 39.8946 4.29289 39.7071C4.10536 39.5196 4 39.2652 4 39V8.76C4 8.3 4.3 7.94 4.72 7.8L16 4L28 8.2L38.68 4.06L39 4C39.2652 4 39.5196 4.10536 39.7071 4.29289C39.8946 4.48043 40 4.73478 40 5V20.5C43.62 23 46 27.24 46 32ZM18 32C18 26.42 21.26 21.6 26 19.34V11.74L18 8.94V32.26V32ZM32 22C29.3478 22 26.8043 23.0536 24.9289 24.9289C23.0536 26.8043 22 29.3478 22 32C22 34.6522 23.0536 37.1957 24.9289 39.0711C26.8043 40.9464 29.3478 42 32 42C34.6522 42 37.1957 40.9464 39.0711 39.0711C40.9464 37.1957 42 34.6522 42 32C42 29.3478 40.9464 26.8043 39.0711 24.9289C37.1957 23.0536 34.6522 22 32 22ZM8 10.92V34.62L14 32.3V8.9L8 10.92Z" fill="#167BFF"/>
</svg>

 );

  export const PatternIcon = () => (
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.5 28.5C42.981 28.5 45 26.481 45 24C45 21.519 42.981 19.5 40.5 19.5C39.5723 19.5028 38.6683 19.7926 37.912 20.3298C37.1557 20.8669 36.5842 21.625 36.276 22.5H27.621L38.571 11.55C39.159 11.8305 39.807 12 40.5 12C42.981 12 45 9.981 45 7.5C45 5.019 42.981 3 40.5 3C38.019 3 36 5.019 36 7.5C36 8.193 36.171 8.841 36.45 9.4275L24 21.879V12C24 10.347 25.3455 9 27 9H30V6H27C25.2 6 23.601 6.8145 22.5 8.073C21.942 7.42546 21.2515 6.90528 20.4752 6.54764C19.6989 6.19 18.8548 6.00325 18 6H16.5C9.057 6 3 12.0555 3 19.5V28.5C3 35.9445 9.057 42 16.5 42H18C19.8 42 21.399 41.187 22.5 39.927C23.601 41.187 25.2 42 27 42H30V39H27C25.3455 39 24 37.6545 24 36V26.121L36.45 38.5725C36.1695 39.159 36 39.807 36 40.5C36 42.9825 38.019 45 40.5 45C42.981 45 45 42.9825 45 40.5C45 38.0175 42.981 36 40.5 36C39.8317 36.0035 39.1728 36.1579 38.5725 36.4515L27.621 25.5015H36.276C36.5844 26.3762 37.156 27.134 37.9123 27.6708C38.6686 28.2077 39.5725 28.4974 40.5 28.5ZM40.5 22.5C40.8978 22.5 41.2794 22.658 41.5607 22.9393C41.842 23.2206 42 23.6022 42 24C42 24.3978 41.842 24.7794 41.5607 25.0607C41.2794 25.342 40.8978 25.5 40.5 25.5C40.1022 25.5 39.7206 25.342 39.4393 25.0607C39.158 24.7794 39 24.3978 39 24C39 23.6022 39.158 23.2206 39.4393 22.9393C39.7206 22.658 40.1022 22.5 40.5 22.5ZM40.5 6C40.8862 6.01728 41.2509 6.18286 41.5181 6.46227C41.7853 6.74169 41.9344 7.11339 41.9344 7.5C41.9344 7.88661 41.7853 8.25831 41.5181 8.53773C41.2509 8.81714 40.8862 8.98272 40.5 9C40.1022 9 39.7206 8.84196 39.4393 8.56066C39.158 8.27936 39 7.89782 39 7.5C39 7.10218 39.158 6.72064 39.4393 6.43934C39.7206 6.15804 40.1022 6 40.5 6ZM21 18H18V21H21V27H18C15.519 27 13.5 29.019 13.5 31.5V34.5H16.5V31.5C16.5 31.1022 16.658 30.7206 16.9393 30.4393C17.2206 30.158 17.6022 30 18 30H21V36C21 37.6545 19.6545 39 18 39H16.5C11.22 39 6.852 35.0805 6.12 30H9V27H6V21H10.5C12.981 21 15 18.981 15 16.5V13.5H12V16.5C12 16.8978 11.842 17.2794 11.5607 17.5607C11.2794 17.842 10.8978 18 10.5 18H6.12C6.852 12.9195 11.22 9 16.5 9H18C19.6545 9 21 10.347 21 12V18ZM42 40.5C41.9827 40.8862 41.8171 41.2509 41.5377 41.5181C41.2583 41.7853 40.8866 41.9344 40.5 41.9344C40.1134 41.9344 39.7417 41.7853 39.4623 41.5181C39.1829 41.2509 39.0173 40.8862 39 40.5C39 39.6735 39.6735 39 40.5 39C41.3265 39 42 39.6735 42 40.5Z" fill="#167BFF"/>
</svg>
 );

  export const InsuranceIcon = () => (
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 17.3763C1 17.3763 5 15.6669 8.33333 15.6669C10.6847 15.6669 13.2667 16.6123 14.996 17.3916C16.3227 17.9889 17.086 18.3663 17.3893 19.7896C17.6007 20.7783 16.8907 22.4263 15.8827 22.5076L15.1727 22.5649M15.1727 22.5649C13.5447 22.5649 11.0247 22.0823 11.0247 22.0823M15.1727 22.5649C17.4307 22.5649 23.3747 21.4923 25.4813 21.0983C25.984 21.0049 26.5047 20.9363 26.9827 21.1163C27.584 21.3436 28.3907 21.8923 28.776 23.2163C29.0773 24.2509 28.354 25.2463 27.3493 25.6349C24.4027 26.7749 18.258 29.0003 15.1727 29.0003C7 29.0003 1 26.9489 1 26.9489M19.084 14.3203C19.1053 14.9356 19.4867 15.4649 20.0947 15.5583C20.488 15.6183 21.0073 15.6669 21.6667 15.6669C22.1927 15.6708 22.7182 15.6345 23.2387 15.5583C23.8467 15.4649 24.228 14.9356 24.2493 14.3209C24.274 13.6143 24.3027 12.5189 24.3193 10.9863C25.4311 10.9761 26.5428 10.9527 27.654 10.9163C28.2687 10.8949 28.798 10.5136 28.8913 9.90561C28.9513 9.51228 29 8.99294 29 8.33361C29.0038 7.80761 28.9675 7.28208 28.8913 6.76161C28.798 6.15361 28.2687 5.77228 27.654 5.75094C26.9473 5.72628 25.852 5.69761 24.3193 5.68094C24.3091 4.56915 24.2857 3.45752 24.2493 2.34628C24.228 1.73161 23.8467 1.20228 23.2387 1.10894C22.7182 1.03302 22.1927 0.996692 21.6667 1.00028C21.1407 0.996434 20.6151 1.03276 20.0947 1.10894C19.4867 1.20228 19.1053 1.73161 19.084 2.34628C19.0593 3.05294 19.0307 4.14828 19.014 5.68094C17.9022 5.69116 16.7906 5.71449 15.6793 5.75094C15.0647 5.77228 14.5353 6.15361 14.442 6.76161C14.382 7.15494 14.3333 7.67428 14.3333 8.33361C14.3333 8.99294 14.3813 9.51294 14.442 9.90561C14.5353 10.5136 15.0647 10.8949 15.6793 10.9163C16.386 10.9409 17.4813 10.9696 19.014 10.9863C19.0307 12.5189 19.0593 13.6143 19.084 14.3203Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 );

  export const EmployersIcon = () => (
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7789 12.9812C11.7021 12.9812 10.6495 12.6619 9.75412 12.0636C8.85878 11.4654 8.16096 10.6151 7.74888 9.62023C7.3368 8.62539 7.22898 7.53069 7.43906 6.47457C7.64913 5.41845 8.16767 4.44835 8.92909 3.68693C9.69051 2.92551 10.6606 2.40698 11.7167 2.1969C12.7729 1.98683 13.8675 2.09464 14.8624 2.50672C15.8572 2.9188 16.7075 3.61663 17.3058 4.51196C17.904 5.40729 18.2233 6.45992 18.2233 7.53673C18.2233 8.98069 17.6497 10.3655 16.6287 11.3865C15.6077 12.4076 14.2228 12.9812 12.7789 12.9812ZM12.7789 3.71007C12.0097 3.71007 11.2579 3.93814 10.6183 4.36546C9.97881 4.79278 9.48037 5.40014 9.18603 6.11074C8.89168 6.82134 8.81467 7.60327 8.96473 8.35764C9.11478 9.11201 9.48516 9.80494 10.029 10.3488C10.5729 10.8927 11.2658 11.2631 12.0202 11.4131C12.7746 11.5632 13.5565 11.4862 14.2671 11.1918C14.9777 10.8975 15.5851 10.399 16.0124 9.75951C16.4397 9.11998 16.6678 8.3681 16.6678 7.59895C16.6678 7.08826 16.5672 6.58256 16.3718 6.11074C16.1763 5.63892 15.8899 5.21021 15.5287 4.84909C15.1676 4.48798 14.7389 4.20152 14.2671 4.00609C13.7953 3.81065 13.2896 3.71007 12.7789 3.71007ZM17.1111 13.9223C12.9021 12.9746 8.49865 13.4308 4.57333 15.2212C4.03348 15.4791 3.57798 15.885 3.2599 16.3917C2.94182 16.8985 2.77424 17.4851 2.77667 18.0834V22.7112C2.77667 22.8133 2.79679 22.9145 2.83587 23.0088C2.87496 23.1032 2.93225 23.1889 3.00447 23.2611C3.0767 23.3334 3.16244 23.3907 3.2568 23.4298C3.35117 23.4688 3.45231 23.489 3.55445 23.489C3.65659 23.489 3.75772 23.4688 3.85209 23.4298C3.94645 23.3907 4.03219 23.3334 4.10442 23.2611C4.17664 23.1889 4.23393 23.1032 4.27302 23.0088C4.31211 22.9145 4.33222 22.8133 4.33222 22.7112V18.0834C4.32545 17.7806 4.40722 17.4824 4.56748 17.2255C4.72775 16.9685 4.95955 16.7639 5.23445 16.6367C7.59902 15.5447 10.1743 14.9845 12.7789 14.9956C14.2382 14.9939 15.6926 15.1662 17.1111 15.509V13.9223ZM17.22 21.319H21.9956V22.4078H17.22V21.319Z" fill="white"/>
<path d="M25.7989 16.6989H21.7778V18.2545H25.0211V24.7645H14V18.2545H18.9V18.5812C18.9 18.7874 18.982 18.9853 19.1278 19.1311C19.2737 19.277 19.4715 19.3589 19.6778 19.3589C19.8841 19.3589 20.0819 19.277 20.2278 19.1311C20.3736 18.9853 20.4556 18.7874 20.4556 18.5812V15.5556C20.4556 15.3493 20.3736 15.1515 20.2278 15.0056C20.0819 14.8598 19.8841 14.7778 19.6778 14.7778C19.4715 14.7778 19.2737 14.8598 19.1278 15.0056C18.982 15.1515 18.9 15.3493 18.9 15.5556V16.6989H13.2222C13.016 16.6989 12.8181 16.7809 12.6723 16.9267C12.5264 17.0726 12.4445 17.2704 12.4445 17.4767V25.5423C12.4445 25.7486 12.5264 25.9464 12.6723 26.0922C12.8181 26.2381 13.016 26.3201 13.2222 26.3201H25.7989C26.0052 26.3201 26.203 26.2381 26.3489 26.0922C26.4947 25.9464 26.5767 25.7486 26.5767 25.5423V17.4767C26.5767 17.2704 26.4947 17.0726 26.3489 16.9267C26.203 16.7809 26.0052 16.6989 25.7989 16.6989Z" fill="white"/>
</svg>
 );

  export const LawIcon = () => (
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.875 3.2085V5.25016H17.1792C17.5887 5.25016 17.9888 5.37383 18.3272 5.60366L20.307 6.95C20.356 6.98266 20.4105 6.99939 20.4703 7.00016H25.256C25.4881 7.00016 25.7106 7.09235 25.8747 7.25644C26.0388 7.42054 26.131 7.6431 26.131 7.87516C26.131 8.10723 26.0388 8.32979 25.8747 8.49388C25.7106 8.65798 25.4881 8.75016 25.256 8.75016H23.415L27.342 17.7102C27.4206 17.8893 27.4368 18.0896 27.3882 18.2791C27.3396 18.4686 27.2288 18.6363 27.0737 18.7555C26.957 18.8418 26.8365 18.9219 26.712 18.9958C26.4167 19.1735 26.1086 19.3291 25.7903 19.4613C24.7351 19.9026 23.6022 20.1283 22.4583 20.1252C21.3148 20.1301 20.182 19.9048 19.1275 19.4625C18.8092 19.3299 18.5012 19.1739 18.2058 18.9958C18.0818 18.9247 17.9621 18.846 17.8477 18.7602L17.8418 18.7555C17.6867 18.6363 17.576 18.4686 17.5273 18.2791C17.4787 18.0896 17.4949 17.8893 17.5735 17.7102L21.5028 8.75016H20.4692C20.0597 8.75016 19.6595 8.6265 19.3212 8.39666L17.3413 7.05033C17.2931 7.01768 17.2362 7.00021 17.178 7.00016H14.875V23.9168H20.1098C20.3419 23.9168 20.5645 24.009 20.7286 24.1731C20.8927 24.3372 20.9848 24.5598 20.9848 24.7918C20.9848 25.0239 20.8927 25.2465 20.7286 25.4105C20.5645 25.5746 20.3419 25.6668 20.1098 25.6668H7.89018C7.65812 25.6668 7.43556 25.5746 7.27146 25.4105C7.10737 25.2465 7.01518 25.0239 7.01518 24.7918C7.01518 24.5598 7.10737 24.3372 7.27146 24.1731C7.43556 24.009 7.65812 23.9168 7.89018 23.9168H13.125V7.00016H10.8208C10.7626 7.00021 10.7057 7.01768 10.6575 7.05033L8.67885 8.39666C8.34051 8.6265 7.94035 8.75016 7.53085 8.75016H6.49718L10.4265 17.7102C10.5026 17.8842 10.5199 18.0783 10.4759 18.2631C10.4319 18.4479 10.329 18.6134 10.1827 18.7345C10.0893 18.8103 9.99601 18.8815 9.82101 18.9947C9.52614 19.186 9.21726 19.3549 8.89701 19.4998C7.84358 19.9794 6.69912 20.2261 5.54168 20.2232C4.38424 20.2261 3.23979 19.9794 2.18635 19.4998C1.8661 19.3549 1.55723 19.186 1.26235 18.9947C1.13817 18.9145 1.01786 18.8284 0.901848 18.7368C0.756382 18.6145 0.654052 18.4488 0.609941 18.2639C0.565831 18.0791 0.582275 17.885 0.656848 17.7102L4.58501 8.75016H2.74518C2.51312 8.75016 2.29056 8.65798 2.12646 8.49388C1.96237 8.32979 1.87018 8.10723 1.87018 7.87516C1.87018 7.6431 1.96237 7.42054 2.12646 7.25644C2.29056 7.09235 2.51312 7.00016 2.74518 7.00016H7.53085C7.58996 7.00016 7.64479 6.98344 7.69535 6.95L9.67285 5.60366C10.0112 5.37266 10.4125 5.25016 10.822 5.25016H13.125V3.2085C13.125 2.97643 13.2172 2.75387 13.3813 2.58978C13.5454 2.42568 13.7679 2.3335 14 2.3335C14.2321 2.3335 14.4546 2.42568 14.6187 2.58978C14.7828 2.75387 14.875 2.97643 14.875 3.2085ZM2.55851 17.7312C3.47649 18.2206 4.50138 18.4751 5.54168 18.472C6.58198 18.4751 7.60688 18.2206 8.52485 17.7312L5.54168 10.9295L2.55851 17.7312ZM19.4868 17.7032C19.5825 17.7498 19.6895 17.7988 19.8077 17.8502C20.426 18.1103 21.3302 18.3752 22.4583 18.3752C23.4868 18.3779 24.5026 18.1482 25.4298 17.7032L22.4583 10.9283L19.4868 17.7032Z" fill="white"/>
</svg>
 );

  export const AcademiaIcon = () => (
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4135 4.08321C12.2218 3.69954 13.1053 3.50049 14 3.50049C14.8947 3.50049 15.7782 3.69954 16.5865 4.08321L24.3927 7.74304C26.0913 8.53871 26.0913 11.2944 24.3927 12.09L16.5877 15.7499C15.7792 16.1337 14.8955 16.3329 14.0006 16.3329C13.1057 16.3329 12.2219 16.1337 11.4135 15.7499L3.60734 12.09C1.90868 11.2944 1.90868 8.53871 3.60734 7.74304L7.00001 6.15171M2.33334 9.91654V16.3332M14 24.4999C11.9047 24.4999 9.16301 23.192 7.44918 22.2435C6.42134 21.673 5.83334 20.5717 5.83334 19.3969V13.4165M22.1667 13.4165V19.3957C22.1667 20.5717 21.5798 21.673 20.5508 22.2424C19.8398 22.6375 19.1119 23.0015 18.3692 23.3332" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
</svg>
 );

 export const Icon2=()=>(
  <svg width="284" height="76" viewBox="0 0 284 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="284" height="76.0003" rx="8" fill="#09346B" fill-opacity="0.5"/>
<g filter="url(#filter1_d_1_718)">
<rect x="16" y="8" width="60.0003" height="60.0003" rx="30.0001" fill="url(#paint0_linear_1_718)" fill-opacity="0.2" shape-rendering="crispEdges"/>
<path d="M32 40.3763C32 40.3763 36 38.6669 39.3333 38.6669C41.6847 38.6669 44.2667 39.6123 45.996 40.3916C47.3227 40.9889 48.086 41.3663 48.3893 42.7896C48.6007 43.7783 47.8907 45.4263 46.8827 45.5076L46.1727 45.5649M46.1727 45.5649C44.5447 45.5649 42.0247 45.0823 42.0247 45.0823M46.1727 45.5649C48.4307 45.5649 54.3747 44.4923 56.4813 44.0983C56.984 44.0049 57.5047 43.9363 57.9827 44.1163C58.584 44.3436 59.3907 44.8923 59.776 46.2163C60.0773 47.2509 59.354 48.2463 58.3493 48.6349C55.4027 49.7749 49.258 52.0003 46.1727 52.0003C38 52.0003 32 49.9489 32 49.9489M50.084 37.3203C50.1053 37.9356 50.4867 38.4649 51.0947 38.5583C51.488 38.6183 52.0073 38.6669 52.6667 38.6669C53.1927 38.6708 53.7182 38.6345 54.2387 38.5583C54.8467 38.4649 55.228 37.9356 55.2493 37.3209C55.274 36.6143 55.3027 35.5189 55.3193 33.9863C56.4311 33.9761 57.5428 33.9527 58.654 33.9163C59.2687 33.8949 59.798 33.5136 59.8913 32.9056C59.9513 32.5123 60 31.9929 60 31.3336C60.0038 30.8076 59.9675 30.2821 59.8913 29.7616C59.798 29.1536 59.2687 28.7723 58.654 28.7509C57.9473 28.7263 56.852 28.6976 55.3193 28.6809C55.3091 27.5692 55.2857 26.4575 55.2493 25.3463C55.228 24.7316 54.8467 24.2023 54.2387 24.1089C53.7182 24.033 53.1927 23.9967 52.6667 24.0003C52.1407 23.9964 51.6151 24.0328 51.0947 24.1089C50.4867 24.2023 50.1053 24.7316 50.084 25.3463C50.0593 26.0529 50.0307 27.1483 50.014 28.6809C48.9022 28.6912 47.7906 28.7145 46.6793 28.7509C46.0647 28.7723 45.5353 29.1536 45.442 29.7616C45.382 30.1549 45.3333 30.6743 45.3333 31.3336C45.3333 31.9929 45.3813 32.5129 45.442 32.9056C45.5353 33.5136 46.0647 33.8949 46.6793 33.9163C47.386 33.9409 48.4813 33.9696 50.014 33.9863C50.0307 35.5189 50.0593 36.6143 50.084 37.3203Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path d="M93.0005 45V42.58H94.8005V33.46H93.0005V31.04H99.6405V33.46H97.8405V42.58H99.6405V45H93.0005ZM102.013 45V34.5H104.973V36.28H105.093C105.28 35.7333 105.607 35.26 106.073 34.86C106.54 34.46 107.187 34.26 108.013 34.26C109.093 34.26 109.907 34.62 110.453 35.34C111.013 36.06 111.293 37.0867 111.293 38.42V45H108.333V38.66C108.333 37.98 108.227 37.48 108.013 37.16C107.8 36.8267 107.42 36.66 106.873 36.66C106.633 36.66 106.4 36.6933 106.173 36.76C105.947 36.8133 105.74 36.9067 105.553 37.04C105.38 37.1733 105.24 37.34 105.133 37.54C105.027 37.7267 104.973 37.9467 104.973 38.2V45H102.013ZM117.487 45.24C116.474 45.24 115.621 45.08 114.927 44.76C114.234 44.4267 113.614 43.96 113.067 43.36L114.807 41.6C115.181 42.0133 115.594 42.34 116.047 42.58C116.501 42.82 117.014 42.94 117.587 42.94C118.174 42.94 118.581 42.8533 118.807 42.68C119.034 42.4933 119.147 42.2467 119.147 41.94C119.147 41.4467 118.794 41.1533 118.087 41.06L116.947 40.92C114.587 40.6267 113.407 39.5467 113.407 37.68C113.407 37.1733 113.501 36.7133 113.687 36.3C113.887 35.8733 114.161 35.5133 114.507 35.22C114.867 34.9133 115.294 34.68 115.787 34.52C116.294 34.3467 116.861 34.26 117.487 34.26C118.034 34.26 118.514 34.3 118.927 34.38C119.354 34.4467 119.727 34.5533 120.047 34.7C120.381 34.8333 120.681 35.0067 120.947 35.22C121.227 35.42 121.501 35.6467 121.767 35.9L120.067 37.64C119.734 37.3067 119.354 37.0467 118.927 36.86C118.514 36.66 118.087 36.56 117.647 36.56C117.141 36.56 116.781 36.64 116.567 36.8C116.354 36.96 116.247 37.1733 116.247 37.44C116.247 37.72 116.321 37.94 116.467 38.1C116.627 38.2467 116.921 38.3533 117.347 38.42L118.527 38.58C120.834 38.8867 121.987 39.94 121.987 41.74C121.987 42.2467 121.881 42.7133 121.667 43.14C121.454 43.5667 121.147 43.94 120.747 44.26C120.361 44.5667 119.887 44.8067 119.327 44.98C118.781 45.1533 118.167 45.24 117.487 45.24ZM130.205 43.24H130.105C130.012 43.5067 129.885 43.76 129.725 44C129.579 44.24 129.385 44.4533 129.145 44.64C128.905 44.8267 128.619 44.9733 128.285 45.08C127.965 45.1867 127.592 45.24 127.165 45.24C126.085 45.24 125.265 44.8867 124.705 44.18C124.159 43.46 123.885 42.4333 123.885 41.1V34.5H126.845V40.84C126.845 41.48 126.959 41.9733 127.185 42.32C127.412 42.6667 127.799 42.84 128.345 42.84C128.572 42.84 128.799 42.8067 129.025 42.74C129.252 42.6733 129.452 42.58 129.625 42.46C129.799 42.3267 129.939 42.1667 130.045 41.98C130.152 41.7933 130.205 41.5733 130.205 41.32V34.5H133.165V45H130.205V43.24ZM135.92 45V34.5H138.88V36.78H138.98C139.033 36.4867 139.126 36.2067 139.26 35.94C139.393 35.66 139.566 35.4133 139.78 35.2C140.006 34.9867 140.273 34.82 140.58 34.7C140.886 34.5667 141.246 34.5 141.66 34.5H142.18V37.26H141.44C140.573 37.26 139.926 37.3733 139.5 37.6C139.086 37.8267 138.88 38.2467 138.88 38.86V45H135.92ZM151.492 45C150.959 45 150.512 44.8333 150.152 44.5C149.805 44.1667 149.585 43.72 149.492 43.16H149.372C149.212 43.84 148.859 44.36 148.312 44.72C147.765 45.0667 147.092 45.24 146.292 45.24C145.239 45.24 144.432 44.96 143.872 44.4C143.312 43.84 143.032 43.1 143.032 42.18C143.032 41.0733 143.432 40.2533 144.232 39.72C145.045 39.1733 146.145 38.9 147.532 38.9H149.192V38.24C149.192 37.7333 149.059 37.3333 148.792 37.04C148.525 36.7333 148.079 36.58 147.452 36.58C146.865 36.58 146.399 36.7067 146.052 36.96C145.705 37.2133 145.419 37.5 145.192 37.82L143.432 36.26C143.859 35.6333 144.392 35.1467 145.032 34.8C145.685 34.44 146.565 34.26 147.672 34.26C149.165 34.26 150.285 34.5867 151.032 35.24C151.779 35.8933 152.152 36.8467 152.152 38.1V42.7H153.132V45H151.492ZM147.392 43.18C147.885 43.18 148.305 43.0733 148.652 42.86C149.012 42.6467 149.192 42.3 149.192 41.82V40.58H147.752C146.592 40.58 146.012 40.9733 146.012 41.76V42.06C146.012 42.4467 146.132 42.7333 146.372 42.92C146.612 43.0933 146.952 43.18 147.392 43.18ZM155.119 45V34.5H158.079V36.28H158.199C158.385 35.7333 158.712 35.26 159.179 34.86C159.645 34.46 160.292 34.26 161.119 34.26C162.199 34.26 163.012 34.62 163.559 35.34C164.119 36.06 164.399 37.0867 164.399 38.42V45H161.439V38.66C161.439 37.98 161.332 37.48 161.119 37.16C160.905 36.8267 160.525 36.66 159.979 36.66C159.739 36.66 159.505 36.6933 159.279 36.76C159.052 36.8133 158.845 36.9067 158.659 37.04C158.485 37.1733 158.345 37.34 158.239 37.54C158.132 37.7267 158.079 37.9467 158.079 38.2V45H155.119ZM171.273 45.24C170.486 45.24 169.786 45.1133 169.173 44.86C168.559 44.5933 168.046 44.2267 167.633 43.76C167.219 43.28 166.906 42.7 166.693 42.02C166.479 41.34 166.373 40.58 166.373 39.74C166.373 38.9 166.479 38.1467 166.693 37.48C166.906 36.8 167.219 36.22 167.633 35.74C168.046 35.26 168.559 34.8933 169.173 34.64C169.786 34.3867 170.486 34.26 171.273 34.26C172.339 34.26 173.226 34.5 173.933 34.98C174.653 35.46 175.166 36.1333 175.473 37L173.073 38.04C172.979 37.64 172.786 37.3 172.493 37.02C172.199 36.74 171.793 36.6 171.273 36.6C170.673 36.6 170.219 36.8 169.913 37.2C169.606 37.5867 169.453 38.1133 169.453 38.78V40.74C169.453 41.4067 169.606 41.9333 169.913 42.32C170.219 42.7067 170.673 42.9 171.273 42.9C171.806 42.9 172.226 42.76 172.533 42.48C172.853 42.1867 173.086 41.8067 173.233 41.34L175.533 42.34C175.186 43.34 174.646 44.0733 173.913 44.54C173.193 45.0067 172.313 45.24 171.273 45.24ZM181.647 45.24C180.847 45.24 180.134 45.1133 179.507 44.86C178.881 44.5933 178.347 44.2267 177.907 43.76C177.481 43.28 177.154 42.7 176.927 42.02C176.714 41.34 176.607 40.58 176.607 39.74C176.607 38.9133 176.714 38.1667 176.927 37.5C177.141 36.82 177.454 36.24 177.867 35.76C178.294 35.28 178.814 34.9133 179.427 34.66C180.041 34.3933 180.741 34.26 181.527 34.26C182.394 34.26 183.134 34.4067 183.747 34.7C184.374 34.9933 184.881 35.3867 185.267 35.88C185.667 36.3733 185.954 36.9467 186.127 37.6C186.314 38.24 186.407 38.9133 186.407 39.62V40.5H179.667V40.66C179.667 41.3533 179.854 41.9067 180.227 42.32C180.601 42.72 181.187 42.92 181.987 42.92C182.601 42.92 183.101 42.8 183.487 42.56C183.874 42.3067 184.234 42.0067 184.567 41.66L186.047 43.5C185.581 44.0467 184.967 44.4733 184.207 44.78C183.461 45.0867 182.607 45.24 181.647 45.24ZM181.587 36.44C180.987 36.44 180.514 36.64 180.167 37.04C179.834 37.4267 179.667 37.9467 179.667 38.6V38.76H183.347V38.58C183.347 37.94 183.201 37.4267 182.907 37.04C182.627 36.64 182.187 36.44 181.587 36.44ZM199.024 45.24C198.078 45.24 197.224 45.0933 196.464 44.8C195.704 44.4933 195.058 44.0467 194.524 43.46C193.991 42.86 193.578 42.12 193.284 41.24C192.991 40.3467 192.844 39.3067 192.844 38.12C192.844 36.9467 192.991 35.9067 193.284 35C193.578 34.08 193.991 33.3133 194.524 32.7C195.058 32.0733 195.704 31.6 196.464 31.28C197.224 30.96 198.078 30.8 199.024 30.8C200.318 30.8 201.384 31.0667 202.224 31.6C203.064 32.12 203.738 32.9467 204.244 34.08L201.624 35.44C201.438 34.8533 201.144 34.3867 200.744 34.04C200.358 33.68 199.784 33.5 199.024 33.5C198.131 33.5 197.411 33.7933 196.864 34.38C196.331 34.9533 196.064 35.7933 196.064 36.9V39.14C196.064 40.2467 196.331 41.0933 196.864 41.68C197.411 42.2533 198.131 42.54 199.024 42.54C199.771 42.54 200.364 42.34 200.804 41.94C201.258 41.5267 201.591 41.0333 201.804 40.46L204.284 41.9C203.764 42.9667 203.078 43.7933 202.224 44.38C201.384 44.9533 200.318 45.24 199.024 45.24ZM214.012 45C213.478 45 213.032 44.8333 212.672 44.5C212.325 44.1667 212.105 43.72 212.012 43.16H211.892C211.732 43.84 211.378 44.36 210.832 44.72C210.285 45.0667 209.612 45.24 208.812 45.24C207.758 45.24 206.952 44.96 206.392 44.4C205.832 43.84 205.552 43.1 205.552 42.18C205.552 41.0733 205.952 40.2533 206.752 39.72C207.565 39.1733 208.665 38.9 210.052 38.9H211.712V38.24C211.712 37.7333 211.578 37.3333 211.312 37.04C211.045 36.7333 210.598 36.58 209.972 36.58C209.385 36.58 208.918 36.7067 208.572 36.96C208.225 37.2133 207.938 37.5 207.712 37.82L205.952 36.26C206.378 35.6333 206.912 35.1467 207.552 34.8C208.205 34.44 209.085 34.26 210.192 34.26C211.685 34.26 212.805 34.5867 213.552 35.24C214.298 35.8933 214.672 36.8467 214.672 38.1V42.7H215.652V45H214.012ZM209.912 43.18C210.405 43.18 210.825 43.0733 211.172 42.86C211.532 42.6467 211.712 42.3 211.712 41.82V40.58H210.272C209.112 40.58 208.532 40.9733 208.532 41.76V42.06C208.532 42.4467 208.652 42.7333 208.892 42.92C209.132 43.0933 209.472 43.18 209.912 43.18ZM217.638 45V34.5H220.598V36.78H220.698C220.752 36.4867 220.845 36.2067 220.978 35.94C221.112 35.66 221.285 35.4133 221.498 35.2C221.725 34.9867 221.992 34.82 222.298 34.7C222.605 34.5667 222.965 34.5 223.378 34.5H223.898V37.26H223.158C222.292 37.26 221.645 37.3733 221.218 37.6C220.805 37.8267 220.598 38.2467 220.598 38.86V45H217.638ZM225.724 45V34.5H228.684V36.78H228.784C228.838 36.4867 228.931 36.2067 229.064 35.94C229.198 35.66 229.371 35.4133 229.584 35.2C229.811 34.9867 230.078 34.82 230.384 34.7C230.691 34.5667 231.051 34.5 231.464 34.5H231.984V37.26H231.244C230.378 37.26 229.731 37.3733 229.304 37.6C228.891 37.8267 228.684 38.2467 228.684 38.86V45H225.724ZM235.29 33.38C234.69 33.38 234.25 33.2467 233.97 32.98C233.704 32.7 233.57 32.3467 233.57 31.92V31.48C233.57 31.0533 233.704 30.7067 233.97 30.44C234.25 30.16 234.69 30.02 235.29 30.02C235.89 30.02 236.324 30.16 236.59 30.44C236.87 30.7067 237.01 31.0533 237.01 31.48V31.92C237.01 32.3467 236.87 32.7 236.59 32.98C236.324 33.2467 235.89 33.38 235.29 33.38ZM233.81 34.5H236.77V45H233.81V34.5ZM243.913 45.24C243.113 45.24 242.399 45.1133 241.773 44.86C241.146 44.5933 240.613 44.2267 240.173 43.76C239.746 43.28 239.419 42.7 239.193 42.02C238.979 41.34 238.873 40.58 238.873 39.74C238.873 38.9133 238.979 38.1667 239.193 37.5C239.406 36.82 239.719 36.24 240.133 35.76C240.559 35.28 241.079 34.9133 241.693 34.66C242.306 34.3933 243.006 34.26 243.793 34.26C244.659 34.26 245.399 34.4067 246.013 34.7C246.639 34.9933 247.146 35.3867 247.533 35.88C247.933 36.3733 248.219 36.9467 248.393 37.6C248.579 38.24 248.673 38.9133 248.673 39.62V40.5H241.933V40.66C241.933 41.3533 242.119 41.9067 242.493 42.32C242.866 42.72 243.453 42.92 244.253 42.92C244.866 42.92 245.366 42.8 245.753 42.56C246.139 42.3067 246.499 42.0067 246.833 41.66L248.313 43.5C247.846 44.0467 247.233 44.4733 246.473 44.78C245.726 45.0867 244.873 45.24 243.913 45.24ZM243.853 36.44C243.253 36.44 242.779 36.64 242.433 37.04C242.099 37.4267 241.933 37.9467 241.933 38.6V38.76H245.613V38.58C245.613 37.94 245.466 37.4267 245.173 37.04C244.893 36.64 244.453 36.44 243.853 36.44ZM250.763 45V34.5H253.723V36.78H253.823C253.877 36.4867 253.97 36.2067 254.103 35.94C254.237 35.66 254.41 35.4133 254.623 35.2C254.85 34.9867 255.117 34.82 255.423 34.7C255.73 34.5667 256.09 34.5 256.503 34.5H257.023V37.26H256.283C255.417 37.26 254.77 37.3733 254.343 37.6C253.93 37.8267 253.723 38.2467 253.723 38.86V45H250.763ZM262.409 45.24C261.396 45.24 260.543 45.08 259.849 44.76C259.156 44.4267 258.536 43.96 257.989 43.36L259.729 41.6C260.103 42.0133 260.516 42.34 260.969 42.58C261.423 42.82 261.936 42.94 262.509 42.94C263.096 42.94 263.503 42.8533 263.729 42.68C263.956 42.4933 264.069 42.2467 264.069 41.94C264.069 41.4467 263.716 41.1533 263.009 41.06L261.869 40.92C259.509 40.6267 258.329 39.5467 258.329 37.68C258.329 37.1733 258.423 36.7133 258.609 36.3C258.809 35.8733 259.083 35.5133 259.429 35.22C259.789 34.9133 260.216 34.68 260.709 34.52C261.216 34.3467 261.783 34.26 262.409 34.26C262.956 34.26 263.436 34.3 263.849 34.38C264.276 34.4467 264.649 34.5533 264.969 34.7C265.303 34.8333 265.603 35.0067 265.869 35.22C266.149 35.42 266.423 35.6467 266.689 35.9L264.989 37.64C264.656 37.3067 264.276 37.0467 263.849 36.86C263.436 36.66 263.009 36.56 262.569 36.56C262.063 36.56 261.703 36.64 261.489 36.8C261.276 36.96 261.169 37.1733 261.169 37.44C261.169 37.72 261.243 37.94 261.389 38.1C261.549 38.2467 261.843 38.3533 262.269 38.42L263.449 38.58C265.756 38.8867 266.909 39.94 266.909 41.74C266.909 42.2467 266.803 42.7133 266.589 43.14C266.376 43.5667 266.069 43.94 265.669 44.26C265.283 44.5667 264.809 44.8067 264.249 44.98C263.703 45.1533 263.089 45.24 262.409 45.24Z" fill="white"/>
<defs>
<filter id="filter1_d_1_718" x="12" y="8" width="68.0005" height="68.0005" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_718"/>
<feBlend mode="normal" in="BackgroundImageFix" in2="effect1_dropShadow_1_718" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
</filter>
<linearGradient id="paint0_linear_1_718" x1="46.0001" y1="8" x2="46.0001" y2="120.9" gradientUnits="userSpaceOnUse">
<stop offset="0.15" stop-color="#2F2F2F" stop-opacity="0.85"/>
<stop offset="0.987663" stop-color="#0148A5"/>
</linearGradient>
</defs>
</svg>
 )


 export const DiamondGlow=()=>(
  <svg width="711" height="284" viewBox="0 0 711 284" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_4_53)">
<g clip-path="url(#paint0_diamond_4_53_clip_path)" data-figma-skip-parse="true"><g transform="matrix(0 0.11 -0.3235 0 355.5 142)"><rect x="0" y="0" width="1009.09" height="1003.09" fill="url(#paint0_diamond_4_53)" opacity="1" shape-rendering="crispEdges"/><rect x="0" y="0" width="1009.09" height="1003.09" transform="scale(1 -1)" fill="url(#paint0_diamond_4_53)" opacity="1" shape-rendering="crispEdges"/><rect x="0" y="0" width="1009.09" height="1003.09" transform="scale(-1 1)" fill="url(#paint0_diamond_4_53)" opacity="1" shape-rendering="crispEdges"/><rect x="0" y="0" width="1009.09" height="1003.09" transform="scale(-1)" fill="url(#paint0_diamond_4_53)" opacity="1" shape-rendering="crispEdges"/></g></g><ellipse cx="355.5" cy="142" rx="323.5" ry="110" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_DIAMOND&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.078431375324726105,&#34;g&#34;:0.43921568989753723,&#34;b&#34;:0.90980392694473267,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.0078431377187371254,&#34;g&#34;:0.031372550874948502,&#34;b&#34;:0.070588238537311554,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.078431375324726105,&#34;g&#34;:0.43921568989753723,&#34;b&#34;:0.90980392694473267,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.0078431377187371254,&#34;g&#34;:0.031372550874948502,&#34;b&#34;:0.070588238537311554,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:3.9617326753156254e-14,&#34;m01&#34;:-647.0,&#34;m02&#34;:679.0,&#34;m10&#34;:220.0,&#34;m11&#34;:1.3471115431376406e-14,&#34;m12&#34;:32.0},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"/>
</g>
<defs>
<filter id="filter0_f_4_53" x="0.700001" y="0.700001" width="709.6" height="282.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="15.65" result="effect1_foregroundBlur_4_53"/>
</filter>
<clipPath id="paint0_diamond_4_53_clip_path"><ellipse cx="355.5" cy="142" rx="323.5" ry="110"/></clipPath><linearGradient id="paint0_diamond_4_53" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
<stop stop-color="#1470E8"/>
<stop offset="1" stop-color="#020812"/>
</linearGradient>
</defs>
</svg>
 )
