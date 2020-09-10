import React, { useState, useMemo, ReactNode } from "react";
import { View } from "react-native";
import Animated, { Easing, Extrapolate } from "react-native-reanimated";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const {
  Clock,
  Value,
  set,
  cond,
  startClock,
  clockRunning,
  timing,
  debug,
  stopClock,
  block,
  interpolate,
  useCode
} = Animated;

function runTiming(clock: Animated.Clock, from: number, to: number) {
  const state = {
    finished: new Value(0),
    position: new Value(from),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration: 100,
    toValue: new Value(to),
    easing: Easing.inOut(Easing.ease)
  };

  return block([
    cond(clockRunning(clock), [], startClock(clock)),
    // we run the step here that is going to update position
    timing(clock, state, config),
    // if the animation is over we stop the clock
    cond(state.finished, debug("stop clock", stopClock(clock))),
    // we made the block return the updated position
    state.position
  ]);
}

interface TouchableResizeProps {
  children: ReactNode;
  onPress: () => void;
}

const TouchableResize = ({ children, onPress }: TouchableResizeProps) => {
  const [pressed, setPressed] = useState(false);
  const { clock, scale } = useMemo(
    () => ({
      clock: new Clock(),
      scale: new Value(1)
    }),
    []
  );

  useCode(
    () =>
      block([
        pressed
          ? set(scale, runTiming(clock, 0, 1))
          : set(scale, runTiming(clock, 1, 0))
      ]),
    [pressed]
  );

  const scaling = interpolate(scale, {
    inputRange: [0, 1],
    outputRange: [1, 0.9],
    extrapolate: Extrapolate.CLAMP
  });
  return (
    <TouchableWithoutFeedback
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}
    >
      <Animated.View style={{ transform: [{ scale: scaling }] }}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default TouchableResize;
