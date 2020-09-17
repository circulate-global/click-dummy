import React, { useRef } from "react";
import { Dimensions, FlatList, ListRenderItem, Animated } from "react-native";
import Thumbnail, { ThumbnailProps } from "./Thumbnail";
import Pagination from "./Pagination";

const { width: wWidth } = Dimensions.get("window");
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

interface GalerieProps {
  thumbnails: ThumbnailProps[];
}

const Galerie = ({ thumbnails }: GalerieProps) => {
  const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current;
  const keyExtractor = (item: ThumbnailProps) => item.index.toString();
  const renderItem: ListRenderItem<ThumbnailProps> = ({ item }) => (
    <Thumbnail {...item} />
  );
  const width = wWidth > 500 ? 500 : wWidth;
  return (
    <>
      <AnimatedFlatList
        data={thumbnails}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
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
      />
      <Pagination
        data={thumbnails}
        currentIndex={Animated.divide(scrollX, width)}
      />
    </>
  );
};

export default Galerie;
