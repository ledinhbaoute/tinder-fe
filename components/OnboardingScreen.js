import { Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import TransparentButton from './button/TransparentButton';
import colors from '../theme/colors';

const OnboardingScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['rgba(238, 128, 95, 1)', 'rgba(234, 64, 128, 1)']}
      className="w-full flex-1"
    >
      <SafeAreaView>
        <View className="container px-3">
          <View className="flex-row h-1/2 justify-center items-end">
            <Image source={require('../assets/img/logo2.png')} />
          </View>
          <Text className="color-white font-inter text-center text-xs mt-4">
            By tapping Create Account or Sign In, you agree to our Terms. Learn
            how we process your data in our Privacy Policy and Cookies Policy.
          </Text>
          <View className="flex justify-center mt-4">
            <TransparentButton
              onPress={() => {}}
              title={'SIGN IN WITH APPLE'}
            />
            <TransparentButton
              onPress={() => {}}
              title={'SIGN IN WITH FACEBOOK'}
            />
            <TransparentButton
              onPress={() => {}}
              title={'SIGN IN WITH PHONE NUMBER'}
            />
            <Text className="text-white text-center mt-4">
              Trouble Signing In?
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default OnboardingScreen;
