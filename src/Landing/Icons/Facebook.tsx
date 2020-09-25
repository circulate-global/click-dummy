import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Facebook = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <Svg data-name="Ebene 1" viewBox="0 0 512 512" {...props}>
      <Path
        d="M256.05.83C115.15.83.93 115.05.93 256c0 135 104.86 245.49 237.57 254.51V313.7h-66.7v-77.3h66.7v-57c0-66.1 40.4-102.1 99.4-102.1a562 562 0 0159.6 3v69.1h-40.9c-32.1 0-38.3 15.3-38.3 37.6v49.3h76.5l-10 77.3h-66.5v189.8c110.81-27.78 192.87-128 192.87-247.45C511.17 115.05 397 .83 256.05.83z"
        fill="#fff"
      />
    </Svg>
  );
};

export default Facebook;
