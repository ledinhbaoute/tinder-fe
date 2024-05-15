import { Text, View, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import LinearGradientButton from './button/LinearGradientButton';
import { register } from '../helpers/handleAuth';

const HouseRulesScreen = ({ route, navigation }) => {
  const {
    name,
    birthday,
    gender,
    isShowGender,
    selectedInterest,
    images,
    phoneNumber,
  } = route.params;

  const gotoWelcomeScreen = async () => {
    try {
      const response = await register(
        name,
        gender,
        phoneNumber,
        birthday,
        selectedInterest
      );
      if (response.data.success === true) {
        navigation.navigate('WelcomeScreen', { images });
      } else {
        Alert.alert('Register failed.');
      }
    } catch (error) {
      Alert.alert('Register failed. Something go wrong.');
      throw error;
    }
  };
  return (
    <SafeAreaView>
      <View className="container flex px-3">
        <View className="flex-row justify-between items-center mt-2">
          <ChevronLeftIcon
            color="black"
            size="30"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View className="flex-row justify-center items-center mt-3">
          <Image source={require('../assets/img/tinder-icon-color.png')} />
        </View>
        <Text className="text-center text-xl font-bold mt-2">
          Welcome to Tinder
        </Text>
        <Text className="text-center text-sm text-gray-500">
          Please follow these House Rules.
        </Text>
        <View className="px-6 mt-8">
          <View className="my-2">
            <View className="flex-row justify-start items-center space-x-2">
              <Image source={require('../assets/img/check-pink.png')} />
              <Text className="font-bold text-base">Be yourself.</Text>
            </View>
            <Text className="text-sm text-gray-500 text-justify">
              Make sure your photos, age, and bio are true to who you are.
            </Text>
          </View>
          <View className="my-2">
            <View className="flex-row justify-start items-center space-x-2">
              <Image source={require('../assets/img/check-pink.png')} />
              <Text className="font-bold text-base">Stay safe.</Text>
            </View>
            <Text className="text-sm text-gray-500 text-justify">
              Don’t be too quick to give out personal information. Date Safely
            </Text>
          </View>
          <View className="my-2">
            <View className="flex-row justify-start items-center space-x-2">
              <Image source={require('../assets/img/check-pink.png')} />
              <Text className="font-bold text-base">Play it cool.</Text>
            </View>
            <Text className="text-sm text-gray-500 text-justify">
              Respect others and treat them as you would like to be treated.
            </Text>
          </View>
          <View className="my-2">
            <View className="flex-row justify-start items-center space-x-2">
              <Image source={require('../assets/img/check-pink.png')} />
              <Text className="font-bold text-base">Be proactive.</Text>
            </View>
            <Text className="text-sm text-gray-500 text-justify">
              Always report bad behavior.
            </Text>
          </View>
        </View>
        <View className="flex justify-center items-center mt-16">
          <LinearGradientButton
            onPress={gotoWelcomeScreen}
            title={'I AGREE'}
            isDisabled={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HouseRulesScreen;
