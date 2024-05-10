import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const TransparentButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      className="bg-transparent border-2 border-white rounded-full p-2 mt-3"
      onPress={onPress}
    >
      <Text className="text-white text-center text-sm">{title}</Text>
    </TouchableOpacity>
  );
};

export default TransparentButton;
