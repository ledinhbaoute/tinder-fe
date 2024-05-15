import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../theme/colors';

const LinearGradientButton = ({ onPress, title, isDisabled = false }) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      className="bg-transparent rounded-full w-full p-2 mt-3"
      onPress={onPress}
    >
      {isDisabled ? (
        <LinearGradient
          colors={[colors.bg_disabled_btn_color, colors.bg_disabled_btn_color]}
          start={{ x: 1, y: 0 }}
          className="rounded-full p-3"
        >
          <Text className="text-zinc-400 text-center text-lg px-3">
            {title}
          </Text>
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={[colors.orange_red, colors.pink]}
          start={{ x: 1, y: 0 }}
          className="rounded-full p-3"
        >
          <Text className="text-white text-center text-lg px-3">{title}</Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

export default LinearGradientButton;
