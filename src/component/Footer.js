import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground
} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bottmcontain}>
        <ImageBackground
          style={styles.tinyLogo}
          source={require('../assets/images/imgus.png')}
          resizeMode="contain"
          tintColor={'#ffffff'}
        >
           <Image
          style={styles.tinyLogo2}
          source={require('../assets/images/rupee.png')}
          resizeMode="contain"
          tintColor={'#ffffff'}
        />
          </ImageBackground>
        <View>
          <Text style={{color: '#ffffff', fontSize: width * 0.025}}>
            USDFx Exchange Price (1 USDFx)
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: width * 0.72,
              marginTop: 5,
            }}>
            <Text style={{color: '#ffffff', fontSize: width * 0.04, left: -12}}>
              Buy
            </Text>
            <Text
              style={{
                color: '#ffffff',
                fontSize: width * 0.04,
                left: -12,
                fontWeight: 'bold',
              }}>
              88.90 INR
            </Text>
            <Text style={{color: '#ffffff', fontSize: width * 0.04}}>Sell</Text>
            <Text
              style={{
                color: '#ffffff',
                fontSize: width * 0.04,
                fontWeight: 'bold',
              }}>
              83.90 INR
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 1.0,
    alignSelf: 'center',
    height: height * 0.11,
    position: 'absolute',
    bottom: 0,
  },
  bottmcontain: {
    width: width * 1.0,
    alignSelf: 'center',
    backgroundColor: '#244C87',
    height: height * 0.075,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
  txt: {
    fontSize: width * 0.04,
    color: '#ffffff',
  },
  tinyLogo: {
    width: 90,
    height: 90,
    color: '#ffffff',
    alignSelf: 'flex-start',
    marginLeft: 15,
    top:- height * 0.048,
    justifyContent:'center',
    alignItems:'center'
  },
  tinyLogo2: {
    width: 40,
    height: 50,
    color: 'grey',
    right:5
  },
});

export default Footer;
