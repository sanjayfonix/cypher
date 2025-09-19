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
  <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.47368 0H18.5263C19.4476 0 20.3311 0.379285 20.9826 1.05442C21.634 1.72955 22 2.64522 22 3.6V14.4C22 15.3548 21.634 16.2705 20.9826 16.9456C20.3311 17.6207 19.4476 18 18.5263 18H3.47368C2.55241 18 1.66886 17.6207 1.01742 16.9456C0.365977 16.2705 0 15.3548 0 14.4V3.6C0 2.64522 0.365977 1.72955 1.01742 1.05442C1.66886 0.379285 2.55241 0 3.47368 0ZM3.47368 1.2C2.89474 1.2 2.38526 1.404 1.99158 1.764L11 7.8L20.0084 1.764C19.6147 1.404 19.1053 1.2 18.5263 1.2H3.47368ZM11 9.252L1.30842 2.736C1.21579 3 1.15789 3.3 1.15789 3.6V14.4C1.15789 15.0365 1.40188 15.647 1.83617 16.0971C2.27047 16.5471 2.8595 16.8 3.47368 16.8H18.5263C19.1405 16.8 19.7295 16.5471 20.1638 16.0971C20.5981 15.647 20.8421 15.0365 20.8421 14.4V3.6C20.8421 3.3 20.7842 3 20.6916 2.736L11 9.252Z" fill="#157AFF" />
  </svg>



);

export const Headquators = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.30935 7.61083L15.7065 1.23215C17.6598 0.301547 19.6981 2.34084 18.7686 4.29511L12.3894 17.6901C11.5173 19.5203 8.87466 19.4077 8.16229 17.5086L6.98343 14.3617C6.86824 14.0547 6.68868 13.776 6.45681 13.5441C6.22494 13.3123 5.94613 13.1327 5.63912 13.0175L2.49089 11.8376C0.592764 11.1253 0.479014 8.48284 2.30935 7.61083Z" stroke="#157AFF" stroke-linecap="round" stroke-linejoin="round" />
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
    <path d="M22 41.75L13.508 37.2221C11.0869 35.9344 9.06222 34.0116 7.65137 31.6601C6.24053 29.3086 5.49678 26.6173 5.5 23.875V6C5.5 5.27065 5.78973 4.57118 6.30546 4.05546C6.82118 3.53973 7.52065 3.25 8.25 3.25H35.75C36.4793 3.25 37.1788 3.53973 37.6945 4.05546C38.2103 4.57118 38.5 5.27065 38.5 6V23.875C38.5032 26.6173 37.7595 29.3086 36.3486 31.6601C34.9378 34.0116 32.9131 35.9344 30.492 37.2221L22 41.75ZM8.25 6V23.875C8.24847 26.1186 8.85758 28.3203 10.012 30.244C11.1665 32.1678 12.8227 33.7411 14.8032 34.7952L22 38.6329L29.1968 34.7966C31.1775 33.7424 32.8339 32.1688 33.9883 30.2448C35.1428 28.3208 35.7518 26.1188 35.75 23.875V6H8.25Z" fill="white" />
    <path d="M22 35.2559V8.75H33V23.6069C32.9999 25.3497 32.5266 27.0598 31.6306 28.5547C30.7346 30.0496 29.4495 31.2731 27.9125 32.0948L22 35.2559Z" fill="white" />
  </svg>
);

export const BlueShield = () => (
  <svg width={44} height={45} viewBox="0 0 44 45" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 41.75L13.508 37.2221C11.0869 35.9344 9.06222 34.0116 7.65137 31.6601C6.24053 29.3086 5.49678 26.6173 5.5 23.875V6C5.5 5.27065 5.78973 4.57118 6.30546 4.05546C6.82118 3.53973 7.52065 3.25 8.25 3.25H35.75C36.4793 3.25 37.1788 3.53973 37.6945 4.05546C38.2103 4.57118 38.5 5.27065 38.5 6V23.875C38.5032 26.6173 37.7595 29.3086 36.3486 31.6601C34.9378 34.0116 32.9131 35.9344 30.492 37.2221L22 41.75ZM8.25 6V23.875C8.24847 26.1186 8.85758 28.3203 10.012 30.244C11.1665 32.1678 12.8227 33.7411 14.8032 34.7952L22 38.6329L29.1968 34.7966C31.1775 33.7424 32.8339 32.1688 33.9883 30.2448C35.1428 28.3208 35.7518 26.1188 35.75 23.875V6H8.25Z" fill="blue" />
    <path d="M22 35.2559V8.75H33V23.6069C32.9999 25.3497 32.5266 27.0598 31.6306 28.5547C30.7346 30.0496 29.4495 31.2731 27.9125 32.0948L22 35.2559Z" fill="blue" />
  </svg>
);


export const Find = () => (

  <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M34.7444 37L24.5944 26.85C23.7889 27.4944 22.8625 28.0046 21.8153 28.3806C20.7681 28.7565 19.6537 28.9444 18.4722 28.9444C15.5454 28.9444 13.0686 27.9305 11.0418 25.9027C9.015 23.8748 8.00107 21.398 8 18.4722C7.99893 15.5464 9.01285 13.0696 11.0418 11.0418C13.0707 9.01393 15.5475 8 18.4722 8C21.3969 8 23.8743 9.01393 25.9043 11.0418C27.9343 13.0696 28.9477 15.5464 28.9444 18.4722C28.9444 19.6537 28.7565 20.7681 28.3806 21.8153C28.0046 22.8625 27.4944 23.7889 26.85 24.5944L37 34.7444L34.7444 37ZM18.4722 25.7222C20.4861 25.7222 22.1982 25.0176 23.6084 23.6084C25.0187 22.1993 25.7233 20.4872 25.7222 18.4722C25.7211 16.4573 25.0166 14.7457 23.6084 13.3376C22.2003 11.9295 20.4883 11.2244 18.4722 11.2222C16.4562 11.2201 14.7446 11.9252 13.3376 13.3376C11.9306 14.75 11.2254 16.4616 11.2222 18.4722C11.219 20.4829 11.9241 22.195 13.3376 23.6084C14.7511 25.0219 16.4626 25.7265 18.4722 25.7222Z" fill="white" />
  </svg>
);

export const Graph = () => (

  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32.7387 31.6855V33.7383H5.02638L4 32.7119V4.99951H6.05277V31.6855H32.7387Z" fill="white" />
    <path d="M28.6331 11.5835L18.0696 22.1491H16.6162L13.2374 18.7682L5.75298 26.2546L4.29962 24.8013L12.5107 16.5902H13.9641L17.3429 19.9711L27.9065 9.40552H29.3578L33.4633 13.5111L32.012 14.9644L28.6331 11.5835Z" fill="white" />
  </svg>
);

export const DropDown = () => (
  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 7.5L8 0.5L15 7.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

export const DropUp = () => (
  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 0.5L8 7.5L15 0.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

export const Tick = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM6.5 11.75L2.75 8L3.8075 6.9425L6.5 9.6275L12.1925 3.935L13.25 5L6.5 11.75Z" fill="#157AFF" />
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
      <rect x="24" y="24" width="54" height="54" rx="27" fill="#1057B5" />
      <rect x="35.8799" y="35.8799" width="30.9622" height="30.4263" fill="url(#pattern0_1_1657)" />
    </g>
    <defs>
      <filter id="filter0_dddi_1_1657" x="0" y="0" width="102" height="102" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.149167 0 0 0 0 0.54055 0 0 0 0 1 0 0 0 0.5 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1657" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.0784314 0 0 0 0 0.439216 0 0 0 0 0.909804 0 0 0 1 0" />
        <feBlend mode="normal" in2="effect1_dropShadow_1_1657" result="effect2_dropShadow_1_1657" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="12" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.172115 0 0 0 0 0.531386 0 0 0 0 1 0 0 0 0.6 0" />
        <feBlend mode="normal" in2="effect2_dropShadow_1_1657" result="effect3_dropShadow_1_1657" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_1_1657" result="shape" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.535577 0 0 0 0 0.749211 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect4_innerShadow_1_1657" />
      </filter>
      <pattern id="pattern0_1_1657" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_1_1657" transform="scale(0.00934579)" />
      </pattern>
      <image id="image0_1_1657" width="107" height="107" preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAABrCAYAAABwv3wMAAAACXBIWXMAABM5AAATOQGPwlYBAAADHklEQVR4nO3bPagcVRjG8Zm9k3CJNn5UinbGL6yCio2FIaKiWBhUsLMwCIqNpDEIFnZamBCQVFpcrALBBESwU1DbQBBSBLS5Ri3uYnZzdt73mdfibjEczpUoumcD/199Yf7wcPayM7NNAwAAAAAAAAAAAAAAAAAAAAAAAPxnIuIBdz9uZs/VbsHfSCndL+laLEn6oHYT9uDu78aIpMHd36rdhQIzeyYykuTur9ZuQ4GkjwuDLczs6dptyETERNLnhcH+7Pv+8dp9yETEPkkXCoP9nlJ6sHYfMhFxQNJ3hcF+ns/n99TuQ2ZnZ+d2SRcLg12aTqd31O5DZjab3S3pSmGw77e3t2+p3YdMSumgpKuFwb6KiP21+5CJiEOSpoXBtiJiUrsPGTM7LOl6YbBParehwMyOSvJ8MHd/r3YbCtz9mKQhO11DRLxRuw0F7n6i8HHoZvZS7TYUSDpZGOy6mT1Vuw2Z2L2PuFUYbBoRh2r3IRMR+5fft/LBfk0p3Ve7D5mIuFXSD4XBLkfEvtp9yCxvS6V8sMVi8UjtNoxERCfpbOFk/cb9wzUSEa2kM4Wh5n3fP1m7DyOSPiwMZWb2Yu02jLj7O4WhBnd/vXYbRtz9NUnKx3L347XbMGJmz0paFE7VR7XbMNL3/RPjt3ZHPguea62PxWLxsKQ/CifqfPDld31ExL2SfikM9W1EHKjdh6WIuFPST4WhLkbEbbX7sBS79/1+LAx1ZTab3VW7D0uxe0f968JQV1NKB2v3YSl2n1V9URiKZ1XrRtKpwlA8BV437v5+YSg3s6O12zDi7m+W3lxy92O12zDS9/1je7wTeKJ2GzL5b4qXp+pk7S4U9H3/6Phk8R77v9Ou6kJmdmQymbwcEZc2NjZOt21re/2tu7/dtu0rTdOs+y9JFhGx1XXdp6u42MrGulFm9nzXdedrd/xDR9q2/eb/vsjafRS1bXvTvbUkaSXNazeWpC+HYZjX7rhRwzBcc/cLq7jW2n0MNk3TpJQe6rruheYm+J/l7uc2Nzcv1w4BAAAAAAAAAAAAAAAAAAAAAAAAAOztL8qrbBCyblGBAAAAAElFTkSuQmCC" />
    </defs>
  </svg>
);


export const MagIcon = () => (
  <svg className='overflow-hidden animate-spin-slow' width="120" height="150" rotate="150" viewBox="0 0 123 119" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M116.926 118.708C114.676 120.464 70.6114 73.4932 70.6114 73.4932C66.9134 76.5692 62.6606 78.9495 57.8531 80.6343C53.0457 82.3191 48.2136 83.1615 43.3568 83.1615C31.5131 83.1615 21.4889 79.1589 13.2842 71.1538C5.07943 63.1486 0.977051 53.3648 0.977051 41.8024C0.977051 30.2399 5.07449 20.4513 13.2694 12.4365C21.4643 4.42175 31.4835 0.409547 43.3272 0.39992C55.1708 0.390292 65.2 4.39527 73.4146 12.4149C81.6292 20.4345 85.7365 30.2231 85.7365 41.7807C85.7365 46.7966 84.8268 51.6512 83.0073 56.3445C81.1879 61.0378 78.7965 65.0524 75.8331 68.3883C75.8331 68.3883 123.949 111.383 122.148 113.596C120.346 115.809 119.176 116.952 116.926 118.708ZM43.3642 75.9338C53.1763 75.9338 61.46 72.6364 68.2151 66.0416C74.9702 59.4469 78.3478 51.3575 78.3478 41.7735C78.3478 32.1894 74.9702 24.1025 68.2151 17.5125C61.46 10.9226 53.1763 7.62525 43.3642 7.62044C33.552 7.61562 25.2659 10.913 18.5058 17.5125C11.7458 24.1121 8.36823 32.1991 8.37316 41.7735C8.37809 51.3479 11.7556 59.4349 18.5058 66.0344C25.256 72.634 33.5397 75.9314 43.3568 75.9265" fill="#E8F2FF" />
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
      <path d="M114.264 106.186H85.5601V0H84.5601V106.186H55.8569V0H54.8569V106.186H26.1528V0H25.1528V106.186H-0.590332V107.186H25.1528V145.084H-0.885254V146.084H25.1528V183.982H-1.18018V184.982H25.1528V222.879H-1.47607V223.879H25.1528V255H26.1528V223.879H54.8569V255H55.8569V223.879H84.5601V255H85.5601V223.879H114.264V255H115.264V223.879H193.25V222.879H115.264V184.982H193.545V183.982H115.264V146.084H193.84V145.084H115.264V107.186H194.135V106.186H115.264V0H114.264V106.186ZM114.264 222.879H85.5601V184.982H114.264V222.879ZM84.5601 222.879H55.8569V184.982H84.5601V222.879ZM54.8569 222.879H26.1528V184.982H54.8569V222.879ZM114.264 183.982H85.5601V146.084H114.264V183.982ZM84.5601 183.982H55.8569V146.084H84.5601V183.982ZM54.8569 183.982H26.1528V146.084H54.8569V183.982ZM114.264 107.186V145.084H85.5601V107.186H114.264ZM84.5601 107.186V145.084H55.8569V107.186H84.5601ZM54.8569 107.186V145.084H26.1528V107.186H54.8569Z" fill="url(#paint0_linear_222_2167)" />
      <g filter="url(#filter0_dd_222_2167)">
        <path d="M55.575 202.711L56.4055 221.871C56.4055 221.871 55.8993 222.688 55.575 222.688C55.2507 222.688 54.7446 221.871 54.7446 221.871L55.575 202.711Z" fill="url(#paint1_linear_222_2167)" />
      </g>
      <g filter="url(#filter1_dd_222_2167)">
        <path d="M77.7046 145.019L97.0755 145.84C97.0755 145.84 97.901 145.339 97.901 145.019C97.901 144.698 97.0755 144.197 97.0755 144.197L77.7046 145.019Z" fill="url(#paint2_linear_222_2167)" />
      </g>
      <g filter="url(#filter2_dd_222_2167)">
        <path d="M54.692 72.4824L53.8616 53.3221C53.8616 53.3221 54.3678 52.5055 54.692 52.5055C55.0163 52.5055 55.5225 53.3221 55.5225 53.3221L54.692 72.4824Z" fill="url(#paint3_linear_222_2167)" />
      </g>
    </g>
    <defs>
      <filter id="filter0_dd_222_2167" x="52.7446" y="200.711" width="5.66064" height="23.9771" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="0.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_222_2167" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="effect1_dropShadow_222_2167" result="effect2_dropShadow_222_2167" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_222_2167" result="shape" />
      </filter>
      <filter id="filter1_dd_222_2167" x="75.7046" y="142.197" width="24.1963" height="5.64258" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="0.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_222_2167" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="effect1_dropShadow_222_2167" result="effect2_dropShadow_222_2167" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_222_2167" result="shape" />
      </filter>
      <filter id="filter2_dd_222_2167" x="51.8618" y="50.5054" width="5.66064" height="23.9771" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="0.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_222_2167" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="effect1_dropShadow_222_2167" result="effect2_dropShadow_222_2167" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_222_2167" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_222_2167" x1="-9.50135" y1="242.466" x2="220.586" y2="106.208" gradientUnits="userSpaceOnUse">
        <stop stop-color="white" stop-opacity="0.1" />
        <stop offset="1" stop-color="#999999" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="paint1_linear_222_2167" x1="55.575" y1="222.688" x2="55.5751" y2="202.711" gradientUnits="userSpaceOnUse">
        <stop offset="0.0240385" stop-color="#C4DEFF" />
        <stop offset="0.630248" stop-color="#006EFF" />
        <stop offset="1" stop-color="#093C80" />
      </linearGradient>
      <linearGradient id="paint2_linear_222_2167" x1="97.901" y1="145.019" x2="77.7046" y2="145.019" gradientUnits="userSpaceOnUse">
        <stop offset="0.0240385" stop-color="#C4DEFF" />
        <stop offset="0.630248" stop-color="#006EFF" />
        <stop offset="1" stop-color="#093C80" />
      </linearGradient>
      <linearGradient id="paint3_linear_222_2167" x1="54.692" y1="52.5055" x2="54.692" y2="72.4824" gradientUnits="userSpaceOnUse">
        <stop offset="0.0240385" stop-color="#A2CAFF" />
        <stop offset="0.442308" stop-color="#006EFF" />
        <stop offset="1" stop-color="#093C80" />
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
  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.6497 19.0919C33.0786 15.3105 31.0954 11.8861 28.0997 9.50895C25.3566 7.37846 21.971 6.2434 18.4982 6.28995C15.2808 6.35515 12.1488 7.33709 9.47016 9.12045C7.5704 10.4374 6.00873 12.1846 4.91243 14.2196C3.81613 16.2547 3.21624 18.52 3.16166 20.831C2.93208 23.9715 3.7308 27.1014 5.43716 29.7479C5.69468 30.0806 6.02586 30.3489 6.40465 30.5319C6.78344 30.7149 7.19952 30.8075 7.62016 30.8024C8.02701 30.803 8.42976 30.7212 8.80416 30.562C9.3752 30.3021 9.8325 29.8437 10.0911 29.2721C10.3497 28.7005 10.392 28.0544 10.2102 27.454C10.2205 27.3927 10.2205 27.3302 10.2102 27.2689C10.2102 27.2689 7.25016 21.719 10.0067 16.9645L9.98816 16.798C10.8042 15.261 12.0332 13.9825 13.5368 13.1065C15.0403 12.2305 16.7587 11.7918 18.4982 11.84C20.2243 11.8718 21.9136 12.344 23.4061 13.2117C24.8986 14.0793 26.1449 15.3137 27.0267 16.798C28.1672 18.7784 28.5486 21.1061 28.0997 23.347L18.8497 19.8689C18.7617 19.8176 18.6637 19.786 18.5624 19.7763C18.461 19.7666 18.3588 19.779 18.2627 19.8127C18.1666 19.8463 18.079 19.9005 18.0059 19.9714C17.9328 20.0422 17.876 20.1281 17.8394 20.2231C17.8027 20.3181 17.7872 20.4199 17.7937 20.5215C17.8003 20.6231 17.8289 20.722 17.8774 20.8115C17.926 20.901 17.9935 20.9788 18.0751 21.0397C18.1567 21.1005 18.2505 21.1429 18.3502 21.1639L27.7482 24.6604C27.5761 25.2965 27.347 25.9156 27.0637 26.5105C26.8409 26.8861 26.7023 27.3056 26.6576 27.74C26.6129 28.1744 26.6631 28.6133 26.8047 29.0264C26.9225 29.3549 27.1065 29.6556 27.3451 29.9102C27.5837 30.1647 27.872 30.3677 28.1922 30.5064C29.3947 31.0059 31.0597 31.0615 32.2622 28.4715C33.729 25.5779 34.2159 22.2862 33.6497 19.0919ZM8.87816 27.75C8.9671 28.028 8.9502 28.3291 8.83069 28.5954C8.71118 28.8618 8.49749 29.0746 8.23066 29.1929C7.95221 29.3288 7.63593 29.3661 7.3335 29.2989C7.03107 29.2317 6.76037 29.0639 6.56566 28.823C5.06441 26.4807 4.35735 23.7174 4.54916 20.9419C4.69578 18.9572 5.19704 17.0148 6.02916 15.207L8.48966 16.65C7.71799 18.4109 7.35224 20.3228 7.41948 22.2442C7.48673 24.1656 7.98526 26.0473 8.87816 27.75ZM9.24816 15.4475L6.69516 14.0045C7.67287 12.5395 8.93026 11.2822 10.3952 10.3045C12.6352 8.7972 15.2314 7.90413 17.9247 7.71445V10.471C16.1799 10.5191 14.4742 10.9988 12.9601 11.8672C11.446 12.7356 10.1707 13.9657 9.24816 15.4475ZM19.3122 10.471V7.69595C22.1698 7.7989 24.9217 8.80255 27.1747 10.5635C28.3946 11.5498 29.4499 12.7237 30.3012 14.0415L27.7482 15.466C26.788 14.0594 25.5289 12.8823 24.061 12.0188C22.5931 11.1553 20.9526 10.6268 19.2567 10.471H19.3122ZM31.0412 27.8979C30.1532 29.7479 29.1912 29.4704 28.7657 29.2484C28.4786 29.1149 28.2536 28.8766 28.1367 28.5824C28.071 28.3447 28.0535 28.0961 28.0853 27.8515C28.117 27.6069 28.1974 27.3711 28.3217 27.158C28.6328 26.5668 28.8868 25.9474 29.0802 25.308L29.6167 25.5114C29.7021 25.5289 29.7902 25.5289 29.8757 25.5114C30.017 25.5063 30.1538 25.4598 30.2689 25.3775C30.3841 25.2953 30.4725 25.181 30.5232 25.049C30.5836 24.877 30.575 24.6884 30.4991 24.5227C30.4232 24.3571 30.2859 24.2273 30.1162 24.1609L29.4132 23.902C29.9241 21.4911 29.6182 18.9788 28.5437 16.7609L30.9857 15.3734C31.6286 16.6471 32.0657 18.0145 32.2807 19.425C32.7881 22.3091 32.3535 25.28 31.0412 27.8979Z" fill="#E8F2FF"/>
<path d="M14.5574 14.023C14.4315 14.0193 14.3074 14.0536 14.2012 14.1212C14.0949 14.1889 14.0115 14.2869 13.9616 14.4026C13.9117 14.5183 13.8977 14.6462 13.9214 14.7699C13.945 14.8937 14.0053 15.0074 14.0944 15.0965C14.1835 15.1855 14.2972 15.2458 14.4209 15.2695C14.5446 15.2932 14.6726 15.2792 14.7883 15.2293C14.9039 15.1794 15.0019 15.0959 15.0696 14.9897C15.1373 14.8835 15.1715 14.7594 15.1679 14.6335C15.1632 14.473 15.0974 14.3204 14.9839 14.2069C14.8704 14.0934 14.7178 14.0276 14.5574 14.023Z" fill="#E8F2FF"/>
<path d="M22.4572 15.207C22.7943 15.207 23.0677 14.9336 23.0677 14.5965C23.0677 14.2593 22.7943 13.986 22.4572 13.986C22.12 13.986 21.8467 14.2593 21.8467 14.5965C21.8467 14.9336 22.12 15.207 22.4572 15.207Z" fill="#E8F2FF"/>
<path d="M27.4706 21.6451C27.4743 21.5199 27.4406 21.3966 27.3737 21.2907C27.3069 21.1849 27.21 21.1014 27.0954 21.0509C26.9809 21.0005 26.8538 20.9853 26.7306 21.0075C26.6074 21.0296 26.4936 21.088 26.4038 21.1752C26.314 21.2624 26.2522 21.3744 26.2264 21.4969C26.2006 21.6194 26.2119 21.7468 26.2589 21.8628C26.306 21.9788 26.3865 22.0782 26.4903 22.1481C26.5941 22.2181 26.7164 22.2555 26.8416 22.2556C27.0053 22.2556 27.1625 22.1919 27.28 22.0779C27.3974 21.9639 27.4658 21.8087 27.4706 21.6451Z" fill="#E8F2FF"/>
<path d="M10.3215 21.0345C10.2016 21.0381 10.0854 21.077 9.9875 21.1462C9.88957 21.2155 9.81421 21.312 9.77082 21.4239C9.72744 21.5357 9.71796 21.6578 9.74356 21.775C9.76917 21.8922 9.82872 21.9992 9.91479 22.0828C10.0009 22.1663 10.1096 22.2226 10.2275 22.2447C10.3454 22.2668 10.4672 22.2537 10.5777 22.207C10.6882 22.1603 10.7825 22.0821 10.8488 21.9821C10.9151 21.8822 10.9504 21.7649 10.9505 21.645C10.9505 21.5632 10.9341 21.4823 10.9023 21.407C10.8705 21.3317 10.8239 21.2635 10.7652 21.2066C10.7065 21.1497 10.637 21.1051 10.5608 21.0755C10.4846 21.0459 10.4032 21.032 10.3215 21.0345Z" fill="#E8F2FF"/>
</svg>
);

export const ProtectIcon = () => (
<svg width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 28.5C12.325 28.5 12.1625 28.4882 12.0125 28.4646C11.8625 28.4409 11.7125 28.4055 11.5625 28.3582C8.1875 27.2949 5.5 25.3281 3.5 22.4577C1.5 19.5873 0.5 16.4976 0.5 13.1886V6.48987C0.5 5.89916 0.6815 5.36751 1.0445 4.89494C1.4075 4.42236 1.876 4.07975 2.45 3.86709L11.45 0.677215C11.8 0.559072 12.15 0.5 12.5 0.5C12.85 0.5 13.2 0.559072 13.55 0.677215L22.55 3.86709C23.125 4.07975 23.594 4.42236 23.957 4.89494C24.32 5.36751 24.501 5.89916 24.5 6.48987V13.1886C24.5 16.4966 23.5 19.5863 21.5 22.4577C19.5 25.329 16.8125 27.2959 13.4375 28.3582C13.2875 28.4055 13.1375 28.4409 12.9875 28.4646C12.8375 28.4882 12.675 28.5 12.5 28.5ZM12.5 25.6646C15.1 24.8848 17.25 23.3253 18.95 20.9861C20.65 18.6468 21.5 16.0477 21.5 13.1886V6.48987L12.5 3.3L3.5 6.48987V13.1886C3.5 16.0477 4.35 18.6468 6.05 20.9861C7.75 23.3253 9.9 24.8848 12.5 25.6646Z" fill="white"/>
</svg>
);

export const PointerGlow = () => (
  <svg width="66" height="10" viewBox="0 0 66 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_dd_222_2331)">
      <path d="M3 5.00037L60.5474 3.00037C60.5474 3.00037 63 4.21932 63 5.00037C63 5.78141 60.5474 7.00036 60.5474 7.00036L3 5.00037Z" fill="url(#paint0_linear_222_2331)" />
    </g>
    <defs>
      <filter id="filter0_dd_222_2331" x="0" y="0.000366211" width="66" height="10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="0.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_222_2331" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="1.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="effect1_dropShadow_222_2331" result="effect2_dropShadow_222_2331" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_222_2331" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_222_2331" x1="63" y1="5.00036" x2="3.00001" y2="5.00017" gradientUnits="userSpaceOnUse">
        <stop stop-color="#016FFF" />
        <stop offset="1" stop-color="#093C80" />
      </linearGradient>
    </defs>
  </svg>
)

export const ProtectGlowIcon = () => {
  <svg width="284" height="284" viewBox="0 0 284 284" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_222_2342)">
      <rect x="100" y="100" width="84" height="84" rx="42" fill="url(#paint0_linear_222_2342)" fill-opacity="0.2" shape-rendering="crispEdges" />
      <path d="M142 163L132.736 158.061C130.095 156.656 127.886 154.558 126.347 151.993C124.808 149.428 123.997 146.492 124 143.5V124C124 123.204 124.316 122.441 124.879 121.879C125.441 121.316 126.204 121 127 121H157C157.796 121 158.559 121.316 159.121 121.879C159.684 122.441 160 123.204 160 124V143.5C160.004 146.492 159.192 149.428 157.653 151.993C156.114 154.558 153.905 156.656 151.264 158.061L142 163ZM127 124V143.5C126.998 145.948 127.663 148.349 128.922 150.448C130.182 152.547 131.988 154.263 134.149 155.413L142 159.599L149.851 155.415C152.012 154.264 153.819 152.548 155.078 150.449C156.338 148.35 157.002 145.948 157 143.5V124H127Z" fill="#E8F2FF" />
      <path d="M142 155.916V127H154V143.208C154 145.109 153.484 146.974 152.506 148.605C151.529 150.236 150.127 151.571 148.45 152.467L142 155.916Z" fill="#E8F2FF" />
    </g>
    <defs>
      <filter id="filter0_d_222_2342" x="0" y="0" width="284" height="284" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="50" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 0.6 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_222_2342" />
        <feBlend mode="normal" in="BackgroundImageFix" in2="effect1_dropShadow_222_2342" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_222_2342" x1="142" y1="100" x2="142" y2="258.059" gradientUnits="userSpaceOnUse">
        <stop offset="0.15" stop-color="#1B1B1B" stop-opacity="0.85" />
        <stop offset="0.987663" stop-color="#0148A5" />
      </linearGradient>
    </defs>
  </svg>
}

