import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SCREEN_WIDTH} from '../utils/Style';

type Props = {};

const CustomHeader = (props: Props) => {
  return (
    <View
      style={{
        width: SCREEN_WIDTH,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
          paddingTop: 20,
          fontWeight: '800',
          color: '#be7929',
        }}>
        WoW QR
      </Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
