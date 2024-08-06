import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
  } from 'react-native';
  import React from 'react';
  const {width, height} = Dimensions.get('window');
  
  const Button2 = ({title, onPress,cn, txtstyle,width1}) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.container,{backgroundColor:cn}]}>
          <Text style={[styles.txt,{color:txtstyle}]}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const styles = StyleSheet.create({
    container: {
      width: width * 0.75,
      alignSelf: 'center',
      backgroundColor: '#001533',
      height: height * 0.09,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
    },
    // insideContainer:{},
    txt: {
      fontSize: width * 0.04,
      color: '#ffffff',
    },
  });
  export default Button2;
  