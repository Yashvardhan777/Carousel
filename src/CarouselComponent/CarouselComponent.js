import React, { useRef, useState } from 'react';
import { FlatList, Text, ImageBackground, Dimensions, Animated, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('screen');

import { DATA } from './CarouselComponent.sample';

const CarouselComponent = () => {
  const [viewableItems, setViewableItems] = useState([]);
  const animations = useRef({});
  const hasAnimated = useRef({}); // Keep track of which items have animated

  const onViewableItemsChanged = ({ viewableItems }) => {
    setViewableItems(viewableItems.map(v => v.index));
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
    minimumViewableItems: 5,
  };

  const getItemLayout = (_, index) => ({ length: height, offset: height * index, index });

  const renderItem = ({ item, index }) => {
    const { imageUrl, title, body } = item;

    if (!animations.current[index]) {
      animations.current[index] = new Animated.Value(0);
    }

    const opacity = animations.current[index].interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    const translateY = animations.current[index].interpolate({
      inputRange: [0, 1],
      outputRange: [10, -250],
    });

    // *** Key Change: Check hasAnimated before animating ***
    if (viewableItems.includes(index) && !hasAnimated.current[index]) {
      hasAnimated.current[index] = true; // Mark as animated

      Animated.sequence([
        Animated.delay(500),
        Animated.spring(animations.current[index], {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
          stiffness: 50, // Controls the "tightness" of the spring (lower = slower)
          damping: 20, // Controls how quickly the spring settles (higher = slower)
          mass: 2,
        }),
      ]).start();
    }

    return (
      <ImageBackground
        source={imageUrl}
        style={styles.imageBackground}>
        <Animated.View style={[styles.textContainer, { opacity, transform: [{ translateY }] }]}>
          <Text style={styles.title}>{title}</Text>
          <Text
            style={styles.body}
            numberOfLines={2}>
            {body}
          </Text>
        </Animated.View>
      </ImageBackground>
    );
  };

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      initialNumToRender={1}
      keyExtractor={(_, index) => index.toString()}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      snapToInterval={height}
      decelerationRate="fast"
      pagingEnabled
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      getItemLayout={getItemLayout}
    />
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: width,
    height: height,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  textContainer: {
    // Styles for the container of the title and body text
    alignItems: 'center', // Center text horizontally
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black', // Example color
    marginBottom: 10, // Space between title and body
  },
  body: {
    fontSize: 16,
    color: 'black', // Example color
    textAlign: 'center', // Center text horizontally
    paddingHorizontal: 20, // Add some horizontal padding
  },
});

export default CarouselComponent;
