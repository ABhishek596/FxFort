import { View, Text,StyleSheet ,TextInput, Dimensions} from 'react-native'
import React from 'react'
const {width, height} = Dimensions.get('window');

const TextInput1 = ({value,onChangeText,style,placeholder}) => {
  return (
    <View>
        <TextInput
        style={[styles.input,style]}
        placeholder={placeholder}
        placeholderTextColor={'#ffffff'}
        onChangeText={onChangeText}
        value={value}
        textColor="white"
        outlineColor="white"
        
      />
    </View>
  )
}


export default TextInput1


const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   backgroundColor:'#011D45'
    // },
    // insideContainer:{},
    input: {
      width: width * 0.9,
      marginBottom: 10,
      alignSelf:'center',
      backgroundColor:'#001533',
      paddingLeft: width * 0.04,
      borderRadius:5,
      paddingVertical:12,
      color:'#ffffff'
    },
  });