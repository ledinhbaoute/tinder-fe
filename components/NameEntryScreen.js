import { Text, View, TextInput, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon, XMarkIcon } from 'react-native-heroicons/solid';
import LinearGradientButton from './button/LinearGradientButton';
import { useState } from 'react';
import colors from '../theme/colors';
import FixedProgressBar from './bar/FixedProgressBar';

const NameEntryScreen = ({ route, navigation }) => {
  const { phoneNumber } = route.params;
  const [name, setName] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleNameChange = name => {
    setName(name);
    if (name) setIsDisabled(false);
    else setIsDisabled(true);
  };

  const gotoGenderScreen = () => {
    navigation.navigate('BirthdayEntryScreen', {
      name: name,
      phoneNumber: phoneNumber,
    });
  };
  return (
    <SafeAreaView>
      <View className="container px-3">
        <FixedProgressBar progress={12} color={colors.pink} />
        <View className="flex-row justify-between items-center mt-2">
          <XMarkIcon
            color="black"
            size="40"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View className="px-4 mt-4">
          <View className="px-8">
            <View className="flex-row justify-between items-center w-4/5">
              <Text className="text-4xl font-bold mt-4">My first name is</Text>
            </View>
            <View className="mt-8">
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={text => handleNameChange(text)}
              />
            </View>
            <Text className="text-left text-sm mt-4">
              This is how it will appear in Tinder and you will not be able to
              change it
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

export default NameEntryScreen;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    width: 'full',
    fontSize: 20,
    textAlign: 'left',
  },
});
