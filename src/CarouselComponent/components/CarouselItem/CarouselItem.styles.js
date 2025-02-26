import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');

export const getStyles = color =>
  StyleSheet.create({
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
    headerCTAContainer: {
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      bottom: 250,
    },
    headerRightHandContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '20%',
      marginLeft: 20,
    },
    headerRightHandBtns: {
      backgroundColor: 'grey',
      padding: 12,
      bottom: 10,
    },
    speakerCTA: {
      right: 5,
    },
    footerCTAContainer: {
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      top: 250,
    },
    footerCTABtnContainer: {
      width: '20%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
