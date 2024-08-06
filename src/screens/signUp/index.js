import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import Header from '../../component/Header';
import styles from './styles';
import {useSelector} from 'react-redux';
import Footer from '../../component/Footer';
const SignUp = () => {
  const dataList = useSelector(state => state.data.dataList);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.topbutn}>
        <View style={styles.topbutnn}>
          <Text style={{color: '#ffffff'}}>P2P Trade</Text>
        </View>
        <View style={styles.topbutnn}>
          <Text style={{color: '#ffffff'}}>Express</Text>
        </View>
      </View>
      <View style={{height: 15}} />
      <View style={styles.topbutn2}>
        <Text style={{color: '#244C87'}}>filters</Text>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/images/filter.png')}
          resizeMode="contain"
        />
      </View>
      <View style={{height: 12}} />
      <FlatList
        data={dataList}
        renderItem={({item}) => {
          return (
            <View style={styles.itemfl}>
              <View style={styles.intoprow}>
                <Text style={styles.item2}>Buy</Text>
                <Text style={styles.item}>Total Orders 105 | 85.50%</Text>
              </View>

              <View style={styles.dtview}>
                <View>
                  <Text style={styles.item}>price</Text>
                  <Text style={styles.item}>INR 8900000</Text>
                  <Text style={styles.item}>
                    Quantity {item.usdfx ? item.usdfx : '0'} USDFx
                  </Text>
                </View>
                <View style={{alignItems:'flex-end'}}>
                  <Text style={styles.item}>Ramesh Sharma</Text>
                  <Text style={styles.item}>125</Text>
                  <Text style={styles.itemsell}>Sell</Text>
                </View>
              </View>
              <View style={{height: 5}} />
              <Text style={styles.item}>USDT   BANK TRANSFER   UPI</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
     <Footer />
    </View>
  );
};

export default SignUp;
