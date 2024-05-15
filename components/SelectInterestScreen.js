import {
  Text,
  View,
  TextInput,
  Alert,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon, XMarkIcon } from 'react-native-heroicons/solid';
import LinearGradientButton from './button/LinearGradientButton';
import { useEffect, useState } from 'react';
import colors from '../theme/colors';
import FixedProgressBar from './bar/FixedProgressBar';
import SelectableButton from './button/SelectableButton';
import { interests } from '../constants/interests';

const SelectInterestScreen = ({ route, navigation }) => {
  const { name, birthday, gender, isShowGender } = route.params;
  const [isDisabled, setIsDisabled] = useState(true);

  const [selectedInterest, setSelectedInterest] = useState([]);
  const onSelect = interest => {
    if (selectedInterest.some(item => item === interest)) {
      const newList = selectedInterest.filter(item => item !== interest);
      setSelectedInterest(newList);
    } else {
      const newList = [...selectedInterest, interest];
      setSelectedInterest(newList);
    }
  };
  useEffect(() => {
    if (selectedInterest.length >= 3 && selectedInterest.length <= 5)
      setIsDisabled(false);
    else setIsDisabled(true);
    console.log(selectedInterest);
  }, [selectedInterest]);
  return (
    <SafeAreaView>
      <View className="container flex px-3">
        <FixedProgressBar progress={63} color={colors.pink} />
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
              <Text className="text-4xl font-bold mt-4">Interests</Text>
            </View>
          </View>
          <View className="pl-8 flex-row justify-between items-center">
            <Text className="text-xs mt-3">
              Let everyone know what you’re interested in by adding it to your
              profile.
            </Text>
          </View>
          <ScrollView
            className="h-2/3"
            contentContainerStyle={styles.scrollViewContent}
          >
            {interests.map((interest, index) => (
              <View key={index} className="basic-1/3 px-1">
                <SelectableButton
                  title={interest}
                  onPress={() => onSelect(interest)}
                  isSelected={selectedInterest.some(item => item === interest)}
                />
              </View>
            ))}
          </ScrollView>
          <View className="flex justify-center items-center mt-1">
            <LinearGradientButton
              onPress={() => {}}
              title={`CONTINUE ${selectedInterest.length}/5`}
              isDisabled={isDisabled}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectInterestScreen;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
});
