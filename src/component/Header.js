import { View, Text ,StyleSheet, Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        <Entypo name="menu" size={30} color="#244C87" style={styles.icon} />
        <Feather name="square" size={30} color="#244C87" style={styles.icon} />
      </View>
      <View style={styles.rightContainer}>
       <Text style={styles.title}>0xD23e....fa1</Text>
        <Ionicons name="person-circle" size={30} color="#244C87" style={styles.icon} />
        <Ionicons name="notifications-outline" size={30} color="#244C87" style={styles.icon} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: '#D0E0F3',
    paddingHorizontal: 5,
  },
  leftContainer: {
    flexDirection: 'row',
  },
  rightContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 5,
  },
  title: {
    color: '#244C87',
    fontSize: width * 0.035,
    fontWeight: 'bold',
  },
  });
  
export default Header