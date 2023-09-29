import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../Components/CustomHeader';
import {MAIN_STYLE, SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils/Style';
import QRCodeScanner from 'react-native-qrcode-scanner';

type Props = {};

const HomeScreen = (props: Props) => {
  const [QRValue, setQRValue] = useState<
    {value: string; type: string} | undefined
  >();
  return (
    <View style={[MAIN_STYLE.Main_Container]}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <CustomHeader />

      {/* QR  */}

      <QRCodeScanner
        onRead={e => {
          const urlString = e?.rawData;
          if (urlString) {
            if (
              urlString.includes('http://') ||
              urlString.includes('https://')
            ) {
              setQRValue({
                value: urlString,
                type: 'url',
              });
              console.log("The URL contains 'http' or 'https'.");
            } else {
              console.log("The URL does not contain 'http' or 'https'.");
              setQRValue({
                value: urlString,
                type: 'text',
              });
            }
          }
        }}
        containerStyle={{
          width: SCREEN_WIDTH,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: -SCREEN_HEIGHT * 0.4,
          // marginBottom: -SCREEN_HEIGHT * 0.4,
        }}
        cameraStyle={{
          width: SCREEN_WIDTH * 0.7,
          height: SCREEN_HEIGHT * 0.3,
          borderRadius: 20,
          overflow: 'hidden',
        }}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        // topContent={
        //   <Text style={{}}>
        //     Go to <Text style={{}}>wikipedia.org/wiki/QR_code</Text> on your
        //     computer and scan the QR code.
        //   </Text>
        // }
        bottomContent={
          <TouchableOpacity
            onPress={() => {
              QRValue?.type === 'url' &&
                Linking.openURL(QRValue.value).catch(err =>
                  console.error('An error occurred', err),
                );
            }}
            style={{
              backgroundColor: '#ead4c4',
              marginHorizontal: SCREEN_WIDTH * 0.1,
              marginVertical: SCREEN_HEIGHT * 0.01,
              paddingHorizontal: SCREEN_WIDTH * 0.05,
              paddingVertical: SCREEN_HEIGHT * 0.015,
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: SCREEN_HEIGHT * 0.02,
                textDecorationLine:
                  QRValue?.type === 'url' ? 'underline' : 'none',
              }}>
              {QRValue?.value}
            </Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
