
import { View, Text,StyleSheet ,TextInput, Dimensions} from 'react-native'
import React from 'react'
const {width, height} = Dimensions.get('window');

const TextField = ({value,onChangeText,style,placeholder}) => {
  return (
    <View>
        <TextInput
        style={[styles.input,style]}
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        onChangeText={onChangeText}
        value={value}
        textColor="white"
        outlineColor="white"
      />
    </View>
  )
}


export default TextField


const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   backgroundColor:'#011D45'
    // },
    // insideContainer:{},
    input: {
      width: width * 0.75,
      marginBottom: 10,
      alignSelf:'center',
      backgroundColor:'#ffffff',
      paddingLeft: width * 0.04,
      borderRadius:5,
      paddingVertical:12,
      borderColor:'#F8CE58',
      borderWidth:2

    },
  });