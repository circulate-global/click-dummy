import * as React from "react";
import Svg, { Defs, G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const Mail = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <Svg
      id="prefix__Ebene_1"
      data-name="Ebene 1"
      viewBox="0 0 512 512"
      {...props}
    >
      <Defs></Defs>
      <Path
        className="prefix__cls-1"
        d="M257.45 238.63l205.74-133.79A255.13 255.13 0 0052 105z"
        fill="#fff"
      />
      <Path
        className="prefix__cls-1"
        d="M257.45 286L31 138.71A254.08 254.08 0 002.52 256c0 140.9 114.22 255.12 255.11 255.12S512.75 396.85 512.75 256a254.09 254.09 0 00-28.58-117.42z"
        fill="#fff"
      />
    </Svg>
  );
};

export default Mail;
