import {
  Linking,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Vibration,
} from 'react-native';
import React, {useState} from 'react';
import {BarCodeReadEvent, RNCamera} from 'react-native-camera';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils/Style';
import LinearGradient from 'react-native-linear-gradient';

type Props = {};

const HomeScreen = (props: Props) => {
  const [cameraScannedValue, setCameraScannedValue] =
    useState<BarCodeReadEvent | null>(null);
    
  const onBarCodeRead = (result: BarCodeReadEvent) => {
    setCameraScannedValue(result);
    Vibration.vibrate(200);
  };
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#1f2f98', '#3b5998', '#097581']} // Adjust gradient colors
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}
        style={{flex: 1, alignItems: 'center'}}>
        <StatusBar backgroundColor={'#1f2f98'} barStyle={'light-content'} />
        <Text
          style={{
            color: '#fff',
            fontSize: 28,
            marginVertical: 20,
            fontWeight: '800',
          }}>
          Distronix QR
        </Text>
        <RNCamera
          style={{
            height: SCREEN_HEIGHT * 0.3,
            width: SCREEN_WIDTH * 0.6,
            borderRadius: 20,
            overflow: 'hidden',
          }}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
          onBarCodeRead={onBarCodeRead}
        />

        <TouchableOpacity
          onPress={() => {
            if (cameraScannedValue?.data.includes('http')) {
              Linking.openURL(cameraScannedValue?.data).catch(err =>
                console.error('An error occurred', err),
              );
            }
          }}
          style={{
            margin: 20,
            marginTop: 30,
            paddingHorizontal: 10,
            paddingVertical: 8,
            backgroundColor: '#fff',
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: cameraScannedValue?.data.includes('http')
                ? '#242fcc'
                : '#000',
              fontSize: 20,
              textDecorationLine: cameraScannedValue?.data.includes('http')
                ? 'underline'
                : 'none',
            }}>
            {cameraScannedValue?.data}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
