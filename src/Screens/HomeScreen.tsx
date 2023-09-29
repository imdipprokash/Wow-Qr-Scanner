import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import CustomHeader from '../Components/CustomHeader';
import {MAIN_STYLE} from '../utils/Style';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <View style={MAIN_STYLE.Main_Container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <CustomHeader />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
