import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');

export const getStyles = (color) => StyleSheet.create({
  imageBackground: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    color,
    marginBottom: 10,
  },
  body: {
    fontSize: 40,
    color,
    paddingHorizontal: 20,
  },
  likeCTA: {
    fontSize: 16,
    color,
  },
  shareCTA: {
    fontSize: 16,
    color,
    marginTop: 4,
    marginLeft: 4,
  },
});