export const BorderTravel = () => (

  <svg width="66" height="10" viewBox="0 0 66 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_dd_222_2331)" transform='translate(-25,0)'>
      <path d="M3 5.00037L60.5474 3.00037C60.5474 3.00037 63 4.21932 63 5.00037C63 5.78141 60.5474 7.00036 60.5474 7.00036L3 5.00037Z" fill="url(#paint0_linear_222_2331)" />
    </g>
    <defs>
      <filter id="filter0_dd_222_2331" x="0" y="0.000366211" width="66" height="10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="0.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_222_2331" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="1.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="effect1_dropShadow_222_2331" result="effect2_dropShadow_222_2331" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_222_2331" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_222_2331" x1="63" y1="5.00036" x2="3.00001" y2="5.00017" gradientUnits="userSpaceOnUse">
        <stop stop-color="#016FFF" />
        <stop offset="1" stop-color="#093C80" />
      </linearGradient>
    </defs>
  </svg>
);


export const Health = () => (

  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.3333 11.9185L6.17374 33.0019H30.4929L27.5568 27.9098C28.3699 28.3328 29.2485 28.6157 30.1556 28.7467L32.8744 33.4602C32.9549 33.5996 32.9973 33.7578 32.9972 33.9188C32.9972 34.0797 32.9547 34.2379 32.8742 34.3773C32.7936 34.5166 32.6778 34.6323 32.5383 34.7127C32.3988 34.7931 32.2406 34.8354 32.0797 34.8352H4.58608C4.42517 34.8352 4.2671 34.7928 4.12775 34.7124C3.9884 34.6319 3.87269 34.5162 3.79224 34.3769C3.71179 34.2375 3.66943 34.0794 3.66943 33.9185C3.66943 33.7576 3.71179 33.5996 3.79224 33.4602L17.5395 9.62504C17.62 9.4857 17.7357 9.36999 17.875 9.28955C18.0144 9.2091 18.1724 9.16675 18.3333 9.16675C18.4942 9.16675 18.6523 9.2091 18.7916 9.28955C18.931 9.36999 19.0467 9.4857 19.1272 9.62504L23.7288 17.6028C23.3882 18.4551 23.1939 19.3588 23.1541 20.2758L18.3333 11.9185Z" fill="white" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.8585 26.4981C29.6418 26.8294 30.4839 26.9994 31.3344 26.9977C32.8021 27.0004 34.2251 26.4926 35.3595 25.5613L38.9547 29.1556L40.337 27.7732L36.6667 24.1029C37.3764 23.0085 37.7321 21.7222 37.6857 20.4187C37.6392 19.1151 37.1928 17.8574 36.4069 16.8163C35.6211 15.7752 34.534 15.0011 33.2931 14.5991C32.0522 14.1971 30.7177 14.1867 29.4706 14.5692C28.2236 14.9518 27.1245 15.7088 26.3225 16.7375C25.5205 17.7661 25.0544 19.0167 24.9876 20.3194C24.9207 21.622 25.2563 22.9137 25.9488 24.0191C26.6413 25.1245 27.6572 25.99 28.8585 26.4981ZM26.9344 20.6425C26.9344 21.8094 27.398 22.9286 28.2231 23.7538C29.0483 24.5789 30.1675 25.0425 31.3344 25.0425C32.5014 25.0425 33.6205 24.5789 34.4457 23.7538C35.2708 22.9286 35.7344 21.8094 35.7344 20.6425C35.7344 19.4755 35.2708 18.3564 34.4457 17.5312C33.6205 16.7061 32.5014 16.2425 31.3344 16.2425C30.1675 16.2425 29.0483 16.7061 28.2231 17.5312C27.398 18.3564 26.9344 19.4755 26.9344 20.6425Z" fill="white" />
    <path d="M17.1875 27.5458H19.4792V29.8374H17.1875V27.5458ZM18.3333 18.3745C17.7008 18.3745 17.1875 18.8878 17.1875 19.5203V24.562C17.1875 24.8659 17.3082 25.1574 17.5231 25.3722C17.738 25.5871 18.0294 25.7078 18.3333 25.7078C18.6372 25.7078 18.9287 25.5871 19.1436 25.3722C19.3584 25.1574 19.4792 24.8659 19.4792 24.562V19.5203C19.4792 18.8878 18.9658 18.3745 18.3333 18.3745Z" fill="white" />
  </svg>
);

export const FbIcon = () => (
  <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.4167 16.3126H20.4375L21.6458 11.4792H17.4167V9.06258C17.4167 7.818 17.4167 6.64592 19.8333 6.64592H21.6458V2.58591C21.2519 2.53396 19.7645 2.41675 18.1936 2.41675C14.913 2.41675 12.5833 4.41896 12.5833 8.09591V11.4792H8.95833V16.3126H12.5833V26.5834H17.4167V16.3126Z" fill="#FFFAFA" />
  </svg>

);

export const WhatsappIcon = () => (
  <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.5187 5.93282C22.4108 4.81403 21.0912 3.92694 19.637 3.32326C18.1827 2.71957 16.6229 2.41135 15.0483 2.41657C8.45083 2.41657 3.07375 7.79365 3.07375 14.3912C3.07375 16.5057 3.62958 18.5599 4.66875 20.3724L2.97708 26.5832L9.32083 24.9157C11.0729 25.8703 13.0425 26.3778 15.0483 26.3778C21.6458 26.3778 27.0229 21.0007 27.0229 14.4032C27.0229 11.2012 25.7783 8.1924 23.5187 5.93282ZM15.0483 24.3478C13.26 24.3478 11.5079 23.8645 9.97333 22.9582L9.61083 22.7407L5.84083 23.7316L6.84375 20.0582L6.60208 19.6837C5.60828 18.0972 5.0807 16.2632 5.07958 14.3912C5.07958 8.90532 9.55041 4.43449 15.0362 4.43449C17.6946 4.43449 20.1958 5.47365 22.0687 7.35865C22.9963 8.28165 23.7313 9.37964 24.2312 10.5889C24.7311 11.7982 24.9859 13.0947 24.9808 14.4032C25.005 19.8891 20.5342 24.3478 15.0483 24.3478ZM20.51 16.9045C20.2079 16.7595 18.7337 16.0345 18.4679 15.9257C18.19 15.8291 17.9967 15.7807 17.7912 16.0707C17.5858 16.3728 17.0179 17.0495 16.8487 17.2428C16.6796 17.4482 16.4983 17.4724 16.1962 17.3153C15.8942 17.1703 14.9275 16.8441 13.7917 15.8291C12.8975 15.0316 12.3054 14.0528 12.1242 13.7507C11.955 13.4487 12.1 13.2916 12.2571 13.1345C12.39 13.0016 12.5592 12.7841 12.7042 12.6149C12.8492 12.4457 12.9096 12.3128 13.0062 12.1195C13.1029 11.9141 13.0546 11.7449 12.9821 11.5999C12.9096 11.4549 12.3054 9.98074 12.0637 9.37657C11.8221 8.79657 11.5683 8.86907 11.3871 8.85699H10.8071C10.6017 8.85699 10.2875 8.92949 10.0096 9.23157C9.74375 9.53365 8.97041 10.2587 8.97041 11.7328C8.97041 13.207 10.0458 14.6328 10.1908 14.8262C10.3358 15.0316 12.3054 18.0524 15.3021 19.3453C16.015 19.6595 16.5708 19.8407 17.0058 19.9737C17.7187 20.2032 18.3712 20.167 18.8908 20.0945C19.4708 20.0099 20.6671 19.3695 20.9087 18.6687C21.1625 17.9678 21.1625 17.3757 21.0779 17.2428C20.9933 17.1099 20.8121 17.0495 20.51 16.9045Z" fill="#FFFAFA" />
  </svg>
);

export const InstaIcon = () => (
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.8333 1.625C20.1683 1.625 22.875 4.33167 22.875 7.66667V17.3333C22.875 20.6683 20.1683 23.375 16.8333 23.375H7.16667C3.83167 23.375 1.125 20.6683 1.125 17.3333V7.66667C1.125 4.33167 3.83167 1.625 7.16667 1.625H12H16.8333Z" stroke="#FFFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 7.66675C14.6704 7.66675 16.8333 9.82966 16.8333 12.5001C16.8333 15.1705 14.6704 17.3334 12 17.3334C9.32957 17.3334 7.16666 15.1705 7.16666 12.5001C7.16666 9.82966 9.32957 7.66675 12 7.66675Z" stroke="#FFFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

);

export const XIcon = () => (
  <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.621125 0H6.21425L11.1934 7.12144L17.1725 0H18.9597L11.8763 8.09875L19.5 19H13.9069L8.70681 11.5639L2.286 19H0.5L8.02519 10.5889L0.621125 0Z" fill="#FFFAFA"/>
</svg>

);

export const BigProtectIc = () => (
  <svg width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100.481 11.6573L95.7534 6.9292L51.305 51.3777C50.6959 52.0083 50.3588 52.8529 50.3665 53.7297C50.3741 54.6064 50.7257 55.445 51.3457 56.065C51.9657 56.685 52.8043 57.0366 53.681 57.0442C54.5578 57.0519 55.4024 56.7148 56.033 56.1057L70.0099 42.1289C72.61 45.7945 73.9031 50.2274 73.6817 54.7162C73.4603 59.2049 71.7371 63.489 68.7889 66.881C65.8406 70.2729 61.8382 72.5759 57.4241 73.4203C53.01 74.2648 48.4401 73.6017 44.4481 71.5374C40.456 69.4732 37.2733 66.1276 35.4107 62.0375C33.5481 57.9475 33.1138 53.3503 34.1773 48.9838C35.2408 44.6173 37.7406 40.7347 41.2753 37.9593C44.8101 35.1838 49.1748 33.6765 53.669 33.6792L53.669 26.9917C47.6139 26.9829 41.7345 29.0259 36.9895 32.7875C32.2446 36.5491 28.914 41.8073 27.5411 47.7047C26.1681 53.6021 26.8337 59.7906 29.4294 65.2612C32.025 70.7317 36.3976 75.1614 41.8339 77.828C47.2702 80.4945 53.4496 81.2405 59.3644 79.9443C65.2791 78.6481 70.5802 75.3862 74.4031 70.6905C78.226 65.9949 80.3453 60.1425 80.4152 54.0878C80.4851 48.0331 78.5016 42.1333 74.7881 37.3506L84.3078 27.831C90.4643 35.0569 93.8295 44.2488 93.794 53.7417C93.794 61.6777 91.4407 69.4354 87.0317 76.034C82.6227 82.6325 76.3561 87.7754 69.0242 90.8124C61.6923 93.8493 53.6245 94.6439 45.841 93.0957C38.0575 91.5475 30.9079 87.7259 25.2963 82.1144C19.6848 76.5028 15.8632 69.3532 14.315 61.5697C12.7668 53.7862 13.5614 45.7184 16.5983 38.3865C19.6353 31.0546 24.7782 24.788 31.3767 20.379C37.9753 15.97 45.733 13.6167 53.669 13.6167L53.669 6.9292C44.4104 6.9292 35.3596 9.67471 27.6614 14.8185C19.9631 19.9624 13.963 27.2735 10.4199 35.8273C6.87676 44.3812 5.94972 53.7936 7.75599 62.8744C9.56226 71.9551 14.0207 80.2963 20.5676 86.8431C27.1144 93.39 35.4556 97.8484 44.5363 99.6547C53.6171 101.461 63.0295 100.534 71.5834 96.9908C80.1372 93.4477 87.4483 87.4476 92.5922 79.7493C97.736 72.0511 100.481 63.0003 100.481 53.7417C100.518 42.4764 96.4507 31.5835 89.0392 23.0996L100.481 11.6573Z" fill="white"/>
</svg>
);

export const TargetIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 16C26.1217 16 28.1566 16.8429 29.6569 18.3431C31.1571 19.8434 32 21.8783 32 24C32 26.1217 31.1571 28.1566 29.6569 29.6569C28.1566 31.1571 26.1217 32 24 32C21.8783 32 19.8434 31.1571 18.3431 29.6569C16.8429 28.1566 16 26.1217 16 24C16 21.8783 16.8429 19.8434 18.3431 18.3431C19.8434 16.8429 21.8783 16 24 16ZM6.1 26H2V22H6.1C7 13.66 13.66 7 22 6.1V2H26V6.1C34.34 7 41 13.66 41.9 22H46V26H41.9C41 34.34 34.34 41 26 41.9V46H22V41.9C13.66 41 7 34.34 6.1 26ZM24 10C20.287 10 16.726 11.475 14.1005 14.1005C11.475 16.726 10 20.287 10 24C10 27.713 11.475 31.274 14.1005 33.8995C16.726 36.525 20.287 38 24 38C27.713 38 31.274 36.525 33.8995 33.8995C36.525 31.274 38 27.713 38 24C38 20.287 36.525 16.726 33.8995 14.1005C31.274 11.475 27.713 10 24 10Z" fill="#167BFF" />
  </svg>
);

export const HammerIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 42V38H32V42H8ZM19.3 32.3L8 21L12.2 16.7L23.6 28L19.3 32.3ZM32 19.6L20.7 8.2L25 4L36.3 15.3L32 19.6ZM41.2 40L15.1 13.9L17.9 11.1L44 37.2L41.2 40Z" fill="#167BFF" />
  </svg>
);

export const HistoryIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 24H33V32.5L38.72 35.88L37.22 38.32L30 34V24ZM32 18C33.38 18 34.74 18.2 36 18.58V9.4L30 11.72V18.14C30.66 18 31.32 18 32 18ZM46 32C46 35.713 44.525 39.274 41.8995 41.8995C39.274 44.525 35.713 46 32 46C26 46 20.8 42.16 18.84 36.8L16 35.8L5.32 39.94L5 40C4.73478 40 4.48043 39.8946 4.29289 39.7071C4.10536 39.5196 4 39.2652 4 39V8.76C4 8.3 4.3 7.94 4.72 7.8L16 4L28 8.2L38.68 4.06L39 4C39.2652 4 39.5196 4.10536 39.7071 4.29289C39.8946 4.48043 40 4.73478 40 5V20.5C43.62 23 46 27.24 46 32ZM18 32C18 26.42 21.26 21.6 26 19.34V11.74L18 8.94V32.26V32ZM32 22C29.3478 22 26.8043 23.0536 24.9289 24.9289C23.0536 26.8043 22 29.3478 22 32C22 34.6522 23.0536 37.1957 24.9289 39.0711C26.8043 40.9464 29.3478 42 32 42C34.6522 42 37.1957 40.9464 39.0711 39.0711C40.9464 37.1957 42 34.6522 42 32C42 29.3478 40.9464 26.8043 39.0711 24.9289C37.1957 23.0536 34.6522 22 32 22ZM8 10.92V34.62L14 32.3V8.9L8 10.92Z" fill="#167BFF" />
  </svg>

);

export const PatternIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40.5 28.5C42.981 28.5 45 26.481 45 24C45 21.519 42.981 19.5 40.5 19.5C39.5723 19.5028 38.6683 19.7926 37.912 20.3298C37.1557 20.8669 36.5842 21.625 36.276 22.5H27.621L38.571 11.55C39.159 11.8305 39.807 12 40.5 12C42.981 12 45 9.981 45 7.5C45 5.019 42.981 3 40.5 3C38.019 3 36 5.019 36 7.5C36 8.193 36.171 8.841 36.45 9.4275L24 21.879V12C24 10.347 25.3455 9 27 9H30V6H27C25.2 6 23.601 6.8145 22.5 8.073C21.942 7.42546 21.2515 6.90528 20.4752 6.54764C19.6989 6.19 18.8548 6.00325 18 6H16.5C9.057 6 3 12.0555 3 19.5V28.5C3 35.9445 9.057 42 16.5 42H18C19.8 42 21.399 41.187 22.5 39.927C23.601 41.187 25.2 42 27 42H30V39H27C25.3455 39 24 37.6545 24 36V26.121L36.45 38.5725C36.1695 39.159 36 39.807 36 40.5C36 42.9825 38.019 45 40.5 45C42.981 45 45 42.9825 45 40.5C45 38.0175 42.981 36 40.5 36C39.8317 36.0035 39.1728 36.1579 38.5725 36.4515L27.621 25.5015H36.276C36.5844 26.3762 37.156 27.134 37.9123 27.6708C38.6686 28.2077 39.5725 28.4974 40.5 28.5ZM40.5 22.5C40.8978 22.5 41.2794 22.658 41.5607 22.9393C41.842 23.2206 42 23.6022 42 24C42 24.3978 41.842 24.7794 41.5607 25.0607C41.2794 25.342 40.8978 25.5 40.5 25.5C40.1022 25.5 39.7206 25.342 39.4393 25.0607C39.158 24.7794 39 24.3978 39 24C39 23.6022 39.158 23.2206 39.4393 22.9393C39.7206 22.658 40.1022 22.5 40.5 22.5ZM40.5 6C40.8862 6.01728 41.2509 6.18286 41.5181 6.46227C41.7853 6.74169 41.9344 7.11339 41.9344 7.5C41.9344 7.88661 41.7853 8.25831 41.5181 8.53773C41.2509 8.81714 40.8862 8.98272 40.5 9C40.1022 9 39.7206 8.84196 39.4393 8.56066C39.158 8.27936 39 7.89782 39 7.5C39 7.10218 39.158 6.72064 39.4393 6.43934C39.7206 6.15804 40.1022 6 40.5 6ZM21 18H18V21H21V27H18C15.519 27 13.5 29.019 13.5 31.5V34.5H16.5V31.5C16.5 31.1022 16.658 30.7206 16.9393 30.4393C17.2206 30.158 17.6022 30 18 30H21V36C21 37.6545 19.6545 39 18 39H16.5C11.22 39 6.852 35.0805 6.12 30H9V27H6V21H10.5C12.981 21 15 18.981 15 16.5V13.5H12V16.5C12 16.8978 11.842 17.2794 11.5607 17.5607C11.2794 17.842 10.8978 18 10.5 18H6.12C6.852 12.9195 11.22 9 16.5 9H18C19.6545 9 21 10.347 21 12V18ZM42 40.5C41.9827 40.8862 41.8171 41.2509 41.5377 41.5181C41.2583 41.7853 40.8866 41.9344 40.5 41.9344C40.1134 41.9344 39.7417 41.7853 39.4623 41.5181C39.1829 41.2509 39.0173 40.8862 39 40.5C39 39.6735 39.6735 39 40.5 39C41.3265 39 42 39.6735 42 40.5Z" fill="#167BFF" />
  </svg>
);

export const InsuranceIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 17.3763C1 17.3763 5 15.6669 8.33333 15.6669C10.6847 15.6669 13.2667 16.6123 14.996 17.3916C16.3227 17.9889 17.086 18.3663 17.3893 19.7896C17.6007 20.7783 16.8907 22.4263 15.8827 22.5076L15.1727 22.5649M15.1727 22.5649C13.5447 22.5649 11.0247 22.0823 11.0247 22.0823M15.1727 22.5649C17.4307 22.5649 23.3747 21.4923 25.4813 21.0983C25.984 21.0049 26.5047 20.9363 26.9827 21.1163C27.584 21.3436 28.3907 21.8923 28.776 23.2163C29.0773 24.2509 28.354 25.2463 27.3493 25.6349C24.4027 26.7749 18.258 29.0003 15.1727 29.0003C7 29.0003 1 26.9489 1 26.9489M19.084 14.3203C19.1053 14.9356 19.4867 15.4649 20.0947 15.5583C20.488 15.6183 21.0073 15.6669 21.6667 15.6669C22.1927 15.6708 22.7182 15.6345 23.2387 15.5583C23.8467 15.4649 24.228 14.9356 24.2493 14.3209C24.274 13.6143 24.3027 12.5189 24.3193 10.9863C25.4311 10.9761 26.5428 10.9527 27.654 10.9163C28.2687 10.8949 28.798 10.5136 28.8913 9.90561C28.9513 9.51228 29 8.99294 29 8.33361C29.0038 7.80761 28.9675 7.28208 28.8913 6.76161C28.798 6.15361 28.2687 5.77228 27.654 5.75094C26.9473 5.72628 25.852 5.69761 24.3193 5.68094C24.3091 4.56915 24.2857 3.45752 24.2493 2.34628C24.228 1.73161 23.8467 1.20228 23.2387 1.10894C22.7182 1.03302 22.1927 0.996692 21.6667 1.00028C21.1407 0.996434 20.6151 1.03276 20.0947 1.10894C19.4867 1.20228 19.1053 1.73161 19.084 2.34628C19.0593 3.05294 19.0307 4.14828 19.014 5.68094C17.9022 5.69116 16.7906 5.71449 15.6793 5.75094C15.0647 5.77228 14.5353 6.15361 14.442 6.76161C14.382 7.15494 14.3333 7.67428 14.3333 8.33361C14.3333 8.99294 14.3813 9.51294 14.442 9.90561C14.5353 10.5136 15.0647 10.8949 15.6793 10.9163C16.386 10.9409 17.4813 10.9696 19.014 10.9863C19.0307 12.5189 19.0593 13.6143 19.084 14.3203Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

