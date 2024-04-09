type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function AddOfferButton({ ...props }: ButtonProps) {
  return (
    <button
      className="relative bottom-1/2 transition hover:scale-110"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="61"
        height="64"
        viewBox="0 0 61 64"
        fill="none"
      >
        <g filter="url(#filter0_d_423_65)">
          <g filter="url(#filter1_d_423_65)">
            <path
              d="M28.625 3.08253C29.7853 2.41266 31.2147 2.41266 32.375 3.08253L54.6058 15.9175C55.766 16.5873 56.4808 17.8253 56.4808 19.1651V44.8349C56.4808 46.1747 55.766 47.4127 54.6058 48.0825L32.375 60.9175C31.2147 61.5873 29.7853 61.5873 28.625 60.9175L6.39424 48.0825C5.23398 47.4127 4.51924 46.1747 4.51924 44.8349V19.1651C4.51924 17.8253 5.23398 16.5873 6.39424 15.9175L28.625 3.08253Z"
              fill="url(#paint0_linear_423_65)"
            />
          </g>
          <path
            d="M31.125 22.625V41.375M40.5 32H21.75"
            stroke="white"
            strokeWidth="3.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_423_65"
            x="-0.75"
            y="0.75"
            width="62.5"
            height="62.5"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="2.5"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_423_65"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="1.875" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.19 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_423_65"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_423_65"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_423_65"
            x="2.01923"
            y="0.0801394"
            width="56.9615"
            height="63.8397"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="1.25" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0588235 0 0 0 0 0.0901961 0 0 0 0 0.164706 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_423_65"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_423_65"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_423_65"
            x1="4.875"
            y1="16.375"
            x2="51.8559"
            y2="47.2542"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8635CC" />
            <stop offset="0.799224" stopColor="#A865E2" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
}

export default AddOfferButton;
