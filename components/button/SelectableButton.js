import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const SelectableButton = ({ onPress, title, isSelected }) => {
  return (
    <>
      {isSelected ? (
        <TouchableOpacity
          className="bg-transparent border-2 border-[#EA5B6E] rounded-full p-2 mt-3"
          onPress={onPress}
        >
          <Text className="text-[#EA5B6E] text-center text-sm">{title}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          className="bg-transparent border-2 border-unselected-btn rounded-full p-2 mt-3"
          onPress={onPress}
        >
          <Text className="text-unselected-btn text-center text-sm">
            {title}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default SelectableButton;
