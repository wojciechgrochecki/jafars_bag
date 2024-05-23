type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function AddOfferButton({ ...props }: ButtonProps) {
  return (
    <button {...props}>
      <svg
        width="71"
        height="76"
        viewBox="0 0 71 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_612_445)">
          <g filter="url(#filter1_d_612_445)">
            <path
              d="M33.3125 4.26295C34.6661 3.48143 36.3339 3.48144 37.6875 4.26295L63.6234 19.237C64.977 20.0186 65.8109 21.4629 65.8109 23.0259V52.9741C65.8109 54.5371 64.977 55.9814 63.6234 56.763L37.6875 71.737C36.3339 72.5186 34.6661 72.5186 33.3125 71.737L7.37661 56.763C6.02298 55.9814 5.18911 54.5371 5.18911 52.9741V23.0259C5.18911 21.4629 6.02298 20.0186 7.37661 19.237L33.3125 4.26295Z"
              fill="url(#paint0_linear_612_445)"
            />
          </g>
          <path
            d="M36.2291 27.0625V48.9375M47.1666 38H25.2916"
            stroke="white"
            strokeWidth="3.64583"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_612_445"
            x="-0.958333"
            y="1.54167"
            width="72.9167"
            height="72.9167"
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
              radius="2.91667"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_612_445"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2.1875" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.19 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_612_445"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_612_445"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_612_445"
            x="2.27242"
            y="0.760092"
            width="66.4552"
            height="74.4798"
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
            <feGaussianBlur stdDeviation="1.45833" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0588235 0 0 0 0 0.0901961 0 0 0 0 0.164706 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_612_445"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_612_445"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_612_445"
            x1="5.60416"
            y1="19.7708"
            x2="60.4153"
            y2="55.7966"
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
