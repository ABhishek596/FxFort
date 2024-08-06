import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../component/Header';
import {useSelector} from 'react-redux';
import Footer from '../../component/Footer';
const Welcome = ({navigation}) => {
  const dataUsdfx = useSelector(state => state.data.dataList);
  // console.log(dataUsdfx);
  const lastObject = dataUsdfx[dataUsdfx.length - 1];
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.topvalue}>
        <Text style={styles.txt}>USDFx Balance</Text>
        <Text style={styles.txt1}>
          {lastObject ? lastObject.usdfx : '0.00'}
        </Text>
      </View>
      <Text style={{color: '#244C87', paddingLeft: 15, marginTop: 15}}>
        Trade at your fingertips
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          gap: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.topvalue2}>
            <Image
              style={styles.tinyLogo}
              source={require('../../assets/images/vector11.png')}
              resizeMode="contain"
            />
            <Text style={{color: '#ffffff'}}>Buy USDFx</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <View style={styles.topvalue2}>
            <Image
              style={styles.tinyLogo}
              source={require('../../assets/images/vector11.png')}
              resizeMode="contain"
            />
            <Text style={{color: '#ffffff'}}>P2P Trade</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={{color: '#244C87', paddingLeft: 15, marginTop: 15}}>
        Know USDFx Ecosystem
      </Text>
      <Text style={{color: '#ffffff', paddingLeft: 15, marginTop: 15}}>
        Learn about Partner program
      </Text>
      <View style={styles.topvalue3}>
        <Text style={styles.txt2}>Learn about USDFx</Text>
      </View>
      <View style={styles.topvalue3}>
        <Text style={styles.txt2}>Learn USDFx integration with Business</Text>
      </View>
      <Text style={{color: '#244C87', paddingLeft: 15, marginTop: 15}}>
        Important Links
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          gap: 20,
        }}>
        <TouchableOpacity >
          <View style={styles.topvalue2}>
            <Image
              style={styles.tinyLogo}
              source={require('../../assets/images/vector11.png')}
              resizeMode="contain"
            />
            <Text style={{color: '#ffffff'}}>Partner App</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.topvalue2}>
            <Image
              style={styles.tinyLogo}
              source={require('../../assets/images/vector11.png')}
              resizeMode="contain"
            />
            <Text style={{color: '#ffffff'}}>Contact us</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
};

export default Welcome;
