import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
 container:{
    flex:1,
    backgroundColor:'#D0E0F3'
  },
  topvalue:{
    width : width * 0.9,
    height: height * 0.075,
    alignSelf:'center',
    backgroundColor:'#244C87',
    marginTop:height * 0.01,
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row'
  },
  topvalue2:{
    width : width * 0.4,
    height: height * 0.07,
    alignSelf:'center',
    backgroundColor:'#9DB7D9',
    marginTop:height * 0.05,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    gap:5
  },
  topvalue3:{
    width : width * 0.9,
    height: height * 0.055,
    alignSelf:'center',
    backgroundColor:'#244C87',
    marginTop:height * 0.01,
    alignItems:'center',
    flexDirection:'row',
    marginVertical:10
  },
  txt:{
    fontSize: width * 0.045,
    color: '#ffffff',
    paddingLeft: 15,
  },
  txt1:{
    fontSize: width * 0.045,
    color: '#ffffff',
    paddingRight: 15,
    fontWeight:'bold'
  },
  txt2:{
    fontSize: width * 0.03,
    color: '#ffffff',
    paddingRight: 15,
    fontWeight:'bold',
    paddingLeft:width * 0.025
  },
  tinyLogo:{
    width:20,
    height:20
  }
});
