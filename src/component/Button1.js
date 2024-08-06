import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image
} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');

const Button1 = ({title, onPress,cn, txtstyle}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container,{backgroundColor:cn}]}>
      <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/images/order_approve.png')}
        resizeMode='contain'
      />
        <Text style={[styles.txt,{color:txtstyle}]}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    alignSelf: 'center',
    backgroundColor: '#001533',
    height: height * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 7,
  },
  // insideContainer:{},
  txt: {
    fontSize: width * 0.04,
    color: '#ffffff',
  },

});
export default Button1;
