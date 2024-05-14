import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './components/OnboardingScreen';
import InputPhoneScreen from './components/InputPhoneScreen';
import InputOTPScreen from './components/InputOTPScreen';
import HomeScreen from './components/HomeScreen';
import NameEntryScreen from './components/NameEntryScreen';
import BirthdayEntryScreen from './components/BirthdayEntryScreen';
import SelectGenderScreen from './components/SelectGenderScreen';
import SelectInterestScreen from './components/SelectInterestScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="NameEntryScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="InputPhoneScreen" component={InputPhoneScreen} />
        <Stack.Screen name="InputOTPScreen" component={InputOTPScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NameEntryScreen" component={NameEntryScreen} />
        <Stack.Screen
          name="BirthdayEntryScreen"
          component={BirthdayEntryScreen}
        />
        <Stack.Screen
          name="SelectGenderScreen"
          component={SelectGenderScreen}
        />
        <Stack.Screen
          name="SelectInterestScreen"
          component={SelectInterestScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