export const EmployersIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.7789 12.9812C11.7021 12.9812 10.6495 12.6619 9.75412 12.0636C8.85878 11.4654 8.16096 10.6151 7.74888 9.62023C7.3368 8.62539 7.22898 7.53069 7.43906 6.47457C7.64913 5.41845 8.16767 4.44835 8.92909 3.68693C9.69051 2.92551 10.6606 2.40698 11.7167 2.1969C12.7729 1.98683 13.8675 2.09464 14.8624 2.50672C15.8572 2.9188 16.7075 3.61663 17.3058 4.51196C17.904 5.40729 18.2233 6.45992 18.2233 7.53673C18.2233 8.98069 17.6497 10.3655 16.6287 11.3865C15.6077 12.4076 14.2228 12.9812 12.7789 12.9812ZM12.7789 3.71007C12.0097 3.71007 11.2579 3.93814 10.6183 4.36546C9.97881 4.79278 9.48037 5.40014 9.18603 6.11074C8.89168 6.82134 8.81467 7.60327 8.96473 8.35764C9.11478 9.11201 9.48516 9.80494 10.029 10.3488C10.5729 10.8927 11.2658 11.2631 12.0202 11.4131C12.7746 11.5632 13.5565 11.4862 14.2671 11.1918C14.9777 10.8975 15.5851 10.399 16.0124 9.75951C16.4397 9.11998 16.6678 8.3681 16.6678 7.59895C16.6678 7.08826 16.5672 6.58256 16.3718 6.11074C16.1763 5.63892 15.8899 5.21021 15.5287 4.84909C15.1676 4.48798 14.7389 4.20152 14.2671 4.00609C13.7953 3.81065 13.2896 3.71007 12.7789 3.71007ZM17.1111 13.9223C12.9021 12.9746 8.49865 13.4308 4.57333 15.2212C4.03348 15.4791 3.57798 15.885 3.2599 16.3917C2.94182 16.8985 2.77424 17.4851 2.77667 18.0834V22.7112C2.77667 22.8133 2.79679 22.9145 2.83587 23.0088C2.87496 23.1032 2.93225 23.1889 3.00447 23.2611C3.0767 23.3334 3.16244 23.3907 3.2568 23.4298C3.35117 23.4688 3.45231 23.489 3.55445 23.489C3.65659 23.489 3.75772 23.4688 3.85209 23.4298C3.94645 23.3907 4.03219 23.3334 4.10442 23.2611C4.17664 23.1889 4.23393 23.1032 4.27302 23.0088C4.31211 22.9145 4.33222 22.8133 4.33222 22.7112V18.0834C4.32545 17.7806 4.40722 17.4824 4.56748 17.2255C4.72775 16.9685 4.95955 16.7639 5.23445 16.6367C7.59902 15.5447 10.1743 14.9845 12.7789 14.9956C14.2382 14.9939 15.6926 15.1662 17.1111 15.509V13.9223ZM17.22 21.319H21.9956V22.4078H17.22V21.319Z" fill="white" />
    <path d="M25.7989 16.6989H21.7778V18.2545H25.0211V24.7645H14V18.2545H18.9V18.5812C18.9 18.7874 18.982 18.9853 19.1278 19.1311C19.2737 19.277 19.4715 19.3589 19.6778 19.3589C19.8841 19.3589 20.0819 19.277 20.2278 19.1311C20.3736 18.9853 20.4556 18.7874 20.4556 18.5812V15.5556C20.4556 15.3493 20.3736 15.1515 20.2278 15.0056C20.0819 14.8598 19.8841 14.7778 19.6778 14.7778C19.4715 14.7778 19.2737 14.8598 19.1278 15.0056C18.982 15.1515 18.9 15.3493 18.9 15.5556V16.6989H13.2222C13.016 16.6989 12.8181 16.7809 12.6723 16.9267C12.5264 17.0726 12.4445 17.2704 12.4445 17.4767V25.5423C12.4445 25.7486 12.5264 25.9464 12.6723 26.0922C12.8181 26.2381 13.016 26.3201 13.2222 26.3201H25.7989C26.0052 26.3201 26.203 26.2381 26.3489 26.0922C26.4947 25.9464 26.5767 25.7486 26.5767 25.5423V17.4767C26.5767 17.2704 26.4947 17.0726 26.3489 16.9267C26.203 16.7809 26.0052 16.6989 25.7989 16.6989Z" fill="white" />
  </svg>
);

export const LawIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.875 3.2085V5.25016H17.1792C17.5887 5.25016 17.9888 5.37383 18.3272 5.60366L20.307 6.95C20.356 6.98266 20.4105 6.99939 20.4703 7.00016H25.256C25.4881 7.00016 25.7106 7.09235 25.8747 7.25644C26.0388 7.42054 26.131 7.6431 26.131 7.87516C26.131 8.10723 26.0388 8.32979 25.8747 8.49388C25.7106 8.65798 25.4881 8.75016 25.256 8.75016H23.415L27.342 17.7102C27.4206 17.8893 27.4368 18.0896 27.3882 18.2791C27.3396 18.4686 27.2288 18.6363 27.0737 18.7555C26.957 18.8418 26.8365 18.9219 26.712 18.9958C26.4167 19.1735 26.1086 19.3291 25.7903 19.4613C24.7351 19.9026 23.6022 20.1283 22.4583 20.1252C21.3148 20.1301 20.182 19.9048 19.1275 19.4625C18.8092 19.3299 18.5012 19.1739 18.2058 18.9958C18.0818 18.9247 17.9621 18.846 17.8477 18.7602L17.8418 18.7555C17.6867 18.6363 17.576 18.4686 17.5273 18.2791C17.4787 18.0896 17.4949 17.8893 17.5735 17.7102L21.5028 8.75016H20.4692C20.0597 8.75016 19.6595 8.6265 19.3212 8.39666L17.3413 7.05033C17.2931 7.01768 17.2362 7.00021 17.178 7.00016H14.875V23.9168H20.1098C20.3419 23.9168 20.5645 24.009 20.7286 24.1731C20.8927 24.3372 20.9848 24.5598 20.9848 24.7918C20.9848 25.0239 20.8927 25.2465 20.7286 25.4105C20.5645 25.5746 20.3419 25.6668 20.1098 25.6668H7.89018C7.65812 25.6668 7.43556 25.5746 7.27146 25.4105C7.10737 25.2465 7.01518 25.0239 7.01518 24.7918C7.01518 24.5598 7.10737 24.3372 7.27146 24.1731C7.43556 24.009 7.65812 23.9168 7.89018 23.9168H13.125V7.00016H10.8208C10.7626 7.00021 10.7057 7.01768 10.6575 7.05033L8.67885 8.39666C8.34051 8.6265 7.94035 8.75016 7.53085 8.75016H6.49718L10.4265 17.7102C10.5026 17.8842 10.5199 18.0783 10.4759 18.2631C10.4319 18.4479 10.329 18.6134 10.1827 18.7345C10.0893 18.8103 9.99601 18.8815 9.82101 18.9947C9.52614 19.186 9.21726 19.3549 8.89701 19.4998C7.84358 19.9794 6.69912 20.2261 5.54168 20.2232C4.38424 20.2261 3.23979 19.9794 2.18635 19.4998C1.8661 19.3549 1.55723 19.186 1.26235 18.9947C1.13817 18.9145 1.01786 18.8284 0.901848 18.7368C0.756382 18.6145 0.654052 18.4488 0.609941 18.2639C0.565831 18.0791 0.582275 17.885 0.656848 17.7102L4.58501 8.75016H2.74518C2.51312 8.75016 2.29056 8.65798 2.12646 8.49388C1.96237 8.32979 1.87018 8.10723 1.87018 7.87516C1.87018 7.6431 1.96237 7.42054 2.12646 7.25644C2.29056 7.09235 2.51312 7.00016 2.74518 7.00016H7.53085C7.58996 7.00016 7.64479 6.98344 7.69535 6.95L9.67285 5.60366C10.0112 5.37266 10.4125 5.25016 10.822 5.25016H13.125V3.2085C13.125 2.97643 13.2172 2.75387 13.3813 2.58978C13.5454 2.42568 13.7679 2.3335 14 2.3335C14.2321 2.3335 14.4546 2.42568 14.6187 2.58978C14.7828 2.75387 14.875 2.97643 14.875 3.2085ZM2.55851 17.7312C3.47649 18.2206 4.50138 18.4751 5.54168 18.472C6.58198 18.4751 7.60688 18.2206 8.52485 17.7312L5.54168 10.9295L2.55851 17.7312ZM19.4868 17.7032C19.5825 17.7498 19.6895 17.7988 19.8077 17.8502C20.426 18.1103 21.3302 18.3752 22.4583 18.3752C23.4868 18.3779 24.5026 18.1482 25.4298 17.7032L22.4583 10.9283L19.4868 17.7032Z" fill="white" />
  </svg>
);

export const AcademiaIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.4135 4.08321C12.2218 3.69954 13.1053 3.50049 14 3.50049C14.8947 3.50049 15.7782 3.69954 16.5865 4.08321L24.3927 7.74304C26.0913 8.53871 26.0913 11.2944 24.3927 12.09L16.5877 15.7499C15.7792 16.1337 14.8955 16.3329 14.0006 16.3329C13.1057 16.3329 12.2219 16.1337 11.4135 15.7499L3.60734 12.09C1.90868 11.2944 1.90868 8.53871 3.60734 7.74304L7.00001 6.15171M2.33334 9.91654V16.3332M14 24.4999C11.9047 24.4999 9.16301 23.192 7.44918 22.2435C6.42134 21.673 5.83334 20.5717 5.83334 19.3969V13.4165M22.1667 13.4165V19.3957C22.1667 20.5717 21.5798 21.673 20.5508 22.2424C19.8398 22.6375 19.1119 23.0015 18.3692 23.3332" stroke="white" stroke-width="1.5" stroke-linecap="round" />
  </svg>
);

export const Icon2 = () => (
  <svg width="284" height="76" viewBox="0 0 284 76" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="284" height="76.0003" rx="8" fill="#09346B" fill-opacity="0.5" />
    <g filter="url(#filter1_d_1_718)">
      <rect x="16" y="8" width="60.0003" height="60.0003" rx="30.0001" fill="url(#paint0_linear_1_718)" fill-opacity="0.2" shape-rendering="crispEdges" />
      <path d="M32 40.3763C32 40.3763 36 38.6669 39.3333 38.6669C41.6847 38.6669 44.2667 39.6123 45.996 40.3916C47.3227 40.9889 48.086 41.3663 48.3893 42.7896C48.6007 43.7783 47.8907 45.4263 46.8827 45.5076L46.1727 45.5649M46.1727 45.5649C44.5447 45.5649 42.0247 45.0823 42.0247 45.0823M46.1727 45.5649C48.4307 45.5649 54.3747 44.4923 56.4813 44.0983C56.984 44.0049 57.5047 43.9363 57.9827 44.1163C58.584 44.3436 59.3907 44.8923 59.776 46.2163C60.0773 47.2509 59.354 48.2463 58.3493 48.6349C55.4027 49.7749 49.258 52.0003 46.1727 52.0003C38 52.0003 32 49.9489 32 49.9489M50.084 37.3203C50.1053 37.9356 50.4867 38.4649 51.0947 38.5583C51.488 38.6183 52.0073 38.6669 52.6667 38.6669C53.1927 38.6708 53.7182 38.6345 54.2387 38.5583C54.8467 38.4649 55.228 37.9356 55.2493 37.3209C55.274 36.6143 55.3027 35.5189 55.3193 33.9863C56.4311 33.9761 57.5428 33.9527 58.654 33.9163C59.2687 33.8949 59.798 33.5136 59.8913 32.9056C59.9513 32.5123 60 31.9929 60 31.3336C60.0038 30.8076 59.9675 30.2821 59.8913 29.7616C59.798 29.1536 59.2687 28.7723 58.654 28.7509C57.9473 28.7263 56.852 28.6976 55.3193 28.6809C55.3091 27.5692 55.2857 26.4575 55.2493 25.3463C55.228 24.7316 54.8467 24.2023 54.2387 24.1089C53.7182 24.033 53.1927 23.9967 52.6667 24.0003C52.1407 23.9964 51.6151 24.0328 51.0947 24.1089C50.4867 24.2023 50.1053 24.7316 50.084 25.3463C50.0593 26.0529 50.0307 27.1483 50.014 28.6809C48.9022 28.6912 47.7906 28.7145 46.6793 28.7509C46.0647 28.7723 45.5353 29.1536 45.442 29.7616C45.382 30.1549 45.3333 30.6743 45.3333 31.3336C45.3333 31.9929 45.3813 32.5129 45.442 32.9056C45.5353 33.5136 46.0647 33.8949 46.6793 33.9163C47.386 33.9409 48.4813 33.9696 50.014 33.9863C50.0307 35.5189 50.0593 36.6143 50.084 37.3203Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </g>
    <path d="M93.0005 45V42.58H94.8005V33.46H93.0005V31.04H99.6405V33.46H97.8405V42.58H99.6405V45H93.0005ZM102.013 45V34.5H104.973V36.28H105.093C105.28 35.7333 105.607 35.26 106.073 34.86C106.54 34.46 107.187 34.26 108.013 34.26C109.093 34.26 109.907 34.62 110.453 35.34C111.013 36.06 111.293 37.0867 111.293 38.42V45H108.333V38.66C108.333 37.98 108.227 37.48 108.013 37.16C107.8 36.8267 107.42 36.66 106.873 36.66C106.633 36.66 106.4 36.6933 106.173 36.76C105.947 36.8133 105.74 36.9067 105.553 37.04C105.38 37.1733 105.24 37.34 105.133 37.54C105.027 37.7267 104.973 37.9467 104.973 38.2V45H102.013ZM117.487 45.24C116.474 45.24 115.621 45.08 114.927 44.76C114.234 44.4267 113.614 43.96 113.067 43.36L114.807 41.6C115.181 42.0133 115.594 42.34 116.047 42.58C116.501 42.82 117.014 42.94 117.587 42.94C118.174 42.94 118.581 42.8533 118.807 42.68C119.034 42.4933 119.147 42.2467 119.147 41.94C119.147 41.4467 118.794 41.1533 118.087 41.06L116.947 40.92C114.587 40.6267 113.407 39.5467 113.407 37.68C113.407 37.1733 113.501 36.7133 113.687 36.3C113.887 35.8733 114.161 35.5133 114.507 35.22C114.867 34.9133 115.294 34.68 115.787 34.52C116.294 34.3467 116.861 34.26 117.487 34.26C118.034 34.26 118.514 34.3 118.927 34.38C119.354 34.4467 119.727 34.5533 120.047 34.7C120.381 34.8333 120.681 35.0067 120.947 35.22C121.227 35.42 121.501 35.6467 121.767 35.9L120.067 37.64C119.734 37.3067 119.354 37.0467 118.927 36.86C118.514 36.66 118.087 36.56 117.647 36.56C117.141 36.56 116.781 36.64 116.567 36.8C116.354 36.96 116.247 37.1733 116.247 37.44C116.247 37.72 116.321 37.94 116.467 38.1C116.627 38.2467 116.921 38.3533 117.347 38.42L118.527 38.58C120.834 38.8867 121.987 39.94 121.987 41.74C121.987 42.2467 121.881 42.7133 121.667 43.14C121.454 43.5667 121.147 43.94 120.747 44.26C120.361 44.5667 119.887 44.8067 119.327 44.98C118.781 45.1533 118.167 45.24 117.487 45.24ZM130.205 43.24H130.105C130.012 43.5067 129.885 43.76 129.725 44C129.579 44.24 129.385 44.4533 129.145 44.64C128.905 44.8267 128.619 44.9733 128.285 45.08C127.965 45.1867 127.592 45.24 127.165 45.24C126.085 45.24 125.265 44.8867 124.705 44.18C124.159 43.46 123.885 42.4333 123.885 41.1V34.5H126.845V40.84C126.845 41.48 126.959 41.9733 127.185 42.32C127.412 42.6667 127.799 42.84 128.345 42.84C128.572 42.84 128.799 42.8067 129.025 42.74C129.252 42.6733 129.452 42.58 129.625 42.46C129.799 42.3267 129.939 42.1667 130.045 41.98C130.152 41.7933 130.205 41.5733 130.205 41.32V34.5H133.165V45H130.205V43.24ZM135.92 45V34.5H138.88V36.78H138.98C139.033 36.4867 139.126 36.2067 139.26 35.94C139.393 35.66 139.566 35.4133 139.78 35.2C140.006 34.9867 140.273 34.82 140.58 34.7C140.886 34.5667 141.246 34.5 141.66 34.5H142.18V37.26H141.44C140.573 37.26 139.926 37.3733 139.5 37.6C139.086 37.8267 138.88 38.2467 138.88 38.86V45H135.92ZM151.492 45C150.959 45 150.512 44.8333 150.152 44.5C149.805 44.1667 149.585 43.72 149.492 43.16H149.372C149.212 43.84 148.859 44.36 148.312 44.72C147.765 45.0667 147.092 45.24 146.292 45.24C145.239 45.24 144.432 44.96 143.872 44.4C143.312 43.84 143.032 43.1 143.032 42.18C143.032 41.0733 143.432 40.2533 144.232 39.72C145.045 39.1733 146.145 38.9 147.532 38.9H149.192V38.24C149.192 37.7333 149.059 37.3333 148.792 37.04C148.525 36.7333 148.079 36.58 147.452 36.58C146.865 36.58 146.399 36.7067 146.052 36.96C145.705 37.2133 145.419 37.5 145.192 37.82L143.432 36.26C143.859 35.6333 144.392 35.1467 145.032 34.8C145.685 34.44 146.565 34.26 147.672 34.26C149.165 34.26 150.285 34.5867 151.032 35.24C151.779 35.8933 152.152 36.8467 152.152 38.1V42.7H153.132V45H151.492ZM147.392 43.18C147.885 43.18 148.305 43.0733 148.652 42.86C149.012 42.6467 149.192 42.3 149.192 41.82V40.58H147.752C146.592 40.58 146.012 40.9733 146.012 41.76V42.06C146.012 42.4467 146.132 42.7333 146.372 42.92C146.612 43.0933 146.952 43.18 147.392 43.18ZM155.119 45V34.5H158.079V36.28H158.199C158.385 35.7333 158.712 35.26 159.179 34.86C159.645 34.46 160.292 34.26 161.119 34.26C162.199 34.26 163.012 34.62 163.559 35.34C164.119 36.06 164.399 37.0867 164.399 38.42V45H161.439V38.66C161.439 37.98 161.332 37.48 161.119 37.16C160.905 36.8267 160.525 36.66 159.979 36.66C159.739 36.66 159.505 36.6933 159.279 36.76C159.052 36.8133 158.845 36.9067 158.659 37.04C158.485 37.1733 158.345 37.34 158.239 37.54C158.132 37.7267 158.079 37.9467 158.079 38.2V45H155.119ZM171.273 45.24C170.486 45.24 169.786 45.1133 169.173 44.86C168.559 44.5933 168.046 44.2267 167.633 43.76C167.219 43.28 166.906 42.7 166.693 42.02C166.479 41.34 166.373 40.58 166.373 39.74C166.373 38.9 166.479 38.1467 166.693 37.48C166.906 36.8 167.219 36.22 167.633 35.74C168.046 35.26 168.559 34.8933 169.173 34.64C169.786 34.3867 170.486 34.26 171.273 34.26C172.339 34.26 173.226 34.5 173.933 34.98C174.653 35.46 175.166 36.1333 175.473 37L173.073 38.04C172.979 37.64 172.786 37.3 172.493 37.02C172.199 36.74 171.793 36.6 171.273 36.6C170.673 36.6 170.219 36.8 169.913 37.2C169.606 37.5867 169.453 38.1133 169.453 38.78V40.74C169.453 41.4067 169.606 41.9333 169.913 42.32C170.219 42.7067 170.673 42.9 171.273 42.9C171.806 42.9 172.226 42.76 172.533 42.48C172.853 42.1867 173.086 41.8067 173.233 41.34L175.533 42.34C175.186 43.34 174.646 44.0733 173.913 44.54C173.193 45.0067 172.313 45.24 171.273 45.24ZM181.647 45.24C180.847 45.24 180.134 45.1133 179.507 44.86C178.881 44.5933 178.347 44.2267 177.907 43.76C177.481 43.28 177.154 42.7 176.927 42.02C176.714 41.34 176.607 40.58 176.607 39.74C176.607 38.9133 176.714 38.1667 176.927 37.5C177.141 36.82 177.454 36.24 177.867 35.76C178.294 35.28 178.814 34.9133 179.427 34.66C180.041 34.3933 180.741 34.26 181.527 34.26C182.394 34.26 183.134 34.4067 183.747 34.7C184.374 34.9933 184.881 35.3867 185.267 35.88C185.667 36.3733 185.954 36.9467 186.127 37.6C186.314 38.24 186.407 38.9133 186.407 39.62V40.5H179.667V40.66C179.667 41.3533 179.854 41.9067 180.227 42.32C180.601 42.72 181.187 42.92 181.987 42.92C182.601 42.92 183.101 42.8 183.487 42.56C183.874 42.3067 184.234 42.0067 184.567 41.66L186.047 43.5C185.581 44.0467 184.967 44.4733 184.207 44.78C183.461 45.0867 182.607 45.24 181.647 45.24ZM181.587 36.44C180.987 36.44 180.514 36.64 180.167 37.04C179.834 37.4267 179.667 37.9467 179.667 38.6V38.76H183.347V38.58C183.347 37.94 183.201 37.4267 182.907 37.04C182.627 36.64 182.187 36.44 181.587 36.44ZM199.024 45.24C198.078 45.24 197.224 45.0933 196.464 44.8C195.704 44.4933 195.058 44.0467 194.524 43.46C193.991 42.86 193.578 42.12 193.284 41.24C192.991 40.3467 192.844 39.3067 192.844 38.12C192.844 36.9467 192.991 35.9067 193.284 35C193.578 34.08 193.991 33.3133 194.524 32.7C195.058 32.0733 195.704 31.6 196.464 31.28C197.224 30.96 198.078 30.8 199.024 30.8C200.318 30.8 201.384 31.0667 202.224 31.6C203.064 32.12 203.738 32.9467 204.244 34.08L201.624 35.44C201.438 34.8533 201.144 34.3867 200.744 34.04C200.358 33.68 199.784 33.5 199.024 33.5C198.131 33.5 197.411 33.7933 196.864 34.38C196.331 34.9533 196.064 35.7933 196.064 36.9V39.14C196.064 40.2467 196.331 41.0933 196.864 41.68C197.411 42.2533 198.131 42.54 199.024 42.54C199.771 42.54 200.364 42.34 200.804 41.94C201.258 41.5267 201.591 41.0333 201.804 40.46L204.284 41.9C203.764 42.9667 203.078 43.7933 202.224 44.38C201.384 44.9533 200.318 45.24 199.024 45.24ZM214.012 45C213.478 45 213.032 44.8333 212.672 44.5C212.325 44.1667 212.105 43.72 212.012 43.16H211.892C211.732 43.84 211.378 44.36 210.832 44.72C210.285 45.0667 209.612 45.24 208.812 45.24C207.758 45.24 206.952 44.96 206.392 44.4C205.832 43.84 205.552 43.1 205.552 42.18C205.552 41.0733 205.952 40.2533 206.752 39.72C207.565 39.1733 208.665 38.9 210.052 38.9H211.712V38.24C211.712 37.7333 211.578 37.3333 211.312 37.04C211.045 36.7333 210.598 36.58 209.972 36.58C209.385 36.58 208.918 36.7067 208.572 36.96C208.225 37.2133 207.938 37.5 207.712 37.82L205.952 36.26C206.378 35.6333 206.912 35.1467 207.552 34.8C208.205 34.44 209.085 34.26 210.192 34.26C211.685 34.26 212.805 34.5867 213.552 35.24C214.298 35.8933 214.672 36.8467 214.672 38.1V42.7H215.652V45H214.012ZM209.912 43.18C210.405 43.18 210.825 43.0733 211.172 42.86C211.532 42.6467 211.712 42.3 211.712 41.82V40.58H210.272C209.112 40.58 208.532 40.9733 208.532 41.76V42.06C208.532 42.4467 208.652 42.7333 208.892 42.92C209.132 43.0933 209.472 43.18 209.912 43.18ZM217.638 45V34.5H220.598V36.78H220.698C220.752 36.4867 220.845 36.2067 220.978 35.94C221.112 35.66 221.285 35.4133 221.498 35.2C221.725 34.9867 221.992 34.82 222.298 34.7C222.605 34.5667 222.965 34.5 223.378 34.5H223.898V37.26H223.158C222.292 37.26 221.645 37.3733 221.218 37.6C220.805 37.8267 220.598 38.2467 220.598 38.86V45H217.638ZM225.724 45V34.5H228.684V36.78H228.784C228.838 36.4867 228.931 36.2067 229.064 35.94C229.198 35.66 229.371 35.4133 229.584 35.2C229.811 34.9867 230.078 34.82 230.384 34.7C230.691 34.5667 231.051 34.5 231.464 34.5H231.984V37.26H231.244C230.378 37.26 229.731 37.3733 229.304 37.6C228.891 37.8267 228.684 38.2467 228.684 38.86V45H225.724ZM235.29 33.38C234.69 33.38 234.25 33.2467 233.97 32.98C233.704 32.7 233.57 32.3467 233.57 31.92V31.48C233.57 31.0533 233.704 30.7067 233.97 30.44C234.25 30.16 234.69 30.02 235.29 30.02C235.89 30.02 236.324 30.16 236.59 30.44C236.87 30.7067 237.01 31.0533 237.01 31.48V31.92C237.01 32.3467 236.87 32.7 236.59 32.98C236.324 33.2467 235.89 33.38 235.29 33.38ZM233.81 34.5H236.77V45H233.81V34.5ZM243.913 45.24C243.113 45.24 242.399 45.1133 241.773 44.86C241.146 44.5933 240.613 44.2267 240.173 43.76C239.746 43.28 239.419 42.7 239.193 42.02C238.979 41.34 238.873 40.58 238.873 39.74C238.873 38.9133 238.979 38.1667 239.193 37.5C239.406 36.82 239.719 36.24 240.133 35.76C240.559 35.28 241.079 34.9133 241.693 34.66C242.306 34.3933 243.006 34.26 243.793 34.26C244.659 34.26 245.399 34.4067 246.013 34.7C246.639 34.9933 247.146 35.3867 247.533 35.88C247.933 36.3733 248.219 36.9467 248.393 37.6C248.579 38.24 248.673 38.9133 248.673 39.62V40.5H241.933V40.66C241.933 41.3533 242.119 41.9067 242.493 42.32C242.866 42.72 243.453 42.92 244.253 42.92C244.866 42.92 245.366 42.8 245.753 42.56C246.139 42.3067 246.499 42.0067 246.833 41.66L248.313 43.5C247.846 44.0467 247.233 44.4733 246.473 44.78C245.726 45.0867 244.873 45.24 243.913 45.24ZM243.853 36.44C243.253 36.44 242.779 36.64 242.433 37.04C242.099 37.4267 241.933 37.9467 241.933 38.6V38.76H245.613V38.58C245.613 37.94 245.466 37.4267 245.173 37.04C244.893 36.64 244.453 36.44 243.853 36.44ZM250.763 45V34.5H253.723V36.78H253.823C253.877 36.4867 253.97 36.2067 254.103 35.94C254.237 35.66 254.41 35.4133 254.623 35.2C254.85 34.9867 255.117 34.82 255.423 34.7C255.73 34.5667 256.09 34.5 256.503 34.5H257.023V37.26H256.283C255.417 37.26 254.77 37.3733 254.343 37.6C253.93 37.8267 253.723 38.2467 253.723 38.86V45H250.763ZM262.409 45.24C261.396 45.24 260.543 45.08 259.849 44.76C259.156 44.4267 258.536 43.96 257.989 43.36L259.729 41.6C260.103 42.0133 260.516 42.34 260.969 42.58C261.423 42.82 261.936 42.94 262.509 42.94C263.096 42.94 263.503 42.8533 263.729 42.68C263.956 42.4933 264.069 42.2467 264.069 41.94C264.069 41.4467 263.716 41.1533 263.009 41.06L261.869 40.92C259.509 40.6267 258.329 39.5467 258.329 37.68C258.329 37.1733 258.423 36.7133 258.609 36.3C258.809 35.8733 259.083 35.5133 259.429 35.22C259.789 34.9133 260.216 34.68 260.709 34.52C261.216 34.3467 261.783 34.26 262.409 34.26C262.956 34.26 263.436 34.3 263.849 34.38C264.276 34.4467 264.649 34.5533 264.969 34.7C265.303 34.8333 265.603 35.0067 265.869 35.22C266.149 35.42 266.423 35.6467 266.689 35.9L264.989 37.64C264.656 37.3067 264.276 37.0467 263.849 36.86C263.436 36.66 263.009 36.56 262.569 36.56C262.063 36.56 261.703 36.64 261.489 36.8C261.276 36.96 261.169 37.1733 261.169 37.44C261.169 37.72 261.243 37.94 261.389 38.1C261.549 38.2467 261.843 38.3533 262.269 38.42L263.449 38.58C265.756 38.8867 266.909 39.94 266.909 41.74C266.909 42.2467 266.803 42.7133 266.589 43.14C266.376 43.5667 266.069 43.94 265.669 44.26C265.283 44.5667 264.809 44.8067 264.249 44.98C263.703 45.1533 263.089 45.24 262.409 45.24Z" fill="white" />
    <defs>
      <filter id="filter1_d_1_718" x="12" y="8" width="68.0005" height="68.0005" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_718" />
        <feBlend mode="normal" in="BackgroundImageFix" in2="effect1_dropShadow_1_718" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_1_718" x1="46.0001" y1="8" x2="46.0001" y2="120.9" gradientUnits="userSpaceOnUse">
        <stop offset="0.15" stop-color="#2F2F2F" stop-opacity="0.85" />
        <stop offset="0.987663" stop-color="#0148A5" />
      </linearGradient>
    </defs>
  </svg>
)


