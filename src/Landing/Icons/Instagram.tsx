import * as React from "react";
import Svg, { Defs, G, Circle, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const Instagram = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <Svg
      id="prefix__Ebene_1"
      data-name="Ebene 1"
      viewBox="0 0 511.9 511.9"
      {...props}
    >
      <Defs></Defs>
      <Circle
        className="prefix__cls-1"
        cx={255.9}
        cy={256}
        r={80}
        fill="#fff"
      />
      <Path
        className="prefix__cls-1"
        d="M256 .83C115.05.83.83 115.05.83 256S115.05 511.07 256 511.07 511.07 396.85 511.07 256 396.85.83 256 .83zM256 384a128 128 0 11128-128 128 128 0 01-128.1 128zm133.1-230.21a35.39 35.39 0 1135.39-35.39c-.21 19.45-15.94 35.39-35.39 35.39z"
        fill="#fff"
      />
    </Svg>
  );
};

export default Instagram;
