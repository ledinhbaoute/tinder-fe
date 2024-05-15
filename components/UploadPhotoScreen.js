import {
  Text,
  View,
  Button,
  TextInput,
  Alert,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon, XCircleIcon } from 'react-native-heroicons/solid';
import { XMarkIcon, PlusIcon } from 'react-native-heroicons/mini';
import LinearGradientButton from './button/LinearGradientButton';
import { useEffect, useState } from 'react';
import colors from '../theme/colors';
import FixedProgressBar from './bar/FixedProgressBar';
import SelectableButton from './button/SelectableButton';
import { interests } from '../constants/interests';
import * as ImagePicker from 'expo-image-picker';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

const UploadPhotoScreen = ({ route, navigation }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const { name, birthday, gender, isShowGender, selectedInterest } =
    route.params;

  const [images, setImages] = useState([]);

  useEffect(() => {
    if (images.length >= 2) setIsDisabled(false);
    else setIsDisabled(true);
  }, [images]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri);
      setImages([...images, result.assets[0].uri]);
    }
  };

  const removeImage = uri => {
    Alert.alert(
      'Delete Image',
      'Are you sure you want to delete this image?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => setImages(images.filter(image => image !== uri)),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView>
      <View className="container flex px-3">
        <FixedProgressBar progress={75} color={colors.pink} />
        <View className="flex-row justify-between items-center mt-2">
          <ChevronLeftIcon
            color="black"
            size="30"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
      <View className="flex px-4">
        <View className="px-8">
          <View className="flex-row justify-between items-center w-4/5">
            <Text className="text-4xl font-bold mt-4">Add photos</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-xs mt-3">
              Add at least 2 photos to continue
            </Text>
          </View>
        </View>
        <View className="flex-row flex-wrap justify-center mt-16">
          {images.map((uri, index) => (
            <View key={index} className="relative m-2">
              <Image source={{ uri }} className="w-20 h-28 rounded-lg" />
              <TouchableOpacity
                className="absolute bottom-[-10] right-[-10] bg-[#FFFFFF] rounded-full w-6 h-6 items-center justify-center"
                onPress={() => removeImage(uri)}
              >
                <MaskedView
                  maskElement={
                    <View
                      style={{
                        backgroundColor: 'transparent',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <XMarkIcon color="black" size="20" />
                    </View>
                  }
                >
                  <LinearGradient
                    colors={[colors.orange_red, colors.pink]}
                    start={{ x: 1, y: 0 }}
                    className="rounded-full p-3"
                  />
                </MaskedView>
              </TouchableOpacity>
            </View>
          ))}
          {Array.from({ length: 6 - images.length }).map((_, index) => (
            <View key={`placeholder-${index}`} className="relative m-2">
              <Image
                source={require('../assets/no-image-gray.png')}
                className="w-20 h-28 rounded-lg"
              />
              <TouchableOpacity
                className="absolute bottom-[-10] right-[-10] bg-[#FFFFFF] rounded-full w-6 h-6 items-center justify-center"
                onPress={pickImage}
              >
                <LinearGradient
                  colors={[colors.orange_red, colors.pink]}
                  start={{ x: 1, y: 0 }}
                  className="rounded-full p-0.5"
                >
                  <PlusIcon color="white" size="20" />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View className="flex justify-center items-center mt-16">
          <LinearGradientButton
            onPress={() => {}}
            title={'CONTINUE'}
            isDisabled={isDisabled}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UploadPhotoScreen;