export const DiamondGlow = () => (
  <svg width="711" height="284" viewBox="0 0 711 284" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_f_4_53)">
      <g clip-path="url(#paint0_diamond_4_53_clip_path)" data-figma-skip-parse="true"><g transform="matrix(0 0.11 -0.3235 0 355.5 142)"><rect x="0" y="0" width="1009.09" height="1003.09" fill="url(#paint0_diamond_4_53)" opacity="1" shape-rendering="crispEdges" /><rect x="0" y="0" width="1009.09" height="1003.09" transform="scale(1 -1)" fill="url(#paint0_diamond_4_53)" opacity="1" shape-rendering="crispEdges" /><rect x="0" y="0" width="1009.09" height="1003.09" transform="scale(-1 1)" fill="url(#paint0_diamond_4_53)" opacity="1" shape-rendering="crispEdges" /><rect x="0" y="0" width="1009.09" height="1003.09" transform="scale(-1)" fill="url(#paint0_diamond_4_53)" opacity="1" shape-rendering="crispEdges" /></g></g><ellipse cx="355.5" cy="142" rx="323.5" ry="110" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_DIAMOND&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.078431375324726105,&#34;g&#34;:0.43921568989753723,&#34;b&#34;:0.90980392694473267,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.0078431377187371254,&#34;g&#34;:0.031372550874948502,&#34;b&#34;:0.070588238537311554,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.078431375324726105,&#34;g&#34;:0.43921568989753723,&#34;b&#34;:0.90980392694473267,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.0078431377187371254,&#34;g&#34;:0.031372550874948502,&#34;b&#34;:0.070588238537311554,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:3.9617326753156254e-14,&#34;m01&#34;:-647.0,&#34;m02&#34;:679.0,&#34;m10&#34;:220.0,&#34;m11&#34;:1.3471115431376406e-14,&#34;m12&#34;:32.0},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}" />
    </g>
    <defs>
      <filter id="filter0_f_4_53" x="0.700001" y="0.700001" width="709.6" height="282.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="15.65" result="effect1_foregroundBlur_4_53" />
      </filter>
      <clipPath id="paint0_diamond_4_53_clip_path"><ellipse cx="355.5" cy="142" rx="323.5" ry="110" /></clipPath><linearGradient id="paint0_diamond_4_53" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1470E8" />
        <stop offset="1" stop-color="#020812" />
      </linearGradient>
    </defs>
  </svg>
)

export const Search2 = () => (
  <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.7444 29L16.5944 18.85C15.7889 19.4944 14.8625 20.0046 13.8153 20.3806C12.7681 20.7565 11.6537 20.9444 10.4722 20.9444C7.54537 20.9444 5.06856 19.9305 3.04178 17.9027C1.015 15.8748 0.00107493 13.398 8.5244e-07 10.4722C-0.00107322 7.54644 1.01285 5.06963 3.04178 3.04178C5.0707 1.01393 7.54752 0 10.4722 0C13.3969 0 15.8743 1.01393 17.9043 3.04178C19.9343 5.06963 20.9477 7.54644 20.9444 10.4722C20.9444 11.6537 20.7565 12.7681 20.3806 13.8153C20.0046 14.8625 19.4944 15.7889 18.85 16.5944L29 26.7444L26.7444 29ZM10.4722 17.7222C12.4861 17.7222 14.1982 17.0176 15.6084 15.6084C17.0187 14.1993 17.7233 12.4872 17.7222 10.4722C17.7211 8.45726 17.0166 6.74572 15.6084 5.33761C14.2003 3.9295 12.4883 3.22437 10.4722 3.22222C8.45619 3.22007 6.74465 3.9252 5.33761 5.33761C3.93058 6.75002 3.22545 8.46156 3.22222 10.4722C3.219 12.4829 3.92413 14.195 5.33761 15.6084C6.75109 17.0219 8.46263 17.7265 10.4722 17.7222Z" fill="white" />
  </svg>

)

export const Search2Blue = () => (
  <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.7444 29L16.5944 18.85C15.7889 19.4944 14.8625 20.0046 13.8153 20.3806C12.7681 20.7565 11.6537 20.9444 10.4722 20.9444C7.54537 20.9444 5.06856 19.9305 3.04178 17.9027C1.015 15.8748 0.00107493 13.398 8.5244e-07 10.4722C-0.00107322 7.54644 1.01285 5.06963 3.04178 3.04178C5.0707 1.01393 7.54752 0 10.4722 0C13.3969 0 15.8743 1.01393 17.9043 3.04178C19.9343 5.06963 20.9477 7.54644 20.9444 10.4722C20.9444 11.6537 20.7565 12.7681 20.3806 13.8153C20.0046 14.8625 19.4944 15.7889 18.85 16.5944L29 26.7444L26.7444 29ZM10.4722 17.7222C12.4861 17.7222 14.1982 17.0176 15.6084 15.6084C17.0187 14.1993 17.7233 12.4872 17.7222 10.4722C17.7211 8.45726 17.0166 6.74572 15.6084 5.33761C14.2003 3.9295 12.4883 3.22437 10.4722 3.22222C8.45619 3.22007 6.74465 3.9252 5.33761 5.33761C3.93058 6.75002 3.22545 8.46156 3.22222 10.4722C3.219 12.4829 3.92413 14.195 5.33761 15.6084C6.75109 17.0219 8.46263 17.7265 10.4722 17.7222Z" fill="blue" />
  </svg>

)

export const Search3 = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_222_855)">
      <rect x="10" y="10" width="80" height="80" rx="40" fill="url(#paint0_linear_222_855)" fill-opacity="0.2" shape-rendering="crispEdges" />
      <path d="M46.3333 39.9185L34.1737 61.0019H58.4929L55.5568 55.9098C56.3699 56.3328 57.2485 56.6157 58.1556 56.7467L60.8744 61.4602C60.9549 61.5996 60.9973 61.7578 60.9972 61.9188C60.9972 62.0797 60.9547 62.2379 60.8742 62.3773C60.7936 62.5166 60.6778 62.6323 60.5383 62.7127C60.3988 62.7931 60.2406 62.8354 60.0797 62.8352H32.5861C32.4252 62.8352 32.2671 62.7928 32.1278 62.7124C31.9884 62.6319 31.8727 62.5162 31.7922 62.3769C31.7118 62.2375 31.6694 62.0794 31.6694 61.9185C31.6694 61.7576 31.7118 61.5996 31.7922 61.4602L45.5395 37.625C45.62 37.4857 45.7357 37.37 45.875 37.2895C46.0144 37.2091 46.1724 37.1667 46.3333 37.1667C46.4942 37.1667 46.6523 37.2091 46.7916 37.2895C46.931 37.37 47.0467 37.4857 47.1272 37.625L51.7288 45.6028C51.3882 46.4551 51.1939 47.3588 51.1541 48.2758L46.3333 39.9185Z" fill="white" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M56.8585 54.4981C57.6418 54.8294 58.4839 54.9994 59.3344 54.9977C60.8021 55.0004 62.2251 54.4926 63.3595 53.5613L66.9547 57.1556L68.337 55.7732L64.6667 52.1029C65.3764 51.0085 65.7321 49.7222 65.6857 48.4187C65.6392 47.1151 65.1928 45.8574 64.4069 44.8163C63.6211 43.7752 62.534 43.0011 61.2931 42.5991C60.0522 42.1971 58.7177 42.1867 57.4706 42.5692C56.2236 42.9518 55.1245 43.7088 54.3225 44.7375C53.5205 45.7661 53.0544 47.0167 52.9876 48.3194C52.9207 49.622 53.2563 50.9137 53.9488 52.0191C54.6413 53.1245 55.6572 53.99 56.8585 54.4981ZM54.9344 48.6425C54.9344 49.8094 55.398 50.9286 56.2231 51.7538C57.0483 52.5789 58.1675 53.0425 59.3344 53.0425C60.5014 53.0425 61.6205 52.5789 62.4457 51.7538C63.2708 50.9286 63.7344 49.8094 63.7344 48.6425C63.7344 47.4755 63.2708 46.3564 62.4457 45.5312C61.6205 44.7061 60.5014 44.2425 59.3344 44.2425C58.1675 44.2425 57.0483 44.7061 56.2231 45.5312C55.398 46.3564 54.9344 47.4755 54.9344 48.6425Z" fill="white" />
      <path d="M45.1875 55.5458H47.4792V57.8374H45.1875V55.5458ZM46.3333 46.3745C45.7008 46.3745 45.1875 46.8878 45.1875 47.5203V52.562C45.1875 52.8659 45.3082 53.1574 45.5231 53.3722C45.738 53.5871 46.0294 53.7078 46.3333 53.7078C46.6372 53.7078 46.9287 53.5871 47.1436 53.3722C47.3584 53.1574 47.4792 52.8659 47.4792 52.562V47.5203C47.4792 46.8878 46.9658 46.3745 46.3333 46.3745Z" fill="white" />
    </g>
    <defs>
      <filter id="filter0_d_222_855" x="0.4" y="0.4" width="99.2" height="99.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_222_855" />
        <feOffset />
        <feGaussianBlur stdDeviation="3.3" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.602314 0 0 0 0 1 0 0 0 0.1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_222_855" />
        <feBlend mode="normal" in="BackgroundImageFix" in2="effect1_dropShadow_222_855" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_222_855" x1="50" y1="10" x2="50" y2="160.533" gradientUnits="userSpaceOnUse">
        <stop offset="0.15" stop-color="#1B1B1B" stop-opacity="0.85" />
        <stop offset="0.987663" stop-color="#0148A5" />
      </linearGradient>
    </defs>
  </svg>


)

export const Search3Blue = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_222_855)">
      <rect x="10" y="10" width="80" height="80" rx="40" fill="url(#paint0_linear_222_855)" fill-opacity="0.2" shape-rendering="crispEdges" />
      <path d="M46.3333 39.9185L34.1737 61.0019H58.4929L55.5568 55.9098C56.3699 56.3328 57.2485 56.6157 58.1556 56.7467L60.8744 61.4602C60.9549 61.5996 60.9973 61.7578 60.9972 61.9188C60.9972 62.0797 60.9547 62.2379 60.8742 62.3773C60.7936 62.5166 60.6778 62.6323 60.5383 62.7127C60.3988 62.7931 60.2406 62.8354 60.0797 62.8352H32.5861C32.4252 62.8352 32.2671 62.7928 32.1278 62.7124C31.9884 62.6319 31.8727 62.5162 31.7922 62.3769C31.7118 62.2375 31.6694 62.0794 31.6694 61.9185C31.6694 61.7576 31.7118 61.5996 31.7922 61.4602L45.5395 37.625C45.62 37.4857 45.7357 37.37 45.875 37.2895C46.0144 37.2091 46.1724 37.1667 46.3333 37.1667C46.4942 37.1667 46.6523 37.2091 46.7916 37.2895C46.931 37.37 47.0467 37.4857 47.1272 37.625L51.7288 45.6028C51.3882 46.4551 51.1939 47.3588 51.1541 48.2758L46.3333 39.9185Z" fill="blue" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M56.8585 54.4981C57.6418 54.8294 58.4839 54.9994 59.3344 54.9977C60.8021 55.0004 62.2251 54.4926 63.3595 53.5613L66.9547 57.1556L68.337 55.7732L64.6667 52.1029C65.3764 51.0085 65.7321 49.7222 65.6857 48.4187C65.6392 47.1151 65.1928 45.8574 64.4069 44.8163C63.6211 43.7752 62.534 43.0011 61.2931 42.5991C60.0522 42.1971 58.7177 42.1867 57.4706 42.5692C56.2236 42.9518 55.1245 43.7088 54.3225 44.7375C53.5205 45.7661 53.0544 47.0167 52.9876 48.3194C52.9207 49.622 53.2563 50.9137 53.9488 52.0191C54.6413 53.1245 55.6572 53.99 56.8585 54.4981ZM54.9344 48.6425C54.9344 49.8094 55.398 50.9286 56.2231 51.7538C57.0483 52.5789 58.1675 53.0425 59.3344 53.0425C60.5014 53.0425 61.6205 52.5789 62.4457 51.7538C63.2708 50.9286 63.7344 49.8094 63.7344 48.6425C63.7344 47.4755 63.2708 46.3564 62.4457 45.5312C61.6205 44.7061 60.5014 44.2425 59.3344 44.2425C58.1675 44.2425 57.0483 44.7061 56.2231 45.5312C55.398 46.3564 54.9344 47.4755 54.9344 48.6425Z" fill="blue" />
      <path d="M45.1875 55.5458H47.4792V57.8374H45.1875V55.5458ZM46.3333 46.3745C45.7008 46.3745 45.1875 46.8878 45.1875 47.5203V52.562C45.1875 52.8659 45.3082 53.1574 45.5231 53.3722C45.738 53.5871 46.0294 53.7078 46.3333 53.7078C46.6372 53.7078 46.9287 53.5871 47.1436 53.3722C47.3584 53.1574 47.4792 52.8659 47.4792 52.562V47.5203C47.4792 46.8878 46.9658 46.3745 46.3333 46.3745Z" fill="blue" />
    </g>
    <defs>
      <filter id="filter0_d_222_855" x="0.4" y="0.4" width="99.2" height="99.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_222_855" />
        <feOffset />
        <feGaussianBlur stdDeviation="3.3" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.602314 0 0 0 0 1 0 0 0 0.1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_222_855" />
        <feBlend mode="normal" in="BackgroundImageFix" in2="effect1_dropShadow_222_855" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_222_855" x1="50" y1="10" x2="50" y2="160.533" gradientUnits="userSpaceOnUse">
        <stop offset="0.15" stop-color="#1B1B1B" stop-opacity="0.85" />
        <stop offset="0.987663" stop-color="#0148A5" />
      </linearGradient>
    </defs>
  </svg>


)

export const Search4 = () => (
  <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28.7387 26.6855V28.7383H1.02638L0 27.7119V-0.000488281H2.05277V26.6855H28.7387Z" fill="white" />
    <path d="M24.6331 6.5835L14.0696 17.1491H12.6162L9.23737 13.7682L1.75298 21.2546L0.299622 19.8013L8.51069 11.5902H9.96405L13.3429 14.9711L23.9065 4.40552H25.3578L29.4633 8.51105L28.012 9.96441L24.6331 6.5835Z" fill="white" />
  </svg>
)


export const Search4Blue = () => (
  <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28.7387 26.6855V28.7383H1.02638L0 27.7119V-0.000488281H2.05277V26.6855H28.7387Z" fill="blue" />
    <path d="M24.6331 6.5835L14.0696 17.1491H12.6162L9.23737 13.7682L1.75298 21.2546L0.299622 19.8013L8.51069 11.5902H9.96405L13.3429 14.9711L23.9065 4.40552H25.3578L29.4633 8.51105L28.012 9.96441L24.6331 6.5835Z" fill="blue" />
  </svg>
)

export const Search5 = () => (
  <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M41.6022 5.95283e-07C40.2175 -0.000599281 38.87 0.452194 37.7622 1.29032C36.6545 2.12845 35.8463 3.30664 35.4593 4.64778C35.0722 5.98893 35.1271 7.42059 35.6157 8.72756C36.1044 10.0345 37.0003 11.1462 38.169 11.8955L33.9942 26.6351C33.8646 26.6268 33.7348 26.6224 33.6049 26.622C32.2287 26.6205 30.8891 27.0691 29.7869 27.9005L22.0742 21.4169C22.4393 20.324 22.5075 19.1525 22.2716 18.024C22.0357 16.8956 21.5044 15.8515 20.7329 15.0004C19.9614 14.1493 18.9779 13.5223 17.8848 13.1847C16.7916 12.847 15.6288 12.8109 14.5171 13.0803C13.4055 13.3497 12.3857 13.9146 11.5639 14.7163C10.7421 15.518 10.1482 16.5272 9.84413 17.6389C9.54003 18.7506 9.53679 19.9242 9.83475 21.0377C10.1327 22.1511 10.721 23.1636 11.5384 23.9699L7.01073 33.1049C6.81245 33.0858 6.6134 33.0761 6.41423 33.0758C4.88153 33.0738 3.39892 33.6263 2.23551 34.6329C1.07211 35.6394 0.305034 37.0334 0.0735174 38.5618C-0.157999 40.0902 0.161391 41.6517 0.973714 42.9628C1.78604 44.2739 3.03745 45.2477 4.5008 45.7076C5.96415 46.1674 7.54244 46.0828 8.94918 45.4689C10.3559 44.8551 11.4979 43.7529 12.1678 42.3623C12.8377 40.9716 12.9911 39.3848 12.6002 37.8898C12.2093 36.3948 11.3 35.0907 10.0373 34.2143L14.3158 25.5834C15.3551 25.8726 16.4502 25.8915 17.4987 25.6384C18.5472 25.3852 19.5151 24.8683 20.312 24.1358L27.7794 30.4133C27.2723 31.5406 27.0973 32.7912 27.2752 34.016C27.4532 35.2408 27.9765 36.3881 28.7829 37.3212C29.5893 38.2543 30.6447 38.9338 31.8233 39.2786C33.0019 39.6234 34.2539 39.619 35.4301 39.266C36.6063 38.913 37.657 38.2261 38.457 37.2874C39.2569 36.3487 39.7724 35.1978 39.9419 33.9717C40.1114 32.7457 39.9278 31.4964 39.413 30.3727C38.8982 29.249 38.0739 28.2984 37.0384 27.6341L41.2129 12.8945C41.3418 12.9024 41.4713 12.9076 41.6022 12.9076C43.299 12.9076 44.9263 12.2277 46.1261 11.0174C47.3259 9.80703 48 8.16548 48 6.45382C48 4.74216 47.3259 3.10061 46.1261 1.89028C44.9263 0.679955 43.299 5.95283e-07 41.6022 5.95283e-07ZM6.41423 42.7566C5.78155 42.7566 5.16307 42.5673 4.63701 42.2127C4.11096 41.8581 3.70094 41.3542 3.45883 40.7645C3.21671 40.1749 3.15336 39.5261 3.27679 38.9001C3.40022 38.2741 3.70489 37.6992 4.15226 37.2479C4.59964 36.7966 5.16963 36.4893 5.79015 36.3647C6.41068 36.2402 7.05388 36.3041 7.6384 36.5484C8.22292 36.7926 8.72252 37.2062 9.07402 37.7369C9.42552 38.2675 9.61314 38.8914 9.61314 39.5296C9.61218 40.3852 9.27485 41.2054 8.67515 41.8104C8.07544 42.4153 7.26234 42.7556 6.41423 42.7566ZM16.0109 22.5884C15.3783 22.5884 14.7598 22.3991 14.2337 22.0445C13.7077 21.69 13.2977 21.186 13.0555 20.5963C12.8134 20.0067 12.7501 19.3579 12.8735 18.7319C12.9969 18.106 13.3016 17.531 13.749 17.0797C14.1964 16.6284 14.7663 16.3211 15.3869 16.1966C16.0074 16.072 16.6506 16.1359 17.2351 16.3802C17.8196 16.6244 18.3192 17.038 18.6707 17.5687C19.0222 18.0993 19.2099 18.7232 19.2099 19.3615C19.2089 20.217 18.8716 21.0372 18.2719 21.6422C17.6722 22.2471 16.8591 22.5874 16.0109 22.5884ZM33.6049 36.3027C32.9722 36.3027 32.3538 36.1135 31.8277 35.7589C31.3017 35.4043 30.8916 34.9004 30.6495 34.3107C30.4074 33.7211 30.3441 33.0722 30.4675 32.4463C30.5909 31.8203 30.8956 31.2453 31.343 30.7941C31.7903 30.3428 32.3603 30.0354 32.9809 29.9109C33.6014 29.7864 34.2446 29.8503 34.8291 30.0945C35.4136 30.3388 35.9132 30.7524 36.2647 31.2831C36.6162 31.8137 36.8038 32.4376 36.8038 33.0758C36.8029 33.9314 36.4655 34.7516 35.8658 35.3565C35.2661 35.9615 34.453 36.3018 33.6049 36.3027ZM41.6022 9.68073C40.9695 9.68073 40.351 9.49148 39.825 9.1369C39.2989 8.78232 38.8889 8.27835 38.6468 7.68871C38.4047 7.09906 38.3413 6.45024 38.4648 5.82428C38.5882 5.19832 38.8928 4.62334 39.3402 4.17205C39.7876 3.72076 40.3576 3.41343 40.9781 3.28891C41.5986 3.1644 42.2418 3.22831 42.8264 3.47254C43.4109 3.71678 43.9105 4.13038 44.262 4.66105C44.6135 5.19171 44.8011 5.8156 44.8011 6.45382C44.8001 7.30936 44.4628 8.12957 43.8631 8.73453C43.2634 9.33948 42.4503 9.67977 41.6022 9.68073Z" fill="#167BFF" />
  </svg>

)
export const Search6 = () => (
  <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.1185 13.3424L32.4531 7.01057C34.3807 5.08293 36.9952 4 39.7213 4C41.0711 4 42.4077 4.26587 43.6548 4.78242C44.9018 5.29898 46.035 6.0561 46.9894 7.01057C47.9439 7.96504 48.701 9.09816 49.2176 10.3452C49.7341 11.5923 50 12.9289 50 14.2787C50 15.6286 49.7341 16.9652 49.2176 18.2122C48.701 19.4593 47.9439 20.5924 46.9894 21.5469L40.6576 27.8815M13.3457 26.1179L7.01114 32.4498C5.08314 34.3778 4 36.9927 4 39.7193C4 42.4459 5.08314 45.0609 7.01114 46.9889C8.93913 48.9169 11.5541 50 14.2807 50C17.0073 50 19.6222 48.9169 21.5502 46.9889L27.8821 40.6543M32.4477 21.5469L21.5447 32.4498" stroke="#167BFF" stroke-width="6.66667" stroke-linecap="square" />
  </svg>


)

