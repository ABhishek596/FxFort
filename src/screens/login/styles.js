import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
//  container:{
//     flex:1,
//     backgroundColor:'#D0E0F3'
//   },
  topvalue:{
    width : width * 0.9,
    height: height * 0.1,
    alignSelf:'center',
    backgroundColor:'#244C87',
    marginTop:height * 0.05,
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row'
  },
  topvalue2:{
    width : width * 0.38,
    height: height * 0.08,
    alignSelf:'center',
    backgroundColor:'#9DB7D9',
    marginTop:height * 0.05,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },
  container:{
    flex:1,
    backgroundColor:'#D0E0F3'
  },
  label: {
    fontSize: width * 0.045,
    marginVertical: 10,
    color:'#ffffff',
    fontWeight:'bold'
  },
  label2: {
    fontSize: width * 0.035,
    marginVertical: 5,
    color:'#ffffff'
  },
  input: {
    height: 36,
    borderColor: '#ffffff',
    borderWidth: 1,
    // marginBottom: 20,
    paddingHorizontal: 5,
    backgroundColor:'#ffffff',
  },
  inputrow:{
     flexDirection:'row',
     alignItems:'center',
     alignSelf:'center',
     padding:2,
     backgroundColor:"#ffffff",
     width: width * 0.9,
     justifyContent:'space-between',
     paddingHorizontal:10
  },
  box:{
    backgroundColor:'#295392',
    paddingBottom:30,
    paddingHorizontal:20
  },
    tinyLogo: {
      width: 70,
      height: 35,
    },
    tinyLogo2: {
      width: 20,
      height: 20,
    },
    datas:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      alignSelf:'center',
      paddingHorizontal:15,
      width: width * 0.9,
      backgroundColor:'#ffffff',
      paddingVertical:8
    }
});
