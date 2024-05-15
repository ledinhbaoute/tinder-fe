import { Text, View, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import LinearGradientButton from './button/LinearGradientButton';
import { useState, useRef, useEffect } from 'react';
import colors from '../theme/colors';
import FixedProgressBar from './bar/FixedProgressBar';
import SingleCharInput from './input/SingleCharInput';
import {
  isValidDate,
  isFutureDate,
  calculateAge,
} from '../helpers/daytimeFormat';

const BirthdayEntryScreen = ({ route, navigation }) => {
  const { name, phoneNumber } = route.params;

  const [birthday, setBirthday] = useState(['', '', '']);
  const [isDisabled, setIsDisabled] = useState(true);
  const yearRef = useRef(null);
  const monthRef = useRef(null);
  const dayRef = useRef(null);

  const getBirthday = (index, value) => {
    const newBirthday = [...birthday];
    newBirthday[index] = value;
    setBirthday(newBirthday);
  };

  useEffect(() => {
    if (birthday.some(item => item === '')) setIsDisabled(true);
    else setIsDisabled(false);
  }, [birthday]);

  const gotoGenderScreen = () => {
    if (isValidDate(birthday.join('-'))) {
      if (isFutureDate(birthday.join('-'))) Alert.alert('Invalid date');
      else if (calculateAge(birthday.join('-')) < 18)
        Alert.alert('Too young babe');
      else
        navigation.navigate('SelectGenderScreen', {
          name: name,
          birthday: birthday,
          phoneNumber: phoneNumber,
        });
    } else Alert.alert('Invalid date');
  };

  return (
    <SafeAreaView>
      <View className="container px-3">
        <FixedProgressBar progress={24} color={colors.pink} />
        <View className="flex-row justify-between items-center mt-2">
          <ChevronLeftIcon
            color="black"
            size="30"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View className="px-4 mt-4">
          <View className="px-8">
            <View className="flex-row justify-between items-center w-4/5">
              <Text className="text-4xl font-bold mt-4">My birthday is</Text>
            </View>
            <View className="flex-row justify-between items-center mt-8">
              <SingleCharInput
                numberOfInputs={4}
                placeholder="Y"
                onNext={() => monthRef.current?.focusFirst()}
                onBack={() => {}}
                setValue={value => getBirthday(0, value)}
                ref={yearRef}
              />
              <Text className="text-center text-xl text-zinc-400">/</Text>
              <SingleCharInput
                numberOfInputs={2}
                placeholder="M"
                onNext={() => dayRef.current?.focusFirst()}
                onBack={() => yearRef.current?.focusLast()}
                setValue={value => getBirthday(1, value)}
                ref={monthRef}
              />
              <Text className="text-center text-xl text-zinc-400">/</Text>
              <SingleCharInput
                numberOfInputs={2}
                placeholder="D"
                onNext={() => {}}
                onBack={() => monthRef.current?.focusLast()}
                setValue={value => getBirthday(2, value)}
                ref={dayRef}
              />
            </View>
            <Text className="text-left text-sm mt-4">
              Your age will be public
            </Text>
          </View>
          <View className="flex justify-center items-center mt-16">
            <LinearGradientButton
              onPress={gotoGenderScreen}
              title={'CONTINUE'}
              isDisabled={isDisabled}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BirthdayEntryScreen;

const styles = StyleSheet.create({
  input: {
    width: '25%',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 10,
    textAlign: 'center',
  },
  separator: {
    alignSelf: 'center',
    fontSize: 20,
  },
});
