import {StyleSheet, Dimensions} from 'react-native';

export const COLORS = {
  bgColor: '#fff',
};
export const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} =
  Dimensions.get('screen');
export const MAIN_STYLE = StyleSheet.create({
  Main_Container: {
    backgroundColor: COLORS.bgColor,
    flex: 1,
  },
});
