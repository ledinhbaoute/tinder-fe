import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../theme/colors';

const LinearGradientButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      className="bg-transparent rounded-full w-full p-2 mt-3"
      onPress={onPress}
    >
      <LinearGradient
        colors={[colors.orange_red, colors.pink]}
        start={{ x: 1, y: 0 }}
        className="rounded-full p-3"
      >
        <Text className="text-white text-center text-lg px-3">{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LinearGradientButton;
