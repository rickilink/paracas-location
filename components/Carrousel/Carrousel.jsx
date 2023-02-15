import * as React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import useTheme from "../../hooks/useTheme.js";

import { window } from "./constants";

function CarrouselComponent({ images, autoplayInterval, handleScroll }) {
  const { primaryContrast, secondaryBackground } = useTheme();
  const PAGE_WIDTH = window.width;
  const colors = [
    primaryContrast,
    secondaryBackground,
    primaryContrast,
    secondaryBackground,
    primaryContrast,
    secondaryBackground,
    primaryContrast,
    secondaryBackground,
    primaryContrast,
    secondaryBackground,
  ];
  const ArrayElements = [[...images], colors];

  const [isVertical, setIsVertical] = React.useState(false);
  const [autoPlay, setAutoPlay] = React.useState(true);
  const [pagingEnabled, setPagingEnabled] = React.useState(true);
  const [snapEnabled, setSnapEnabled] = React.useState(true);
  const progressValue = useSharedValue(0);
  const baseOptions = isVertical
    ? {
        vertical: true,
        width: PAGE_WIDTH,
        height: PAGE_WIDTH * 0.6,
      }
    : {
        vertical: false,
        width: PAGE_WIDTH,
        height: PAGE_WIDTH * 0.6,
      };

  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Carousel
        {...baseOptions}
        loop
        pagingEnabled={pagingEnabled}
        snapEnabled={snapEnabled}
        autoPlay={autoPlay}
        autoPlayInterval={autoplayInterval || 2500}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        data={ArrayElements[0]}
        renderItem={({ item, index }) => (
          <Image source={{ uri: item }} key={index} style={styles.image} />
        )}
        onScroll={handleScroll}
      />
      {!!progressValue && (
        <View
          style={
            isVertical
              ? {
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: 10,
                  alignSelf: "center",
                  position: "absolute",
                  right: 5,
                  top: 40,
                }
              : {
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: 100,
                  alignSelf: "center",
                }
          }
        >
          {ArrayElements[0].map((backgroundColor, index) => {
            return (
              <PaginationItem
                backgroundColor={ArrayElements[1][index]}
                animValue={progressValue}
                index={index}
                key={index}
                isRotate={isVertical}
                length={ArrayElements[0].length}
              />
            );
          })}
        </View>
      )}
      {/*  <SButton
        onPress={() => setAutoPlay(!autoPlay)}
      >{`${ElementsText.AUTOPLAY}:${autoPlay}`}</SButton>
      <SButton
        onPress={() => {
          setIsVertical(!isVertical);
        }}
      >
        {isVertical ? "Set horizontal" : "Set Vertical"}
      </SButton>
      <SButton
        onPress={() => {
          setPagingEnabled(!pagingEnabled);
        }}
      >
        {`pagingEnabled:${pagingEnabled}`}
      </SButton>
      <SButton
        onPress={() => {
          setSnapEnabled(!snapEnabled);
        }}
      >
        {`snapEnabled:${snapEnabled}`}
      </SButton> */}
    </View>
  );
}

const PaginationItem = (props) => {
  const { animValue, index, length, backgroundColor, isRotate } = props;
  const width = 10;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-width, 0, width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-width, 0, width];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  }, [animValue, index, length]);
  return (
    <View
      style={{
        backgroundColor: "white",
        width,
        height: width,
        borderRadius: 50,
        overflow: "hidden",
        transform: [
          {
            rotateZ: isRotate ? "90deg" : "0deg",
          },
        ],
      }}
    >
      <Animated.View
        style={[
          {
            borderRadius: 50,
            backgroundColor,
            flex: 1,
          },
          animStyle,
        ]}
      />
    </View>
  );
};

export default CarrouselComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
