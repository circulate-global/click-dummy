import React from "react";
import { Image, Dimensions } from "react-native";
import { Box, Theme } from "../components";
import { useTheme } from "@shopify/restyle";

const { width: wWidth } = Dimensions.get("window");

export interface ThumbnailProps {
  index: number;
  picture: {
    src: number;
    height: number;
    width: number;
  };
}

const Thumbnail = ({ index, picture }: ThumbnailProps) => {
  const theme = useTheme<Theme>();
  const width = wWidth > 500 ? 500 : wWidth;
  return (
    <Box width={width} alignItems="center">
      <Box
        height={picture.height}
        width={picture.width}
        borderWidth={1}
        borderColor="primary"
        borderRadius={
          picture.height > picture.width ? picture.height : picture.width
        }
        overflow="hidden"
      >
        <Image
          source={picture.src}
          style={{
            height: picture.height,
            width: picture.width
          }}
          resizeMode="cover"
        />
      </Box>
    </Box>
  );
};

export default Thumbnail;