export const Fotterico1 = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.7392 2.55273L10.5758 7.3119L6.97584 2.55273H1.76001L7.99084 10.6994L2.08584 17.4486H4.61418L9.17168 12.2402L13.155 17.4486H18.24L11.745 8.8619L17.2658 2.55273H14.7392ZM13.8525 15.9361L4.71168 3.98523H6.21418L15.2525 15.9352L13.8525 15.9361Z" fill="#A0A4AE" />
  </svg>


)
export const Fotterico2 = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.8333 0.5C14.2754 0.5 14.6993 0.675595 15.0118 0.988155C15.3244 1.30072 15.5 1.72464 15.5 2.16667V13.8333C15.5 14.2754 15.3244 14.6993 15.0118 15.0118C14.6993 15.3244 14.2754 15.5 13.8333 15.5H2.16667C1.72464 15.5 1.30072 15.3244 0.988155 15.0118C0.675595 14.6993 0.5 14.2754 0.5 13.8333V2.16667C0.5 1.72464 0.675595 1.30072 0.988155 0.988155C1.30072 0.675595 1.72464 0.5 2.16667 0.5H13.8333ZM13.4167 13.4167V9C13.4167 8.27949 13.1304 7.5885 12.621 7.07903C12.1115 6.56955 11.4205 6.28333 10.7 6.28333C9.99167 6.28333 9.16667 6.71667 8.76667 7.36667V6.44167H6.44167V13.4167H8.76667V9.30833C8.76667 8.66667 9.28333 8.14167 9.925 8.14167C10.2344 8.14167 10.5312 8.26458 10.75 8.48338C10.9688 8.70217 11.0917 8.99891 11.0917 9.30833V13.4167H13.4167ZM3.73333 5.13333C4.10464 5.13333 4.46073 4.98583 4.72328 4.72328C4.98583 4.46073 5.13333 4.10464 5.13333 3.73333C5.13333 2.95833 4.50833 2.325 3.73333 2.325C3.35982 2.325 3.0016 2.47338 2.73749 2.73749C2.47338 3.0016 2.325 3.35982 2.325 3.73333C2.325 4.50833 2.95833 5.13333 3.73333 5.13333ZM4.89167 13.4167V6.44167H2.58333V13.4167H4.89167Z" fill="#A0A4AE" />
  </svg>


)
export const Fotterico3 = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 1.6665C8.90567 1.6665 7.82204 1.88205 6.81099 2.30084C5.79994 2.71963 4.88129 3.33346 4.10746 4.10728C2.54466 5.67008 1.66669 7.7897 1.66669 9.99984C1.66669 13.6832 4.05835 16.8082 7.36669 17.9165C7.78335 17.9832 7.91669 17.7248 7.91669 17.4998V16.0915C5.60835 16.5915 5.11669 14.9748 5.11669 14.9748C4.73335 14.0082 4.19169 13.7498 4.19169 13.7498C3.43335 13.2332 4.25002 13.2498 4.25002 13.2498C5.08335 13.3082 5.52502 14.1082 5.52502 14.1082C6.25002 15.3748 7.47502 14.9998 7.95002 14.7998C8.02502 14.2582 8.24169 13.8915 8.47502 13.6832C6.62502 13.4748 4.68335 12.7582 4.68335 9.58317C4.68335 8.65817 5.00002 7.9165 5.54169 7.32484C5.45835 7.1165 5.16669 6.24984 5.62502 5.12484C5.62502 5.12484 6.32502 4.89984 7.91669 5.97484C8.57502 5.7915 9.29169 5.69984 10 5.69984C10.7084 5.69984 11.425 5.7915 12.0834 5.97484C13.675 4.89984 14.375 5.12484 14.375 5.12484C14.8334 6.24984 14.5417 7.1165 14.4584 7.32484C15 7.9165 15.3167 8.65817 15.3167 9.58317C15.3167 12.7665 13.3667 13.4665 11.5084 13.6748C11.8084 13.9332 12.0834 14.4415 12.0834 15.2165V17.4998C12.0834 17.7248 12.2167 17.9915 12.6417 17.9165C15.95 16.7998 18.3334 13.6832 18.3334 9.99984C18.3334 8.90549 18.1178 7.82185 17.699 6.81081C17.2802 5.79976 16.6664 4.8811 15.8926 4.10728C15.1188 3.33346 14.2001 2.71963 13.189 2.30084C12.178 1.88205 11.0944 1.6665 10 1.6665Z" fill="#A0A4AE" />
  </svg>


)

export const Peoples = () => (
  <svg width="60" height="54" viewBox="0 0 60 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M52.4641 27.8475C54.2743 26.6278 55.5207 24.2284 55.5207 22.0679C55.5207 19.0151 53.0475 16.5443 49.9982 16.5443C49.6576 16.5443 49.3313 16.5844 49.0101 16.645L49.0156 16.6424C47.7566 14.6032 45.3777 12.6548 42.4658 11.9185C44.2757 10.6987 45.5206 8.29963 45.5206 6.1389C45.5206 3.08611 43.0492 0.615234 39.9993 0.615234C36.95 0.615234 34.4768 3.08757 34.4768 6.1389C34.4768 8.29933 35.7232 10.6987 37.5317 11.9185C34.6194 12.6551 32.2432 14.6032 30.9815 16.6424C30.6597 16.5861 30.3349 16.5443 29.999 16.5443C29.6628 16.5443 29.3383 16.5844 29.0164 16.6424C27.7565 14.6032 25.3794 12.6548 22.4666 11.9185C24.2765 10.6987 25.5214 8.29963 25.5214 6.1389C25.5214 3.08611 23.0488 0.615234 19.9995 0.615234C16.9502 0.615234 14.4776 3.08757 14.4776 6.1389C14.4776 8.29933 15.7231 10.6987 17.5324 11.9185C14.6202 12.6551 12.244 14.6032 10.9823 16.6424L10.9876 16.645C10.6666 16.5861 10.3395 16.5443 9.99976 16.5443C6.95019 16.5443 4.47785 19.0169 4.47785 22.0679C4.47785 24.2284 5.72339 26.6278 7.53357 27.8475C3.20625 28.9443 0 32.6997 0 35.4854C0 37.1277 4.99944 37.9533 10.0006 37.9533L7.2 35.15L9.55929 29.4489H9.52444L8.60954 28.3987C9.05352 28.5592 9.51536 28.6556 9.99331 28.6556C10.4721 28.6556 10.934 28.5592 11.3744 28.4022L10.4613 29.4489H10.4355L12.7948 35.15L9.99331 37.9533C11.5458 37.9533 13.0962 37.8734 14.5007 37.7146C14.5007 37.7108 14.5025 37.7076 14.5025 37.7041C14.4972 37.8057 14.4715 37.8983 14.4715 37.9999C14.4715 40.1597 15.717 42.558 17.5263 43.7777C13.201 44.8745 9.99361 48.6299 9.99361 51.4135C9.99361 53.0615 14.9939 53.885 19.9951 53.885L17.1945 51.0817L19.5538 45.3788H19.5262L18.6113 44.3304C19.0544 44.4871 19.5175 44.5872 19.9954 44.5872C20.4742 44.5872 20.9361 44.4909 21.3757 44.3304L20.4625 45.3788H20.4376L22.7969 51.0817L19.9951 53.885C24.9954 53.885 29.9969 53.0615 29.9969 51.4135C29.9969 48.6316 26.7907 44.8745 22.4642 43.7777C24.2744 42.558 25.5191 40.1597 25.5191 37.9999C25.5191 34.9471 23.0467 32.4756 19.9972 32.4756C19.6592 32.4756 19.3347 32.5149 19.0146 32.5755C17.7547 30.5354 15.3776 28.5844 12.4645 27.8496C14.2747 26.6298 15.5202 24.2307 15.5202 22.07C15.5202 21.9722 15.4959 21.8802 15.4906 21.7856V21.7874C16.8931 21.9443 18.4444 22.0246 19.9969 22.0246L17.1962 19.2213L19.5555 13.5202H19.5277L18.6111 12.4691C19.0542 12.6278 19.5172 12.7268 19.9951 12.7268C20.4739 12.7268 20.9358 12.6296 21.3754 12.4709L20.4622 13.5184H20.4373L22.7966 19.2196L19.9951 22.0228C21.5473 22.0228 23.0997 21.9429 24.5023 21.7856C24.4961 21.882 24.4727 21.9722 24.4727 22.0682C24.4727 24.2287 25.7182 26.6281 27.5275 27.8478C25.375 28.3917 23.5024 29.5974 22.1626 31.0096C25.1138 31.93 27.2759 34.6314 27.3322 37.8681C28.2014 37.9217 29.0975 37.9519 29.9963 37.9519L27.1948 35.1486L29.5541 29.4474H29.5275L28.6126 28.399C29.0557 28.5557 29.5175 28.6558 29.9963 28.6558C30.4752 28.6558 30.937 28.5595 31.3766 28.399L30.4635 29.4474H30.4386L32.7979 35.1486L29.9946 37.9536C30.8934 37.9536 31.7895 37.9249 32.659 37.8719C32.7159 34.637 34.8772 31.93 37.8286 31.0131C36.4894 29.5992 34.6133 28.392 32.4637 27.8496C34.273 26.6298 35.5194 24.2307 35.5194 22.07C35.5194 21.9722 35.4945 21.882 35.489 21.7874C36.8923 21.9443 38.4439 22.0246 39.9955 22.0246L37.1955 19.2213L39.553 13.5202H39.5281L38.6114 12.4691C39.0557 12.6278 39.5176 12.7268 39.9955 12.7268C40.4735 12.7268 40.9371 12.6296 41.3758 12.4709L40.4626 13.5184H40.4377L42.7988 19.2196L39.9955 22.0228C41.5488 22.0228 43.1001 21.9429 44.5038 21.7856V21.7838C44.4968 21.8802 44.4751 21.9722 44.4751 22.0682C44.4751 24.2287 45.7198 26.6281 47.5282 27.8478C44.616 28.5844 42.2406 30.5316 40.9801 32.5735C40.6588 32.5149 40.3326 32.4736 39.9958 32.4736C36.9462 32.4736 34.4745 34.9471 34.4745 37.9964C34.4745 40.1577 35.7194 42.558 37.5293 43.7777C33.2014 44.8745 29.9949 48.6299 29.9949 51.4135C29.9949 53.0615 34.9952 53.885 39.9955 53.885L37.1955 51.0817L39.553 45.3788H39.5281L38.6114 44.3304C39.0557 44.4871 39.5176 44.5872 39.9955 44.5872C40.4735 44.5872 40.9371 44.4909 41.3758 44.3304L40.4626 45.3788H40.4377L42.7988 51.0817L39.9955 53.885C44.9958 53.885 49.9979 53.0615 49.9979 51.4135C49.9979 48.6316 46.7914 44.8745 42.4652 43.7777C44.2751 42.558 45.5201 40.1597 45.5201 37.9999C45.5201 37.8983 45.4949 37.8057 45.4878 37.7041C45.4878 37.7076 45.4916 37.7108 45.4916 37.7146C46.895 37.8734 48.4449 37.9533 49.9982 37.9533L47.1967 35.15L49.556 29.4489H49.5293L48.6127 28.3987C49.0584 28.5592 49.5185 28.6556 49.9982 28.6556C50.4761 28.6556 50.938 28.5592 51.3784 28.4022L50.4653 29.4489H50.4387L52.7997 35.15L49.9982 37.9533C54.9965 37.9533 60.0006 37.1298 60.0006 35.4854C59.9968 32.7017 56.7905 28.9443 52.4641 27.8475ZM6.34836 34.8004L6.11495 35.3641L6.54663 35.7958L7.7333 36.9816C3.35795 36.7587 1.10292 35.9171 0.905235 35.4857C0.905235 33.1246 3.80925 29.7523 7.70226 28.7466L7.92161 28.9979L8.4842 29.6434L6.34836 34.8004ZM16.3481 50.7285L16.1147 51.2937L16.5452 51.7257L17.7331 52.915C13.3577 52.6904 11.1018 51.8487 10.905 51.4135C10.905 49.056 13.809 45.6822 17.7017 44.6765L17.9211 44.9296L18.4828 45.575L16.3481 50.7285ZM29.087 51.3778C28.8846 51.8414 26.627 52.6901 22.2543 52.9112L23.4409 51.7254L23.8717 51.2934L23.638 50.7282L21.5034 45.5712L22.0616 44.9293L22.2827 44.6742C26.1786 45.6819 29.0817 49.056 29.087 51.3778ZM24.6039 37.9996C24.6039 39.8724 23.4901 41.9869 21.9529 43.0213L21.5382 43.2995L21.0629 43.4705C20.6945 43.6026 20.3343 43.6706 19.9928 43.6706C19.6513 43.6706 19.299 43.6044 18.9156 43.4673L18.4503 43.3016L18.0338 43.0216C16.4957 41.9872 15.382 39.8724 15.382 37.9999C15.382 35.4555 17.4504 33.3885 19.991 33.3885C22.5319 33.3879 24.6039 35.4549 24.6039 37.9996ZM18.1147 32.8247C18.1217 32.8209 18.1272 32.8209 18.1343 32.8177C16.3797 33.4488 15.0376 34.9272 14.6176 36.7766C13.9071 36.8621 13.1348 36.9371 12.253 36.9816L13.44 35.7958L13.8705 35.3641L13.6371 34.8004L11.5024 29.6399L12.0615 28.9979L12.2817 28.7446C14.8422 29.4079 16.9508 31.0875 18.1147 32.8247ZM11.9517 27.0896L11.537 27.3687L11.0617 27.5389C10.6935 27.6718 10.3333 27.7398 9.99185 27.7398C9.65037 27.7398 9.29806 27.6736 8.9147 27.5374L8.44935 27.3708L8.0329 27.0899C6.49479 26.0564 5.38104 23.9417 5.38104 22.0682C5.38104 19.5244 7.44952 17.4577 9.9898 17.4577C12.5301 17.4577 14.5989 19.5262 14.5989 22.0682C14.6024 23.9431 13.4889 26.0561 11.9517 27.0896ZM16.3481 18.8684L16.1147 19.4331L16.5452 19.8636L17.7331 21.052C16.8504 21.0084 16.0799 20.9316 15.3685 20.8461C14.952 19.0075 13.621 17.5335 11.8785 16.8963C13.0411 15.154 15.1471 13.4742 17.7 12.8153L17.9193 13.0668L18.481 13.714L16.3481 18.8684ZM21.0632 11.6098C20.6948 11.7437 20.3345 11.8113 19.9931 11.8113C19.6516 11.8113 19.2993 11.7451 18.9159 11.6081L18.4506 11.4423L18.0341 11.1606C16.496 10.1274 15.3823 8.01321 15.3823 6.1389C15.3823 3.59598 17.4507 1.52808 19.9913 1.52808C22.5319 1.52779 24.6004 3.59744 24.6004 6.1386C24.6004 8.01292 23.4866 10.1271 21.9494 11.1603L21.5347 11.4403L21.0632 11.6098ZM22.2545 21.052L23.4412 19.8653L23.872 19.4345L23.6383 18.8702L21.5036 13.712L22.0618 13.0692L22.283 12.815C24.842 13.4739 26.9526 15.1581 28.1144 16.8925C26.3687 17.53 25.0338 19.0037 24.6174 20.8444C23.9083 20.9319 23.1361 21.0066 22.2545 21.052ZM36.3506 18.8684L36.1151 19.4331L36.5468 19.8636L37.7343 21.052C36.8516 21.0084 36.0811 20.9316 35.3698 20.8461C34.9524 19.0075 33.6223 17.5335 31.88 16.8963C33.0427 15.154 35.1487 13.4742 37.7024 12.8153L37.92 13.0668L38.4835 13.714L36.3506 18.8684ZM41.0653 11.6098C40.6943 11.7437 40.3361 11.8113 39.9955 11.8113C39.6532 11.8113 39.3 11.7451 38.9184 11.6081L38.451 11.4423L38.0336 11.1606C36.4964 10.1274 35.3835 8.01321 35.3835 6.1389C35.3835 3.59598 37.452 1.52808 39.9914 1.52808C42.5329 1.52808 44.6013 3.59744 44.6013 6.1389C44.6013 8.01321 43.4864 10.1274 41.9495 11.1606L41.5357 11.4406L41.0653 11.6098ZM42.2549 21.052L43.4407 19.8653L43.8724 19.4345L43.6408 18.8702L41.5043 13.712L42.0643 13.0692L42.2854 12.815C44.8424 13.4739 46.9539 15.1581 48.1148 16.8925C48.1236 16.8907 48.1309 16.889 48.1379 16.8872C46.3796 17.5192 45.0386 18.9958 44.6177 20.8444C43.9096 20.9319 43.1373 21.0066 42.2549 21.052ZM36.3506 50.7285L36.1151 51.2937L36.5468 51.7257L37.7343 52.915C33.3584 52.6904 31.1034 51.8487 30.9063 51.4135C30.9063 49.056 33.8097 45.6822 37.7024 44.6765L37.9218 44.9296L38.4835 45.575L36.3506 50.7285ZM49.0886 51.3778C48.8871 51.8414 46.6294 52.6901 42.2549 52.9112L43.4407 51.7254L43.8724 51.2934L43.6408 50.7282L41.5043 45.5712L42.0643 44.9293L42.2854 44.6742C46.1799 45.6819 49.083 49.056 49.0886 51.3778ZM41.9533 43.0213L41.5398 43.2995L41.0653 43.4705C40.6943 43.6026 40.3361 43.6706 39.9955 43.6706C39.6532 43.6706 39.3 43.6044 38.9184 43.4673L38.451 43.3016L38.0336 43.0216C36.4964 41.9872 35.3835 39.8724 35.3835 37.9999C35.3835 35.4555 37.452 33.3885 39.9914 33.3885C42.5329 33.3885 44.6013 35.457 44.6013 37.9999C44.6051 39.8721 43.4905 41.9869 41.9533 43.0213ZM46.3509 34.8004L46.1175 35.3641L46.5471 35.7958L47.735 36.9816C46.854 36.9371 46.0803 36.8621 45.3704 36.7766C44.9531 34.9363 43.6226 33.4649 41.8804 32.8285C43.0451 31.0845 45.1493 29.4082 47.703 28.7466L47.9203 28.9979L48.4841 29.6434L46.3509 34.8004ZM51.066 27.5406C50.697 27.6736 50.3385 27.7412 49.9961 27.7412C49.6538 27.7412 49.3026 27.6751 48.919 27.5389L48.4519 27.3731L48.0363 27.0914C46.4991 26.0582 45.3844 23.9431 45.3844 22.0697C45.3844 19.5259 47.4529 17.4589 49.9941 17.4589C52.5335 17.4589 54.6037 19.5274 54.6037 22.0697C54.6037 23.9431 53.4891 26.0582 51.9501 27.0914L51.5366 27.3705L51.066 27.5406ZM52.2535 36.9813L53.4414 35.7955L53.873 35.3638L53.6393 34.8001L51.5047 29.6396L52.0629 28.9976L52.284 28.7443C56.1787 29.7503 59.0836 33.124 59.0871 35.4479C58.8839 35.9115 56.63 36.7584 52.2535 36.9813Z" fill="#167BFF" />
  </svg>
)

export const FaceScan = () => (
  <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.5833 9.75H13.9167C12.679 9.75 11.492 10.2417 10.6168 11.1168C9.74167 11.992 9.25 13.179 9.25 14.4167V19.0833M41.9167 9.75H46.5833C47.821 9.75 49.008 10.2417 49.8832 11.1168C50.7583 11.992 51.25 13.179 51.25 14.4167V19.0833M39.5833 21.4167V26.0833M20.9167 21.4167V26.0833M23.25 40.0833C23.25 40.0833 25.5833 42.4167 30.25 42.4167C34.9167 42.4167 37.25 40.0833 37.25 40.0833M30.25 21.4167V33.0833H27.9167M18.5833 51.75H13.9167C12.679 51.75 11.492 51.2583 10.6168 50.3832C9.74167 49.508 9.25 48.321 9.25 47.0833V42.4167M41.9167 51.75H46.5833C47.821 51.75 49.008 51.2583 49.8832 50.3832C50.7583 49.508 51.25 48.321 51.25 47.0833V42.4167" stroke="#167BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const FingerPrintSearch = () => (
  <svg width="62" height="55" viewBox="0 0 62 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.7127 10.5346C31.8917 10.5346 35.7182 11.4368 39.1922 13.2413C42.6647 15.0458 45.6699 17.6903 48.2079 21.1748L46.7117 22.1783C44.4347 18.9353 41.6904 16.4723 38.4789 14.7893C35.2674 13.1063 31.6787 12.2656 27.7127 12.2671C23.8697 12.2671 20.3589 13.1033 17.1804 14.7758C14.0019 16.4483 11.2164 18.9391 8.82395 22.2481L7.50095 21.2131C10.0764 17.7481 13.0839 15.1028 16.5234 13.2773C19.9629 11.4518 23.6927 10.5376 27.7127 10.5346ZM27.7127 15.8221C32.7917 15.8221 37.1094 17.5141 40.6659 20.8981C44.2224 24.2821 46.0014 28.3868 46.0029 33.2123C46.0029 34.9928 45.3579 36.4988 44.0679 37.7303C42.7809 38.9603 41.2247 39.5753 39.3992 39.5753C37.5347 39.5753 35.9492 38.9603 34.6427 37.7303C33.3377 36.4973 32.6852 34.9913 32.6852 33.2123C32.6852 31.9253 32.2127 30.8296 31.2677 29.9251C30.3242 29.0191 29.1677 28.5661 27.7982 28.5661C26.3987 28.5661 25.2204 29.0191 24.2634 29.9251C23.3049 30.8296 22.8257 31.9253 22.8257 33.2123C22.8257 36.7748 23.9094 39.8348 26.0769 42.3923C28.2429 44.9498 31.3637 46.8323 35.4392 48.0398L34.9644 49.7161C30.5904 48.5251 27.1854 46.4903 24.7494 43.6118C22.3134 40.7348 21.0954 37.2683 21.0954 33.2123C21.0954 31.4333 21.7487 29.9258 23.0552 28.6898C24.3617 27.4538 25.9427 26.8358 27.7982 26.8358C29.6237 26.8358 31.1829 27.4538 32.4759 28.6898C33.7674 29.9258 34.4132 31.4333 34.4132 33.2123C34.4132 34.4993 34.8947 35.5958 35.8577 36.5018C36.8192 37.4078 37.9997 37.8608 39.3992 37.8608C40.7597 37.8608 41.9117 37.4078 42.8552 36.5018C43.8002 35.5958 44.2727 34.4993 44.2727 33.2123C44.2727 28.8503 42.6677 25.1483 39.4577 22.1063C36.2507 19.0613 32.3394 17.5388 27.7239 17.5388C23.1669 17.5388 19.2842 19.0613 16.0757 22.1063C12.8687 25.1483 11.2652 28.8458 11.2652 33.1988C11.2652 34.4258 11.4062 35.7533 11.6882 37.1813C11.9702 38.6093 12.4292 40.2661 13.0652 42.1516L11.5149 42.8536C10.8399 41.0701 10.3412 39.3826 10.0187 37.7911C9.6962 36.1981 9.53495 34.6718 9.53495 33.2123C9.53495 28.3868 11.3012 24.2821 14.8337 20.8981C18.3662 17.5141 22.6584 15.8221 27.7104 15.8221M27.7982 5.02209C30.2072 5.02209 32.5524 5.32209 34.8339 5.92209C37.1154 6.52209 39.5304 7.48284 42.0789 8.80434L41.3499 10.4108C39.0804 9.12684 36.8604 8.19609 34.6899 7.61859C32.5194 7.04109 30.2222 6.75309 27.7982 6.75459C25.5257 6.75459 23.3177 7.04709 21.1742 7.63209C19.0307 8.21709 16.7424 9.13734 14.3094 10.3928L13.7289 8.85609C16.0029 7.55559 18.2874 6.59184 20.5824 5.96484C22.8774 5.33784 25.2842 5.02359 27.7982 5.02209ZM27.7959 21.3233C31.4304 21.3233 34.4169 22.5241 36.7554 24.9256C39.0924 27.3286 40.2609 30.3796 40.2609 34.0786H38.5307C38.5307 30.8641 37.5272 28.2233 35.5202 26.1563C33.5117 24.0863 30.9369 23.0513 27.7959 23.0513C24.8214 23.0513 22.2932 24.0466 20.2112 26.0371C18.1292 28.0276 17.0889 30.4193 17.0904 33.2123C17.0904 36.0713 17.5892 38.5936 18.5867 40.7791C19.5842 42.9631 21.3812 45.4238 23.9777 48.1613L22.7492 49.3921C20.0807 46.5526 18.1817 43.9051 17.0522 41.4496C15.9227 38.9926 15.3579 36.2468 15.3579 33.2123C15.3579 29.8958 16.5647 27.0848 18.9782 24.7793C21.3902 22.4753 24.3279 21.3233 27.7959 21.3233ZM30.4599 41.5328C29.2599 40.4078 28.3554 39.0803 27.7464 37.5503C27.1374 36.0203 26.8329 34.2863 26.8329 32.3483H28.5654C28.5654 34.0643 28.8279 35.5868 29.3529 36.9158C29.8779 38.2463 30.6564 39.3901 31.6884 40.3471C32.6634 41.2396 33.7742 41.9273 35.0207 42.4103C36.2672 42.8933 37.5767 43.1348 38.9492 43.1348C39.4997 43.1348 40.0389 43.0906 40.5669 43.0021C41.0949 42.9136 41.6259 42.8146 42.1599 42.7051L42.5087 44.2508C41.9297 44.4353 41.3454 44.5838 40.7559 44.6963C40.1679 44.8088 39.5657 44.8651 38.9492 44.8651C37.3562 44.8651 35.8262 44.5816 34.3592 44.0146C32.8922 43.4476 31.5924 42.6203 30.4599 41.5328Z" fill="#167BFF" />
    <path d="M59.5813 46.3015C58.9709 46.7779 47.0136 34.0321 47.0136 34.0321C46.0101 34.8668 44.8561 35.5127 43.5515 35.9699C42.247 36.4271 40.9358 36.6557 39.6179 36.6557C36.404 36.6557 33.6839 35.5695 31.4575 33.3973C29.231 31.225 28.1178 28.5701 28.1178 25.4326C28.1178 22.295 29.2297 19.6388 31.4534 17.464C33.6772 15.2891 36.396 14.2004 39.6098 14.1978C42.8237 14.1951 45.5452 15.2819 47.7742 17.4581C50.0033 19.6343 51.1179 22.2905 51.1179 25.4267C51.1179 26.7878 50.871 28.1051 50.3773 29.3787C49.8836 30.6523 49.2347 31.7416 48.4305 32.6469C48.4305 32.6469 61.4872 44.3137 60.9983 44.9143C60.5093 45.5148 60.1918 45.825 59.5813 46.3015ZM39.6199 34.6944C42.2825 34.6944 44.5303 33.7996 46.3633 32.0101C48.1964 30.2205 49.1129 28.0254 49.1129 25.4247C49.1129 22.8241 48.1964 20.6296 46.3633 18.8414C44.5303 17.0532 42.2825 16.1584 39.6199 16.1571C36.9573 16.1558 34.7088 17.0506 32.8744 18.8414C31.04 20.6322 30.1235 22.8267 30.1248 25.4247C30.1262 28.0228 31.0427 30.2173 32.8744 32.0081C34.7061 33.7989 36.9539 34.6937 39.6179 34.6924" fill="#E8F2FF" />
    <rect x="29.9301" y="15.7511" width="19.4176" height="19.1587" rx="9.57933" fill="white" fill-opacity="0.1" />
  </svg>
)

