import { Text, View, TextInput, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon, XMarkIcon } from 'react-native-heroicons/solid';
import LinearGradientButton from './button/LinearGradientButton';
import Checkbox from 'expo-checkbox';
import { useEffect, useState } from 'react';
import colors from '../theme/colors';
import FixedProgressBar from './bar/FixedProgressBar';
import SelectableButton from './button/SelectableButton';

const SelectGenderScreen = ({ route, navigation }) => {
  const { name, birthday } = route.params;

  const [gender, setGender] = useState('');
  const [isMaleSelected, setIsMaleSelected] = useState(false);
  const [isFemaleSelected, setIsFemaleSelected] = useState(false);
  const [isShowGender, setIsShowGender] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (isMaleSelected !== false || isFemaleSelected !== false)
      setIsDisabled(false);
  });

  const onMaleSelect = () => {
    setIsMaleSelected(true);
    setIsFemaleSelected(false);
    setGender('Male');
  };

  const onFemaleSelect = () => {
    setIsFemaleSelected(true);
    setIsMaleSelected(false);
    setGender('Female');
  };

  const handleShowGender = () => {
    setIsShowGender(!isShowGender);
  };

  const gotoInterestScreen = () => {
    navigation.navigate('HomeScreen', {
      name: name,
      birthday: birthday,
      gender: gender,
      isShowGender: isShowGender,
    });
  };

  return (
    <SafeAreaView>
      <View className="container flex px-3">
        <FixedProgressBar progress={37} color={colors.pink} />
        <View className="flex-row justify-between items-center mt-2">
          <ChevronLeftIcon
            color="black"
            size="30"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View className="flex px-4">
          <View className="px-8">
            <View className="flex-row justify-between items-center w-4/5">
              <Text className="text-4xl font-bold mt-4">I am a</Text>
            </View>
          </View>
          <View className="flex justify-between mt-12">
            <SelectableButton
              title={'WOMAN'}
              onPress={onFemaleSelect}
              isSelected={isFemaleSelected}
            />
            <SelectableButton
              title={'MAN'}
              onPress={onMaleSelect}
              isSelected={isMaleSelected}
            />
          </View>
          <View className="flex-row justify-center items-center mt-60 space-x-2">
            <Checkbox
              value={isShowGender}
              onValueChange={handleShowGender}
              color={colors.selected_btn}
            />
            <Text>Show my gender on my profile</Text>
          </View>
          <View className="flex justify-center items-center mt-1">
            <LinearGradientButton
              onPress={gotoInterestScreen}
              title={'CONTINUE'}
              isDisabled={isDisabled}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectGenderScreen;
