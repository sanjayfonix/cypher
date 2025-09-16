export const Grid = () => (
  <svg
    width="195"
    height="256"
    viewBox="0 0 195 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.6">
      <path
        id="gridPath1"
        d="M114.264 106.186H85.5601V0H84.5601V106.186H55.8569V0H54.8569V106.186H26.1528V0H25.1528V106.186H-0.590332V107.186H25.1528V145.084H-0.885254V146.084H25.1528V183.982H-1.18018V184.982H25.1528V222.879H-1.47607V223.879H25.1528V255H26.1528V223.879H54.8569V255H55.8569V223.879H84.5601V255H85.5601V223.879H114.264V255H115.264V223.879H193.25V222.879H115.264V184.982H193.545V183.982H115.264V146.084H193.84V145.084H115.264V107.186H194.135V106.186H115.264V0H114.264V106.186Z"
        stroke="url(#paint0_linear_222_2167)"
        strokeWidth="1"
      />
      {/* Repeat for other grid paths if you want multiple paths */}
    </g>

    {/* Blue Circular Pointers */}
    <circle r="3" fill="#006EFF">
      <animateMotion dur="6s" repeatCount="indefinite">
        <mpath href="#gridPath1" />
      </animateMotion>
    </circle>

    <circle r="3" fill="#00C4FF">
      <animateMotion dur="8s" repeatCount="indefinite">
        <mpath href="#gridPath1" />
      </animateMotion>
    </circle>

    <circle r="3" fill="#3399FF">
      <animateMotion dur="10s" repeatCount="indefinite">
        <mpath href="#gridPath1" />
      </animateMotion>
    </circle>

    <defs>
      <linearGradient
        id="paint0_linear_222_2167"
        x1="-9.50135"
        y1="242.466"
        x2="220.586"
        y2="106.208"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0.1" />
        <stop offset="1" stopColor="#999999" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);
