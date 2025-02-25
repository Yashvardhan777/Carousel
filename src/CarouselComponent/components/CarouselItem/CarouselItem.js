import React, { useMemo } from 'react';
import { Text, ImageBackground, Animated, View } from 'react-native';
import { AntDesign, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

import { getTextColor } from '../../CarouselComponent.helpers';
import { getStyles } from './CarouselItem.styles';

const CarouselItem = ({ item, index, animations, hasAnimated, viewableItems }) => {
  const { imageUrl, title, body, theme = 'DARK' } = item;
  const color = useMemo(() => getTextColor(theme), [theme]);
  const styles = useMemo(() => getStyles(color), [color]);

  if (!animations.current[index]) {
    animations.current[index] = {
      title: new Animated.Value(0),
      body: new Animated.Value(0),
    };
  }

  const titleOpacity = animations.current[index]?.title.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const titleTranslateY = animations.current[index]?.title.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, -150],
  });

  const bodyOpacity = animations.current[index]?.body.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const bodyTranslateY = animations.current[index]?.body.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, -150],
  });

  if (viewableItems.includes(index) && !hasAnimated.current[index]) {
    hasAnimated.current[index] = true; // Mark as animated

    Animated.parallel([
      Animated.spring(animations.current[index].title, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
        stiffness: 50,
        damping: 20,
        mass: 2,
      }),
      Animated.sequence([
        Animated.delay(300),
        Animated.spring(animations.current[index].body, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
          stiffness: 10,
          damping: 25,
          mass: 2,
        }),
      ]),
    ]).start();
  }

  const renderTitle = () => (
    <Animated.View
      style={[styles.textContainer, { opacity: titleOpacity, transform: [{ translateY: titleTranslateY }] }]}>
      <Text style={styles.title}>{title}</Text>
    </Animated.View>
  );

  const renderBody = () => (
    <Animated.View
      style={[styles.textContainer, { opacity: bodyOpacity, transform: [{ translateY: bodyTranslateY }] }]}>
      <Text
        style={styles.body}
        numberOfLines={2}>
        {body}
      </Text>
    </Animated.View>
  );

  const renderHeaderCTAs = () => (
    <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', bottom: 250 }}>
      <AntDesign
        name="arrowup"
        size={24}
        color={color}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '20%', marginLeft: 20 }}>
        <View style={{ backgroundColor: 'grey', padding: 12, bottom: 10, right: 5 }}>
          <MaterialCommunityIcons
            name="speaker"
            size={24}
            color={color}
          />
        </View>
        <View style={{ backgroundColor: 'grey', padding: 12, bottom: 10 }}>
          <AntDesign
            name="setting"
            size={24}
            color={color}
          />
        </View>
      </View>
    </View>
  );

  const renderFooterCTAs = () => (
    <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', top: 250 }}>
      <View style={{ width: '20%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <AntDesign
          name="hearto"
          size={24}
          color={color}
        />
        <Text style={styles.likeCTA}>Like</Text>
      </View>
      <View style={{ width: '20%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Octicons
          name="share"
          size={24}
          color={color}
        />
        <Text style={styles.shareCTA}>Share</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={imageUrl}
      style={styles.imageBackground}>
      {renderHeaderCTAs()}
      {renderTitle()}
      {renderBody()}
      {renderFooterCTAs()}
    </ImageBackground>
  );
};

export default CarouselItem;
