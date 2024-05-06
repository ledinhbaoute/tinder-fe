import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './components/OnboardingScreen';
import InputPhoneScreen from './components/InputPhoneScreen';
import InputOTPScreen from './components/InputOTPScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnboardingScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="InputPhoneScreen" component={InputPhoneScreen} />
        <Stack.Screen name="InputOTPScreen" component={InputOTPScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
