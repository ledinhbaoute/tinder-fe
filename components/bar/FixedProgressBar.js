import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

const FixedProgressBar = ({ progress, color }) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.progressBar,
          { width: `${progress}%`, backgroundColor: color },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 5, // Điều chỉnh độ dày của thanh tiến trình ở đây
    backgroundColor: 'lightgray',
  },
  progressBar: {
    height: '100%',
  },
});

export default FixedProgressBar;
