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
        <path d="M7 17.375L17 7.375M17 7.375H7M17 7.375V17.375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
  <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<g filter="url(#filter0_dddi_1_1657)">
<rect x="24" y="24" width="54" height="54" rx="27" fill="#1057B5"/>
<rect x="35.8799" y="35.8799" width="30.9622" height="30.4263" fill="url(#pattern0_1_1657)"/>
</g>
<defs>
<filter id="filter0_dddi_1_1657" x="0" y="0" width="102" height="102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
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
<use xlinkHref="#image0_1_1657" transform="scale(0.00934579)"/>
</pattern>
<image id="image0_1_1657" width="107" height="107" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAABrCAYAAABwv3wMAAAACXBIWXMAABM5AAATOQGPwlYBAAADHklEQVR4nO3bPagcVRjG8Zm9k3CJNn5UinbGL6yCio2FIaKiWBhUsLMwCIqNpDEIFnZamBCQVFpcrALBBESwU1DbQBBSBLS5Ri3uYnZzdt73mdfibjEczpUoumcD/199Yf7wcPayM7NNAwAAAAAAAAAAAAAAAAAAAAAAAPxnIuIBdz9uZs/VbsHfSCndL+laLEn6oHYT9uDu78aIpMHd36rdhQIzeyYykuTur9ZuQ4GkjwuDLczs6dptyETERNLnhcH+7Pv+8dp9yETEPkkXCoP9nlJ6sHYfMhFxQNJ3hcF+ns/n99TuQ2ZnZ+d2SRcLg12aTqd31O5DZjab3S3pSmGw77e3t2+p3YdMSumgpKuFwb6KiP21+5CJiEOSpoXBtiJiUrsPGTM7LOl6YbBParehwMyOSvJ8MHd/r3YbCtz9mKQhO11DRLxRuw0F7n6i8HHoZvZS7TYUSDpZGOy6mT1Vuw2Z2L2PuFUYbBoRh2r3IRMR+5fft/LBfk0p3Ve7D5mIuFXSD4XBLkfEvtp9yCxvS6V8sMVi8UjtNoxERCfpbOFk/cb9wzUSEa2kM4Wh5n3fP1m7DyOSPiwMZWb2Yu02jLj7O4WhBnd/vXYbRtz9NUnKx3L347XbMGJmz0paFE7VR7XbMNL3/RPjt3ZHPguea62PxWLxsKQ/CifqfPDld31ExL2SfikM9W1EHKjdh6WIuFPST4WhLkbEbbX7sBS79/1+LAx1ZTab3VW7D0uxe0f968JQV1NKB2v3YSl2n1V9URiKZ1XrRtKpwlA8BV437v5+YSg3s6O12zDi7m+W3lxy92O12zDS9/1je7wTeKJ2GzL5b4qXp+pk7S4U9H3/6Phk8R77v9Ou6kJmdmQymbwcEZc2NjZOt21re/2tu7/dtu0rTdOs+y9JFhGx1XXdp6u42MrGulFm9nzXdedrd/xDR9q2/eb/vsjafRS1bXvTvbUkaSXNazeWpC+HYZjX7rhRwzBcc/cLq7jW2n0MNk3TpJQe6rruheYm+J/l7uc2Nzcv1w4BAAAAAAAAAAAAAAAAAAAAAAAAAOztL8qrbBCyblGBAAAAAElFTkSuQmCC"/>
</defs>
</svg>
);

// export const Health = () => (
  
// <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M18.3333 11.9185L6.17374 33.0019H30.4929L27.5568 27.9098C28.3699 28.3328 29.2485 28.6157 30.1556 28.7467L32.8744 33.4602C32.9549 33.5996 32.9973 33.7578 32.9972 33.9188C32.9972 34.0797 32.9547 34.2379 32.8742 34.3773C32.7936 34.5166 32.6778 34.6323 32.5383 34.7127C32.3988 34.7931 32.2406 34.8354 32.0797 34.8352H4.58608C4.42517 34.8352 4.2671 34.7928 4.12775 34.7124C3.9884 34.6319 3.87269 34.5162 3.79224 34.3769C3.71179 34.2375 3.66943 34.0794 3.66943 33.9185C3.66943 33.7576 3.71179 33.5996 3.79224 33.4602L17.5395 9.62504C17.62 9.4857 17.7357 9.36999 17.875 9.28955C18.0144 9.2091 18.1724 9.16675 18.3333 9.16675C18.4942 9.16675 18.6523 9.2091 18.7916 9.28955C18.931 9.36999 19.0467 9.4857 19.1272 9.62504L23.7288 17.6028C23.3882 18.4551 23.1939 19.3588 23.1541 20.2758L18.3333 11.9185Z" fill="white"/>
// <path clip-rule="evenodd" d="M28.8585 26.4981C29.6418 26.8294 30.4839 26.9994 31.3344 26.9977C32.8021 27.0004 34.2251 26.4926 35.3595 25.5613L38.9547 29.1556L40.337 27.7732L36.6667 24.1029C37.3764 23.0085 37.7321 21.7222 37.6857 20.4187C37.6392 19.1151 37.1928 17.8574 36.4069 16.8163C35.6211 15.7752 34.534 15.0011 33.2931 14.5991C32.0522 14.1971 30.7177 14.1867 29.4706 14.5692C28.2236 14.9518 27.1245 15.7088 26.3225 16.7375C25.5205 17.7661 25.0544 19.0167 24.9876 20.3194C24.9207 21.622 25.2563 22.9137 25.9488 24.0191C26.6413 25.1245 27.6572 25.99 28.8585 26.4981ZM26.9344 20.6425C26.9344 21.8094 27.398 22.9286 28.2231 23.7538C29.0483 24.5789 30.1675 25.0425 31.3344 25.0425C32.5014 25.0425 33.6205 24.5789 34.4457 23.7538C35.2708 22.9286 35.7344 21.8094 35.7344 20.6425C35.7344 19.4755 35.2708 18.3564 34.4457 17.5312C33.6205 16.7061 32.5014 16.2425 31.3344 16.2425C30.1675 16.2425 29.0483 16.7061 28.2231 17.5312C27.398 18.3564 26.9344 19.4755 26.9344 20.6425Z" fill="white"/>
// <path d="M17.1875 27.5458H19.4792V29.8374H17.1875V27.5458ZM18.3333 18.3745C17.7008 18.3745 17.1875 18.8878 17.1875 19.5203V24.562C17.1875 24.8659 17.3082 25.1574 17.5231 25.3722C17.738 25.5871 18.0294 25.7078 18.3333 25.7078C18.6372 25.7078 18.9287 25.5871 19.1436 25.3722C19.3584 25.1574 19.4792 24.8659 19.4792 24.562V19.5203C19.4792 18.8878 18.9658 18.3745 18.3333 18.3745Z" fill="white"/>
// </svg>
// );
