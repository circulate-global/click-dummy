import * as React from "react";
import Svg, { Defs, G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <Svg data-name="Ebene 1" viewBox="0 0 511.9 512" {...props}>
      <Path
        d="M256 .83C115.05.83.83 115.05.83 256S115.05 511.07 256 511.07 511.07 396.85 511.07 256 396.85.83 256 .83zM176.08 387h-66.67V186.58h66.67zm-33.34-227.77h-.42c-22.33 0-36.86-15.39-36.86-34.62C105.46 105 120.31 90 143.17 90s36.86 15 37.29 34.61c0 19.23-14.46 34.62-37.72 34.62zM416.24 387h-66.56V279.85c0-26.93-9.61-45.3-33.76-45.3-18.37 0-29.38 12.39-34.18 24.36-1.71 4.27-2.25 10.24-2.25 16.22V387h-66.56s.86-181.62 0-200.42h66.56V215c8.87-13.68 24.68-33.12 60-33.12 43.81 0 76.71 28.63 76.71 90.17z"
        fill="#fff"
      />
    </Svg>
  );
};

export default Linkedin;
