import React, { useRef } from "react";
import {
  Dimensions,
  FlatList,
  Animated,
  ScrollView,
  Platform
} from "react-native";
import Thumbnail, { ThumbnailProps } from "./Thumbnail";
import Pagination from "./Pagination";

const { width: wWidth } = Dimensions.get("window");

interface GalerieProps {
  thumbnails: ThumbnailProps[];
}

const Galerie = ({ thumbnails }: GalerieProps) => {
  const ref = useRef<ScrollView>(null);
  const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current;
  const width = wWidth > 500 ? 500 : wWidth;
  const onDotPress = (index: number) => {
    if (ref.current) {
      if (Platform.OS === "web")
        // @ts-ignore
        ref.current._component.scrollTo({ x: index * width });
      else ref.current.scrollTo({ x: index * width });
    }
  };
  return (
    <>
      <Animated.ScrollView
        decelerationRate={0}
        snapToInterval={width}
        horizontal
        pagingEnabled
        contentContainerStyle={{
          alignItems: "center"
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        ref={ref}
      >
        {thumbnails.map((item: ThumbnailProps) => (
          <Thumbnail
            key={item.index}
            index={item.index}
            picture={item.picture}
          />
        ))}
      </Animated.ScrollView>
      <Pagination
        data={thumbnails}
        currentIndex={Animated.divide(scrollX, width)}
        {...{ onDotPress }}
      />
    </>
  );
};

export default Galerie;
