import React, { useRef, useState } from 'react';
import { FlatList, Dimensions } from 'react-native';

import CarouselItem from './components/CarouselItem';
import { DATA } from './CarouselComponent.sample';

const { height } = Dimensions.get('screen');

const CarouselComponent = () => {
  const [viewableItems, setViewableItems] = useState([]);
  const animations = useRef({});
  const hasAnimated = useRef({});

  const onViewableItemsChanged = ({ viewableItems }) => {
    setViewableItems(viewableItems.map(v => v.index));
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const getItemLayout = (_, index) => ({ length: height, offset: height * index, index });

  const renderItem = ({ item, index }) => {
    return (
      <CarouselItem
        item={item}
        index={index}
        animations={animations}
        hasAnimated={hasAnimated}
        viewableItems={viewableItems}
      />
    );
  };

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
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

export default CarouselComponent;
