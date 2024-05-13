import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';

const HomeScreen = ({ route, navigation }) => {
  const { params } = route;
  return (
    <SafeAreaView>
      <View className="flex-row justify-between items-center">
        <ChevronLeftIcon
          color="black"
          size="30"
          onPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView>
        <View style={{ padding: 10 }}>
          {Object.keys(params).map((key, index) => (
            <View key={index}>
              <Text>
                {key}: {params[key]}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
