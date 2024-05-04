import { Text, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import LinearGradientButton from './button/LinearGradientButton';
import { useState } from 'react';
import PhoneInput from 'react-native-international-phone-number';
import colors from '../theme/colors';

const InputPhoneScreen = ({ navigation }) => {
  const [number, setNumber] = useState('');

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = phoneNumber => {
    setInputValue(phoneNumber);
  };

  const handleSelectedCountry = country => {
    setSelectedCountry(country);
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
            <Text className="text-4xl font-bold mt-4">My number is</Text>
          </View>
          <View className="mt-4">
            <PhoneInput
              value={inputValue}
              onChangePhoneNumber={handleInputValue}
              selectedCountry={selectedCountry}
              onChangeSelectedCountry={handleSelectedCountry}
              customMask={['### ### ###']}
              defaultCountry="VN"
              placeholder="Your phone number"
              phoneInputStyles={{
                container: {
                  flexDirection: 'row',
                  backgroundColor: 'transparent',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#000000',
                  borderRadius: 0,
                  borderBottomWidth: 1,
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  alignItems: 'center',
                },
                flagContainer: {
                  flexDirection: 'row-reverse',
                  backgroundColor: 'transparent',
                  justifyContent: 'left',
                },
                flag: {
                  display: 'none',
                },
                caret: {
                  fontSize: 16,
                },
                divider: {
                  backgroundColor: colors.black,
                  display: 'none',
                },
                callingCode: {
                  fontSize: 16,
                  color: colors.black,
                  paddingRight: 4,
                },
                input: {
                  flex: 1,
                  color: colors.black,
                },
              }}
            />
          </View>
          <Text className="text-left text-sm mt-4">
            We will send a text with a verification code. Message and data rates
            may apply. Learn what happens when your number changes.
          </Text>
          <View className="flex justify-center items-center mt-16">
            <LinearGradientButton onPress={() => {}} title={'CONTINUE'} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InputPhoneScreen;
