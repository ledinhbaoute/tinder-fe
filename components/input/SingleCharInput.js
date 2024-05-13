import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SingleCharInput = forwardRef(
  ({ numberOfInputs, placeholder, onNext, onBack, setValue }, ref) => {
    const [inputs, setInputs] = useState(Array(numberOfInputs).fill(''));
    const inputRefs = useRef(Array(numberOfInputs).fill(null));

    useEffect(() => {
      if (inputs[numberOfInputs - 1].length > 0) {
        if (setValue) setValue(inputs.join(''));
        onNext();
      } else {
        if (setValue) setValue('');
      }
    }, [inputs]);

    const handleChangeText = (text, index) => {
      const newInputs = [...inputs];
      newInputs[index] = text;
      setInputs(newInputs);
      if (text.length > 0 && index < numberOfInputs - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handleKeyPress = (event, index) => {
      if (
        event.nativeEvent.key === 'Backspace' &&
        index > 0 &&
        inputs[index] === ''
      ) {
        inputRefs.current[index - 1].focus();
        const newInputs = [...inputs];
        newInputs[index - 1] = '';
        setInputs(newInputs);
      } else if (
        event.nativeEvent.key === 'Backspace' &&
        index === 0 &&
        inputs[index] === ''
      ) {
        onBack();
      }
    };

    const handleFocus = index => {
      if (index > 0 && inputs[index - 1] === '')
        inputRefs.current[index - 1]?.focus();
      if (index < numberOfInputs - 1 && inputs[index] !== '')
        inputRefs.current[index + 1]?.focus();
    };

    useImperativeHandle(ref, () => ({
      getStringValue() {
        console.log(inputs.join(''));
        return inputs.join('');
      },
      focusFirst() {
        inputRefs.current[0]?.focus();
      },
      focusLast() {
        inputRefs.current[numberOfInputs - 1].focus();
        const newInputs = [...inputs];
        newInputs[numberOfInputs - 1] = '';
        setInputs(newInputs);
      },
    }));

    return (
      <View style={styles.container}>
        {inputs.map((input, index) => (
          <TextInput
            key={index}
            ref={ref => (inputRefs.current[index] = ref)}
            placeholder={placeholder}
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
            value={input}
            onChangeText={text => handleChangeText(text, index)}
            onKeyPress={event => handleKeyPress(event, index)}
            onFocus={() => handleFocus(index)}
          />
        ))}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderBottomWidth: 1,
    marginHorizontal: 2,
    width: 20,
    textAlign: 'center',
  },
});

export default SingleCharInput;
