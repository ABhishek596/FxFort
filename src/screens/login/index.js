import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  Platform,
  Alert,
  Image,
  Pressable,
  Dimensions
} from 'react-native';
import Header from '../../component/Header';
import styles from './styles';
import Button1 from '../../component/Button1';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useDispatch} from 'react-redux';
import {addData} from '../../redux/actions';
import {RNToasty} from 'react-native-toasty';
import Icon from 'react-native-vector-icons/AntDesign';
import Footer from '../../component/Footer';
const {width, height} = Dimensions.get('window');

const Login = () => {
  const [usdt, setUsdt] = useState('');
  const [usdfx, setUsdfx] = useState('');
  const [date, setDate] = useState(new Date()); // Moved the date state initialization here
  const [show, setShow] = useState(false);

  // console.log(usdt, usdfx);
  // console.log(date);

  const dispatch = useDispatch();

  const handleUsdtChange = value => {
    setUsdt(value);
    const fxValue = parseFloat(value) * 0.85; // Value will get from API
    setUsdfx(fxValue.toFixed(2));
  };

  const handleUsdfxChange = value => {
    setUsdfx(value);
    const dtValue = parseFloat(value) / 0.85; // Value will get from API
    setUsdt(dtValue.toFixed(2));
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const formatDate = date => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleAddData = () => {
    if (usdt && usdfx !== ' ') {
      dispatch(addData({usdt: usdt, usdfx: usdfx, date: date}));
      RNToasty.Success({
        title: 'Order Created!',
        duration: 2,
      });
    } else {
      Alert.alert('Fill all Fields');
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.box}>
        <Text style={styles.label}>Buy USDFx</Text>
        <Text style={styles.label2}>I want to pay</Text>
        <View style={styles.inputrow}>
          <TextInput
            style={styles.input}
            value={usdt}
            onChangeText={handleUsdtChange}
            keyboardType="numeric"
            placeholder="Enter USDT value"
          />
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/images/imguss.png')}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.label2}>I will receive</Text>
        <View style={styles.inputrow}>
          <TextInput
            style={styles.input}
            value={usdfx}
            onChangeText={handleUsdfxChange}
            keyboardType="numeric"
            placeholder="Enter USDFX value"
          />
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/images/imgusf.png')}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.label2}>Order valid till</Text>
        <View style={styles.datas}>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              display="default"
              minimumDate={new Date()} // Disable previous dates
              onChange={onChange}
            />
          )}
          <Text style={styles.dateText}>{formatDate(date)}</Text>
          <Pressable onPress={showDatepicker}>
            <Icon size={24} color="#244C87" name="calendar" />
          </Pressable>
          {/* <Button1 onPress={showDatepicker} title="Show date picker!" /> */}
        </View>
        <View style={{height: 20}} />
        <Button1
          title={'Create Order'}
          cn={'#D0E0F3'}
          onPress={handleAddData}
          txtstyle={'#244C87'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          width: width * 0.9,
          alignSelf: 'center',
          marginTop:10
        }}>
        <Image
          style={styles.tinyLogo2}
          source={require('../../assets/images/vector11.png')}
          resizeMode="contain"
        />
        <Text numberOfLines={3} style={{color: '#244C87',fontSize:width * 0.04,width:width * 0.8}}>
          Boost your confidence in trading! Elevate your investment journey with
          guaranteed stability and convenience. At FxFort, purchase a minimum of
          1100 USDFx directly.
        </Text>
      </View>
      <Footer />
    </View>
  );
};

export default Login;