export const Badge = () => (
  <svg width="43" height="39" viewBox="0 0 43 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 33.25V31.25C1 27.537 2.475 23.976 5.10051 21.3505C7.72601 18.725 11.287 17.25 15 17.25" stroke="#157AFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M28.608 17.878C28.9116 17.5457 29.2811 17.2803 29.6929 17.0987C30.1048 16.9171 30.5499 16.8234 31 16.8234C31.4501 16.8234 31.8953 16.9171 32.3071 17.0987C32.7189 17.2803 33.0884 17.5457 33.392 17.878C34.042 18.59 34.972 18.976 35.936 18.93C36.3859 18.9095 36.835 18.983 37.2549 19.1458C37.6747 19.3086 38.056 19.5572 38.3744 19.8756C38.6928 20.194 38.9414 20.5753 39.1042 20.9951C39.267 21.415 39.3405 21.8641 39.32 22.314C39.274 23.276 39.66 24.208 40.372 24.858C41.782 26.142 41.782 28.358 40.372 29.642C39.66 30.292 39.274 31.222 39.32 32.186C39.3405 32.6358 39.267 33.085 39.1042 33.5048C38.9414 33.9247 38.6928 34.3059 38.3744 34.6244C38.056 34.9428 37.6747 35.1913 37.2549 35.3541C36.835 35.5169 36.3859 35.5905 35.936 35.57C35.4607 35.5478 34.9864 35.6305 34.5467 35.8123C34.1071 35.9942 33.7128 36.2706 33.392 36.622C33.0884 36.9543 32.7189 37.2197 32.3071 37.4012C31.8953 37.5828 31.4501 37.6766 31 37.6766C30.5499 37.6766 30.1048 37.5828 29.6929 37.4012C29.2811 37.2197 28.9116 36.9543 28.608 36.622C28.2872 36.2706 27.893 35.9942 27.4533 35.8123C27.0136 35.6305 26.5393 35.5478 26.064 35.57C25.6142 35.5905 25.165 35.5169 24.7452 35.3541C24.3253 35.1913 23.9441 34.9428 23.6256 34.6244C23.3072 34.3059 23.0587 33.9247 22.8959 33.5048C22.7331 33.085 22.6595 32.6358 22.68 32.186C22.702 31.7105 22.6189 31.2361 22.4367 30.7964C22.2546 30.3567 21.9778 29.9626 21.626 29.642C21.2937 29.3384 21.0283 28.9689 20.8468 28.5571C20.6652 28.1452 20.5714 27.7001 20.5714 27.25C20.5714 26.7999 20.6652 26.3547 20.8468 25.9429C21.0283 25.5311 21.2937 25.1616 21.626 24.858C22.34 24.208 22.726 23.278 22.68 22.314C22.6595 21.8641 22.7331 21.415 22.8959 20.9951C23.0587 20.5753 23.3072 20.194 23.6256 19.8756C23.9441 19.5572 24.3253 19.3086 24.7452 19.1458C25.165 18.983 25.6142 18.9095 26.064 18.93C27.026 18.976 27.958 18.59 28.608 17.876V17.878Z" stroke="#157AFF" stroke-width="2" />
    <path d="M27.728 27.25L29.908 29.43L34.272 25.07M15 17.25C17.1217 17.25 19.1566 16.4071 20.6569 14.9069C22.1571 13.4066 23 11.3717 23 9.25C23 7.12827 22.1571 5.09344 20.6569 3.59315C19.1566 2.09285 17.1217 1.25 15 1.25C12.8783 1.25 10.8434 2.09285 9.34315 3.59315C7.84285 5.09344 7 7.12827 7 9.25C7 11.3717 7.84285 13.4066 9.34315 14.9069C10.8434 16.4071 12.8783 17.25 15 17.25Z" stroke="#157AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)


export const Database = () => (
  <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28.75 9.15002C36.6376 9.15002 41.112 14.5344 41.7616 21.0388H41.9576C46.2556 21.0388 49.8648 24.0712 50.87 28.1704C50.3941 27.8789 49.8971 27.6234 49.3832 27.406C48.6686 27.1074 47.9341 26.8585 47.1852 26.6612C46.6116 25.7992 45.8354 25.0912 44.9244 24.5991C44.0135 24.107 42.9957 23.8459 41.9604 23.8388H41.7616C41.0674 23.8388 40.398 23.581 39.8833 23.1154C39.3685 22.6497 39.045 22.0095 38.9756 21.3188C38.41 15.66 34.6552 11.95 28.75 11.95C22.8308 11.95 19.0928 15.6348 18.5244 21.316C18.4556 22.0072 18.1324 22.6481 17.6176 23.1143C17.1027 23.5805 16.4329 23.8388 15.7384 23.8388H15.5424C12.0256 23.8388 9.14998 26.8012 9.14998 30.4944C9.14998 34.1904 12.0284 37.15 15.5396 37.15H28.75V39.95H15.5396C10.4632 39.95 6.34998 35.7164 6.34998 30.4944C6.34998 25.446 10.1944 21.3216 15.0356 21.0528L15.7384 21.0388C16.3936 14.4924 20.8624 9.15002 28.75 9.15002ZM49.6688 40.7424C47.4008 42.036 44.4524 42.75 41.35 42.75C38.2476 42.75 35.302 42.036 33.0312 40.7424C32.511 40.4438 32.0157 40.1039 31.55 39.726V48.35C31.55 51.444 35.9376 53.95 41.35 53.95C46.7624 53.95 51.15 51.444 51.15 48.35V39.726C50.6843 40.1039 50.1889 40.4438 49.6688 40.7424ZM41.35 28.75C35.9376 28.75 31.55 31.256 31.55 34.35C31.55 37.444 35.9376 39.95 41.35 39.95C46.7624 39.95 51.15 37.444 51.15 34.35C51.15 31.256 46.7624 28.75 41.35 28.75Z" fill="#167BFF" />
  </svg>
)

export const Handshake = () => (
  <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M46.0637 35.0568L48.8111 37.8055C49.0706 38.0647 49.2765 38.3726 49.4169 38.7114C49.5574 39.0503 49.6297 39.4135 49.6297 39.7803C49.6297 40.1472 49.5574 40.5104 49.4169 40.8492C49.2765 41.1881 49.0706 41.496 48.8111 41.7552C48.5518 42.0147 48.244 42.2206 47.9052 42.361C47.5663 42.5015 47.2031 42.5738 46.8363 42.5738C46.4694 42.5738 46.1062 42.5015 45.7673 42.361C45.4285 42.2206 45.1206 42.0147 44.8614 41.7552L42.9445 39.8396" stroke="#167BFF" stroke-width="1.26029" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M42.1114 39.0078L46.5225 43.4188C47.046 43.943 47.3401 44.6535 47.3401 45.3944C47.3401 46.1352 47.046 46.8457 46.5225 47.3698C46.2631 47.6294 45.9551 47.8353 45.6162 47.9758C45.2772 48.1162 44.9139 48.1885 44.5469 48.1885C44.18 48.1885 43.8167 48.1162 43.4777 47.9758C43.1388 47.8353 42.8308 47.6294 42.5714 47.3698L38.1604 42.9588" stroke="#167BFF" stroke-width="1.26029" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M37.0527 41.8497L41.7409 46.538C42.2645 47.0622 42.5586 47.7727 42.5586 48.5135C42.5586 49.2543 42.2645 49.9649 41.7409 50.489C41.2168 51.0126 40.5062 51.3067 39.7654 51.3067C39.0246 51.3067 38.314 51.0126 37.7899 50.489L33.1016 45.8007" stroke="#167BFF" stroke-width="1.26029" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M31.9926 44.6917L34.6265 47.3257C35.1501 47.8773 35.4333 48.6142 35.4137 49.3745C35.3941 50.1348 35.0734 50.8562 34.522 51.38C33.9978 51.9309 33.2764 52.2512 32.5162 52.2706C31.756 52.29 31.0192 52.0068 30.4676 51.4834L28.4927 49.5085" stroke="#167BFF" stroke-width="1.26029" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M32.3265 21.3208L46.0625 35.0567" stroke="#167BFF" stroke-width="1.26029" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12.3647 33.3844L0.630127 21.6498L12.981 9.46277L18.617 15.1C22.4563 14.2279 26.4491 14.2924 30.2583 15.2878" stroke="#167BFF" stroke-width="1.26029" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M23.3096 50.5816L23.4691 50.7411C24.516 51.788 26.2133 51.788 27.2601 50.7411L29.7242 48.277C30.771 47.2302 30.771 45.5329 29.7242 44.486L29.5647 44.3265C28.5178 43.2797 26.8205 43.2797 25.7737 44.3265L23.3096 46.7906C22.2628 47.8374 22.2628 49.5347 23.3096 50.5816Z" stroke="#167BFF" stroke-width="1.26029" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.7285 46.6116L18.888 46.7711C19.9349 47.818 21.6322 47.818 22.679 46.7711L26.2027 43.2475C27.2495 42.2006 27.2495 40.5033 26.2027 39.4565L26.0431 39.297C24.9963 38.2501 23.299 38.2501 22.2521 39.297L18.7285 42.8206C17.6816 43.8675 17.6816 45.5648 18.7285 46.6116Z" stroke="#167BFF" stroke-width="1.26029" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10.8277 38.7096L10.9872 38.8691C12.034 39.916 13.7313 39.916 14.7782 38.8691L18.3018 35.3455C19.3487 34.2986 19.3487 32.6014 18.3018 31.5545L18.1423 31.395C17.0955 30.3481 15.3982 30.3481 14.3513 31.395L10.8277 34.9186C9.78082 35.9655 9.78082 37.6628 10.8277 38.7096Z" stroke="#167BFF" stroke-width="1.26029" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M14.0528 43.3865L14.2123 43.546C15.2591 44.5929 16.9564 44.5929 18.0033 43.546L22.9778 38.5716C24.0246 37.5247 24.0246 35.8274 22.9778 34.7806L22.8182 34.621C21.7714 33.5742 20.0741 33.5742 19.0272 34.621L14.0528 39.5955C13.0059 40.6424 13.0059 42.3397 14.0528 43.3865Z" stroke="#167BFF" stroke-width="1.26029" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M45.2306 33.3944L59.3699 19.2552L47.7261 7.61011L37.6765 17.9382C37.6765 17.9382 30.9881 13.3281 27.245 16.2393C25.6401 17.4764 23.9612 18.6145 22.2178 19.6472C21.5499 20.048 21.0533 20.681 20.8229 21.425C20.5924 22.1691 20.6444 22.9719 20.9688 23.6801C21.1475 24.0734 21.4045 24.426 21.7242 24.7166C22.0439 25.0071 22.4195 25.2293 22.8281 25.3697C23.2366 25.5101 23.6695 25.5657 24.1002 25.533C24.5309 25.5004 24.9505 25.3802 25.3332 25.1798L31.9106 21.7342" stroke="#167BFF" stroke-width="1.26029" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)

export const MiddleIcon = () => (
  <svg width="88" height="86" viewBox="0 0 88 86" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <rect x="0.75148" y="0.5" width="87.03" height="85.5237" fill="url(#pattern0_1113_85)" />
    <defs>
      <pattern id="pattern0_1113_85" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_1113_85" transform="scale(0.00934579)" />
      </pattern>
      <image id="image0_1113_85" width="107" height="107" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAABrCAYAAABwv3wMAAAACXBIWXMAABM5AAATOQGPwlYBAAADHklEQVR4nO3bPagcVRjG8Zm9k3CJNn5UinbGL6yCio2FIaKiWBhUsLMwCIqNpDEIFnZamBCQVFpcrALBBESwU1DbQBBSBLS5Ri3uYnZzdt73mdfibjEczpUoumcD/199Yf7wcPayM7NNAwAAAAAAAAAAAAAAAAAAAAAAAPxnIuIBdz9uZs/VbsHfSCndL+laLEn6oHYT9uDu78aIpMHd36rdhQIzeyYykuTur9ZuQ4GkjwuDLczs6dptyETERNLnhcH+7Pv+8dp9yETEPkkXCoP9nlJ6sHYfMhFxQNJ3hcF+ns/n99TuQ2ZnZ+d2SRcLg12aTqd31O5DZjab3S3pSmGw77e3t2+p3YdMSumgpKuFwb6KiP21+5CJiEOSpoXBtiJiUrsPGTM7LOl6YbBParehwMyOSvJ8MHd/r3YbCtz9mKQhO11DRLxRuw0F7n6i8HHoZvZS7TYUSDpZGOy6mT1Vuw2Z2L2PuFUYbBoRh2r3IRMR+5fft/LBfk0p3Ve7D5mIuFXSD4XBLkfEvtp9yCxvS6V8sMVi8UjtNoxERCfpbOFk/cb9wzUSEa2kM4Wh5n3fP1m7DyOSPiwMZWb2Yu02jLj7O4WhBnd/vXYbRtz9NUnKx3L347XbMGJmz0paFE7VR7XbMNL3/RPjt3ZHPguea62PxWLxsKQ/CifqfPDld31ExL2SfikM9W1EHKjdh6WIuFPST4WhLkbEbbX7sBS79/1+LAx1ZTab3VW7D0uxe0f968JQV1NKB2v3YSl2n1V9URiKZ1XrRtKpwlA8BV437v5+YSg3s6O12zDi7m+W3lxy92O12zDS9/1je7wTeKJ2GzL5b4qXp+pk7S4U9H3/6Phk8R77v9Ou6kJmdmQymbwcEZc2NjZOt21re/2tu7/dtu0rTdOs+y9JFhGx1XXdp6u42MrGulFm9nzXdedrd/xDR9q2/eb/vsjafRS1bXvTvbUkaSXNazeWpC+HYZjX7rhRwzBcc/cLq7jW2n0MNk3TpJQe6rruheYm+J/l7uc2Nzcv1w4BAAAAAAAAAAAAAAAAAAAAAAAAAOztL8qrbBCyblGBAAAAAElFTkSuQmCC" />
    </defs>
  </svg>
)


export const FallDownIcon = () => (
  <svg width="11" height="60" viewBox="0 0 11 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_dd_222_874)">
      <path d="M5.07763 2L1.99991 55.7109C1.99991 55.7109 3.87571 58 5.07763 58C6.27955 58 8.15535 55.7109 8.15535 55.7109L5.07763 2Z" fill="url(#paint0_linear_222_874)" />
    </g>
    <defs>
      <filter id="filter0_dd_222_874" x="-9.15527e-05" y="0" width="10.1554" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="0.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_222_874" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="effect1_dropShadow_222_874" result="effect2_dropShadow_222_874" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_222_874" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_222_874" x1="5.07762" y1="58" x2="5.07751" y2="2.00001" gradientUnits="userSpaceOnUse">
        <stop stop-color="#006EFF" />
        <stop offset="1" stop-color="#093C80" />
      </linearGradient>
    </defs>
  </svg>
)


export const IndustryIcon1 = () => (
  <svg width="284" height="284" viewBox="0 0 284 284" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_222_2341)">
      <rect x="100" y="100" width="84" height="84" rx="42" fill="url(#paint0_linear_222_2341)" fill-opacity="0.2" shape-rendering="crispEdges" />
      <path d="M151.6 124.6C151.6 124.123 151.79 123.665 152.127 123.327C152.465 122.99 152.923 122.8 153.4 122.8H159.4C159.878 122.8 160.335 122.99 160.673 123.327C161.011 123.665 161.2 124.123 161.2 124.6V130.6C161.2 131.077 161.011 131.535 160.673 131.873C160.335 132.21 159.878 132.4 159.4 132.4C158.923 132.4 158.465 132.21 158.127 131.873C157.79 131.535 157.6 131.077 157.6 130.6V128.944L146.872 139.672C146.535 140.009 146.077 140.198 145.6 140.198C145.123 140.198 144.666 140.009 144.328 139.672L138.4 133.744L128.272 143.872C128.107 144.049 127.909 144.191 127.688 144.289C127.467 144.387 127.229 144.44 126.987 144.445C126.745 144.449 126.505 144.404 126.281 144.314C126.057 144.223 125.853 144.089 125.682 143.918C125.512 143.747 125.377 143.543 125.286 143.319C125.196 143.095 125.151 142.855 125.156 142.613C125.16 142.371 125.213 142.133 125.311 141.912C125.409 141.691 125.551 141.493 125.728 141.328L137.128 129.928C137.466 129.591 137.923 129.402 138.4 129.402C138.877 129.402 139.335 129.591 139.672 129.928L145.6 135.856L155.056 126.4H153.4C152.923 126.4 152.465 126.21 152.127 125.873C151.79 125.535 151.6 125.077 151.6 124.6ZM127 151.6C127.478 151.6 127.935 151.79 128.273 152.127C128.611 152.465 128.8 152.923 128.8 153.4V159.4C128.8 159.877 128.611 160.335 128.273 160.673C127.935 161.01 127.478 161.2 127 161.2C126.523 161.2 126.065 161.01 125.727 160.673C125.39 160.335 125.2 159.877 125.2 159.4V153.4C125.2 152.923 125.39 152.465 125.727 152.127C126.065 151.79 126.523 151.6 127 151.6ZM138.4 146.2C138.4 145.723 138.211 145.265 137.873 144.927C137.535 144.59 137.078 144.4 136.6 144.4C136.123 144.4 135.665 144.59 135.327 144.927C134.99 145.265 134.8 145.723 134.8 146.2V159.4C134.8 159.877 134.99 160.335 135.327 160.673C135.665 161.01 136.123 161.2 136.6 161.2C137.078 161.2 137.535 161.01 137.873 160.673C138.211 160.335 138.4 159.877 138.4 159.4V146.2ZM146.2 149.2C146.678 149.2 147.135 149.39 147.473 149.727C147.811 150.065 148 150.523 148 151V159.4C148 159.877 147.811 160.335 147.473 160.673C147.135 161.01 146.678 161.2 146.2 161.2C145.723 161.2 145.265 161.01 144.927 160.673C144.59 160.335 144.4 159.877 144.4 159.4V151C144.4 150.523 144.59 150.065 144.927 149.727C145.265 149.39 145.723 149.2 146.2 149.2ZM157.6 141.4C157.6 140.923 157.411 140.465 157.073 140.127C156.735 139.79 156.278 139.6 155.8 139.6C155.323 139.6 154.865 139.79 154.527 140.127C154.19 140.465 154 140.923 154 141.4V159.4C154 159.877 154.19 160.335 154.527 160.673C154.865 161.01 155.323 161.2 155.8 161.2C156.278 161.2 156.735 161.01 157.073 160.673C157.411 160.335 157.6 159.877 157.6 159.4V141.4Z" fill="#E8F2FF" />
    </g>
    <defs>
      <filter id="filter0_d_222_2341" x="0" y="0" width="284" height="284" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="50" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 0.6 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_222_2341" />
        <feBlend mode="normal" in="BackgroundImageFix" in2="effect1_dropShadow_222_2341" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_222_2341" x1="142" y1="100" x2="142" y2="258.059" gradientUnits="userSpaceOnUse">
        <stop offset="0.15" stop-color="#1B1B1B" stop-opacity="0.85" />
        <stop offset="0.987663" stop-color="#0148A5" />
      </linearGradient>
    </defs>
  </svg>
)


export const AccreditIcon=()=>(
  <svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1721 14.0684L14.9901 24.2999C15.0105 24.4204 14.9936 24.5442 14.9417 24.6549C14.8897 24.7655 14.8053 24.8576 14.6996 24.9189C14.5939 24.9802 14.472 25.0078 14.3503 24.998C14.2285 24.9882 14.1126 24.9414 14.0181 24.864L9.72194 21.6394C9.51454 21.4845 9.2626 21.4008 9.00371 21.4008C8.74483 21.4008 8.49289 21.4845 8.28549 21.6394L3.98214 24.8628C3.88772 24.9401 3.77197 24.9868 3.65033 24.9966C3.52868 25.0064 3.40693 24.979 3.30132 24.9178C3.1957 24.8566 3.11125 24.7647 3.05922 24.6544C3.00719 24.544 2.99006 24.4203 3.01011 24.2999L4.82697 14.0684" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.99907 15.4005C12.9757 15.4005 16.1993 12.1769 16.1993 8.20027C16.1993 4.22367 12.9757 1 8.99907 1C5.02249 1 1.79883 4.22367 1.79883 8.20027C1.79883 12.1769 5.02249 15.4005 8.99907 15.4005Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

)


export const BookIcon=()=>(
  <svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.3929 0.500001H22.4768C20.778 0.500001 19.1173 0.981641 17.6884 1.89027L16 2.95944L14.3116 1.89027C12.8841 0.981815 11.2216 0.499105 9.52321 0.500001H1.60714C0.994754 0.500001 0.5 0.988473 0.5 1.59308V20.9953C0.5 21.5999 0.994754 22.0884 1.60714 22.0884H9.52321C11.222 22.0884 12.8827 22.57 14.3116 23.4787L15.8478 24.4556C15.8927 24.4829 15.9446 24.5 15.9965 24.5C16.0484 24.5 16.1003 24.4863 16.1453 24.4556L17.6815 23.4787C19.1138 22.57 20.778 22.0884 22.4768 22.0884H30.3929C31.0052 22.0884 31.5 21.5999 31.5 20.9953V1.59308C31.5 0.988473 31.0052 0.500001 30.3929 0.500001ZM9.52321 19.629H2.99107V2.95944H9.52321C10.748 2.95944 11.9382 3.30444 12.9657 3.95688L14.6541 5.02605L14.8929 5.17976V20.9611C13.246 20.0867 11.4054 19.629 9.52321 19.629ZM29.0089 19.629H22.4768C20.5946 19.629 18.754 20.0867 17.1071 20.9611V5.17976L17.3459 5.02605L19.0343 3.95688C20.0618 3.30444 21.252 2.95944 22.4768 2.95944H29.0089V19.629ZM12.0177 7.33177H5.5894C5.45446 7.33177 5.34375 7.44791 5.34375 7.58796V9.12511C5.34375 9.26516 5.45446 9.3813 5.5894 9.3813H12.0143C12.1492 9.3813 12.2599 9.26516 12.2599 9.12511V7.58796C12.2634 7.44791 12.1527 7.33177 12.0177 7.33177ZM19.7366 7.58796V9.12511C19.7366 9.26516 19.8473 9.3813 19.9823 9.3813H26.4071C26.5421 9.3813 26.6528 9.26516 26.6528 9.12511V7.58796C26.6528 7.44791 26.5421 7.33177 26.4071 7.33177H19.9823C19.8473 7.33177 19.7366 7.44791 19.7366 7.58796ZM12.0177 12.114H5.5894C5.45446 12.114 5.34375 12.2301 5.34375 12.3702V13.9073C5.34375 14.0474 5.45446 14.1635 5.5894 14.1635H12.0143C12.1492 14.1635 12.2599 14.0474 12.2599 13.9073V12.3702C12.2634 12.2301 12.1527 12.114 12.0177 12.114ZM26.4106 12.114H19.9823C19.8473 12.114 19.7366 12.2301 19.7366 12.3702V13.9073C19.7366 14.0474 19.8473 14.1635 19.9823 14.1635H26.4071C26.5421 14.1635 26.6528 14.0474 26.6528 13.9073V12.3702C26.6562 12.2301 26.5455 12.114 26.4106 12.114Z" fill="white"/>
</svg>

)

export const PracticalIcon=()=>(
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 24L8 21.2L1.8 23.6C1.35556 23.7778 0.944444 23.728 0.566667 23.4507C0.188889 23.1733 0 22.8009 0 22.3333V3.66667C0 3.37778 0.0835555 3.12222 0.250667 2.9C0.417778 2.67778 0.645333 2.51111 0.933333 2.4L8 0L16 2.8L22.2 0.4C22.6444 0.222222 23.0556 0.272445 23.4333 0.550667C23.8111 0.828889 24 1.20089 24 1.66667V20.3333C24 20.6222 23.9169 20.8778 23.7507 21.1C23.5844 21.3222 23.3564 21.4889 23.0667 21.6L16 24ZM14.6667 20.7333V5.13333L9.33333 3.26667V18.8667L14.6667 20.7333ZM17.3333 20.7333L21.3333 19.4V3.6L17.3333 5.13333V20.7333ZM2.66667 20.4L6.66667 18.8667V3.26667L2.66667 4.6V20.4Z" fill="white"/>
</svg>
)

export const WeightIcon=()=>(
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0194 1.00032e-06C12.3182 1.00032e-06 12.6048 0.118554 12.8161 0.32958C13.0274 0.540606 13.1461 0.826819 13.1461 1.12525V1.51234C16.5187 1.58596 19.8751 2.00321 23.1629 2.75762C23.4453 2.83263 23.6875 3.01427 23.8383 3.26422C23.9891 3.51417 24.0368 3.81287 23.9713 4.09728C23.9058 4.38169 23.7323 4.62956 23.4873 4.78859C23.2423 4.94761 22.945 5.00535 22.6582 4.94962C22.108 4.82357 21.5556 4.70752 21.0012 4.60154L23.558 15.9216C23.6131 16.1646 23.586 16.419 23.4808 16.6449C23.3755 16.8708 23.1982 17.0554 22.9766 17.1699C21.9111 17.7186 20.7294 18.0047 19.5305 18.0041C18.3316 18.0047 17.15 17.7186 16.0844 17.1699C15.8628 17.0554 15.6855 16.8708 15.5803 16.6449C15.4751 16.419 15.4479 16.1646 15.5031 15.9216L18.162 4.14543C16.4978 3.93106 14.8236 3.80386 13.1461 3.76435V21.0257C15.0585 21.0951 16.96 21.3468 18.8245 21.7774C19.1157 21.8449 19.3682 22.0251 19.5264 22.2785C19.6846 22.5318 19.7355 22.8376 19.668 23.1285C19.6004 23.4193 19.42 23.6715 19.1663 23.8295C18.9126 23.9875 18.6065 24.0383 18.3152 23.9709C16.2506 23.4947 14.1384 23.2546 12.0194 23.2552C9.85319 23.2552 7.74556 23.5028 5.72357 23.9709C5.43233 24.0381 5.12627 23.9871 4.87272 23.829C4.61917 23.6708 4.4389 23.4186 4.37157 23.1277C4.30423 22.8368 4.35535 22.5312 4.51368 22.2779C4.67201 22.0247 4.92457 21.8447 5.21582 21.7774C7.07984 21.3469 8.98078 21.0952 10.8927 21.0257V3.76435C9.19621 3.80436 7.52374 3.93139 5.87529 4.14543L8.53574 15.9231C8.59015 16.1656 8.56262 16.4194 8.45745 16.6446C8.35228 16.8699 8.17538 17.0541 7.95437 17.1684C6.88892 17.7176 5.70729 18.0042 4.50827 18.0041C3.30937 18.0047 2.12774 17.7186 1.06216 17.1699C0.840562 17.0554 0.663252 16.8708 0.558039 16.6449C0.452827 16.419 0.42566 16.1646 0.480801 15.9216L3.03609 4.60154C2.48026 4.70756 1.92795 4.82359 1.37913 4.94962C1.08789 5.01646 0.781989 4.96503 0.528721 4.80662C0.275453 4.64821 0.0955651 4.3958 0.0286314 4.10493C-0.0383024 3.81405 0.0132004 3.50853 0.17181 3.25558C0.330419 3.00263 0.583143 2.82297 0.874384 2.75612C4.16226 2.00222 7.5186 1.58547 10.8912 1.51234V1.12525C10.8912 0.977358 10.9204 0.830911 10.9771 0.694292C11.0338 0.557672 11.117 0.433558 11.2218 0.329049C11.3265 0.22454 11.4509 0.141686 11.5878 0.0852247C11.7246 0.0287637 11.8713 -0.000196195 12.0194 1.00032e-06ZM4.50827 8.31637L2.88586 15.4985C3.94042 15.8402 5.07612 15.8402 6.13067 15.4985L4.50827 8.31637ZM19.5305 8.31637L17.9081 15.4985C18.9627 15.8402 20.0984 15.8402 21.1529 15.4985L19.5305 8.31637Z" fill="white"/>
</svg>
)

export const EthicalIcon=()=>(
  <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8582 21.6C12.937 21.6 13.0157 21.58 13.0945 21.54C13.1733 21.5 13.2323 21.46 13.2717 21.42L22.9582 11.58C23.1945 11.34 23.3669 11.07 23.4756 10.77C23.5843 10.47 23.6382 10.17 23.6374 9.87C23.6374 9.55 23.5835 9.2448 23.4756 8.9544C23.3677 8.664 23.1952 8.4092 22.9582 8.19L17.9378 3.09C17.7212 2.85 17.47 2.6752 17.1841 2.5656C16.8982 2.456 16.5986 2.4008 16.2851 2.4C15.9898 2.4 15.6945 2.4552 15.3992 2.5656C15.1039 2.676 14.8381 2.8508 14.6018 3.09L14.277 3.42L16.4623 5.67C16.7577 5.95 16.9742 6.27 17.112 6.63C17.2499 6.99 17.3188 7.37 17.3188 7.77C17.3188 8.61 17.0384 9.3152 16.4777 9.8856C15.917 10.456 15.2228 10.7408 14.3951 10.74C14.0013 10.74 13.6225 10.67 13.2587 10.53C12.8949 10.39 12.5747 10.18 12.2983 9.9L10.0822 7.68L4.91413 12.93C4.85507 12.99 4.81097 13.0552 4.78183 13.1256C4.75269 13.196 4.73773 13.2708 4.73694 13.35C4.73694 13.51 4.796 13.6552 4.91413 13.7856C5.03226 13.916 5.17007 13.9808 5.32758 13.98C5.40633 13.98 5.48508 13.96 5.56383 13.92C5.64259 13.88 5.70165 13.84 5.74103 13.8L9.75738 9.72L11.4112 11.4L7.42435 15.48C7.36529 15.54 7.32119 15.6052 7.29205 15.6756C7.26291 15.746 7.24795 15.8208 7.24716 15.9C7.24716 16.06 7.30622 16.2 7.42435 16.32C7.54248 16.44 7.6803 16.5 7.8378 16.5C7.91655 16.5 7.99531 16.48 8.07406 16.44C8.15281 16.4 8.21187 16.36 8.25125 16.32L12.2676 12.27L13.9214 13.95L9.93458 18.03C9.87551 18.07 9.83141 18.13 9.80227 18.21C9.77313 18.29 9.75817 18.37 9.75738 18.45C9.75738 18.61 9.81645 18.75 9.93458 18.87C10.0527 18.99 10.1905 19.05 10.348 19.05C10.4268 19.05 10.5008 19.0348 10.5701 19.0044C10.6394 18.974 10.7032 18.9292 10.7615 18.87L14.7778 14.82L16.4316 16.5L12.4153 20.58C12.3562 20.64 12.3121 20.7048 12.283 20.7744C12.2538 20.844 12.2389 20.9192 12.2381 21C12.2381 21.16 12.3023 21.3 12.4306 21.42C12.559 21.54 12.7015 21.6 12.8582 21.6ZM12.8287 24C12.1003 24 11.4557 23.7552 10.895 23.2656C10.3342 22.776 10.0043 22.1608 9.90504 21.42C9.23565 21.32 8.67454 21.04 8.22172 20.58C7.76889 20.12 7.49326 19.55 7.39482 18.87C6.72543 18.77 6.16944 18.4852 5.72685 18.0156C5.28426 17.546 5.01336 16.9808 4.91413 16.32C4.16599 16.22 3.55566 15.89 3.08314 15.33C2.61063 14.77 2.37438 14.11 2.37438 13.35C2.37438 12.95 2.4484 12.5652 2.59646 12.1956C2.74451 11.826 2.95596 11.5008 3.2308 11.22L10.0822 4.29L13.9509 8.22C13.9903 8.28 14.0494 8.3252 14.1281 8.3556C14.2069 8.386 14.2856 8.4008 14.3644 8.4C14.5416 8.4 14.6892 8.3452 14.8074 8.2356C14.9255 8.126 14.9846 7.9808 14.9846 7.8C14.9846 7.72 14.9696 7.64 14.9397 7.56C14.9097 7.48 14.8656 7.42 14.8074 7.38L10.5843 3.09C10.3677 2.85 10.1169 2.6752 9.8318 2.5656C9.54672 2.456 9.24628 2.4008 8.93049 2.4C8.63517 2.4 8.33985 2.4552 8.04453 2.5656C7.74921 2.676 7.48342 2.8508 7.24716 3.09L3.08314 7.35C2.90595 7.53 2.75829 7.74 2.64016 7.98C2.52204 8.22 2.44328 8.46 2.40391 8.7C2.36453 8.94 2.36453 9.1852 2.40391 9.4356C2.44328 9.686 2.52204 9.9208 2.64016 10.14L0.927306 11.88C0.592609 11.42 0.346509 10.9152 0.189005 10.3656C0.0315008 9.816 -0.0275632 9.2608 0.0118128 8.7C0.0511889 8.1392 0.189005 7.5944 0.425261 7.0656C0.661518 6.5368 0.98637 6.0616 1.39982 5.64L5.56383 1.41C6.03635 0.95 6.5632 0.6 7.14439 0.36C7.72558 0.12 8.32095 0 8.93049 0C9.54003 0 10.1358 0.12 10.7178 0.36C11.2997 0.6 11.8164 0.95 12.2676 1.41L12.5925 1.74L12.9173 1.41C13.3898 0.95 13.9167 0.6 14.4979 0.36C15.0791 0.12 15.6744 0 16.284 0C16.8935 0 17.4893 0.12 18.0712 0.36C18.6532 0.6 19.1698 0.95 19.6211 1.41L24.612 6.48C25.0648 6.94 25.4094 7.47 25.6456 8.07C25.8819 8.67 26 9.28 26 9.9C26 10.52 25.8819 11.1252 25.6456 11.7156C25.4094 12.306 25.0648 12.8308 24.612 13.29L14.9255 23.1C14.6499 23.38 14.3301 23.6 13.9663 23.76C13.6025 23.92 13.2233 24 12.8287 24Z" fill="white"/>
</svg>
)

export const StarIcon=()=>(
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.24061 4.10534L0.728609 4.49468C0.601942 4.51001 0.489942 4.59468 0.447942 4.72334C0.405942 4.85201 0.447942 4.98601 0.541276 5.07068C1.58528 6.02334 3.15394 7.45001 3.15394 7.45001C3.15261 7.45001 2.72328 9.52534 2.43794 10.91C2.42434 10.9727 2.42926 11.038 2.45209 11.0979C2.47493 11.1578 2.5147 11.2098 2.56655 11.2475C2.61841 11.2853 2.68012 11.3071 2.74417 11.3104C2.80821 11.3137 2.87183 11.2982 2.92728 11.266C4.15661 10.5673 5.99794 9.51668 5.99794 9.51668L9.06727 11.2667C9.17927 11.328 9.31927 11.3267 9.42794 11.2473C9.47964 11.2096 9.51939 11.1578 9.54244 11.0981C9.5655 11.0384 9.57088 10.9734 9.55794 10.9107L8.84394 7.45001L11.4566 5.07268C11.5039 5.02964 11.5378 4.97387 11.5543 4.91205C11.5707 4.85024 11.569 4.785 11.5493 4.72414C11.5296 4.66329 11.4927 4.6094 11.4432 4.56894C11.3937 4.52848 11.3335 4.50316 11.2699 4.49601C9.86461 4.33868 7.75727 4.10534 7.75727 4.10534L6.30194 0.885344C6.27555 0.82711 6.23293 0.777714 6.1792 0.743071C6.12546 0.708427 6.06288 0.690002 5.99894 0.690002C5.93501 0.690002 5.87242 0.708427 5.81869 0.743071C5.76495 0.777714 5.72233 0.82711 5.69594 0.885344L4.24061 4.10534Z" fill="#FFCC00"/>
</svg>
)


export const CareerSearch=()=>(
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M51.6667 46.6667H49.0333L48.1 45.7667C51.4798 41.8469 53.3373 36.8424 53.3333 31.6667C53.3333 27.3814 52.0626 23.1924 49.6819 19.6293C47.3011 16.0663 43.9172 13.2892 39.9581 11.6493C35.9991 10.0094 31.6426 9.58032 27.4397 10.4163C23.2368 11.2523 19.3762 13.3159 16.346 16.346C13.3159 19.3762 11.2523 23.2368 10.4163 27.4397C9.58032 31.6426 10.0094 35.9991 11.6493 39.9581C13.2892 43.9172 16.0663 47.3011 19.6293 49.6819C23.1924 52.0626 27.3814 53.3333 31.6667 53.3333C37.0333 53.3333 41.9667 51.3667 45.7667 48.1L46.6667 49.0333V51.6667L63.3333 68.3L68.3 63.3333L51.6667 46.6667ZM31.6667 46.6667C23.3667 46.6667 16.6667 39.9667 16.6667 31.6667C16.6667 23.3667 23.3667 16.6667 31.6667 16.6667C39.9667 16.6667 46.6667 23.3667 46.6667 31.6667C46.6667 39.9667 39.9667 46.6667 31.6667 46.6667Z" fill="white"/>
</svg>
)


export const Bulb=()=>(
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.0003 12.5C49.7603 12.5 57.5003 20.0833 57.5003 29.2333C57.5003 34.9333 56.0337 37.8367 54.1737 40.4767C53.7514 41.0678 53.2881 41.69 52.7837 42.3433C51.037 44.6267 48.937 47.3767 47.447 51.34C47.1429 52.1571 46.7482 52.9375 46.2703 53.6667L46.0837 53.9333C45.6755 54.5172 45.2062 55.0558 44.6837 55.54C43.3303 56.78 41.7037 57.5 40.0003 57.5C38.3003 57.5 36.6703 56.78 35.3137 55.54C34.7909 55.0548 34.3216 54.5151 33.9137 53.93L33.7303 53.6633C33.2526 52.9352 32.8579 52.1559 32.5537 51.34C31.0637 47.3733 28.9637 44.6267 27.217 42.34C26.7416 41.7268 26.2782 41.1045 25.827 40.4733C23.9703 37.84 22.5003 34.9333 22.5003 29.23C22.5003 20.0833 30.2437 12.5 40.0003 12.5ZM50.557 56.23C51.197 55.23 51.7237 54.1733 52.127 53.0967C53.3337 49.8867 54.8537 47.89 56.5203 45.7067C57.087 44.9633 57.6703 44.1967 58.2637 43.3533C60.6303 39.9933 62.5003 36.1033 62.5003 29.23C62.5003 17.1367 52.3337 7.5 40.0003 7.5C27.667 7.5 17.5003 17.1367 17.5003 29.2333C17.5003 36.1 19.3703 39.9933 21.737 43.3533C22.3303 44.1967 22.9137 44.9633 23.4803 45.7067C25.147 47.89 26.667 49.8867 27.8737 53.0967C28.277 54.1733 28.807 55.23 29.4437 56.23L30.1837 63.6167C30.4295 66.0493 31.5698 68.3041 33.3836 69.9437C35.1973 71.5834 37.5553 72.4913 40.0003 72.4913C42.4454 72.4913 44.8033 71.5834 46.6171 69.9437C48.4308 68.3041 49.5712 66.0493 49.817 63.6167L50.557 56.23ZM45.0237 61.33L44.8437 63.1167C44.7255 64.3192 44.1642 65.4347 43.269 66.2463C42.3737 67.0578 41.2086 67.5073 40.0003 67.5073C38.792 67.5073 37.6269 67.0578 36.7317 66.2463C35.8365 65.4347 35.2752 64.3192 35.157 63.1167L34.9803 61.33C36.4803 62.07 38.1637 62.5 40.0003 62.5C41.8337 62.5 43.5203 62.0667 45.0203 61.33M8.07699 10.0633C8.50192 9.55478 9.11139 9.23575 9.77144 9.17637C10.4315 9.11699 11.0881 9.32212 11.597 9.74667L16.597 13.9133C17.0882 14.3431 17.3919 14.9478 17.4432 15.5985C17.4945 16.2491 17.2893 16.894 16.8715 17.3954C16.4536 17.8968 15.8563 18.2149 15.2071 18.2818C14.5579 18.3486 13.9083 18.159 13.397 17.7533L8.39699 13.5867C7.88794 13.1622 7.56828 12.553 7.50827 11.8929C7.44827 11.2328 7.65283 10.5726 8.07699 10.0633ZM71.917 10.0667C72.1275 10.3189 72.2863 10.6102 72.3841 10.9239C72.482 11.2376 72.5171 11.5674 72.4874 11.8947C72.4576 12.2219 72.3637 12.5401 72.2109 12.831C72.0582 13.1219 71.8495 13.3798 71.597 13.59L66.597 17.7567C66.3461 17.9762 66.0538 18.1433 65.7374 18.2481C65.421 18.353 65.0868 18.3935 64.7545 18.3673C64.4221 18.3412 64.0984 18.2488 63.8023 18.0956C63.5062 17.9425 63.2438 17.7316 63.0303 17.4755C62.8169 17.2194 62.6569 16.9233 62.5597 16.6044C62.4624 16.2856 62.4299 15.9505 62.4641 15.6189C62.4982 15.2873 62.5984 14.9659 62.7586 14.6735C62.9188 14.3812 63.1358 14.1239 63.397 13.9167L68.397 9.75C68.9063 9.32584 69.5632 9.12127 70.2232 9.18128C70.8833 9.24129 71.4925 9.55762 71.917 10.0667ZM4.16699 27.5C4.16699 26.837 4.43038 26.2011 4.89923 25.7322C5.36807 25.2634 6.00395 25 6.66699 25H13.3337C13.9967 25 14.6326 25.2634 15.1014 25.7322C15.5703 26.2011 15.8337 26.837 15.8337 27.5C15.8337 28.163 15.5703 28.7989 15.1014 29.2678C14.6326 29.7366 13.9967 30 13.3337 30H6.66699C6.00395 30 5.36807 29.7366 4.89923 29.2678C4.43038 28.7989 4.16699 28.163 4.16699 27.5ZM64.167 27.5C64.167 26.837 64.4304 26.2011 64.8992 25.7322C65.3681 25.2634 66.0039 25 66.667 25H73.3337C73.9967 25 74.6326 25.2634 75.1014 25.7322C75.5703 26.2011 75.8337 26.837 75.8337 27.5C75.8337 28.163 75.5703 28.7989 75.1014 29.2678C74.6326 29.7366 73.9967 30 73.3337 30H66.667C66.0039 30 65.3681 29.7366 64.8992 29.2678C64.4304 28.7989 64.167 28.163 64.167 27.5ZM17.2337 39.7167C17.53 40.3095 17.5789 40.9957 17.3695 41.6245C17.1601 42.2533 16.7096 42.7732 16.117 43.07L11.117 45.57C10.823 45.7197 10.5022 45.8097 10.1732 45.8348C9.84423 45.8599 9.51353 45.8196 9.20018 45.7163C8.88683 45.613 8.59702 45.4487 8.34748 45.2329C8.09793 45.017 7.89358 44.7539 7.7462 44.4587C7.59882 44.1635 7.51134 43.8421 7.48878 43.5129C7.46623 43.1837 7.50906 42.8534 7.6148 42.5408C7.72053 42.2283 7.88709 41.9398 8.10487 41.6919C8.32264 41.444 8.58733 41.2417 8.88366 41.0967L13.8837 38.5967C14.4769 38.3005 15.1634 38.2522 15.7923 38.4622C16.4211 38.6722 16.9375 39.1235 17.2337 39.7167ZM62.7703 39.7167C63.0665 39.1243 63.5856 38.6737 64.2137 38.4638C64.8417 38.2538 65.5275 38.3016 66.1203 38.5967L71.1203 41.0967C71.4167 41.2417 71.6813 41.444 71.8991 41.6919C72.1169 41.9398 72.2834 42.2283 72.3892 42.5408C72.4949 42.8534 72.5378 43.1837 72.5152 43.5129C72.4926 43.8421 72.4052 44.1635 72.2578 44.4587C72.1104 44.7539 71.9061 45.017 71.6565 45.2329C71.407 45.4487 71.1172 45.613 70.8038 45.7163C70.4905 45.8196 70.1598 45.8599 69.8308 45.8348C69.5018 45.8097 69.181 45.7197 68.887 45.57L63.887 43.07C63.2938 42.7738 62.8426 42.2542 62.6325 41.6253C62.4225 40.9964 62.4742 40.3099 62.7703 39.7167Z" fill="white"/>
</svg>
)

export const Stats=()=>(
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M57.9996 8C57.4692 8 56.9605 8.21071 56.5854 8.58579C56.2103 8.96086 55.9996 9.46957 55.9996 10C55.9996 10.5304 56.2103 11.0391 56.5854 11.4142C56.9605 11.7893 57.4692 12 57.9996 12H65.1716L45.9996 31.172L35.4156 20.584C35.2298 20.3977 35.0091 20.25 34.7661 20.1491C34.5231 20.0483 34.2627 19.9964 33.9996 19.9964C33.7365 19.9964 33.476 20.0483 33.2331 20.1491C32.9901 20.25 32.7694 20.3977 32.5836 20.584L12.5836 40.584C12.208 40.9595 11.9971 41.4689 11.9971 42C11.9971 42.5311 12.208 43.0405 12.5836 43.416C12.9591 43.7915 13.4685 44.0025 13.9996 44.0025C14.5307 44.0025 15.0401 43.7915 15.4156 43.416L33.9996 24.828L44.5836 35.416C44.7694 35.6023 44.9901 35.75 45.2331 35.8508C45.476 35.9517 45.7365 36.0036 45.9996 36.0036C46.2627 36.0036 46.5231 35.9517 46.7661 35.8508C47.0091 35.75 47.2298 35.6023 47.4156 35.416L67.9996 14.828V22C67.9996 22.5304 68.2103 23.0391 68.5854 23.4142C68.9605 23.7893 69.4692 24 69.9996 24C70.53 24 71.0387 23.7893 71.4138 23.4142C71.7889 23.0391 71.9996 22.5304 71.9996 22V10C71.9996 9.46957 71.7889 8.96086 71.4138 8.58579C71.0387 8.21071 70.53 8 69.9996 8H57.9996ZM61.9996 36C61.4692 36 60.9605 36.2107 60.5854 36.5858C60.2103 36.9609 59.9996 37.4696 59.9996 38V70C59.9996 70.5304 60.2103 71.0391 60.5854 71.4142C60.9605 71.7893 61.4692 72 61.9996 72C62.53 72 63.0387 71.7893 63.4138 71.4142C63.7889 71.0391 63.9996 70.5304 63.9996 70V38C63.9996 37.4696 63.7889 36.9609 63.4138 36.5858C63.0387 36.2107 62.53 36 61.9996 36ZM29.9996 44C29.4692 44 28.9605 44.2107 28.5854 44.5858C28.2103 44.9609 27.9996 45.4696 27.9996 46V70C27.9996 70.5304 28.2103 71.0391 28.5854 71.4142C28.9605 71.7893 29.4692 72 29.9996 72C30.53 72 31.0387 71.7893 31.4138 71.4142C31.7889 71.0391 31.9996 70.5304 31.9996 70V46C31.9996 45.4696 31.7889 44.9609 31.4138 44.5858C31.0387 44.2107 30.53 44 29.9996 44ZM43.9996 54C43.9996 53.4696 44.2103 52.9609 44.5854 52.5858C44.9605 52.2107 45.4692 52 45.9996 52C46.53 52 47.0387 52.2107 47.4138 52.5858C47.7889 52.9609 47.9996 53.4696 47.9996 54V70C47.9996 70.5304 47.7889 71.0391 47.4138 71.4142C47.0387 71.7893 46.53 72 45.9996 72C45.4692 72 44.9605 71.7893 44.5854 71.4142C44.2103 71.0391 43.9996 70.5304 43.9996 70V54ZM11.9996 58C11.9996 57.4696 12.2103 56.9609 12.5854 56.5858C12.9605 56.2107 13.4692 56 13.9996 56C14.53 56 15.0387 56.2107 15.4138 56.5858C15.7889 56.9609 15.9996 57.4696 15.9996 58V70C15.9996 70.5304 15.7889 71.0391 15.4138 71.4142C15.0387 71.7893 14.53 72 13.9996 72C13.4692 72 12.9605 71.7893 12.5854 71.4142C12.2103 71.0391 11.9996 70.5304 11.9996 70V58Z" fill="white"/>
</svg>
)

export const Global=()=>(
<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M73.3337 40C73.3337 21.59 58.4103 6.66663 40.0003 6.66663C21.5903 6.66663 6.66699 21.59 6.66699 40C6.66699 58.41 21.5903 73.3333 40.0003 73.3333" stroke="white" stroke-width="5" stroke-linecap="round"/>
<path d="M66.667 18.9966C63.5503 19.22 59.5603 20.43 56.7937 24.01C51.7937 30.4766 46.797 31.02 43.4637 28.8633C38.4637 25.63 42.667 20.3866 36.8003 17.54C32.977 15.6833 32.4437 10.6333 34.5737 6.66663M6.66699 36.6666C9.21033 38.8733 12.767 40.8933 16.9637 40.8933C25.6303 40.8933 27.3637 42.55 27.3637 49.1733C27.3637 55.7966 27.3637 55.7966 29.097 60.7633C30.2237 63.9966 30.617 67.2233 28.3703 70" stroke="white" stroke-width="5" stroke-linejoin="round"/>
<path d="M66.3307 66.4299L73.334 73.3333M70.3606 56.8199C70.3589 58.5928 70.008 60.3479 69.3279 61.9851C68.6479 63.6224 67.652 65.1096 66.3972 66.362C65.1423 67.6143 63.6531 68.6073 62.0146 69.2841C60.376 69.9609 58.6202 70.3083 56.8473 70.3066C55.0745 70.3083 53.3186 69.9609 51.6801 69.2841C50.0415 68.6073 48.5523 67.6143 47.2975 66.362C46.0426 65.1096 45.0468 63.6224 44.3667 61.9851C43.6867 60.3479 43.3357 58.5928 43.334 56.8199C43.3357 55.0471 43.6867 53.2919 44.3667 51.6547C45.0468 50.0175 46.0426 48.5302 47.2975 47.2779C48.5523 46.0255 50.0415 45.0326 51.6801 44.3558C53.3186 43.679 55.0745 43.3315 56.8473 43.3333C58.6202 43.3315 60.376 43.679 62.0146 44.3558C63.6531 45.0326 65.1423 46.0255 66.3972 47.2779C67.652 48.5302 68.6479 50.0175 69.3279 51.6547C70.008 53.2919 70.3589 55.0471 70.3606 56.8199Z" stroke="white" stroke-width="5" stroke-linecap="round"/>
</svg>
)

export const Computer =()=>(
  <svg width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.8333 16.25C25.1167 16.25 26.1667 15.2375 26.1667 14V2.75C26.1667 1.5125 25.1167 0.5 23.8333 0.5H5.16667C3.88333 0.5 2.83333 1.5125 2.83333 2.75V14C2.83333 15.2375 3.88333 16.25 5.16667 16.25H0.5V18.5H28.5V16.25H23.8333ZM5.16667 2.75H23.8333V14H5.16667V2.75Z" fill="white"/>
</svg>
)

export const HandShakeIcon=()=>(
  <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.968 0.199324C13.038 0.144908 13.1005 0.0815088 13.1541 0.0107429H16.3974L16.4418 0.00946876C16.6716 -0.00315625 16.9019 -0.00315625 17.1317 0.00946876H17.1798C17.9006 0.00708557 18.6127 0.167771 19.2635 0.479648C20.4528 0.949609 21.4816 1.75589 22.2258 2.80124C22.7895 3.59268 23.173 4.49945 23.3489 5.45703C23.5248 6.41461 23.4889 7.39945 23.2436 8.34146L19.0901 4.21687C18.9123 4.0404 18.6726 3.94152 18.4229 3.94165H12.3781C12.1841 3.94959 11.9972 4.01718 11.8426 4.13533L9.45759 5.95488C9.19862 6.15293 8.87215 6.23947 8.54985 6.19552C8.22755 6.15156 7.93574 5.9807 7.73846 5.72043C7.64112 5.59357 7.56979 5.44852 7.52859 5.2937C7.4874 5.13887 7.47716 4.97735 7.49848 4.81851C7.51979 4.65967 7.57224 4.50668 7.65277 4.3684C7.7333 4.23012 7.84031 4.10932 7.96759 4.013L12.968 0.199324ZM6.71938 14.3098L6.70166 14.3264L5.46864 15.5598L5.45218 15.5751C5.23625 15.7817 4.94888 15.8957 4.65093 15.8929C4.35298 15.89 4.06782 15.7706 3.85584 15.5598C3.74962 15.4543 3.66529 15.3286 3.60772 15.1901C3.55016 15.0515 3.52052 14.9028 3.52052 14.7526C3.52052 14.6024 3.55016 14.4537 3.60772 14.3151C3.66529 14.1766 3.74962 14.0509 3.85584 13.9454L5.08886 12.712C5.30362 12.4979 5.59364 12.3778 5.89589 12.3778C6.19813 12.3778 6.48816 12.4979 6.70292 12.712C6.91462 12.9222 7.03516 13.2081 7.03824 13.5075C7.04132 13.8068 6.9267 14.0952 6.71938 14.3098ZM6.35099 16.4734C6.14367 16.688 6.02905 16.9764 6.03213 17.2757C6.03521 17.5751 6.15575 17.861 6.36745 18.0712C6.81306 18.5172 7.53591 18.5172 7.98151 18.0712L9.21453 16.8378C9.33406 16.7185 9.42557 16.5738 9.48238 16.4143C9.53919 16.2549 9.55986 16.0846 9.54287 15.916C9.52588 15.7475 9.47166 15.5849 9.38419 15.4401C9.29672 15.2954 9.1782 15.1721 9.0373 15.0794C8.82101 14.9362 8.56294 14.8708 8.30505 14.8939C8.04716 14.9171 7.80464 15.0274 7.61693 15.2068L7.60047 15.2247L6.36745 16.4568L6.35099 16.4734ZM3.6824 10.7064C3.78862 10.8119 3.87295 10.9375 3.93052 11.0761C3.98808 11.2147 4.01772 11.3634 4.01772 11.5136C4.01772 11.6638 3.98808 11.8125 3.93052 11.951C3.87295 12.0896 3.78862 12.2153 3.6824 12.3208L2.44938 13.5542C2.23462 13.7683 1.9446 13.8883 1.64235 13.8883C1.34011 13.8883 1.05008 13.7683 0.835318 13.5542C0.729103 13.4487 0.644767 13.323 0.587204 13.1845C0.529642 13.0459 0.5 12.8972 0.5 12.747C0.5 12.5968 0.529642 12.4481 0.587204 12.3095C0.644767 12.171 0.729103 12.0453 0.835318 11.9398L2.06834 10.7064C2.2831 10.4923 2.57313 10.3722 2.87537 10.3722C3.17761 10.3722 3.46764 10.4923 3.6824 10.7064ZM11.7249 17.7361C11.8311 17.8416 11.9154 17.9673 11.973 18.1059C12.0306 18.2444 12.0602 18.3931 12.0602 18.5433C12.0602 18.6935 12.0306 18.8422 11.973 18.9808C11.9154 19.1194 11.8311 19.245 11.7249 19.3505L10.4919 20.584C10.2771 20.798 9.98707 20.9181 9.68483 20.9181C9.38258 20.9181 9.09256 20.798 8.8778 20.584C8.70931 20.4164 8.59758 20.1996 8.55849 19.9645C8.5194 19.7293 8.55494 19.4877 8.66006 19.2741L8.66132 19.2715C8.71665 19.1597 8.78977 19.0577 8.8778 18.9696L10.1108 17.7361C10.3256 17.5221 10.6156 17.402 10.9178 17.402C11.2201 17.402 11.5101 17.5221 11.7249 17.7361ZM3.48492 2.32596C4.32553 1.4855 5.34482 0.848196 6.46587 0.46214C7.58691 0.0760845 8.78044 -0.0486368 9.95637 0.0973885L6.82192 2.48906C6.49515 2.73747 6.22049 3.04854 6.01378 3.40434C5.80708 3.76014 5.67242 4.15362 5.61757 4.56207C5.56273 4.97053 5.58879 5.38587 5.69424 5.78413C5.7997 6.18239 5.98246 6.5557 6.23199 6.8825C6.73514 7.54262 7.47726 7.97566 8.29641 8.08713C9.11557 8.19861 9.94528 7.97948 10.6045 7.47755L12.7364 5.85295H18.0343L22.4739 10.2617L22.5195 10.3126L23.9753 11.778C24.3028 12.1122 24.4905 12.5601 24.4996 13.0294C24.5088 13.4988 24.3388 13.9537 24.0246 14.3007C23.7105 14.6476 23.2761 14.86 22.8109 14.8942C22.3458 14.9284 21.8854 14.7817 21.5245 14.4844L21.4029 14.362L21.327 14.2958L19.9433 12.9044C19.8849 12.8435 19.8151 12.795 19.7379 12.7616C19.6606 12.7282 19.5776 12.7106 19.4935 12.7099C19.4095 12.7092 19.3261 12.7253 19.2484 12.7573C19.1706 12.7893 19.0999 12.8366 19.0405 12.8965C18.981 12.9563 18.934 13.0274 18.9022 13.1057C18.8704 13.184 18.8544 13.2679 18.8551 13.3525C18.8558 13.4371 18.8733 13.5207 18.9065 13.5984C18.9396 13.6762 18.9879 13.7465 19.0483 13.8052L20.5041 15.2706C20.5573 15.3232 20.6113 15.3738 20.6662 15.4222L20.7219 15.4782C20.8438 15.5983 20.9408 15.7416 21.0074 15.8996C21.0739 16.0577 21.1086 16.2275 21.1096 16.3992C21.1105 16.5709 21.0776 16.741 21.0127 16.8998C20.9479 17.0586 20.8524 17.2029 20.7318 17.3243C20.6111 17.4457 20.4678 17.5418 20.31 17.6071C20.1523 17.6724 19.9832 17.7055 19.8126 17.7046C19.6421 17.7037 19.4734 17.6687 19.3163 17.6017C19.1593 17.5347 19.017 17.4371 18.8977 17.3144L18.6825 17.099C18.5932 17.0094 18.4793 16.9487 18.3556 16.9246C18.2318 16.9005 18.1036 16.9142 17.9876 16.9639C17.8716 17.0136 17.773 17.097 17.7044 17.2035C17.6358 17.31 17.6003 17.4347 17.6026 17.5616C17.6008 17.6477 17.6163 17.7334 17.6483 17.8133C17.6803 17.8932 17.728 17.9658 17.7887 18.0266L18.071 18.3108C18.1873 18.421 18.2805 18.5537 18.345 18.7009C18.4094 18.848 18.4439 19.0067 18.4463 19.1675C18.4487 19.3283 18.419 19.488 18.359 19.6371C18.2989 19.7861 18.2098 19.9215 18.0968 20.0352C17.9838 20.149 17.8493 20.2387 17.7012 20.2991C17.5531 20.3596 17.3945 20.3895 17.2347 20.387C17.0749 20.3846 16.9173 20.3499 16.771 20.285C16.6248 20.2202 16.4931 20.1264 16.3835 20.0093H16.3823L16.3671 19.9927L16.1012 19.7252C16.0427 19.6656 15.973 19.6182 15.8962 19.5859C15.8194 19.5536 15.737 19.537 15.6537 19.537C15.5705 19.537 15.488 19.5536 15.4112 19.5859C15.3344 19.6182 15.2647 19.6656 15.2062 19.7252C15.0875 19.8446 15.0209 20.0066 15.0209 20.1756C15.0209 20.3445 15.0875 20.5065 15.2062 20.626L15.4822 20.9051C15.5958 21.018 15.6862 21.1524 15.7483 21.3005C15.8103 21.4486 15.8427 21.6076 15.8437 21.7683C15.8447 21.9291 15.8143 22.0884 15.7541 22.2373C15.6939 22.3862 15.6051 22.5217 15.4929 22.6361C15.3807 22.7504 15.2472 22.8414 15.1001 22.9039C14.9529 22.9663 14.795 22.999 14.6353 23C14.4756 23.001 14.3173 22.9703 14.1693 22.9097C14.0214 22.8492 13.8868 22.7598 13.7732 22.6469L11.9616 20.914L12.6262 20.2488C12.8501 20.0256 13.0278 19.76 13.1491 19.4673C13.2704 19.1745 13.3328 18.8605 13.3328 18.5433C13.3328 18.2262 13.2704 17.9121 13.1491 17.6194C13.0278 17.3267 12.8501 17.061 12.6262 16.8378C12.3897 16.6006 12.1067 16.4156 11.7953 16.2945C11.4838 16.1734 11.1507 16.1189 10.8172 16.1345C10.832 15.8001 10.777 15.4664 10.6557 15.1547C10.5345 14.8431 10.3497 14.5605 10.1133 14.3251C9.87697 14.0881 9.59419 13.9031 9.28297 13.782C8.97175 13.6609 8.63891 13.6064 8.30559 13.6217C8.32018 13.2876 8.26508 12.9541 8.14386 12.6427C8.02263 12.3313 7.83796 12.0489 7.60173 11.8136C7.30103 11.513 6.92708 11.2971 6.51737 11.1877C6.10765 11.0784 5.67658 11.0794 5.26735 11.1906C5.19701 10.6663 4.95619 10.1801 4.58248 9.80806C4.16601 9.39257 3.61398 9.14319 3.02874 9.10616C2.44351 9.06914 1.8648 9.24699 1.39992 9.60674C1.10143 8.31492 1.13632 6.96771 1.50128 5.6933C1.86623 4.41889 2.5491 3.25968 3.48492 2.32596Z" fill="white"/>
</svg>
)


export const Collab=()=>(
  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.0347 19.8418C23.1899 18.9964 22.2029 18.3064 21.1187 17.8034C22.6476 16.5648 23.623 14.6749 23.623 12.5554C23.623 8.81603 20.5045 5.74825 16.765 5.80562C13.0829 5.863 10.1163 8.86328 10.1163 12.5554C10.1163 14.6749 11.0951 16.5648 12.6206 17.8034C11.5362 18.3061 10.5491 18.9961 9.70457 19.8418C7.86183 21.6879 6.81559 24.1246 6.74809 26.7233C6.74719 26.7593 6.75351 26.7951 6.76667 26.8287C6.77984 26.8622 6.79958 26.8928 6.82474 26.9186C6.84991 26.9443 6.87998 26.9648 6.91318 26.9788C6.94639 26.9928 6.98206 27 7.01809 27H8.90808C9.0532 27 9.1747 26.8853 9.17807 26.7401C9.2422 24.7827 10.0353 22.9501 11.4292 21.5597C12.1425 20.8426 12.9909 20.2742 13.9253 19.8872C14.8597 19.5002 15.8616 19.3024 16.873 19.3052C18.9284 19.3052 20.8623 20.1051 22.3169 21.5597C23.7074 22.9501 24.5005 24.7827 24.568 26.7401C24.5714 26.8853 24.6929 27 24.838 27H26.728C26.764 27 26.7997 26.9928 26.8329 26.9788C26.8661 26.9648 26.8961 26.9443 26.9213 26.9186C26.9465 26.8928 26.9662 26.8622 26.9794 26.8287C26.9925 26.7951 26.9989 26.7593 26.998 26.7233C26.9305 24.1246 25.8842 21.6879 24.0347 19.8418ZM16.873 16.8753C15.7188 16.8753 14.632 16.4264 13.8187 15.6097C13.4105 15.2047 13.088 14.7217 12.8706 14.1894C12.6532 13.6571 12.5452 13.0865 12.5531 12.5116C12.5632 11.4046 13.0053 10.3347 13.7782 9.54164C14.5882 8.71141 15.6715 8.24905 16.8292 8.23555C17.9733 8.22543 19.0836 8.67091 19.9004 9.47076C20.7374 10.2909 21.1964 11.3877 21.1964 12.5554C21.1964 13.7096 20.7475 14.793 19.9308 15.6097C19.5301 16.0123 19.0535 16.3315 18.5286 16.5487C18.0038 16.7659 17.4411 16.877 16.873 16.8753ZM8.4187 13.4464C8.38833 13.1528 8.37145 12.8558 8.37145 12.5554C8.37145 12.0188 8.42208 11.4957 8.51658 10.9861C8.5402 10.8646 8.47608 10.7397 8.3647 10.6891C7.90571 10.4832 7.48383 10.1997 7.11934 9.842C6.68984 9.42557 6.35186 8.92417 6.12697 8.36981C5.90209 7.81546 5.79523 7.22031 5.81322 6.62235C5.84359 5.53901 6.27897 4.50966 7.03834 3.73343C7.87196 2.87958 8.99245 2.41385 10.1838 2.42735C11.2604 2.43747 12.2999 2.85258 13.0863 3.58831C13.3529 3.83805 13.5824 4.1148 13.7748 4.41179C13.8423 4.51641 13.9739 4.56028 14.0887 4.51978C14.6827 4.31392 15.3104 4.16879 15.955 4.1013C16.144 4.08105 16.252 3.87855 16.1677 3.70981C15.0708 1.53975 12.8298 0.0412907 10.2378 0.000791878C6.49497 -0.0565814 3.37649 3.0112 3.37649 6.74722C3.37649 8.86666 4.35185 10.7566 5.88072 11.9952C4.80748 12.4913 3.81861 13.1764 2.96136 14.0336C1.11187 15.8797 0.0656308 18.3164 -0.00186873 20.9184C-0.00276953 20.9544 0.00354852 20.9903 0.0167133 21.0238C0.0298781 21.0574 0.0496232 21.0879 0.0747851 21.1137C0.0999471 21.1395 0.130017 21.16 0.163223 21.174C0.196428 21.188 0.232098 21.1952 0.26813 21.1952H2.16149C2.30662 21.1952 2.42812 21.0804 2.43149 20.9353C2.49562 18.9779 3.28874 17.1453 4.6826 15.7548C5.67485 14.7626 6.88984 14.0741 8.2162 13.74C8.34783 13.7063 8.43558 13.5814 8.4187 13.4464Z" fill="white"/>
</svg>
)

export const Winner=()=>(
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.00277 0.0242857C7.20641 -5.85403e-08 7.43186 0 7.69368 0H17.3024C17.5642 0 17.7897 -5.85403e-08 17.9933 0.0242857C18.7162 0.112611 19.3884 0.435261 19.9034 0.941137C20.4185 1.44701 20.747 2.1072 20.837 2.81714L20.8413 2.85714H22.0137C22.322 2.85429 22.9984 2.84857 23.557 3.21571C24.2799 3.68857 24.498 4.50143 24.498 5.35714C24.498 9.25143 22.3846 11.8514 19.6864 13.2957C18.181 15.9871 15.3999 17.8571 12.498 17.8571C10.2886 17.8571 8.19259 16.6829 6.68423 15.0586C6.18303 14.5215 5.74309 13.9323 5.37223 13.3014C2.6755 11.8643 0.498047 9.26714 0.498047 5.35714C0.498047 4.5 0.716229 3.68857 1.43768 3.21571C1.99768 2.84857 2.67405 2.85429 2.98241 2.85714H4.15477L4.15914 2.81714C4.24907 2.1072 4.57759 1.44701 5.09266 0.941137C5.60773 0.435261 6.27992 0.112611 7.00277 0.0242857ZM22.29 5.00714C22.1777 5.00049 22.0651 4.99811 21.9526 5H20.8573L20.8108 9.7C21.7388 8.60286 22.3162 7.17143 22.3162 5.35714C22.3162 5.18857 22.3031 5.07714 22.29 5.00714ZM2.67987 5.35714C2.67987 7.12429 3.24423 8.52857 4.14896 9.61714C4.05296 8.55143 4.07914 7.46857 4.10532 6.39143C4.1189 5.92476 4.12714 5.46095 4.13005 5H3.0435C2.88496 5 2.78459 5 2.7075 5.00714C2.68706 5.12269 2.6778 5.23988 2.67987 5.35714ZM12.8326 4.72143C12.8046 4.657 12.758 4.60207 12.6986 4.56346C12.6391 4.52484 12.5693 4.50426 12.498 4.50426C12.4267 4.50426 12.357 4.52484 12.2975 4.56346C12.2381 4.60207 12.1914 4.657 12.1635 4.72143L11.429 6.45286C11.4033 6.51328 11.3613 6.56563 11.3074 6.60418C11.2535 6.64272 11.1899 6.66599 11.1235 6.67143L9.2195 6.82143C9.14788 6.827 9.07955 6.85328 9.02312 6.89696C8.9667 6.94064 8.92471 6.99975 8.90246 7.06684C8.8802 7.13393 8.87868 7.206 8.89809 7.27393C8.9175 7.34187 8.95696 7.40264 9.0115 7.44857L10.4617 8.66857C10.5124 8.71141 10.5501 8.76714 10.5706 8.82965C10.5911 8.89215 10.5937 8.959 10.578 9.02286L10.1359 10.8457C10.1188 10.9145 10.123 10.9867 10.1478 11.0532C10.1726 11.1197 10.217 11.1774 10.2753 11.219C10.3336 11.2607 10.4032 11.2843 10.4752 11.2871C10.5473 11.2898 10.6185 11.2714 10.6799 11.2343L12.309 10.2571C12.3659 10.2231 12.4313 10.2051 12.498 10.2051C12.5647 10.2051 12.6302 10.2231 12.6871 10.2571L14.3162 11.2343C14.3776 11.2714 14.4488 11.2898 14.5209 11.2871C14.5929 11.2843 14.6625 11.2607 14.7208 11.219C14.7791 11.1774 14.8235 11.1197 14.8483 11.0532C14.8731 10.9867 14.8773 10.9145 14.8602 10.8457L14.4166 9.02286C14.4009 8.959 14.4035 8.89215 14.4241 8.82965C14.4446 8.76714 14.4823 8.71141 14.533 8.66857L15.9846 7.44857C16.0396 7.40275 16.0795 7.34188 16.0993 7.27371C16.119 7.20554 16.1176 7.13315 16.0953 7.06576C16.073 6.99836 16.0308 6.93901 15.974 6.89525C15.9173 6.85148 15.8485 6.82529 15.7766 6.82L13.874 6.67143C13.8074 6.66624 13.7434 6.64309 13.6893 6.60453C13.6351 6.56597 13.5929 6.51349 13.5671 6.45286L12.8326 4.72143ZM12.498 18.5714C12.7874 18.5714 13.0649 18.6843 13.2694 18.8852C13.474 19.0862 13.589 19.3587 13.589 19.6429V22.8571H18.3162C18.6056 22.8571 18.883 22.97 19.0876 23.171C19.2922 23.3719 19.4071 23.6444 19.4071 23.9286C19.4071 24.2127 19.2922 24.4853 19.0876 24.6862C18.883 24.8871 18.6056 25 18.3162 25H6.67987C6.39054 25 6.11306 24.8871 5.90848 24.6862C5.70389 24.4853 5.58896 24.2127 5.58896 23.9286C5.58896 23.6444 5.70389 23.3719 5.90848 23.171C6.11306 22.97 6.39054 22.8571 6.67987 22.8571H11.4071V19.6429C11.4071 19.3587 11.5221 19.0862 11.7267 18.8852C11.9312 18.6843 12.2087 18.5714 12.498 18.5714Z" fill="white"/>
</svg>
)