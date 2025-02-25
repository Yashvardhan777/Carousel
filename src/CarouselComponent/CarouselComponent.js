import React, { useRef, useState } from 'react';
import { View, FlatList, Animated, Image, Text, PanResponder, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const IMAGES = [
  'https://unsplash.com/photos/a-blue-and-green-background-with-wavy-lines-CXCI9qS96Cw',
  'https://unsplash.com/photos/a-car-parked-on-the-side-of-a-street-next-to-a-tall-building-sjSzS3M-LLM',
  'https://unsplash.com/photos/a-black-sheep-standing-on-top-of-a-lush-green-field-1GRm2Kdwykc',
];

const CarouselComponent = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle Swipe Gestures
  // const panResponder = useRef(
  //   PanResponder.create({
  //     onMoveShouldSetPanResponder: (_, gesture) =>
  //       Math.abs(gesture.dy) > 10, // Detect vertical swipe
  //     onPanResponderRelease: (_, gesture) => {
  //       if (gesture.dy > 50 && currentIndex > 0) {
  //         scrollToIndex(currentIndex - 1); // Swipe down
  //       } else if (gesture.dy < -50 && currentIndex < IMAGES.length - 1) {
  //         scrollToIndex(currentIndex + 1); // Swipe up
  //       }
  //     },
  //   })
  // ).current;

  // Function to manually scroll
  const scrollToIndex = index => {
    setCurrentIndex(index);
    flatListRef.current?.scrollToOffset({ offset: index * height, animated: true });
  };

  // Render each item with animation
  const renderItem = ({ item }) => {
    // const fadeAnim = useRef(new Animated.Value(0)).current;

    // const onLoad = () => {
    //   Animated.timing(fadeAnim, {
    //     toValue: 1,
    //     duration: 500,
    //     useNativeDriver: true,
    //   }).start();
    // };
    console.log({ item })
    return (
      <View style={{ height, width, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={{ uri: item }}
          style={{
            height: height * 0.9,
            width: width * 0.9,
            borderRadius: 10,
            // opacity: fadeAnim,
          }}
          // onLoad={onLoad}
        />
      </View>
    );
  };

  return (
    <FlatList
      ref={flatListRef}
      data={IMAGES}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
      // pagingEnabled
      // scrollEnabled={false} // Disable default scrolling
      showsVerticalScrollIndicator={false}
      // getItemLayout={(_, index) => ({
      //   length: height,
      //   offset: height * index,
      //   index,
      // })}
    />
  );
};

export default CarouselComponent;
