import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0E0F3',
  },
  topvalue: {
    width: width * 0.9,
    height: height * 0.1,
    alignSelf: 'center',
    backgroundColor: '#244C87',
    marginTop: height * 0.05,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  topvalue2: {
    width: width * 0.38,
    height: height * 0.08,
    alignSelf: 'center',
    backgroundColor: '#9DB7D9',
    marginTop: height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  topbutn: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: width * 0.9,
    alignSelf: 'center',
  },
  topbutn2: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: width * 0.9,
    alignSelf: 'center',
    height: height * 0.06,
  },
  topbutnn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.42,
    height: height * 0.06,
    backgroundColor: '#9DB7D9',
  },
  tinyLogo: {
    width: 20,
    height: 20,
  },
  itemfl: {
    width: width * 1.0,
    paddingHorizontal: 10,
    backgroundColor:'#9DB7D9',
    flexDirection:'column',
    gap:6,
    marginVertical:5,
    paddingVertical:4
  },
  intoprow: {
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    // alignSelf:'center'
  },
  item2: {
    backgroundColor: '#244C87',
    color: '#ffffff',
    fontSize: width * 0.035,
    padding:3,
    paddingHorizontal:15
  },
  itemsell:{
    backgroundColor: '#244C87',
    color: '#ffffff',
    fontSize: width * 0.035,
    // padding:3,
    paddingHorizontal:25,
    paddingVertical:7
  },
  dtview:{
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    alignSelf:'center'
  },
  item:{
    color:'#244C87'
  }

});
