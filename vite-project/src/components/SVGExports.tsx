export const GrainySVG = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1265"
      height="1854"
      viewBox="0 0 1265 1854"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_fng_1_2444)">
        <ellipse
          cx="1030.4"
          cy="819.427"
          rx="230.011"
          ry="234.368"
          transform="rotate(15.9047 1030.4 819.427)"
          fill="#5293D7"
          fill-opacity="0.9"
        />
      </g>
      <defs>
        <filter
          id="filter0_fng_1_2444"
          x="0"
          y="-214.675"
          width="2060.8"
          height="2068.21"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="400"
            result="effect1_foregroundBlur_1_2444"
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.36730942130088806 0.36730942130088806"
            stitchTiles="stitch"
            numOctaves="3"
            result="noise"
            seed="1492"
          />
          <feColorMatrix
            in="noise"
            type="luminanceToAlpha"
            result="alphaNoise"
          />
          <feComponentTransfer in="alphaNoise" result="coloredNoise1">
            <feFuncA
              type="discrete"
              tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
            />
          </feComponentTransfer>
          <feComposite
            operator="in"
            in2="effect1_foregroundBlur_1_2444"
            in="coloredNoise1"
            result="noise1Clipped"
          />
          <feComponentTransfer in="alphaNoise" result="coloredNoise2">
            <feFuncA
              type="discrete"
              tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 "
            />
          </feComponentTransfer>
          <feComposite
            operator="in"
            in2="effect1_foregroundBlur_1_2444"
            in="coloredNoise2"
            result="noise2Clipped"
          />
          <feFlood flood-color="rgba(0, 0, 0, 0.25)" result="color1Flood" />
          <feComposite
            operator="in"
            in2="noise1Clipped"
            in="color1Flood"
            result="color1"
          />
          <feFlood
            flood-color="rgba(255, 255, 255, 0.25)"
            result="color2Flood"
          />
          <feComposite
            operator="in"
            in2="noise2Clipped"
            in="color2Flood"
            result="color2"
          />
          <feMerge result="effect2_noise_1_2444">
            <feMergeNode in="effect1_foregroundBlur_1_2444" />
            <feMergeNode in="color1" />
            <feMergeNode in="color2" />
          </feMerge>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.033333335071802139 0.033333335071802139"
            numOctaves="3"
            seed="5061"
          />
          <feDisplacementMap
            in="effect2_noise_1_2444"
            scale="50"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displacedImage"
            width="100%"
            height="100%"
          />
          <feMerge result="effect3_texture_1_2444">
            <feMergeNode in="displacedImage" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
};

export const GrainySVGGray = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1265"
      height="1854"
      viewBox="0 0 1265 1854"
      fill="none"
      className={className}
    >
      <defs>
        <radialGradient id="grayOpacityGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F0F0F0" stopOpacity="1" />
          <stop offset="100%" stopColor="#F0F0F0" stopOpacity="0.2" />
        </radialGradient>
      </defs>
      <g filter="url(#filter0_fng_1_2445)">
        <ellipse
          cx="1030.4"
          cy="819.427"
          rx="230.011"
          ry="234.368"
          transform="rotate(15.9047 1030.4 819.427)"
          fill="url(#grayOpacityGradient)"
        />
      </g>
      <defs>
        <filter
          id="filter0_fng_1_2445"
          x="0"
          y="-214.675"
          width="2060.8"
          height="2068.21"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="400"
            result="effect1_foregroundBlur_1_2445"
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.36730942130088806 0.36730942130088806"
            stitchTiles="stitch"
            numOctaves="3"
            result="noise"
            seed="1492"
          />
          <feColorMatrix
            in="noise"
            type="luminanceToAlpha"
            result="alphaNoise"
          />
          <feComponentTransfer in="alphaNoise" result="coloredNoise1">
            <feFuncA
              type="discrete"
              tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
            />
          </feComponentTransfer>
          <feComposite
            operator="in"
            in2="effect1_foregroundBlur_1_2445"
            in="coloredNoise1"
            result="noise1Clipped"
          />
          <feComponentTransfer in="alphaNoise" result="coloredNoise2">
            <feFuncA
              type="discrete"
              tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 "
            />
          </feComponentTransfer>
          <feComposite
            operator="in"
            in2="effect1_foregroundBlur_1_2445"
            in="coloredNoise2"
            result="noise2Clipped"
          />
          <feFlood flood-color="rgba(0, 0, 0, 0.25)" result="color1Flood" />
          <feComposite
            operator="in"
            in2="noise1Clipped"
            in="color1Flood"
            result="color1"
          />
          <feFlood
            flood-color="rgba(255, 255, 255, 0.25)"
            result="color2Flood"
          />
          <feComposite
            operator="in"
            in2="noise2Clipped"
            in="color2Flood"
            result="color2"
          />
          <feMerge result="effect2_noise_1_2445">
            <feMergeNode in="effect1_foregroundBlur_1_2445" />
            <feMergeNode in="color1" />
            <feMergeNode in="color2" />
          </feMerge>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.033333335071802139 0.033333335071802139"
            numOctaves="3"
            seed="5061"
          />
          <feDisplacementMap
            in="effect2_noise_1_2445"
            scale="50"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displacedImage"
            width="100%"
            height="100%"
          />
          <feMerge result="effect3_texture_1_2445">
            <feMergeNode in="displacedImage" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
};
