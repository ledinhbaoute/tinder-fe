import {
  Text,
  View,
  TextInput,
  Keyboard,
  StyleSheet,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import LinearGradientButton from './button/LinearGradientButton';
import { useState, useRef, useEffect } from 'react';
import { verifyOTP } from '../helpers/handleAuth';

const InputOTPScreen = ({ route, navigation }) => {
  const { phoneNumber, pinId } = route.params;

  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const otpInputs = useRef([]);

  useEffect(() => {
    otpInputs.current[0].focus();
  }, []);

  const handleChangeText = (text, index) => {
    const newOTP = [...otp];
    newOTP[index] = text;
    setOTP(newOTP);
    if (index < otpInputs.current.length - 1 && text !== '') {
      otpInputs.current[index + 1].focus();
    }
  };

  const handleVerifyOTP = async (pin, pinId) => {
    try {
      const response = await verifyOTP({ pin, pinId });
      if (response.data.success) {
        Alert.alert(response.data.message);
        navigation.navigate('HomeScreen');
      } else {
        Alert.alert(response.data.message);
      }
    } catch (error) {
      throw error;
    }
  };

  const handleKeyPress = (event, index) => {
    if (
      event.nativeEvent.key === 'Backspace' &&
      index > 0 &&
      otp[index] === ''
    ) {
      otpInputs.current[index - 1].focus();
    }
  };

  return (
    <SafeAreaView>
      <View className="container px-3">
        <View className="flex-row justify-between items-center">
          <ChevronLeftIcon
            color="black"
            size="30"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View className="px-4 mt-4">
          <View className="flex-row justify-between items-center">
            <Text className="text-4xl font-bold mt-4">My code is</Text>
          </View>
          <Text className="mt-3 text-base">{phoneNumber}</Text>
          <View className="flex-row justify-around items-center mt-4">
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.input}
                value={digit}
                maxLength={1}
                keyboardType="numeric"
                onChangeText={text => handleChangeText(text, index)}
                onKeyPress={event => handleKeyPress(event, index)}
                ref={ref => (otpInputs.current[index] = ref)}
              />
            ))}
          </View>
          <View className="flex justify-center items-center mt-16">
            <LinearGradientButton
              onPress={() => handleVerifyOTP(otp.join(''), pinId)}
              title={'CONTINUE'}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InputOTPScreen;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    width: 40,
    fontSize: 40,
    textAlign: 'center',
  },
});
