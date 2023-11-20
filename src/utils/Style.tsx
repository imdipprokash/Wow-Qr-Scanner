import {StyleSheet, Dimensions} from 'react-native';

export const COLORS = {
  bgColor: '#fff',
};
export const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} =
  Dimensions.get('screen');
export const MAIN_STYLE = StyleSheet.create({
  Main_Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
