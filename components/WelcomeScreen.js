import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import LinearGradientButton from './button/LinearGradientButton';
import { useEffect } from 'react';
import TransparentButton from './button/TransparentButton';

const WelcomeScreen = ({ route, navigation }) => {
  const { images } = route.params;
  const bg = images[0];

  return (
    <SafeAreaView>
      <View className="container">
        <Image
          className="self-center mt-6"
          source={require('../assets/img/tinder-logo-color.png')}
        />
        <View>
          <ImageBackground
            className="w-full h-[600px] mt-2"
            source={{ uri: bg }}
            resizeMode="stretch"
          >
            <View
              className="w-full h-full flex justify-center items-center"
              style={{ backgroundColor: 'rgba(0,0,0, 0.50)' }}
            >
              <Text className="text-white font-bold text-2xl">
                Let's get you ready!
              </Text>
              <Text className="text-white mt-6">
                Here's everything you need to know
              </Text>
              <LinearGradientButton title={'START TUTORIAL'} />
              <TouchableOpacity className="bg-transparent border-2 border-transparent rounded-full p-2 mt-3">
                <Text className="text-white text-center text-sm">SKIP</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View className="flex-row h-full w-full justify-between items-start py-2 px-8">
          <Image source={require('../assets/img/tinder-sm-icon.png')} />
          <Image source={require('../assets/img/star.png')} />
          <Image source={require('../assets/img/search.png')} />
          <Image source={require('../assets/img/chat.png')} />
          <Image source={require('../assets/img/profile.png')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
